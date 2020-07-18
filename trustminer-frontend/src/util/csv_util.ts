import {defaultUncertainties} from "../resources/defaultUncertainties";
import {UncertaintyRow} from "../model/UncertaintyRow";
import {CURRENT_UNCERTAINTY_LIST, TRUST_POLICY_LIST} from "./constants";
import {TrustPolicyRow} from "../model/TrustPolicyRow";
import {TrustPolicy} from "../model/TrustPolicy";
import {TrustConcern} from "../model/TrustConcern";

export const sep = ";" // Column separator
const nl = "\n" // Row separator

export function loadUncertainties(): Array<UncertaintyRow> {
    let currentList = localStorage.getItem(CURRENT_UNCERTAINTY_LIST)
    let csvList = (currentList) ? currentList.split(nl) : defaultUncertainties.split(nl)
    let lines = [];
    let header = csvList[0].split(sep);
    for (let i = 1; i < csvList.length; i++) {
        // split uncertainties based on separator
        let data = csvList[i].split(sep);
        if (data.length === header.length) {
            let line = [];
            for (let j = 0; j < header.length; j++) {
                line.push(data[j]);
            }
            lines.push(line);
        }
    }
    // Convert uncertainties to UncertaintyRow interface
    return lines.map(line => {
        return {
            parentComponent: line[0],
            component: line[1],
            perspective: Number(line[2]),
            trustconcern: Number(line[3]),
            root: line[4],
            question: line[5]
        }
    })
}

export function saveUncertainties(uncertaintyList: Array<UncertaintyRow>) {
    let csvString = ""
    uncertaintyList.forEach((row, index) => {
        let stringRow =
            row.parentComponent + sep + row.component + sep +
            row.perspective + sep + row.trustconcern + sep +
            row.root + sep + row.question
        // add a newline if its not the last item
        if (index != uncertaintyList.length - 1) stringRow += nl
        csvString += stringRow
    }) //TODO: use join
    let header = defaultUncertainties.split(nl)[0]
    let csv = header + nl + csvString
    localStorage.setItem(CURRENT_UNCERTAINTY_LIST, csv)
}

export const extractUncertaintyList = (component: String) =>
    loadUncertainties().filter(uncertainty =>
        uncertainty.component == component
        || (uncertainty.parentComponent == component && uncertainty.component == "-")
        || (uncertainty.parentComponent == component && uncertainty.component.toLowerCase().includes("all"))
    )

export function saveTrustPolicies(trustPolicyList: Array<TrustPolicyRow>, trustPersona: string) {
    let csvString = ""
    trustPolicyList.forEach((row, index) => {
        let stringRow = row.trustEntity + sep + row.processElement + sep + row.trustConcern
        if (index != trustPolicyList.length - 1) stringRow += nl
        csvString += stringRow
    })
    console.log(csvString)
    localStorage.setItem(TRUST_POLICY_LIST + trustPersona, csvString)
}

export function loadTrustPoliciesForPersona(persona: string): Array<TrustPolicyRow> {
    let storedList = localStorage.getItem(TRUST_POLICY_LIST + persona)
    let policyList = storedList ? storedList.split(nl) : []
    let lines = [];
    for (let i = 0; i < policyList.length; i++) {
        let line = [];
        // split uncertainties based on separator
        let data = policyList[i].split(sep);
        for (let j = 0; j < 3; j++) {
            line.push(data[j]);
        }
        lines.push(line);
    }
    console.log(lines)
    return lines.map(line => {
        return {
            trustEntity: line[0],
            processElement: line[1],
            trustConcern: Number(line[2])
        }
    })
}

export function mapToTrustPolicyEntities(list: Array<TrustPolicyRow>): Array<TrustPolicy> {
    return list.map((policy) => {
        return {
            ...policy,
            trustConcern: TrustConcern[policy.trustConcern]
        }
    })
}
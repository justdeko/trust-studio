import {defaultUncertainties} from "../resources/defaultUncertainties";
import {UncertaintyRow} from "../model/UncertaintyRow";
import {CURRENT_UNCERTAINTY_LIST, TRUST_POLICY_LIST} from "./constants";
import {TrustPolicyRow} from "../model/TrustPolicyRow";
import {TrustPolicy} from "../model/TrustPolicy";
import {TrustConcern} from "../model/TrustConcern";
import {TableState} from "../components/UncertaintyTable";
import {OptionsObject, SnackbarKey, SnackbarMessage} from "notistack";
import {saveFile} from "./general_util";

export const sep = ";" // Column separator
const nl = "\n" // Row separator

export function loadUncertainties(): Array<UncertaintyRow> {
    let currentList = localStorage.getItem(CURRENT_UNCERTAINTY_LIST)
    if (!currentList) {
        localStorage.setItem(CURRENT_UNCERTAINTY_LIST, defaultUncertainties)
    }
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

export function exportCsv() {
    let currentList = localStorage.getItem(CURRENT_UNCERTAINTY_LIST)
    if (currentList !== null) {
        let csvBlob = new Blob([currentList], {type: 'text/csv;charset=utf-8;'})
        saveFile('uncertainties.csv', 'Get the .csv file', csvBlob)
    }
}

export function importCsv(
    setState: React.Dispatch<React.SetStateAction<TableState>>,
    launchSnackbar: (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey) {
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('accept', '.csv')
    fileSelector.click()
    fileSelector.onchange = function (event) {
        let fileList = fileSelector.files;
        if (fileList) {
            fileList[0].text().then(csvText => {
                localStorage.setItem(CURRENT_UNCERTAINTY_LIST, csvText)
                setState((prevState) => {
                    let data = loadUncertainties()
                    return {...prevState, data};
                })
                launchSnackbar('.csv imported', {variant: 'success'})
            })
        } else launchSnackbar('Something went wrong during import!', {variant: "error"})
    }
}

export function saveUncertainties(uncertaintyList: Array<UncertaintyRow>) {
    let csvString = ""
    uncertaintyList.forEach((row, index) => {
        let stringRow =
            row.parentComponent + sep + row.component + sep +
            row.perspective + sep + row.trustconcern + sep +
            row.root + sep + row.question
        // add a newline if its not the last item
        if (index !== uncertaintyList.length - 1) stringRow += nl
        csvString += stringRow
    }) //TODO: use join
    let header = defaultUncertainties.split(nl)[0]
    let csv = header + nl + csvString
    localStorage.setItem(CURRENT_UNCERTAINTY_LIST, csv)
}

export function resetToDefault(setState: React.Dispatch<React.SetStateAction<TableState>>) {
    localStorage.setItem(CURRENT_UNCERTAINTY_LIST, defaultUncertainties)
    setState((prevState) => {
        let data = loadUncertainties()
        return {...prevState, data};
    })
}

export const extractUncertaintyList = (component: String) =>
    loadUncertainties().filter(uncertainty =>
        uncertainty.component === component
        || (uncertainty.parentComponent === component && uncertainty.component === "-")
        || (uncertainty.parentComponent === component && uncertainty.component.toLowerCase().includes("all"))
    )

export function saveTrustPolicies(trustPolicyList: Array<TrustPolicyRow>, trustPersona: string) {
    let csvString = ""
    trustPolicyList.forEach((row, index) => {
        let stringRow = row.trustEntity + sep + row.processElement + sep + row.trustConcern
        if (index !== trustPolicyList.length - 1) stringRow += nl
        csvString += stringRow
    })
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
import {getDefinitions} from "../util/miner_util";
import {Collaborator} from "../model/Collaborator";
import {Uncertainty} from "../model/Uncertainty";
import {TrustPolicyRow} from "../model/TrustPolicyRow";
import {loadTrustPoliciesForPersona, mapToTrustPolicyEntities} from "../util/csv_util";
import {TrustPolicy} from "../model/TrustPolicy";
import {UncertaintyTypes} from "../model/UncertaintyTypes";

export function findCriticalUncertainties() {
    getDefinitions().then((definitions: any[]) => {

    }).catch((e) => console.log(e))
}

function removeTrusted(oldUncertainties: Uncertainty[], trustPolicies: TrustPolicy[], trustPersona: string): Uncertainty[] {
    let relevantPolicies = trustPolicies.filter(
        (policy) => policy.trustEntity == trustPersona || policy.trustEntity == "all"
    )
    return oldUncertainties.filter(
        (uncertainty) =>
            !relevantPolicies.find((policy) =>
                UncertaintyTypes[uncertainty.component] == policy.processElement
                && uncertainty.trustConcern == policy.trustConcern
            )
    )
}

function getAllTrustPolicies(personas: string[]): TrustPolicy[] {
    let policyList: TrustPolicyRow[] = []
    personas.forEach((persona) => {
        let trustPolicies = loadTrustPoliciesForPersona(persona)
        policyList = policyList.concat(trustPolicies)
    })
    return mapToTrustPolicyEntities(policyList)
}

export function filterWithTrustPolicies(collaborators: Collaborator[]): Collaborator[] {
    let trustPolicyList = getAllTrustPolicies(collaborators.map((collaborator) => collaborator.name))
    return collaborators.map((collaborator) => {
        return {
            ...collaborator,
            uncertainties: removeTrusted(collaborator.uncertainties, trustPolicyList, collaborator.name)
        }
    })
}
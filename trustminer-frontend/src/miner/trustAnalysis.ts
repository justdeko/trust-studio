import {Collaborator} from "../model/Collaborator";
import {Uncertainty} from "../model/Uncertainty";
import {loadTrustPoliciesForPersona, mapToTrustPolicyEntities} from "../util/csv_util";
import {TrustPolicy} from "../model/TrustPolicy";
import {UncertaintyTypes} from "../model/UncertaintyTypes";

export function findCriticalUncertainties(collaborators: Collaborator[], personaName: string): { [id: string]: Uncertainty[] } {
    let policies = getPoliciesForPersona(personaName)
    let trustIssues: { [id: string]: Uncertainty[] } = {}
    collaborators.filter(collaborator => collaborator.name != personaName).forEach((collaborator) => {
        trustIssues[collaborator.name] = collaborator.uncertainties.filter(uncertainty =>
            !policies.find((policy) =>
                UncertaintyTypes[uncertainty.component] == policy.processElement
                && uncertainty.trustConcern == policy.trustConcern
                && collaborator.name == policy.trustEntity
            )
        )
    })
    return trustIssues
}

function getPoliciesForPersona(id: string): TrustPolicy[] {
    let policyList = loadTrustPoliciesForPersona(id)
    return mapToTrustPolicyEntities(policyList)
}
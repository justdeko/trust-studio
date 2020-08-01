import {Collaborator} from "../model/Collaborator";
import {Uncertainty} from "../model/Uncertainty";
import {loadTrustPoliciesForPersona, mapToTrustPolicyEntities} from "../util/csv_util";
import {TrustPolicy} from "../model/TrustPolicy";
import {ComponentTypes} from "../model/ComponentTypes";
import {ExternalTrustPersona} from "../model/ExternalTrustPersona";
import {externalTrustPersonaNames} from "../util/miner_util";

export function findCriticalUncertainties(collaborators: Collaborator[], personaName: string): { [id: string]: Uncertainty[] } {
    let policies = getPoliciesForPersona(personaName)
    let trustIssues: { [id: string]: Uncertainty[] } = {}
    collaborators.filter(collaborator => collaborator.name !== personaName).forEach((collaborator) => {
        trustIssues[collaborator.name] = collaborator.uncertainties.filter(uncertainty =>
            !policies.find((policy) =>
                ComponentTypes[uncertainty.component] === policy.processElement
                && uncertainty.trustConcern === policy.trustConcern
                && collaborator.name === policy.trustEntity
            )
        )
    })
    return trustIssues
}

export function findCriticalUncertaintiesForExternal(collaborators: Collaborator[]): ExternalTrustPersona[] {
    let externalNames = externalTrustPersonaNames()
    return externalNames.map((personaName) => {
            return {
                name: personaName,
                trustIssues: findCriticalUncertainties(collaborators, personaName)
            }
        }
    )
}

function getPoliciesForPersona(id: string): TrustPolicy[] {
    let policyList = loadTrustPoliciesForPersona(id)
    return mapToTrustPolicyEntities(policyList)
}
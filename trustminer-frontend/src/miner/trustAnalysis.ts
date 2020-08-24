import {Collaborator} from "../model/Collaborator";
import {Uncertainty} from "../model/Uncertainty";
import {loadTrustPoliciesForPersona, mapToTrustPolicyEntities} from "../util/csv_util";
import {TrustPolicy} from "../model/TrustPolicy";
import {getComponentType} from "../model/ComponentTypes";
import {ExternalTrustPersona} from "../model/ExternalTrustPersona";
import {externalTrustPersonaNames} from "../util/miner_util";
import {TrustReport} from "../model/TrustReport";

/**
 * Find all critical uncertainties for a collaborator and map them to a dictionary (personaId - uncertainty list)
 * @param collaborators the list of collaborators
 * @param personaName the specified trust persona
 */
export function findCriticalUncertainties(collaborators: Collaborator[], personaName: string): { [id: string]: Uncertainty[] } {
    let policies = getPoliciesForPersona(personaName)
    let trustIssues: { [id: string]: Uncertainty[] } = {}
    collaborators.filter(collaborator => collaborator.name !== personaName).forEach((collaborator) => {
        trustIssues[collaborator.name] = collaborator.uncertainties.filter(uncertainty =>
            !policies.find((policy) =>
                getComponentType(uncertainty.component) === policy.processElement
                && uncertainty.trustConcern === policy.trustConcern
                && collaborator.name === policy.trustEntity
            )
        )
    })
    return trustIssues
}

/**
 * Find all critical uncertainties for all external trust personas
 * and map them to a list of objects (persona name - uncertainty list)
 * @param collaborators the list of current collaborators
 */
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

/**
 * Get all trust policies of a trust persona
 * @param id the trust persona id
 */
function getPoliciesForPersona(id: string): TrustPolicy[] {
    let policyList = loadTrustPoliciesForPersona(id)
    return mapToTrustPolicyEntities(policyList)
}

/**
 * Recomputes the last step of the trust report (relevancy analysis). Relevant when trust policies change
 * @param trustReport the current trust report
 */
export function recomputeRelevancy(trustReport: TrustReport) {
    let collaborators = trustReport.collaborators
    let collaboratorsWithCritical = collaborators.map((collaborator) => {
        return {
            ...collaborator,
            trustIssues: findCriticalUncertainties(collaborators, collaborator.name)
        }
    })
    let external = findCriticalUncertaintiesForExternal(collaborators)
    return {
        ...trustReport,
        collaborators: collaboratorsWithCritical,
        externalTrustPersonas: external
    }
}
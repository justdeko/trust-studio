import BpmnModdle from "bpmn-moddle";
import uncertainty from "../resources/uncertaintyExtension.json";
import {CURRENT_BPMN, EXTENSION_NAME_LOWERCASE, EXTERNAL_PERSONA_NAMES, GENERAL} from "./constants";
import {sep} from "./csv_util";
import {getCollaboratorNames} from "../miner/relationshipAnalysis";
import {emptyBpmn} from "../resources/emptyBpmn";
import {TrustReport} from "../model/TrustReport";
import {Collaborator} from "../model/Collaborator";
import {ExternalTrustPersona} from "../model/ExternalTrustPersona";

export const Moddle = new BpmnModdle({
    trust: uncertainty
});

/**
 * Get the root element objects from the currently stored bpmn file
 */
export async function getDefinitions(): Promise<any> {
    let bpmn = localStorage.getItem(CURRENT_BPMN)
    if (bpmn === null) {
        bpmn = emptyBpmn
    }
    const {rootElement: definitions} = await Moddle.fromXML(bpmn)
    return definitions
}

/**
 * Get the current list of process collaborator names
 */
export async function collaboratorNames(): Promise<string[]> {
    let definitions = await getDefinitions()
    let collaboratorElements = definitions.rootElements.find((el: any) => el.$type === 'bpmn:Collaboration')
    let nameDict = getCollaboratorNames(collaboratorElements)
    return Object.entries(nameDict).map(([_, value]) => {
        return value
    })
}

/**
 * Check if the stringified bpmn file contains uncertainties
 * @param bpmnString the bpmn file in form of a string
 */
export function checkForUncertainties(bpmnString?: string): boolean {
    if (bpmnString) {
        return bpmnString.includes(EXTENSION_NAME_LOWERCASE)
    } else {
        let bpmn = localStorage.getItem(CURRENT_BPMN)
        if (bpmn !== null) {
            return bpmn.includes(EXTENSION_NAME_LOWERCASE)
        }
    }
    return false
}

/**
 * Fetches a list of all currently stored external trust persona names
 */
export function externalTrustPersonaNames(): string[] {
    let listString = localStorage.getItem(EXTERNAL_PERSONA_NAMES)
    if (listString !== null) {
        return listString.split(sep)
    } else return []
}

/**
 * Edits the specified trust persona
 * @param add whether this persona is to be added (or not, i.e. edited)
 * @param name the name of the trust persona to modify/add
 */
export function editTrustPersonaNames(add: boolean, name: string) {
    let listString = localStorage.getItem(EXTERNAL_PERSONA_NAMES)
    if (add) {
        if (listString === null || !listString.includes(sep)) {
            localStorage.setItem(EXTERNAL_PERSONA_NAMES, name)
        } else {
            localStorage.setItem(EXTERNAL_PERSONA_NAMES, listString + sep)
        }
    } else {
        if (listString !== null && listString.includes(name)) {
            let list = listString.split(sep).filter(item => item !== name)
            let newString = list.join(sep)
            localStorage.setItem(EXTERNAL_PERSONA_NAMES, newString)
        }
    }
}

/**
 * Get the names of all perspectives (external trust personas + collaborators) of a trust report
 * @param trustReport the current trust report
 */
export function getPerspectiveNames(trustReport: TrustReport) {
    let collaboratorNames = mapToCollaboratorNames(trustReport.collaborators)
    // add a "General" perspective at the beginning of the list and the external personas at the end
    return [GENERAL].concat(collaboratorNames.concat(externalTrustPersonaNames()))
}

/**
 * Maps a list of collaborators to their names
 * @param collaborators the list of collaborators
 */
export const mapToCollaboratorNames = (collaborators: Collaborator[]) =>
    collaborators.map(collaborator => collaborator.name)

/**
 * Get all trust issues for a selected trust persona (either external or collaborator)
 * @param trustReport the current trust report
 * @param selected the name of the trust persona
 */
export function getTrustIssues(trustReport: TrustReport, selected: string) {
    let combined: Collaborator[] | ExternalTrustPersona[] = []
    let collaborators = trustReport.collaborators
    let external = trustReport.externalTrustPersonas
    combined = combined.concat(collaborators).concat(external)
    return combined.filter(persona => persona.name === selected)[0].trustIssues
}

/**
 * Map the uncertainties of a specified collaborators to critical ones from the perspective of a trust persona
 * @param trustReport the current trust report
 * @param collaborator the relevant collaborator
 * @param perspective the currently selected perspective
 */
export function mapToCritical(trustReport: TrustReport, collaborator: Collaborator, perspective: string): Collaborator {
    // If there is no perspective (i.e. "General") just return the collaborator as is
    if (perspective === GENERAL) return collaborator
    let trustIssues = getTrustIssues(trustReport, perspective)
    let criticalUncertainties = trustIssues[collaborator.name]
    // necessary for preventing fetching critical uncertainties for case of collaborator == perspective
    if (criticalUncertainties === undefined) return collaborator
    // sum the uncertainties to get the critical global uncertainty for the collaborator
    let criticalGlobalUncertainty =
        Object.values(trustIssues).map(uncertainties => uncertainties.length).reduce((acc, val) => acc + val)
    let trustIssueParties = Object.keys(trustIssues)
    let rlu = criticalUncertainties.length / criticalGlobalUncertainty
    // Return the collaborator object with updated values
    return {
        ...collaborator,
        laneUncertainty: criticalUncertainties.length,
        relativeLanceUncertainty: rlu,
        laneUncertaintyBalance: -(1 / trustIssueParties.length) + rlu,
        uncertainties: criticalUncertainties
    }
}
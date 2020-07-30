import BpmnModdle from "bpmn-moddle";
import uncertainty from "../resources/uncertaintyExtension.json";
import {CURRENT_BPMN, EXTENSION_NAME_LOWERCASE, EXTERNAL_PERSONA_NAMES} from "./constants";
import {sep} from "./csv_util";
import {getCollaboratorNames} from "../miner/relationshipAnalysis";
import {emptyBpmn} from "../resources/emptyBpmn";
import {TrustReport} from "../model/TrustReport";
import {Collaborator} from "../model/Collaborator";
import {ExternalTrustPersona} from "../model/ExternalTrustPersona";

export const Moddle = new BpmnModdle({
    trust: uncertainty
});

export async function getDefinitions(): Promise<any> {
    let bpmn = localStorage.getItem(CURRENT_BPMN)
    if (bpmn === null) {
        bpmn = emptyBpmn
    }
    const {rootElement: definitions} = await Moddle.fromXML(bpmn)
    return definitions
}


export async function collaboratorNames(): Promise<string[]> {
    let definitions = await getDefinitions()
    let collaboratorElements = definitions.rootElements.find((el: any) => el.$type === 'bpmn:Collaboration')
    let nameDict = getCollaboratorNames(collaboratorElements)
    return Object.entries(nameDict).map(([_, value]) => {
        return value
    })
}

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

export function externalTrustPersonaNames(): string[] {
    let listString = localStorage.getItem(EXTERNAL_PERSONA_NAMES)
    if (listString !== null) {
        return listString.split(sep)
    } else return []
}

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

export function getPerspectiveNames(trustReport: TrustReport) {
    let collaboratorNames = mapToCollaboratorNames(trustReport.collaborators)
    return collaboratorNames.concat(externalTrustPersonaNames())
}

export const mapToCollaboratorNames = (collaborators: Collaborator[]) =>
    collaborators.map(collaborator => collaborator.name)

export function getTrustIssues(trustReport: TrustReport, selected: string) {
    let combined: Collaborator[] | ExternalTrustPersona[] = []
    let collaborators = trustReport.collaborators
    let external = trustReport.externalTrustPersonas
    combined = combined.concat(collaborators).concat(external)
    console.log(combined)
    return combined.filter(persona => persona.name === selected)[0].trustIssues
}
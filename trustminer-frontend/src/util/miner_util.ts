import BpmnModdle from "bpmn-moddle";
import uncertainty from "../resources/uncertaintyExtension.json";
import {CURRENT_BPMN, EXTENSION_NAME, EXTERNAL_PERSONA_NAMES} from "./constants";
import {sep} from "./csv_util";
import {getCollaboratorNames} from "../miner/relationshipAnalysis";

export const Moddle = new BpmnModdle({
    trust: uncertainty
});

export async function getDefinitions(): Promise<any> {
    let bpmn = localStorage.getItem(CURRENT_BPMN)
    if (bpmn != null) {
        const {rootElement: definitions} = await Moddle.fromXML(bpmn)
        return definitions
    } else throw Error()
}


export async function collaboratorNames(): Promise<string[]> {
    let definitions = await getDefinitions()
    let collaboratorElements = definitions.rootElements.find((el: any) => el.$type == 'bpmn:Collaboration')
    let nameDict = getCollaboratorNames(collaboratorElements)
    return Object.entries(nameDict).map(([_, value]) => {
        return value
    })
}

export async function checkForUncertainties(): Promise<boolean> {
    let found = false
    let bpmn = localStorage.getItem(CURRENT_BPMN)
    if (bpmn != null) {
        found = bpmn.includes(EXTENSION_NAME)
    }
    return found
}

export function externalTrustPersonaNames(): string[] {
    let listString = localStorage.getItem(EXTERNAL_PERSONA_NAMES)
    if (listString != null) {
        return listString.split(sep)
    } else return []
}

export function editTrustPersonaNames(add: boolean, name: string) {
    let listString = localStorage.getItem(EXTERNAL_PERSONA_NAMES)
    if (add) {
        if (listString == null || !listString.includes(sep)) {
            localStorage.setItem(EXTERNAL_PERSONA_NAMES, name)
        } else {
            localStorage.setItem(EXTERNAL_PERSONA_NAMES, listString + sep)
        }
    } else {
        if (listString != null && listString.includes(name)) {
            let list = listString.split(sep).filter(item => item != name)
            let newString = list.join(sep)
            localStorage.setItem(EXTERNAL_PERSONA_NAMES, newString)
        }
    }
}
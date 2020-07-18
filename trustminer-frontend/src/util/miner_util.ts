import BpmnModdle from "bpmn-moddle";
import uncertainty from "../resources/uncertaintyExtension.json";
import {CURRENT_BPMN, EXTENSION_NAME} from "./constants";

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

export async function checkForUncertainties(): Promise<boolean> {
    let found = false
    let bpmn = localStorage.getItem(CURRENT_BPMN)
    if (bpmn != null) {
        found = bpmn.includes(EXTENSION_NAME)
    }
    return found
}
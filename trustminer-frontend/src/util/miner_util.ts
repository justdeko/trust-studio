import BpmnModdle from "bpmn-moddle";
import uncertainty from "../resources/uncertaintyExtension.json";
import {CURRENT_BPMN} from "./constants";

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
import {CURRENT_BPMN} from "./constants";
import BpmnModdle from 'bpmn-moddle';


const moddle = new BpmnModdle();

export function insertUncertainties() {
    let bpmn = localStorage.getItem(CURRENT_BPMN)
    if (bpmn != null) {
        console.log("this happened")
        moddle.fromXML(bpmn, (e, def, acb) => {
            console.log(e)
            console.log(def)
        })
    }
}
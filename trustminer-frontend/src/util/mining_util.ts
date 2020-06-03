import {CURRENT_BPMN} from "./constants";
import BpmnModdle from 'bpmn-moddle';


const moddle = new BpmnModdle();

export function insertUncertainties() {
    let bpmn = localStorage.getItem(CURRENT_BPMN)
    if (bpmn != null) {
        moddle.fromXML(bpmn, (e: Error, def: any) => {
            var process = def.rootElements[0]
            def.rootElements.forEach((el: any) => console.log(el.flowElements))
            var dataObject_2 = moddle.create('bpmn:DataObject', {id: 'dataObject_2'});
            //process.flowElements.push(dataObject_2);
            console.log(process)
            moddle.toXML(def, function (err: Error, xmlStrUpdated: string) {
                console.log(xmlStrUpdated)
            });
        })
    }

}
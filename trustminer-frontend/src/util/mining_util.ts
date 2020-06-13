import {CURRENT_BPMN} from "./constants";
import BpmnModdle from 'bpmn-moddle';
import {extractUncertaintyList} from "./csv_util";
import {UncertaintyTypes} from "../model/UncertaintyTypes";
import uncertainty from "../resources/uncertainty.json"

const moddle = new BpmnModdle({
    uc: uncertainty
});

export function insertUncertainties() {
    let bpmn = localStorage.getItem(CURRENT_BPMN)
    if (bpmn != null) {
        moddle.fromXML(bpmn, (e: Error, def: any) => {
            console.log(def)
            def.rootElements.forEach((el: any, index: number) => {
                if (index < 1) return // skipping the collaboration definition root element
                if (el.hasOwnProperty("flowElements")) {
                    el.flowElements.forEach((el: any) => insertIntoElement(el))
                }
            })
            var dataObject_2 = moddle.create('bpmn:DataObject', {id: 'dataObject_2'});
            //process.flowElements.push(dataObject_2);
            console.log(process)
            moddle.toXML(def, function (err: Error, xmlStrUpdated: string) {
                console.log(xmlStrUpdated)
            });
        })
    }
}

function insertIntoElement(el: any) {
    let type = UncertaintyTypes[el.$type]
    let uncertaintyList = extractUncertaintyList(type)
    const extensionElements = el.extensionElements || moddle.create('bpmn:ExtensionElements');
    uncertaintyList.forEach( uncertainty => {
        let uncertaintyEl = moddle.create('uc:Uncertainty');
        extensionElements.get("values").push(uncertaintyEl)
    })

}
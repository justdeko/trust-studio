import {CURRENT_BPMN} from "./constants";
import BpmnModdle from 'bpmn-moddle';
import {extractUncertaintyList} from "./csv_util";
import {UncertaintyTypes} from "../model/UncertaintyTypes";
import uncertainty from "../resources/uncertainty.json"

const moddle = new BpmnModdle({
    unc: uncertainty
});

export async function insertUncertainties() {
    let bpmn = localStorage.getItem(CURRENT_BPMN)
    if (bpmn != null) {
        const {rootElement: definitons} = await moddle.fromXML(bpmn)
        console.log(definitons)
        definitons.rootElements.forEach((el: any, index: number) => {
            if (index < 1) return // skipping the collaboration definition root element
            if (el.hasOwnProperty("flowElements")) {
                el.flowElements.forEach((el: any) => insertIntoElement(el))
            }
        })
        const {
            xml: xmlStrUpdated
        } = await moddle.toXML(definitons)
        console.log(xmlStrUpdated)
    }
}

function insertIntoElement(el: any) {
    let type = UncertaintyTypes[el.$type]
    let uncertaintyList = extractUncertaintyList(type)
    const extensionElements = el.extensionElements || moddle.create('bpmn:ExtensionElements');
    uncertaintyList.forEach( uncertainty => {
        let uncertaintyEl = moddle.create('unc:Uncertainty');
        extensionElements.get("values").push(uncertaintyEl)
        uncertaintyEl.perspective = uncertainty.perspective
        uncertaintyEl.trust_concern = uncertainty.trustconcern
        uncertaintyEl.root = uncertainty.root
    })

}
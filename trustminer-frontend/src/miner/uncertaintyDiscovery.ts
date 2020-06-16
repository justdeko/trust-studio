import {CURRENT_BPMN} from "../util/constants";
import BpmnModdle from 'bpmn-moddle';
import {extractUncertaintyList} from "../util/csv_util";
import {UncertaintyTypes} from "../model/UncertaintyTypes";
import uncertainty from "../resources/uncertaintyExtension.json"
import {Perspective} from "../model/Perspective";
import {TrustConcern} from "../model/TrustConcern";

const moddle = new BpmnModdle({
    unc: uncertainty
});

export async function insertUncertainties() {
    let bpmn = localStorage.getItem(CURRENT_BPMN)
    if (bpmn != null) {
        const {rootElement: definitions} = await moddle.fromXML(bpmn)
        definitions.rootElements.forEach((el: any, index: number) => {
            if (index < 1) return // skipping the collaboration definition root element
            if (el.hasOwnProperty("flowElements")) {
                el.flowElements.forEach((el: any) => insertIntoElement(el))
            }
        })
        const {
            xml: xmlStrUpdated
        } = await moddle.toXML(definitions)
        localStorage.setItem(CURRENT_BPMN, xmlStrUpdated)
    }
}

function insertIntoElement(el: any) {
    let type = UncertaintyTypes[el.$type]
    let uncertaintyList = extractUncertaintyList(type)
    const extensionElements = el.extensionElements || moddle.create('bpmn:ExtensionElements');

    //if there already are uncertainties in this element, skip it
    if (extensionElements.get("values").find((extensionElement: any) => extensionElement.$instanceOf('unc:Uncertainty'))) {
        return
    }
    uncertaintyList.forEach(uncertainty => {
        let uncertaintyEl = moddle.create('unc:Uncertainty');
        extensionElements.get("values").push(uncertaintyEl)
        uncertaintyEl.perspective = Perspective[uncertainty.perspective]
        uncertaintyEl.trust_concern = TrustConcern[uncertainty.trustconcern]
        uncertaintyEl.root = uncertainty.root
    })
    el.extensionElements = extensionElements
}
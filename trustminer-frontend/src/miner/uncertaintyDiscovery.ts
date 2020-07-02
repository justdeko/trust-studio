import {CURRENT_BPMN, EXTENSION_NAME} from "../util/constants";
import BpmnModdle from 'bpmn-moddle';
import {extractUncertaintyList} from "../util/csv_util";
import {UncertaintyTypes} from "../model/UncertaintyTypes";
import uncertainty from "../resources/uncertaintyExtension.json"
import {Perspective} from "../model/Perspective";
import {TrustConcern} from "../model/TrustConcern";

const moddle = new BpmnModdle({
    trust: uncertainty
});

export async function insertUncertainties() {
    let bpmn = localStorage.getItem(CURRENT_BPMN)
    if (bpmn != null) {
        const {rootElement: definitions} = await moddle.fromXML(bpmn)
        console.log(definitions)
        definitions.rootElements.forEach((el: any, index: number) => {
            if (el.hasOwnProperty("messageFlows")) {
                el.messageFlows.forEach((el: any) => insertIntoElement(el))
            }
            if (el.hasOwnProperty("flowElements")) {
                el.flowElements.forEach((el: any) => insertIntoElement(el))
            }
            if (el.hasOwnProperty("ioSpecification")) {
                if (el.ioSpecification.dataInputs) {
                    el.ioSpecification.dataInputs.forEach((el: any) => insertIntoElement(el))
                }
                if (el.ioSpecification.dataOutputs) {
                    el.ioSpecification.dataOutputs.forEach((el: any) => insertIntoElement(el))
                }
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
    if (extensionElements.get("values").find((extensionElement: any) => extensionElement.$instanceOf(EXTENSION_NAME))) {
        return
    }
    uncertaintyList.forEach(uncertainty => {
        let uncertaintyEl = moddle.create(EXTENSION_NAME);
        uncertaintyEl.perspective = Perspective[uncertainty.perspective]
        uncertaintyEl.trust_concern = TrustConcern[uncertainty.trustconcern]
        uncertaintyEl.root = uncertainty.root
        if (!extensionElements.get("values").find((extensionEl: any) => // filter for duplicates
            extensionEl.perspective == uncertaintyEl.perspective
            && extensionEl.trust_concern == uncertaintyEl.trust_concern
            && extensionEl.root == uncertaintyEl.root)) {
            extensionElements.get("values").push(uncertaintyEl)
        }
    })
    el.extensionElements = extensionElements
}
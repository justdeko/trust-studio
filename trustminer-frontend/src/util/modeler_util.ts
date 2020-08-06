import BpmnUncertainty from "../model/BpmnUncertainty";
import {EXTENSION_NAME} from "./constants";

/**
 * Get a list of all uncertainties of an element in the current bpmn model
 * @param element the element in question
 */
export function getUncertainties(element: any) {
    let businessObject = (element && element.businessObject) || element
    if (!businessObject.extensionElements) {
        return [];
    }
    if (!businessObject.extensionElements.values) {
        return [];
    }
    return businessObject.extensionElements.values.filter((extensionElement: any) => {
        return extensionElement.$instanceOf(EXTENSION_NAME);
    });
}

/**
 * Convert an uncertainty to its short notation: uncertainty root -> trust concern e.g. res. -> inte.
 * @param unc the relevant uncertainty in bpmn object format
 */
export const getAsShortenedString = (unc: BpmnUncertainty) =>
    unc.root.slice(0, 3) + ". → " + unc.trust_concern.slice(0, 4) + "."
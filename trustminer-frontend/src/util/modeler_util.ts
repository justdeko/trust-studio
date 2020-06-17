export function getUncertainties(element: any) {
    let businessObject = (element && element.businessObject) || element
    if (!businessObject.extensionElements) {
        return [];
    }
    if (!businessObject.extensionElements.values) {
        return [];
    }
    return businessObject.extensionElements.values.filter((extensionElement: any) => {
        return extensionElement.$instanceOf('unc:Uncertainty');
    });
}

export const getAsShortenedString = (unc: any) =>
    unc.root.slice(0, 3) + ". =>" + unc.trust_concern.slice(0, 4) + "."
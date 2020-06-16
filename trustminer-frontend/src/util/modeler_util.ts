export function getUncertainties(element: any) {
    if (!element.extensionElements) {
        return;
    }

    return element.extensionElements.values.filter((extensionElement: any) => {
        return extensionElement.$instanceOf('unc:Uncertainty');
    });
}
import {TrustReport} from "../model/TrustReport";
import {Collaborator, instanceOfCollaborator} from "../model/Collaborator";
import {ExternalTrustPersona} from "../model/ExternalTrustPersona";
import html2canvas from "html2canvas";

/**
 * Convert a list of objects into a string enumeration: ["Tom", "Marie", "Max"] => "Tom, Marie and Max"
 * @param stringList the list to convert
 */
function toEnumeration(stringList: string[]): string {
    let listString = ""
    if (stringList.length === 1) return stringList[0]
    stringList.forEach((item, index) => {
        if (index === stringList.length - 2) {
            listString += item + " and "
        } else if (index === stringList.length - 1) {
            listString += item
        } else {
            listString += item + ", "
        }
    })
    return listString
}

/**
 * Get the "General text" related to the trust report,
 * containing information about global uncertainty, amount of collaborators etc.
 * @param trustReport the current trust report
 */
export function generalText(trustReport: TrustReport) {
    let collaboratorList = toEnumeration(trustReport.collaborators.map(collaborator => collaborator.name))

    function externalText() {
        let externalCount = trustReport.externalTrustPersonas.length
        if (externalCount === 0) {
            return "are no external trust personas."
        } else if (externalCount === 1) {
            return "is one external trust persona."
        } else return `are ${externalCount} external trust personas.`
    }

    return `There are ${trustReport.collaborators.length} collaborators, ${collaboratorList} with an average element ` +
        `uncertainty of ${trustReport.averageElementUncertainty.toFixed(3)}. ` +
        `In total there are ${trustReport.globalUncertainty} uncertainties.\n` +
        `Currently, there ${externalText()}`
}

/**
 * Get the specific collaborator section text
 * @param collaborator the collaborator in question
 */
export function collaboratorText(collaborator: Collaborator) {
    let balance = collaborator.laneUncertaintyBalance

    function getBalancePhrase(): string {
        if (balance > 0) {
            return "above average"
        } else if (balance < 0) {
            return "below average"
        } else return "exactly at the average"
    }

    function getDependencyPhrase(value: number, outgoing: boolean, type: string) {
        if (value > 0 && outgoing) {
            return `other collaborators are dependent on this collaborator, with a ${type} of ${value}.`
        } else if (value > 0 && !outgoing) {
            return `this collaborator is dependent on others, with a ${type} of ${value}.`
        } else if (value === 0 && outgoing) {
            return `no collaborators are dependent on this one, with a ${type} of 0.`
        } else return `this collaborator is not dependent on others, with a ${type} of 0.`
    }

    return `The collaborator ${collaborator.name} has a lane uncertainty of ${collaborator.uncertainties.length} with` +
        ` a relative lane uncertainty of ${collaborator.relativeLanceUncertainty.toFixed(4)}. The lane uncertainty balance` +
        ` amounts to a value of ${collaborator.laneUncertaintyBalance.toFixed(4)}. This makes its lane uncertainty share ` +
        `${getBalancePhrase()}, assuming an equal distribution.\n` +
        `From a message flow perspective, ${getDependencyPhrase(collaborator.messageOutDegree, true, "Message influence")}` +
        ` Also, ${getDependencyPhrase(collaborator.messageInDegree, false, "Message dependency")}` +
        ` From a data perspective, ${getDependencyPhrase(collaborator.dataOutDegree, true, "Data influence")}` +
        ` Futhermore, ${getDependencyPhrase(collaborator.dataInDegree, false, "Data dependency")}`
}

/**
 * Get the trust analysis section text for a specified trust persona
 * @param trustPersona the relevant trust persona, either external or a collaborator
 */
export function trustAnalysisText(trustPersona: Collaborator | ExternalTrustPersona) {
    let issues = trustPersona.trustIssues
    let external = (instanceOfCollaborator(trustPersona)) ? "a collaborator" : "an external"
    let name = trustPersona.name
    let regardsToNames = toEnumeration(Object.keys(issues))
    let largestEntry = Object.entries(issues).reduce((a, b) => a[1].length > b[1].length ? a : b)[0]
    let otherEntries = Object.entries(issues)
        .filter((kv) => kv[0] !== largestEntry)
        .map((kv) => `${kv[0]} (${kv[1].length})`)
    let otherEntriesText = otherEntries.length > 0 ? toEnumeration(otherEntries) : "nobody"
    return `${name} is ${external} trust persona with critical uncertainties in regards to ${regardsToNames}.` +
        ` Out of those, the biggest share of critical uncertainties with an amount ` +
        `of ${issues[largestEntry].length} has ${largestEntry}, followed by ${otherEntriesText}.`
}

/**
 * Get the png file of a react component, used for fetching some charts
 * @param componentId the specified component id in the DOM tree
 */
export async function getComponentPng(componentId: string): Promise<string | undefined> {
    let input = document.getElementById(componentId)
    if (input) {
        let canvas = await html2canvas(input)
        return canvas.toDataURL('image/png');
    }
}

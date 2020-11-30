import {Collaborator} from "../model/Collaborator";
import {Uncertainty} from "../model/Uncertainty";
import {DataObjectGraphData, GraphData} from "../model/GraphData";
import {EXTENSION_NAME} from "../util/constants";

/**
 * Get ALL uncertainties for a list of elements
 * @param flowElements a list of all moddle flow elements (objects in the bpmn diagram)
 */
function getUncertainties(flowElements: any[]): Uncertainty[] {
    let uncertainties: Uncertainty[] = []
    flowElements.forEach(element => {
        uncertainties = uncertainties.concat(
            element.extensionElements.values
                .filter((el: any) => el.$type === EXTENSION_NAME)
                .map((el: any) => {
                    return {
                        component: element.$type,
                        perspective: el.perspective,
                        trustConcern: el.trust_concern,
                        root: el.root,
                        parentComponent: undefined
                    }
                })
        )
    })
    return uncertainties
}

/**
 * Get all collaborator objects with relevant statistics and indicators
 * @param definitions the root element moddle objects
 * @param graphData collaborator relationship data, necessary for in and out-degree calculations of message flows
 * @param dataObjectGraphData collaborator data object relationship data, necessary for in and out-degree calculations
 */
export function getCollaborators(
    definitions: any,
    graphData: GraphData,
    dataObjectGraphData: DataObjectGraphData): Collaborator[] {
    let collaborators: Collaborator[] = []
    let collaboratorElements = definitions.rootElements.find((el: any) => el.$type === 'bpmn:Collaboration')
    collaboratorElements.participants.forEach((collaborator: any) => {
        let id: string = collaborator.id
        let processRef = collaborator.processRef
        let processId: string = ""
        let uncertainties: Uncertainty[] = []
        if (processRef) {
            processId = collaborator.processRef.id
            uncertainties = getUncertainties(collaborator.processRef.flowElements)
        }
        let name: string = collaborator.name
        let collaboratorObject = {
            id: id,
            name: name,
            processId: processId,
            laneUncertainty: uncertainties.length,
            relativeLanceUncertainty: 0,
            laneUncertaintyBalance: 0,
            uncertainties: uncertainties,
            messageInDegree: 0,
            messageOutDegree: 0,
            dataInDegree: 0,
            dataOutDegree: 0,
            trustIssues: {}
        }
        collaborators.push(collaboratorObject)
    })
    return insertAggregationMetrics(collaborators, definitions, graphData, dataObjectGraphData)
}

/**
 * Mapping method to insert all metrics that need to have already existing collaborators to be calculated
 * @param collaborators the collaborator list
 * @param definitions the root element moddle objects
 * @param graphData collaborator relationship data, necessary for in and out-degree calculations of message flows
 * @param dataObjectGraphData collaborator data object relationship data, necessary for in and out-degree calculations
 */
function insertAggregationMetrics(
    collaborators: Collaborator[],
    definitions: any,
    graphData: GraphData,
    dataObjectGraphData: DataObjectGraphData): Collaborator[] {
    let gu = globalUncertainty(collaborators)
    let messageLinks = graphData.links
    let dataLinks = dataObjectGraphData.links
    return collaborators.map((collaborator: Collaborator) => {
        // Relative lane uncertainty
        let rlu = collaborator.laneUncertainty / gu
        // Lane uncertainty balance
        let lub = -(1 / collaborators.length) + rlu
        // Message dependency, influence and Data object dependency, influence
        let md = messageLinks.filter((link) => link.target === collaborator.name).length
        let mi = messageLinks.filter((link) => link.source === collaborator.name).length
        let dd = dataLinks.filter((link) => link.target === collaborator.name).length
        let di = dataLinks.filter((link) => link.source === collaborator.name).length
        return {
            ...collaborator,
            relativeLanceUncertainty: rlu,
            laneUncertaintyBalance: lub,
            messageInDegree: md,
            messageOutDegree: mi,
            dataInDegree: dd,
            dataOutDegree: di
        }
    })
}


// Global Metrics
export const globalUncertainty = (collaborators: Collaborator[]) =>
    collaborators.map((col: Collaborator) => col.laneUncertainty).reduce((acc, val) => acc + val)

export const averageElementUncertainty = (gu: number, rootElements: any[]) => gu / getElementCount(rootElements)

/**
 * Get the count of all bpmn graph elements
 * @param rootElements the root element moddle objects
 */
function getElementCount(rootElements: any[]) {
    let count = 0
    rootElements.forEach((rootElement: any) => {
        if (rootElement.flowElements) {
            count += rootElement.flowElements.length
        }
    })
    return count
}
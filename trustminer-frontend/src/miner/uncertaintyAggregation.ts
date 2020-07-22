import {Collaborator} from "../model/Collaborator";
import {Uncertainty} from "../model/Uncertainty";
import {DataObjectGraphData, GraphData} from "../model/GraphData";
import {EXTENSION_NAME} from "../util/constants";

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

export function getCollaborators(
    definitions: any,
    graphData: GraphData,
    dataObjectGraphData: DataObjectGraphData): Collaborator[] {
    let collaborators: Collaborator[] = []
    let collaboratorElements = definitions.rootElements.find((el: any) => el.$type === 'bpmn:Collaboration')
    collaboratorElements.participants.forEach((collaborator: any) => {
        let uncertainties = getUncertainties(collaborator.processRef.flowElements)
        let id: string = collaborator.id
        let processId: string = collaborator.processRef.id
        let name: string = collaborator.name
        let collaboratorObject = {
            id: id,
            name: name,
            processId: processId,
            laneUncertainty: uncertainties.length,
            relativeLanceUncertainty: 0,
            laneUncertaintyBalance: 0,
            uncertainties: uncertainties,
            relevantUncertainties: [],
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

function insertAggregationMetrics(
    collaborators: Collaborator[],
    definitions: any,
    graphData: GraphData,
    dataObjectGraphData: DataObjectGraphData): Collaborator[] {
    let gu = globalUncertainty(collaborators)
    let messageLinks = graphData.links
    let dataLinks = dataObjectGraphData.links
    return collaborators.map((collaborator: Collaborator) => {
        let rlu = collaborator.laneUncertainty / gu
        let lub = -(1 / collaborators.length) + rlu
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


// Metrics
export const globalUncertainty = (collaborators: Collaborator[]) =>
    collaborators.map((col: Collaborator) => col.laneUncertainty).reduce((acc, val) => acc + val)

export const averageElementUncertainty = (gu: number, rootElements: any[]) => gu / getElementCount(rootElements)


function getElementCount(rootElements: any[]) {
    let count = 0
    rootElements.forEach((rootElement: any) => {
        if (rootElement.flowElements) {
            count += rootElement.flowElements.length
        }
    })
    return count
}
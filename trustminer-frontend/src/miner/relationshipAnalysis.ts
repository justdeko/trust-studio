import {Moddle} from "../util/miner_util";
import {CURRENT_BPMN} from "../util/constants";
import {GraphData} from "../model/GraphData";

let moddle = Moddle

export async function generateGraphData(): Promise<GraphData> {
    let bpmn = localStorage.getItem(CURRENT_BPMN)
    let nodes: { id: string }[] = []
    let links: { source: string, target: string }[] = []

    if (bpmn != null) {
        const {rootElement: definitions} = await moddle.fromXML(bpmn)
        let collab = definitions.rootElements.find((el: any) => el.$type == 'bpmn:Collaboration')
        let collaboratorNames = getCollaboratorNames(collab)
        if (collab && collab.messageFlows) {
            collab.messageFlows.forEach((messageFlow: any) => {
                let sourceId = messageFlow.sourceRef.$parent.id
                let sourceName = collaboratorNames[sourceId]
                let targetId = messageFlow.targetRef.$parent.id
                let targetName = collaboratorNames[targetId]
                let linkObj = {source: sourceName, target: targetName}
                if (!links.find(link => link == linkObj)) {
                    links.push(linkObj)
                }
                if (!nodes.find(node => node.id == sourceId)) {
                    nodes.push({id: sourceName})
                }
                if (!nodes.find(node => node.id == targetId)) {
                    nodes.push({id: targetName})
                }
            })
        }
    }
    return {nodes: nodes, links: links}
}

function getCollaboratorNames(collab: any) {
    let collaboratorNames: { [id: string]: string } = {}
    if (collab && collab.participants) {
        collab.participants.forEach((participant: any) => {
            let name = participant.name
            let processId = participant.processRef.id
            collaboratorNames[processId] = name
        })
    }
    return collaboratorNames
}

//For displaying: https://www.bsimard.com/2018/04/25/graph-viz-with-sigmajs.html or maybe d3?
//https://www.npmjs.com/package/react-cytoscape
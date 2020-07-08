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
        let processes = definitions.rootElements.filter((el: any) => el.$type == 'bpmn:Process')
        let collaboratorNames = getCollaboratorNames(collab)
        //let dataLinks = getDataObjectRoutes(processes, collaboratorNames)
        // links = links.concat(dataLinks) TODO: better mapping and concat
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

function getDataObjectRoutes(processes: any[], collaboratorNames: { [id: string]: string }) {
    let dataOutputs = getDataOutputObjectNames(processes)
    let links: { source: string, target: string }[] = []
    processes.forEach((process: any) => {
        let ioSpecification = process.ioSpecification
        if (ioSpecification && ioSpecification.dataInputs) {
            ioSpecification.dataInputs.forEach((el: any) => {
                for (const [key, value] of Object.entries(dataOutputs)) {
                    if (key == el.name) {
                        let sourceName = collaboratorNames[value]
                        let targetName = collaboratorNames[process.id]
                        let linkObj = {source: sourceName, target: targetName}
                        links.push(linkObj)
                    }
                }
            })
        }
    })
    return links
}

function getDataOutputObjectNames(processes: any[]) {
    let dataObjectNames: { [name: string]: string } = {}
    processes.forEach((process: any) => {
        let ioSpecification = process.ioSpecification
        if (ioSpecification && ioSpecification.dataOutputs) {
            ioSpecification.dataOutputs.forEach((el: any) => {
                if (!dataObjectNames[el.name]) {
                    dataObjectNames[el.name] = process.id
                }
            })
        }
    })
    return dataObjectNames
}
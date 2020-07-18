import {DataObjectGraphData, GraphData} from "../model/GraphData";

export function generateGraphData(definitions: any): GraphData {
    let nodes: { id: string }[] = []
    let links: { source: string, target: string }[] = []

    let collab = definitions.rootElements.find((el: any) => el.$type == 'bpmn:Collaboration')
    let collaboratorNames = getCollaboratorNames(collab)

    if (collab && collab.messageFlows) {
        collab.messageFlows.forEach((messageFlow: any) => {
            let sourceId = messageFlow.sourceRef.$parent.id
            let sourceName = collaboratorNames[sourceId]
            let targetId = messageFlow.targetRef.$parent.id
            let targetName = collaboratorNames[targetId]
            let linkObj = {source: sourceName, target: targetName}
            if (!links.find(link => link.target == targetName && link.source == sourceName)) {
                links.push(linkObj)
            }
            if (!nodes.find(node => node.id == sourceName)) {
                nodes.push({id: sourceName})
            }
            if (!nodes.find(node => node.id == targetName)) {
                nodes.push({id: targetName})
            }
        })
    }
    return {nodes: nodes, links: links}
}

export function getCollaboratorNames(collab: any) {
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

export function generateDataObjectGraphData(definitions: any): DataObjectGraphData {
    let collab = definitions.rootElements.find((el: any) => el.$type == 'bpmn:Collaboration')
    let processes = definitions.rootElements.filter((el: any) => el.$type == 'bpmn:Process')
    let collaboratorNames = getCollaboratorNames(collab)
    let routes = getDataObjectRoutes(processes, collaboratorNames)
    return {
        nodes: routes.nodes,
        links: routes.links
    }
}

function getDataObjectRoutes(processes: any[], collaboratorNames: { [id: string]: string }) {
    let dataOutputs = getDataOutputObjectNames(processes)
    let links: { source: string, target: string, label: string }[] = []
    let nodes: { id: string }[] = []
    processes.forEach((process: any) => {
        let ioSpecification = process.ioSpecification
        if (ioSpecification && ioSpecification.dataInputs) {
            ioSpecification.dataInputs.forEach((el: any) => {
                for (const [key, value] of Object.entries(dataOutputs)) {
                    if (key == el.name) {
                        let sourceName = collaboratorNames[value]
                        let targetName = collaboratorNames[process.id]
                        let labelName = el.name
                        let linkObj = {source: sourceName, target: targetName, label: labelName}
                        if (!links.find(linkObj =>
                            linkObj.source == sourceName
                            && linkObj.target == targetName
                            && linkObj.label == labelName)) {
                            links.push(linkObj)
                        }

                        if (!nodes.find(node => node.id == sourceName)) {
                            nodes.push({id: sourceName})
                        }
                        if (!nodes.find(node => node.id == targetName)) {
                            nodes.push({id: targetName})
                        }
                    }
                }
            })
        }
    })
    return {links: links, nodes: nodes}
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
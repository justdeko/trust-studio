import {DataObjectGraphData, GraphData} from "../model/GraphData";

/**
 * Generate message flow data for the relationship graph. find all nodes and links between the collaborators
 * @param definitions the root elements of the bpmn file
 */
export function generateGraphData(definitions: any): GraphData {
    let nodes: { id: string }[] = []
    let links: { source: string, target: string }[] = []

    let collab = definitions.rootElements.find((el: any) => el.$type === 'bpmn:Collaboration')
    let collaboratorNames = getCollaboratorNames(collab)

    // If there are message flows and participant objects...
    if (collab && collab.messageFlows) {
        collab.messageFlows.forEach((messageFlow: any) => {
            // Find source, target name and id, and insert them into the links and nodes set
            let sourceId = messageFlow.sourceRef.$parent.id
            let sourceName = collaboratorNames[sourceId]
            let targetId = messageFlow.targetRef.$parent.id
            let targetName = collaboratorNames[targetId]
            // If collapsed process, add its own name instead of parent (parent is bpmn graph and not pool)
            if (messageFlow.targetRef.$parent.$type === "bpmn:Collaboration") {
                targetName = messageFlow.targetRef.name
            }
            if (messageFlow.sourceRef.$parent.$type === "bpmn:Collaboration") {
                sourceName = messageFlow.sourceRef.name
            }
            let linkObj = {source: sourceName, target: targetName}
            if (!links.find(link => link.target === targetName && link.source === sourceName)) {
                links.push(linkObj)
            }
            if (!nodes.find(node => node.id === sourceName)) {
                nodes.push({id: sourceName})
            }
            if (!nodes.find(node => node.id === targetName)) {
                nodes.push({id: targetName})
            }
        })
    }
    return {nodes: nodes, links: links}
}

/**
 * Get all collaborator names from the moddle participant objects
 * @param collab the list of moddle participant objects
 */
export function getCollaboratorNames(collab: any) {
    let collaboratorNames: { [id: string]: string } = {}
    if (collab && collab.participants) {
        collab.participants.forEach((participant: any) => {
            let name = participant.name
            // If collapsed process, add it with simple id as key
            let processRef = participant.processRef
            let processId = participant.id
            if (processRef) {
                processId = participant.processRef.id
            }
            collaboratorNames[processId] = name
        })
    }
    return collaboratorNames
}

/**
 * Generate data object graph data for the relationship graph. find all nodes and links between the collaborators
 * @param definitions the root elements of the bpmn file
 */
export function generateDataObjectGraphData(definitions: any): DataObjectGraphData {
    let collab = definitions.rootElements.find((el: any) => el.$type === 'bpmn:Collaboration')
    let processes = definitions.rootElements.filter((el: any) => el.$type === 'bpmn:Process')
    let collaboratorNames = getCollaboratorNames(collab)
    let routes = getDataObjectRoutes(processes, collaboratorNames)
    return {
        nodes: routes.nodes,
        links: routes.links
    }
}

/**
 * Get all data object routes for a list of processes
 * @param processes the list of processes
 * @param collaboratorNames the list of corresponding collaborators (id-name key-value pairs)
 */
function getDataObjectRoutes(processes: any[], collaboratorNames: { [id: string]: string }) {
    let dataOutputs = getDataOutputObjectNames(processes)
    let links: { source: string, target: string, label: string }[] = []
    let nodes: { id: string }[] = []
    processes.forEach((process: any) => {
        // Find the ioSpecification moddle object and search through data objects for relevant links
        let ioSpecification = process.ioSpecification
        if (ioSpecification && ioSpecification.dataInputs) {
            ioSpecification.dataInputs.forEach((el: any) => {
                for (const [key, value] of Object.entries(dataOutputs)) {
                    if (key === el.name) {
                        let sourceName = collaboratorNames[value]
                        let targetName = collaboratorNames[process.id]
                        let labelName = el.name
                        let linkObj = {source: sourceName, target: targetName, label: labelName}
                        if (!links.find(linkObj =>
                            linkObj.source === sourceName
                            && linkObj.target === targetName
                            && linkObj.label === labelName)) {
                            links.push(linkObj)
                        }

                        if (!nodes.find(node => node.id === sourceName)) {
                            nodes.push({id: sourceName})
                        }
                        if (!nodes.find(node => node.id === targetName)) {
                            nodes.push({id: targetName})
                        }
                    }
                }
            })
        }
    })
    return {links: links, nodes: nodes}
}

/**
 * Get the id-name pairs of data output objects, used to label the links between nodes
 * @param processes the list of processes
 */
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
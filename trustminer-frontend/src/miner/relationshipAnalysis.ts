import {Collaborator} from "../model/Collaborator";
import {Moddle} from "../util/miner_util";
import {CURRENT_BPMN} from "../util/constants";

let moddle = Moddle

export async function getCollaborators(): Promise<Collaborator[]> {
    let bpmn = localStorage.getItem(CURRENT_BPMN)
    if (bpmn != null) {
        const {rootElement: definitions} = await moddle.fromXML(bpmn)
        let collab = definitions.find((el: any) => el.$type == 'bpmn:Collaboration')
        let collaborators: { [processId: string]: string } = {}
        if (collab && collab.messageFlows) {
            getCollaboratorConnections(collab.messageFlows)
        }
        if (collab && collab.participants) {
            collab.participants.forEach((participant: any) => {
                let name = participant.name
                let id = participant.id
                let processId = participant.processRef.id
                collaborators[processId] = id
                //kv-pair processid, collaboratorid?
            })
        }
    }
    return []
}

function getCollaboratorConnections(messageFlows: any[]) {
    let connections: { [id: string]: string[] } = {}
    messageFlows.forEach((messageFlow: any) => {
        let sourceId = messageFlow.sourceRef.$parent.id
        let targetId = messageFlow.targetRef.$parent.id
        if (connections[sourceId]) {
            connections[sourceId].push(targetId)
        } else {
            connections[sourceId] = [targetId]
        }
    })
}

//For displaying: https://www.bsimard.com/2018/04/25/graph-viz-with-sigmajs.html or maybe d3?
//https://www.npmjs.com/package/react-cytoscape
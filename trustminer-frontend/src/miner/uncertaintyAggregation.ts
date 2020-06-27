import UncertaintyChartData from "../model/UncertaintyChartData";
import {getChartColors} from "../util/chart_util";
import {CURRENT_BPMN} from "../util/constants";
import {Moddle} from "../util/miner_util";
import {Collaborator} from "../model/Collaborator";
import {Uncertainty} from "../model/Uncertainty";

let moddle = Moddle

function getUncertaintyCount(flowElements: any[]) {
    let count = 0
    flowElements.forEach(element => {
        count += element.extensionElements.values.filter((el: any) => el.$type == "trust:Uncertainty").length
    })
    return count
}

function getUncertainties(flowElements: any[]): Uncertainty[] {
    let uncertainties: Uncertainty[] = []
    flowElements.forEach(element => {
        uncertainties = uncertainties.concat(
            element.extensionElements.values
                .filter((el: any) => el.$type == "trust:Uncertainty")
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

async function getCollaboratorUncertaintyCounts(): Promise<{ [id: string]: number }> {
    let collaboratorCounts: { [id: string]: number } = {}
    let bpmn = localStorage.getItem(CURRENT_BPMN)
    if (bpmn != null) {
        const {rootElement: definitions} = await moddle.fromXML(bpmn)
        let collab = definitions.rootElements.find((el: any) => el.$type == 'bpmn:Collaboration')
        collab.participants.forEach((collaborator: any) => {
            collaboratorCounts[collaborator.name] = getUncertaintyCount(collaborator.processRef.flowElements)
        })
    }
    return collaboratorCounts
}

export async function getUncertaintyDistributionData(): Promise<UncertaintyChartData> {
    return getCollaboratorUncertaintyCounts().then(data => {
        let labels = Object.keys(data)
        let values = Object.values(data)
        let colors = getChartColors(labels.length)
        return {
            labels: labels,
            datasets: [
                {
                    data: values,
                    backgroundColor: colors,
                    hoverBackgroundColor: colors
                }
            ]
        }
    })
}

export async function getCollaborators(): Promise<Collaborator[]> {
    let collaborators: Collaborator[] = []
    let bpmn = localStorage.getItem(CURRENT_BPMN)
    if (bpmn != null) {
        const {rootElement: definitions} = await moddle.fromXML(bpmn)
        let collab = definitions.rootElements.find((el: any) => el.$type == 'bpmn:Collaboration')
        collab.participants.forEach((collaborator: any) => {
            let uncertainties = getUncertainties(collaborator.processRef.flowElements)
            let id: string = collaborator.id
            let processId: string = collaborator.processRef.id
            let name: string = collaborator.name
            let collaboratorObject = {
                id: id,
                name: name,
                processId: processId,
                uncertaintyScore: 0,
                uncertainties: uncertainties
            }
            collaborators.push(collaboratorObject)
        })
    }
    return collaborators
}
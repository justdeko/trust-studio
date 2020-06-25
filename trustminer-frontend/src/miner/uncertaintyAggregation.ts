import UncertaintyChartData from "../model/UncertaintyChartData";
import {getChartColors} from "../util/graph_util";
import {CURRENT_BPMN} from "../util/constants";
import {Moddle} from "../util/miner_util";

let moddle = Moddle

function getUncertaintyCount(flowElements: any[]) {
    let count = 0
    flowElements.forEach(element => {
        count += element.extensionElements.values.filter((el: any) => el.$type == "trust:Uncertainty").length
    })
    return count
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
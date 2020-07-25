import {Uncertainty} from "./Uncertainty";

export interface Collaborator {
    id: string,
    name: string,
    processId: string,
    laneUncertainty: number,
    relativeLanceUncertainty: number,
    laneUncertaintyBalance: number,
    uncertainties: Uncertainty[],
    messageInDegree: number,
    messageOutDegree: number,
    dataInDegree: number,
    dataOutDegree: number,
    trustIssues: { [id: string]: Uncertainty[] }
}

export function instanceOfCollaborator(obj: any): obj is Collaborator {
    return 'laneUncertainty' in obj
}
import {Uncertainty} from "./Uncertainty";

export interface Collaborator {
    id: string,
    name: string,
    processId: string,
    laneUncertainty: number,
    relativeLanceUncertainty: number,
    laneUncertaintyBalance: number,
    uncertainties: Uncertainty[],
    relevantUncertainties: Uncertainty[],
    messageInDegree: number | undefined,
    messageOutDegree: number | undefined,
    dataInDegree: number | undefined,
    dataOutDegree: number | undefined,
    trustIssues: { [id: string]: Uncertainty[] }
}
import {Uncertainty} from "./Uncertainty";

export interface Collaborator {
    id: string,
    name: string,
    processId: string,
    laneUncertainty: number,
    relativeLanceUncertainty: number,
    laneUncertaintyBalance: number,
    uncertainties: Uncertainty[],
    inDegree: number,
    outDegree: number
}
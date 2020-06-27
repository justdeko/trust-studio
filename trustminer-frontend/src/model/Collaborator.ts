import {Uncertainty} from "./Uncertainty";

export interface Collaborator {
    id: string,
    name: string,
    processId: string,
    uncertaintyScore: number,
    uncertainties: Uncertainty[]
}
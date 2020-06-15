import {UncertaintyRow} from "./UncertaintyRow";

export interface Collaborator {
    id: string,
    uncertaintyScore: number,
    connections: [{ [id: string]: ConnectionType }]
    uncertainties: [UncertaintyRow]
}

export enum ConnectionType {
    INCOMING,
    OUTGOING,
    BIDIRECTIONAL
}
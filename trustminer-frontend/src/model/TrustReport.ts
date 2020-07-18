import {Collaborator} from "./Collaborator";
import {DataObjectGraphData, GraphData} from "./GraphData";
import {ExternalTrustPersona} from "./ExternalTrustPersona";

export interface TrustReport {
    globalUncertainty: number,
    averageElementUncertainty: number,
    collaborators: Collaborator[],
    messageFlowGraphData: GraphData,
    dataObjectGraphData: DataObjectGraphData,
    externalTrustPersonas: ExternalTrustPersona[]
}
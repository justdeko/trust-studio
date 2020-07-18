import {Collaborator} from "./Collaborator";
import {DataObjectGraphData, GraphData} from "./GraphData";
import {Uncertainty} from "./Uncertainty";

export interface TrustReport {
    globalUncertainty: number,
    averageElementUncertainty: number,
    collaborators: Collaborator[],
    messageFlowGraphData: GraphData,
    dataObjectGraphData: DataObjectGraphData,
    externalTrustPersonas: { [id: string]: Uncertainty[] }
}
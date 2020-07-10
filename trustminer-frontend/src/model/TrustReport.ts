import {Collaborator} from "./Collaborator";
import {DataObjectGraphData, GraphData} from "./GraphData";

export interface TrustReport {
    globalUncertainty: number,
    averageElementUncertainty: number,
    collaborators: Collaborator[],
    messageFlowGraphData: GraphData
    dataObjectGraphData: DataObjectGraphData
}
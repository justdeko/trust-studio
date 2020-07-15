import {TrustReport} from "../model/TrustReport";
import {insertUncertainties} from "./uncertaintyDiscovery";
import {generateDataObjectGraphData, generateGraphData} from "./relationshipAnalysis";
import {averageElementUncertainty, getCollaborators, globalUncertainty} from "./uncertaintyAggregation";
import {getDefinitions} from "../util/miner_util";

export async function mine(): Promise<TrustReport> {
    /**
     * Procedure:
     * 0. get bpmn moddle
     * 1. if uncertainties don't exist, perform uncertainty discovery
     * 2. perform relationship analysis for both message and data flows
     * 3. perform uncertainty aggregation to calculate all relevant metrics on a global and collaborator level
     * 4. perform relevancy analysis from the perspective of each collaborator and additional trust personas
     * 5. return: completed trust report model containing data from steps 2-4
     */
    let definitions = await getDefinitions()
    // 1
    await insertUncertainties(definitions)
    // 2
    let graphData = generateGraphData(definitions)
    let dataObjectGraphData = generateDataObjectGraphData(definitions)
    // 3
    let collaborators = getCollaborators(definitions, graphData)
    let gu = globalUncertainty(collaborators)
    return {
        globalUncertainty: gu,
        averageElementUncertainty: averageElementUncertainty(gu, definitions.rootElements),
        collaborators: collaborators,
        messageFlowGraphData: graphData,
        dataObjectGraphData: dataObjectGraphData,
    }
}
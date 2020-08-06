import {TrustReport} from "../model/TrustReport";
import {insertUncertainties} from "./uncertaintyDiscovery";
import {generateDataObjectGraphData, generateGraphData} from "./relationshipAnalysis";
import {averageElementUncertainty, getCollaborators, globalUncertainty} from "./uncertaintyAggregation";
import {getDefinitions} from "../util/miner_util";
import {findCriticalUncertainties, findCriticalUncertaintiesForExternal} from "./trustAnalysis";

/**
 * The big "miner" method. Returns a complete trust report from the
 * current state of the studio (bpmn model, external trust personas, list of uncertainties)
 * @param shouldDiscover whether new uncertainties should be inserted into the bpmn model
 */
export async function mine(shouldDiscover = true): Promise<TrustReport | Error> {
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
    // 1 (only performed if user agrees to discovery)
    if (shouldDiscover) await insertUncertainties(definitions)
    // 2
    let graphData = generateGraphData(definitions)
    let dataObjectGraphData = generateDataObjectGraphData(definitions)
    if (graphData.nodes.length === 0 && dataObjectGraphData.nodes.length === 0) {
        return Error("no collaborators")
    }
    // 3
    let collaborators = getCollaborators(definitions, graphData, dataObjectGraphData)
    let gu = globalUncertainty(collaborators)
    let avg = averageElementUncertainty(gu, definitions.rootElements)
    //4
    let collaboratorsWithCritical = collaborators.map((collaborator) => {
        return {
            ...collaborator,
            trustIssues: findCriticalUncertainties(collaborators, collaborator.name)
        }
    })
    let external = findCriticalUncertaintiesForExternal(collaborators)
    // Return a TrustReport Object
    return {
        globalUncertainty: gu,
        averageElementUncertainty: avg,
        collaborators: collaboratorsWithCritical,
        messageFlowGraphData: graphData,
        dataObjectGraphData: dataObjectGraphData,
        externalTrustPersonas: external
    }
}
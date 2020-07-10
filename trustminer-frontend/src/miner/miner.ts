import {TrustReport} from "../model/TrustReport";

export async function mine(): Promise<TrustReport | Error> {
    /**
     * Procedure:
     * 0. get bpmn moddle
     * 1. if uncertainties don't exist, perform uncertainty discovery
     * 2. perform relationship analysis for both message and data flows
     * 3. perform uncertainty aggregation to calculate all relevant metrics on a global and collaborator level
     * 4. perform relevancy analysis from the perspective of each collaborator and additional trust personas
     * 5. return: completed trust report model containing data from steps 2-4
     */

    return Error() //TODO implement
}
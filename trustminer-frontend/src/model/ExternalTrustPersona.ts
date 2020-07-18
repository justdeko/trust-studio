import {Uncertainty} from "./Uncertainty";

export interface ExternalTrustPersona {
    name: string,
    trustIssues: { [id: string]: Uncertainty[] }
}
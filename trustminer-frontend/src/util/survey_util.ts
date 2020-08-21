import {START_TIME, SURVEY_DATA} from "./constants";
import {SurveyData} from "../model/SurveyData";
import {externalTrustPersonaNames} from "./miner_util";
import {ExternalTrustPersona} from "../model/ExternalTrustPersona";

/**
 * Makes a post request to the survey backend
 */
export async function surveyPost() {
    return await fetch(process.env.PUBLIC_URL, {
        method: 'POST',
        body: localStorage.getItem(SURVEY_DATA),
        headers: {'Content-Type': 'application/json; charset=UTF-8'}
    })
}

/**
 * Updates the currently stored survey data with new values
 * @param newValues a dictionary of the new values
 */
export function updateSurveyData(newValues: { [key: string]: any }) {
    let surveyString = localStorage.getItem(SURVEY_DATA)
    if (surveyString) {
        let surveyData = JSON.parse(surveyString)
        Object.entries(newValues).forEach(([key, value]) => {
            surveyData[key] = value
        })
        localStorage.setItem(SURVEY_DATA, JSON.stringify(surveyData))
        console.log(`Survey Data updated: ${surveyData as SurveyData}`)
    }
}

/**
 * Check if a new trust persona is created (survey checkpoint)
 */
export function checkTrustPersonaCreated(): boolean {
    let external = externalTrustPersonaNames()
    return !!external.find(name => name == "Distributor");
}

/**
 * Checks if the specific trust policy for distributor trust persona exists (survey checkpoint)
 * @param externalTrustPersonas the dictionary of all external trust personas
 */
export function checkPolicyExists(externalTrustPersonas: ExternalTrustPersona[]): boolean {
    let distributorPersona = externalTrustPersonas.find(persona => persona.name === "Distributor")
    if (distributorPersona) {
        let collaboratorIssues = distributorPersona.trustIssues["Sender"]
        if (collaboratorIssues) {
            let matchUncertainty = collaboratorIssues
                .find(uncertainty =>
                    uncertainty.trustConcern == "Integrity" && uncertainty.component == "bpmn:UserTask")
            return !matchUncertainty;
        } else return false
    } else return false
}

/**
 * Get the currently elapsed time after starting the timer
 */
export function getTimeElapsed(): number {
    let endTime = new Date().getTime()
    let dateString = localStorage.getItem(START_TIME)
    if (dateString) {
        return endTime - new Date(dateString).getTime()
    } else return 0
}

/**
 * Starts the timer and stores the start locally
 */
export function startTimer() {
    let startTime = new Date()
    localStorage.setItem(START_TIME, startTime.toDateString())
}

export const surveyTexts = [
    'Add a new external trust persona called "Distributor".',
    'Add a trust policy for the trust entity "Sender" for the process Element "User Task" and Integrity as a trust concern.',
    'Go back to the dashboard. What amount of critical uncertainties from the perspective of the Distributor does Sender have?',
    'Go to the modeler. How many uncertainties does the task "prepare parcel" have?',
    'Export a trust report and save it locally.'
]
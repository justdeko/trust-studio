import {START_TIME, SURVEY_DATA} from "./constants";
import {SurveyData} from "../model/SurveyData";
import {externalTrustPersonaNames} from "./miner_util";

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
    return !!external.find(name => name == "Overseer");
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
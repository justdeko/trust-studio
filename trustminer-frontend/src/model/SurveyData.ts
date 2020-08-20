export interface SurveyData {
    sessionId: string,
    tutorialDurations: number[],
    introductionDuration: number,
    surveyTasksDurations: number[],
    surveyTasksCompleted: boolean[],
    surveyDuration: number,
    surveyStart: Date
}
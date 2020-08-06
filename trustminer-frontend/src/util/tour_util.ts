import {FIRST_TIME} from "./constants";

/**
 * Check if it is the users first time using the app
 */
export function getFirstTime(): boolean {
    let firstTime = localStorage.getItem(FIRST_TIME)
    return firstTime === null || firstTime === "true";
}

/**
 * Set whether the user has walked through the tutorial
 * @param firstTime either true or false
 */
export function setFirstTime(firstTime: boolean) {
    localStorage.setItem(FIRST_TIME, firstTime.toString())
}
import {FIRST_TIME} from "../util/constants";

export function getFirstTime(): boolean {
    let firstTime = localStorage.getItem(FIRST_TIME)
    return firstTime === null || firstTime === "true";
}

export function setFirstTime(firstTime: boolean) {
    localStorage.setItem(FIRST_TIME, firstTime.toString())
}
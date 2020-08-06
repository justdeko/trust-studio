import {NIGHT_MODE} from "./constants";

/**
 * Check whether night mode is enabled
 */
export function getNightMode(): boolean {
    let nightMode = localStorage.getItem(NIGHT_MODE)
    return nightMode !== null && nightMode === "true";
}

/**
 * Set night mode enabled to true or false
 * @param nightMode boolean
 */
export function setNightMode(nightMode: boolean) {
    localStorage.setItem(NIGHT_MODE, nightMode.toString())
}
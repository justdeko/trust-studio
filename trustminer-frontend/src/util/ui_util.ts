import {NIGHT_MODE} from "./constants";

export function getNightMode(): boolean {
    let nightMode = localStorage.getItem(NIGHT_MODE)
    return nightMode !== null && nightMode === "true";
}

export function setNightMode(nightMode: boolean) {
    localStorage.setItem(NIGHT_MODE, nightMode.toString())
}
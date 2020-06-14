import {defaultUncertainties} from "../resources/defaultUncertainties";
import {UncertaintyRow} from "../model/UncertaintyRow";
import {CURRENT_UNCERTAINTY_LIST} from "./constants";

const sep = ";" // Column separator
const nl = "\n" // Row separator

export function loadUncertainties(): Array<UncertaintyRow> {
    let currentList = localStorage.getItem(CURRENT_UNCERTAINTY_LIST)
    let csvList = (currentList) ? currentList.split(nl) : defaultUncertainties.split(nl)
    let lines = [];
    let header = csvList[0].split(sep);
    for (let i = 1; i < csvList.length; i++) {
        // split uncertainties based on comma
        let data = csvList[i].split(sep);
        if (data.length === header.length) {
            let line = [];
            for (let j = 0; j < header.length; j++) {
                line.push(data[j]);
            }
            lines.push(line);
        }
    }
    // Convert uncertainties to UncertaintyRow interface
    return lines.map(line => {
        return {
            parentComponent: line[0],
            component: line[1],
            perspective: Number(line[2]),
            trustconcern: line[3],
            root: line[4],
            question: line[5]
        }
    })
}

export function saveUncertainties(uncertaintyList: Array<UncertaintyRow>) {
    let csvString = ""
    uncertaintyList.forEach((row, index) => {
        let stringRow =
            row.parentComponent + sep + row.component + sep +
            row.perspective + sep + row.trustconcern + sep +
            row.root + sep + row.question
        // add a newline if its not the last item
        if (index != uncertaintyList.length - 1) stringRow += nl
        csvString += stringRow
    })
    let header = defaultUncertainties.split(nl)[0]
    let csv = header + nl + csvString
    localStorage.setItem(CURRENT_UNCERTAINTY_LIST, csv)
}

export const extractUncertaintyList = (component: String) =>
    loadUncertainties().filter(uncertainty => uncertainty.component == component)
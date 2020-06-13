import {defaultUncertainties} from "../resources/defaultUncertainties";
import {UncertaintyRow} from "../components/UncertaintyTable";
import {CURRENT_UNCERTAINTY_LIST} from "./constants";


export function loadUncertainties(): Array<UncertaintyRow> {
    let currentList = localStorage.getItem(CURRENT_UNCERTAINTY_LIST)
    let csvList = (currentList) ? currentList.split("\n") : defaultUncertainties.split("\n")
    let lines = [];
    let header = csvList[0].split(',');
    for (let i = 1; i < csvList.length; i++) {
        // split uncertainties based on comma
        let data = csvList[i].split(',');
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
            component: line[2],
            perspective: line[3],
            trustconcern: line[4],
            root: line[5],
            question: line[6]
        }
    })
}

export function saveUncertainties(uncertaintyList: Array<UncertaintyRow>) {
    console.log("this was called")
    let csvString = ""
    uncertaintyList.forEach((row, index) => {
        let stringRow = ",," + row.component + "," + row.perspective + "," + row.trustconcern + "," + row.root + "," + row.question + ","
        // add a newline if its not the last item
        if (index != uncertaintyList.length - 1) stringRow += "\n"
        csvString += stringRow
    })
    let header = defaultUncertainties.split("\n")[0]
    let csv = header + "\n" + csvString
    localStorage.setItem(CURRENT_UNCERTAINTY_LIST, csv)
}

export const extractUncertaintyList = (component: String) =>
    loadUncertainties().filter(uncertainty => uncertainty.component == component)
import {Collaborator} from "../model/Collaborator";
import {BarChartData} from "../model/BarChartData";
import {TrustConcern} from "../model/TrustConcern";
import {Uncertainty} from "../model/Uncertainty";
import UncertaintyChartData from "../model/UncertaintyChartData";
import {getWrittenName} from "../model/ComponentTypes";

export const chartOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                min: 0
            }
        }],
        xAxes: [{
            ticks: {
                beginAtZero: true,
                min: 0
            }
        }]
    }
}

export const colorPresets = [
    '#003f5c', '#2f4b7c',
    '#665191', '#a05195',
    '#d45087', '#f95d6a',
    '#ff7c43', '#ffa600'
]

/**
 * Returns an array of chart colors.
 * @param count the amount of labels in the chart
 */
export function getChartColors(count: number): string[] {
    if (count < 9) {
        return colorPresets.slice(0, count)
    } else {
        let newColors = []
        for (let index = 0; index < count - 8; index++) {
            let hexNumber = Math.floor(Math.random() * Math.floor(10000))
            let hexString = hexNumber.toString()
            let paddedString = hexString.padStart(4 - hexString.length, '0')
            let randomColor = colorPresets[Math.floor(Math.random() * colorPresets.length)]
            newColors.push(randomColor.slice(0, 3) + paddedString)
        }
        return colorPresets.concat(newColors)
    }
}

/**
 * Maps the uncertainties of a collaborator to uncertainties sorted by trust concern
 * @param collaborator the relevant collaborator
 */
export function mapToTrustConcernChartData(collaborator: Collaborator): BarChartData {
    let labels = Object.entries(TrustConcern).map(([_, values]) => values)
    let distributionData = [0, 0, 0, 0, 0, 0]
    collaborator.uncertainties.forEach((uncertainty) => {
        switch (uncertainty.trustConcern) {
            case labels[0]: {
                distributionData[0] += 1;
                break;
            }
            case labels[1]: {
                distributionData[1] += 1;
                break;
            }
            case labels[2]: {
                distributionData[2] += 1;
                break;
            }
            case labels[3]: {
                distributionData[3] += 1;
                break;
            }
            case labels[4]: {
                distributionData[4] += 1;
                break;
            }
            case labels[5]: {
                distributionData[5] += 1;
                break;
            }
        }
    })
    return {
        labels: labels,
        datasets: [{
            label: "Amount",
            backgroundColor: colorPresets[5],
            borderColor: colorPresets[5],
            borderWidth: 1,
            hoverBackgroundColor: colorPresets[3],
            hoverBorderColor: colorPresets[3],
            data: distributionData
        }]
    }
}

/**
 * Maps a dictionary of critical uncertainties to trust issue chart data (critical and non-critical uncertainties)
 * @param trustIssues the relevant trust issues
 * @param collaborators the current list of collaborators
 */
export function mapToTrustIssuesChartData(trustIssues: { [id: string]: Uncertainty[] }, collaborators: Collaborator[]): BarChartData {
    let labels = Object.entries(trustIssues).map(([key, _]) => key)
    let issuesData = Object.entries(trustIssues).map(([_, uncertainties]) => uncertainties.length)
    let uncriticalData = Object.entries(trustIssues)
        .map(([name, uncertainties], index) =>
            collaborators.filter(collaborator => collaborator.name === name)[0].uncertainties.length - issuesData[index]
        )
    return {
        labels: labels,
        datasets: [{
            label: "Critical Uncertainties",
            backgroundColor: colorPresets[6],
            borderColor: colorPresets[6],
            borderWidth: 1,
            hoverBackgroundColor: colorPresets[3],
            hoverBorderColor: colorPresets[3],
            data: issuesData
        }, {
            label: "Other",
            backgroundColor: colorPresets[4],
            borderColor: colorPresets[4],
            borderWidth: 1,
            hoverBackgroundColor: colorPresets[2],
            hoverBorderColor: colorPresets[2],
            data: uncriticalData
        }]
    }
}

/**
 * Maps a list of uncertainties to a distribution of uncertainties by bpmn component
 * @param uncertainties the uncertainty list
 */
export function mapToUncertaintyComponentData(uncertainties: Uncertainty[]): BarChartData {
    // Get all unique component names
    let componentNames = uncertainties
        .map(uncertainty => uncertainty.component).filter((v, i, a) => a.indexOf(v) === i)
    let componentCounts: number[] = []
    componentNames.forEach(name => {
        componentCounts.push(uncertainties.filter(uncertainty => uncertainty.component === name).length)
    })
    return {
        labels: componentNames.map(name => getWrittenName(name)),
        datasets: [{
            label: "Amount of uncertainties",
            backgroundColor: colorPresets[4],
            borderColor: colorPresets[4],
            borderWidth: 1,
            hoverBackgroundColor: colorPresets[3],
            hoverBorderColor: colorPresets[3],
            data: componentCounts
        }]
    }
}

/**
 * Get the uncertainty distribution data for a list of collaborators
 * @param collaborators the collaborator list
 */
export function getUncertaintyDistributionData(collaborators: Collaborator[]): UncertaintyChartData {
    let counts = getCollaboratorUncertaintyCounts(collaborators)
    let labels = Object.keys(counts)
    let values = Object.values(counts)
    let colors = getChartColors(labels.length)
    return {
        labels: labels,
        datasets: [
            {
                data: values,
                backgroundColor: colors,
                hoverBackgroundColor: colors
            }
        ]
    }
}

/**
 * Get a dictionary with pairs of collaborator names and their corresponding uncertainty counts
 * @param collaborators the list of collaborators
 */
function getCollaboratorUncertaintyCounts(collaborators: Collaborator[]): { [id: string]: number } {
    let collaboratorCounts: { [id: string]: number } = {}
    collaborators.forEach(collaborator => {
        collaboratorCounts[collaborator.name] = collaborator.uncertainties.length
    })
    return collaboratorCounts
}

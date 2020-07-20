import {Collaborator} from "../model/Collaborator";
import {BarChartData} from "../model/BarChartData";
import {TrustConcern} from "../model/TrustConcern";
import {Uncertainty} from "../model/Uncertainty";
import UncertaintyChartData from "../model/UncertaintyChartData";

export const colorPresets = [
    '#003f5c', '#2f4b7c',
    '#665191', '#a05195',
    '#d45087', '#f95d6a',
    '#ff7c43', '#ffa600'
]

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

export function mapToTrustIssuesChartData(trustIssues: { [id: string]: Uncertainty[] }): BarChartData {
    let labels = Object.entries(trustIssues).map(([key, _]) => key)
    let issuesData = Object.entries(trustIssues).map(([_, uncertainties]) => uncertainties.length)
    return {
        labels: labels,
        datasets: [{
            label: "Amount",
            backgroundColor: colorPresets[6],
            borderColor: colorPresets[6],
            borderWidth: 1,
            hoverBackgroundColor: colorPresets[3],
            hoverBorderColor: colorPresets[3],
            data: issuesData
        }]
    }
}

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


function getCollaboratorUncertaintyCounts(collaborators: Collaborator[]): { [id: string]: number } {
    let collaboratorCounts: { [id: string]: number } = {}
    collaborators.forEach(collaborator => {
        collaboratorCounts[collaborator.name] = collaborator.uncertainties.length
    })
    return collaboratorCounts
}

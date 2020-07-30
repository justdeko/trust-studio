import React from "react";
import {TrustReport} from "../../../model/TrustReport";
import {Grid} from "@material-ui/core";
import UncertaintyStats from "./UncertaintyStats";
import {mapToTrustIssuesChartData} from "../../../util/chart_util";
import TrustIssuesChart from "./TrustIssuesChart";
import {getTrustIssues} from "../../../util/miner_util";

interface CollaboratorSectionProps {
    trustReport: TrustReport,
    selectedPerspective: string,
}

export default function CollaboratorSection(props: CollaboratorSectionProps) {
    const {trustReport, selectedPerspective} = props
    let selectedCollaborator = trustReport.collaborators.filter(collaborator => collaborator.name === selectedPerspective)[0]
    return (
        <div data-tour="collab-section" style={{width: "100%"}}>
            <Grid justify="space-between" alignItems="stretch" container spacing={2} style={{width: "100%"}}>
                <Grid item xs>
                    <UncertaintyStats collaborators={trustReport.collaborators}/>
                </Grid>
                {
                    selectedPerspective !== "General" ?
                        <Grid item>
                            <TrustIssuesChart
                                chartData={mapToTrustIssuesChartData(getTrustIssues(trustReport, selectedPerspective))}/>
                        </Grid> : undefined
                }
                {/* <Grid item>
                    <TrustConcernChart chartData={mapToTrustConcernChartData(selectedCollaborator)}/>
                </Grid>
                <Grid item xs>
                    <UncertaintyDependencies dd={selectedCollaborator.dataInDegree}
                                             di={selectedCollaborator.dataOutDegree}
                                             md={selectedCollaborator.messageInDegree}
                                             mi={selectedCollaborator.messageOutDegree}/>
                </Grid>*/}
            </Grid>
        </div>
    )
}
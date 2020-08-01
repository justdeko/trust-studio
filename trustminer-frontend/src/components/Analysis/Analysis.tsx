import React from "react";
import RelationshipGraph from "./RelationshipGraph";
import {Grid} from "@material-ui/core";
import UncertaintyChart from "./UncertaintyChart";
import {useAnalysisStyles} from "../../styles/analysis-styles";
import GlobalStats from "./GlobalStats";
import {TrustReport} from "../../model/TrustReport";
import CollaboratorSection from "./CollabSection/CollaboratorSection";
import {getUncertaintyDistributionData, mapToTrustIssuesChartData} from "../../util/chart_util";
import MissingTrustReportScreen from "./MissingTrustReportScreen";
import {externalTrustPersonaNames, getTrustIssues} from "../../util/miner_util";
import TrustIssuesChart from "./TrustIssuesChart";

interface AnalysisProps {
    trustReport?: TrustReport,
    selectedPerspective?: string
}

export default function Analysis(props: AnalysisProps) {
    const classes = useAnalysisStyles();
    const {trustReport, selectedPerspective} = props
    return (
        <div data-tour="analysis">
            {trustReport && selectedPerspective ?
                <Grid container spacing={2} justify="space-between" alignItems="stretch" className={classes.root}>
                    <Grid item xs>
                        <RelationshipGraph graphData={trustReport.messageFlowGraphData}
                                           dataObjectGraphData={trustReport.dataObjectGraphData}/>
                    </Grid>
                    <Grid item style={{minWidth: 300}}>
                        <UncertaintyChart
                            data={getUncertaintyDistributionData(trustReport.collaborators)}/>
                    </Grid>
                    {
                        selectedPerspective !== "General" ?
                            <Grid item>
                                <TrustIssuesChart
                                    chartData={mapToTrustIssuesChartData(getTrustIssues(trustReport, selectedPerspective))}/>
                            </Grid> : undefined
                    }
                    <Grid item xs>
                        <GlobalStats globalUncertainty={trustReport.globalUncertainty}
                                     averageUncertainty={trustReport.averageElementUncertainty}
                                     collaboratorCount={trustReport.collaborators.length}
                                     externalTrustPersonaCount={externalTrustPersonaNames().length}/>
                    </Grid>
                    <Grid item style={{width: "100%"}}>
                        <CollaboratorSection trustReport={trustReport}/>
                    </Grid>
                </Grid>
                : <MissingTrustReportScreen/>}
        </div>
    )
}
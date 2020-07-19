import React from "react";
import RelationshipGraph from "./RelationshipGraph";
import {Grid} from "@material-ui/core";
import UncertaintyChart from "./UncertaintyChart";
import {getUncertaintyDistributionData} from "../../miner/uncertaintyAggregation";
import DataCard from "./DataCard";
import {useAnalysisStyles} from "../../styles/analysis-styles";
import GlobalStats from "./GlobalStats";
import {TrustReport} from "../../model/TrustReport";
import CollaboratorSection from "./CollabSection/CollaboratorSection";

interface AnalysisProps {
    trustReport?: TrustReport
}

export default function Analysis(props: AnalysisProps) {
    const classes = useAnalysisStyles();
    const {trustReport} = props
    return (
        <div>
            {trustReport ?
                <Grid container spacing={2} justify="space-between" alignItems="stretch" className={classes.root}>
                    <Grid item xs>
                        <RelationshipGraph graphData={trustReport.messageFlowGraphData}
                                           dataObjectGraphData={trustReport.dataObjectGraphData}/>
                    </Grid>
                    <Grid item style={{minWidth: 300}} xs={6}>
                        <DataCard
                            content={<UncertaintyChart
                                data={getUncertaintyDistributionData(trustReport.collaborators)}/>}
                            title="Uncertainty Distribution"/>
                    </Grid>
                    <Grid item xs>
                        <GlobalStats globalUncertainty={trustReport.globalUncertainty}
                                     averageUncertainty={trustReport.averageElementUncertainty}/>
                    </Grid>
                    <Grid item>
                        <CollaboratorSection trustReport={trustReport}/>
                    </Grid>
                </Grid>
                : <div/>}

        </div>
    )
}
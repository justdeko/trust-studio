import React from "react";
import RelationshipGraph from "./RelationshipGraph";
import {Grid} from "@material-ui/core";
import UncertaintyChart from "./UncertaintyChart";
import {getUncertaintyDistributionData} from "../../miner/uncertaintyAggregation";
import DataCard from "./DataCard";
import {useAnalysisStyles} from "../../styles/analysis-styles";
import Indicator from "./Indicator";
import {TrustReport} from "../../model/TrustReport";

interface AnalysisProps {
    trustReport?: TrustReport
}

export default function Analysis(props: AnalysisProps) {
    const classes = useAnalysisStyles();
    const {trustReport} = props
    return (
        <div>
            {trustReport ?
                <Grid container spacing={3} className={classes.root}>
                    <Grid item xs={4}>
                        <DataCard
                            content={
                                <RelationshipGraph graphData={trustReport.messageFlowGraphData}
                                                   dataObjectGraphData={trustReport.dataObjectGraphData}/>
                            }
                            title="Relationship Analysis"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <DataCard
                            content={<UncertaintyChart
                                data={getUncertaintyDistributionData(trustReport.collaborators)}/>}
                            title="Uncertainty Distribution"/>
                    </Grid>
                    <Grid item xs>
                        <Grid container spacing={1} direction="column">
                            <Grid item xs>
                                <Indicator indicatorNumber={trustReport.globalUncertainty}
                                           indicatorTitle="Global uncertainty"/>
                            </Grid>
                            <Grid item xs>
                                <Indicator indicatorNumber={trustReport.averageElementUncertainty.toFixed(3)}
                                           indicatorTitle="Average Element uncertainty"/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                : <div/>}

        </div>
    )
}
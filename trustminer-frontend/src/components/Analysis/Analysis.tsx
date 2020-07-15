import React, {useEffect, useState} from "react";
import RelationshipGraph from "./RelationshipGraph";
import {Grid} from "@material-ui/core";
import UncertaintyChart from "./UncertaintyChart";
import {getUncertaintyDistributionData} from "../../miner/uncertaintyAggregation";
import {mine} from "../../miner/miner";
import DataCard from "./DataCard";
import {useAnalysisStyles} from "../../styles/analysis-styles";
import Indicator from "./Indicator";
import {TrustReport} from "../../model/TrustReport";

export default function Analysis() {
    const classes = useAnalysisStyles();
    const [trustReport, setTrustReport] = useState<TrustReport>()

    useEffect(() => {
        mine().then((trustReport) => {
            setTrustReport(trustReport)
            console.log(trustReport)
        })
    }, [])

    return (
        <div>
            {trustReport ?
                <Grid container spacing={3} className={classes.root}>
                    <Grid item xs>
                        <DataCard
                            content={<RelationshipGraph graphData={trustReport.dataObjectGraphData}
                                                        forDataObjects={true}/>}
                            title="Data Relationship Analysis"
                        />
                    </Grid>
                    <Grid item xs>
                        <DataCard
                            content={<UncertaintyChart
                                data={getUncertaintyDistributionData(trustReport.collaborators)}/>}
                            title="Uncertainty Distribution"/>
                    </Grid>
                    <Grid item xs>
                        <Indicator indicatorNumber={trustReport.globalUncertainty}
                                   indicatorTitle="Global uncertainty"/>
                    </Grid>
                    <Grid item xs>
                        <Indicator indicatorNumber={trustReport.averageElementUncertainty.toFixed(3)}
                                   indicatorTitle="Average Element uncertainty"/>
                    </Grid>
                </Grid>
                : <div/>}

        </div>
    )
}
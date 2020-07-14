import React, {useEffect, useState} from "react";
import RelationshipGraph from "./RelationshipGraph";
import {DataObjectGraphData, GraphData} from "../../model/GraphData";
import {CircularProgress, Grid} from "@material-ui/core";
import UncertaintyChart from "./UncertaintyChart";
import UncertaintyChartData from "../../model/UncertaintyChartData";
import {getUncertaintyDistributionData} from "../../miner/uncertaintyAggregation";
import {mine} from "../../miner/miner";
import DataCard from "./DataCard";
import {useAnalysisStyles} from "../../styles/analysis-styles";

export default function Analysis() {
    const classes = useAnalysisStyles();
    const [graphData, setGraphData] = useState<GraphData>()
    const [dataObjGraphData, setDataObjGraphData] = useState<DataObjectGraphData>()
    const [uncertaintyData, setUncertaintyData] = useState<UncertaintyChartData>()

    useEffect(() => {
        mine().then((trustreport) => {
            setGraphData(trustreport.messageFlowGraphData)
            setDataObjGraphData(trustreport.dataObjectGraphData)
            console.log(trustreport)
        })
        getUncertaintyDistributionData().then(data => setUncertaintyData(data))
    }, [])

    return (
        <div>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs>
                    <DataCard
                        content={dataObjGraphData
                            ? <RelationshipGraph graphData={dataObjGraphData} forDataObjects={true}/>
                            : <CircularProgress/>}
                        title="Relationship Analysis"
                    />
                </Grid>
                <Grid item xs>
                    <DataCard
                        content={uncertaintyData ? <UncertaintyChart data={uncertaintyData}/> : <CircularProgress/>}
                        title="Uncertainty Distribution"/>
                </Grid>
            </Grid>
        </div>
    )
}
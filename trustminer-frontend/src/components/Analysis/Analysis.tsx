import React, {useEffect, useState} from "react";
import RelationshipGraph from "./RelationshipGraph";
import {GraphData} from "../../model/GraphData";
import {CircularProgress} from "@material-ui/core";
import UncertaintyChart from "./UncertaintyChart";
import UncertaintyChartData from "../../model/UncertaintyChartData";
import {getUncertaintyDistributionData} from "../../miner/uncertaintyAggregation";
import {mine} from "../../miner/miner";

export default function Analysis() {
    const [graphData, setGraphData] = useState<GraphData>()
    const [uncertaintyData, setUncertaintyData] = useState<UncertaintyChartData>()

    useEffect(() => {
        mine().then((trustreport) => {
            setGraphData(trustreport.messageFlowGraphData)
            console.log(trustreport)
        })
        getUncertaintyDistributionData().then(data => setUncertaintyData(data))
    }, [])

    return (
        <>
            {graphData ? <RelationshipGraph graphData={graphData}/> : <CircularProgress/>}
            {uncertaintyData ? <UncertaintyChart data={uncertaintyData}/> : <CircularProgress/>}
        </>

    )
}
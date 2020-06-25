import React, {useEffect, useState} from "react";
import {generateGraphData} from "../../miner/relationshipAnalysis";
import RelationshipGraph from "./RelationshipGraph";
import {GraphData} from "../../model/GraphData";
import {CircularProgress} from "@material-ui/core";
import UncertaintyChart from "./UncertaintyChart";
import UncertaintyChartData from "../../model/UncertaintyChartData";
import {getUncertaintyDistributionData} from "../../miner/uncertaintyAggregation";

export default function Analysis() {
    const [graphData, setGraphData] = useState<GraphData>()
    const [uncertaintyData, setUncertaintyData] = useState<UncertaintyChartData>()

    useEffect(() => {
        generateGraphData().then(data => setGraphData(data))
        getUncertaintyDistributionData().then(data => setUncertaintyData(data))
    }, [])

    return (
        <>
            {graphData ? <RelationshipGraph graphData={graphData}/> : <CircularProgress/>}
            {uncertaintyData ? <UncertaintyChart data={uncertaintyData}/> : <CircularProgress/>}
        </>

    )
}
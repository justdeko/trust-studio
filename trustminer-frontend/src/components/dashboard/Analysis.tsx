import React, {useEffect, useState} from "react";
import {generateGraphData} from "../../miner/relationshipAnalysis";
import RelationshipGraph from "./RelationshipGraph";
import {GraphData} from "../../model/GraphData";
import {CircularProgress} from "@material-ui/core";

export default function Analysis() {
    const [graphData, setGraphData] = useState<GraphData>()

    useEffect(() => {
        generateGraphData().then(data => setGraphData(data))
    }, [])

    return (
        (graphData ? <RelationshipGraph graphData={graphData}/> : <CircularProgress/>)

    )
}
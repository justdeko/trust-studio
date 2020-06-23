import React from "react";
import {Graph} from "react-d3-graph";
import {graphConfig} from "../../resources/graphConfig";
import {GraphData} from "../../model/GraphData";

interface GraphProps {
    graphData: GraphData
}

export default function RelationshipGraph(props: GraphProps) {
    const {graphData} = props
    return <Graph
        id="collaborator-relationship-graph"
        data={graphData}
        config={graphConfig}
    />
}
import React from "react";
import {Graph, GraphConfiguration} from "react-d3-graph";
import {graphConfig} from "../../resources/graphConfig";
import {DataObjectGraphData, GraphData} from "../../model/GraphData";

interface GraphProps {
    graphData: GraphData | DataObjectGraphData,
    forDataObjects: boolean
}

export default function RelationshipGraph(props: GraphProps) {
    const {graphData, forDataObjects} = props
    return <Graph
        id={forDataObjects ? "collaborator-relationship-graph-data-objects" : "collaborator-relationship-graph"}
        data={graphData}
        config={graphConfig as GraphConfiguration<any, any>}
    />
}
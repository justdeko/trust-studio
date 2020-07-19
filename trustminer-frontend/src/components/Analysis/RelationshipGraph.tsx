import React, {useState} from "react";
import {Graph, GraphConfiguration} from "react-d3-graph";
import {graphConfig} from "../../resources/graphConfig";
import {DataObjectGraphData, GraphData} from "../../model/GraphData";
import RelationshipGraphSelector from "./RelationshipGraphSelector";

interface GraphProps {
    graphData: GraphData,
    dataObjectGraphData: DataObjectGraphData
}

export default function RelationshipGraph(props: GraphProps) {
    const {graphData, dataObjectGraphData} = props
    const [selectedType, setSelectedType] = useState("data")

    return (
        <div>
            <RelationshipGraphSelector setSelected={setSelectedType}/>
            <Graph
                id={selectedType == "data" ? "collaborator-relationship-graph-data-objects" : "collaborator-relationship-graph"}
                data={selectedType == "data" ? dataObjectGraphData : graphData}
                config={graphConfig as GraphConfiguration<any, any>}
            />
        </div>
    )
}
import React, {useState} from "react";
import {Graph, GraphConfiguration} from "react-d3-graph";
import {graphConfig} from "../../resources/graphConfig";
import {DataObjectGraphData, GraphData} from "../../model/GraphData";
import RelationshipGraphSelector from "./RelationshipGraphSelector";
import {Card, CardContent, Grid, Tooltip, Typography} from "@material-ui/core";

interface GraphProps {
    graphData: GraphData,
    dataObjectGraphData: DataObjectGraphData
}

export default function RelationshipGraph(props: GraphProps) {
    const {graphData, dataObjectGraphData} = props
    const [selectedType, setSelectedType] = useState("message-flow")

    return (
        <Card data-tour="relationship-analysis" style={{height: '100%'}}>
            <CardContent>
                <Grid container justify="space-between" alignItems="center" direction="row">
                    <Tooltip title="This graph shows the relationship between collaborators of the process
                    both from a data and a message flow perspective.">
                        <Typography variant="h5" component="h2">
                            Relationship Analysis
                        </Typography>
                    </Tooltip>
                    <RelationshipGraphSelector setSelected={setSelectedType}/>
                </Grid>
                {graphWrapper(
                    selectedType === "data" ? dataObjectGraphData : graphData,
                    graphConfig as GraphConfiguration<any, any>,
                    selectedType === "data" ? "collaborator-relationship-graph-data-objects" : "collaborator-relationship-graph"
                )}
            </CardContent>
        </Card>
    )
}

function graphWrapper(data: GraphData | DataObjectGraphData, config: GraphConfiguration<any, any>, id: string): React.ReactNode {
    if (data.links.length > 0) {
        return <div id="rel_graph">
            <Graph
                id={id}
                data={data}
                config={config}
            />
        </div>
    } else {
        return <Typography>No Data available</Typography>
    }
}
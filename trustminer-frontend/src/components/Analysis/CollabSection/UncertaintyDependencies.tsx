import React from "react";
import {Card, CardContent, Tooltip, Typography} from "@material-ui/core";

interface DependenciesProps {
    dd: number,
    di: number,
    md: number,
    mi: number
}

export default function UncertaintyDependencies(props: DependenciesProps) {
    const {dd, di, md, mi} = props
    return <Card style={{height: '100%'}}>
        <CardContent>
            <Typography variant="h5" component="h2">
                Uncertainty Dependencies
            </Typography>
            <Tooltip title="Shows how many collaborators are dependent on the selected one from a data perspective.">
                <Typography variant="subtitle1">
                    Data Influence: {di}
                </Typography>
            </Tooltip>
            <Tooltip title="Shows how many collaborators the selected one is dependent upon from a data perspective.">
                <Typography variant="subtitle1">
                    Data Dependency: {dd}
                </Typography>
            </Tooltip>
            <Tooltip title="Shows how many collaborators are dependent on the selected one from a message perspective.">
                <Typography variant="subtitle1">
                    Message Influence: {mi}
                </Typography>
            </Tooltip>
            <Tooltip
                title="Shows how many collaborators the selected one is dependent upon from a message perspective.">
                <Typography variant="subtitle1">
                    Message Dependency: {md}
                </Typography>
            </Tooltip>
        </CardContent>
    </Card>
}
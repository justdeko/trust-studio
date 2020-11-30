import React from "react";
import {Card, CardContent, Tooltip, Typography} from "@material-ui/core";

interface UncertaintyStatsProps {
    lu: number,
    rlu: number,
    lub: number
}

export default function UncertaintyStats(props: UncertaintyStatsProps) {
    const {lu, rlu, lub} = props
    return <Card style={{height: '100%'}}>
        <CardContent>
            <Typography variant="h5" component="h2">
                Uncertainty Statistics
            </Typography>
            <Tooltip title="The amount of (critical) uncertainties for the currently selected collaborator.">
                <Typography variant="subtitle1">
                    Lane Uncertainty: {lu}
                </Typography>
            </Tooltip>
            <Tooltip title="The percentage from the global uncertainty of the selected collaborator.">
                <Typography variant="subtitle1">
                    Relative Lane Uncertainty: {rlu.toFixed(3)}
                </Typography>
            </Tooltip>
            <Tooltip title="This metric shows how much the lane uncertainty deviates if the distribution was equal.
            For example, if all collaborators had the same amount of uncertainties the lane uncertainty balance would be 0.">
                <Typography variant="subtitle1">
                    Lane Uncertainty Balance: {lub.toFixed(3)}
                </Typography>
            </Tooltip>
        </CardContent>
    </Card>
}
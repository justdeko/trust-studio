import React from "react";
import {Card, CardContent, Typography} from "@material-ui/core";

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
            <Typography variant="h6" component="h6">
                Lane Uncertainty: {lu}
            </Typography>
            <Typography variant="h6" component="h6">
                Relative Lane Uncertainty: {rlu.toFixed(3)}
            </Typography>
            <Typography variant="h6" component="h6">
                Lane Uncertainty Balance: {lub.toFixed(3)}
            </Typography>
        </CardContent>
    </Card>
}
import React from "react";
import {Card, CardContent, Typography} from "@material-ui/core";

interface GlobalStatProps {
    globalUncertainty: number,
    averageUncertainty: number,
}

export default function GlobalStats(props: GlobalStatProps) {
    const {globalUncertainty, averageUncertainty} = props
    return <Card>
        <CardContent>
            <Typography variant="h5" component="h2">Global Uncertainty</Typography>
            <Typography variant='h4'>{globalUncertainty}</Typography>
            <Typography variant="h5" component="h2">Average Element Uncertainty</Typography>
            <Typography variant='h4'>{averageUncertainty.toFixed(3)}</Typography>
        </CardContent>
    </Card>
}
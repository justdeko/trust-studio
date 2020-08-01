import React from "react";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";

interface GlobalStatProps {
    globalUncertainty: number,
    averageUncertainty: number,
    collaboratorCount: number,
    externalTrustPersonaCount: number
}

export default function GlobalStats(props: GlobalStatProps) {
    const {globalUncertainty, averageUncertainty, collaboratorCount, externalTrustPersonaCount} = props
    return <Card data-tour="stats" style={{height: '100%'}}>
        <CardContent style={{height: '100%'}}>
            <Grid direction="column" style={{height: '100%'}} container justify="space-between">
                <Typography variant="h5" component="h2">
                    Global statistics
                </Typography>
                <Grid item>
                    <Typography variant="subtitle1">Global Uncertainty</Typography>
                    <Typography variant='h4'>{globalUncertainty}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1">Average Element Uncertainty</Typography>
                    <Typography variant='h4'>{averageUncertainty.toFixed(3)}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1">Collaborators</Typography>
                    <Typography variant='h4'>{collaboratorCount}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1">External Trust Personas</Typography>
                    <Typography variant='h4'>{externalTrustPersonaCount}</Typography>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
}
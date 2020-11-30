import React from "react";
import {Card, CardContent, Grid, Tooltip, Typography} from "@material-ui/core";

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
                    <Tooltip
                        title="The global uncertainty is the total amount of uncertainties in the entire collaborative process.">
                        <Typography variant="subtitle1">Global Uncertainty</Typography>
                    </Tooltip>
                    <Typography variant='h4'>{globalUncertainty}</Typography>
                </Grid>
                <Grid item>
                    <Tooltip
                        title="Average Element uncertainty is the global uncertainty value divided
                         by the amount of elements in the entire process.">
                        <Typography variant="subtitle1">Average Element Uncertainty</Typography>
                    </Tooltip>
                    <Typography variant='h4'>{averageUncertainty.toFixed(3)}</Typography>
                </Grid>
                <Grid item>
                    <Tooltip title="The amount of collaborators in the current process.">
                        <Typography variant="subtitle1">Collaborators</Typography>
                    </Tooltip>
                    <Typography variant='h4'>{collaboratorCount}</Typography>
                </Grid>
                <Grid item>
                    <Tooltip title="The amount of external trust personas in the current process.">
                        <Typography variant="subtitle1">External Trust Personas</Typography>
                    </Tooltip>
                    <Typography variant='h4'>{externalTrustPersonaCount}</Typography>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
}
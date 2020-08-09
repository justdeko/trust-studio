import {Button, Grid, Typography} from "@material-ui/core";
import React from "react";
import {useHistory} from "react-router-dom"


export default function FinalSection() {
    const history = useHistory()
    return (
        <Grid container spacing={3} direction="column" alignItems="center">
            <Typography paragraph={true} align="center" color="textPrimary" variant="h6">
                With all of that said, we hope you enjoy this application and have a nice time exploring the features.
            </Typography>
            <Grid item>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                        history.push("/dashboard")
                    }}>
                    Go to Dashboard
                </Button>
            </Grid>
        </Grid>
    )
}
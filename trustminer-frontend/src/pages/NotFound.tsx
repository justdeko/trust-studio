import React from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom"

export default function NotFound() {
    let history = useHistory()
    return (
        <Grid container
              style={{height: '100vh'}}
              direction="column"
              justify="center"
              spacing={3}
              alignItems="center">
            <Grid item>
                <Typography align="center" variant="h1">
                    404
                </Typography>
                <Typography align="center" component="h5" variant="h5">
                    Somebody should be fired for this. <br/>
                    Oh wait...
                </Typography>
            </Grid>
            <Grid item>
                <Button variant="contained" color="secondary" onClick={() => history.push("/")}>
                    Back to home
                </Button>
            </Grid>
        </Grid>
    )
}
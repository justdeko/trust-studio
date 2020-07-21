import React from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom"

export default function MissingTrustReportScreen() {
    const history = useHistory();

    function handleModelerRouteClick() {
        history.push("/modeler")
    }

    return (
        <Grid container
              style={{height: '80vh'}}
              direction="column"
              justify="center"
              alignItems="center">
            <Grid item>
                <Typography align="center" component="h5" variant="h5">
                    It looks like you haven't uploaded a bpmn file yet or the one you uploaded is faulty. <br/>
                    You can either upload a new one or click the button below to go model your own.
                </Typography>
            </Grid>
            <Grid item>
                <Button variant="contained" color="secondary" onClick={handleModelerRouteClick}>
                    Modeler
                </Button>
            </Grid>
        </Grid>
    )
}
import React from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";

export default function About() {
    let history = useHistory()
    return (
        <Grid container
              style={{height: '80vh'}}
              direction="column"
              justify="flex-start"
              alignItems="center">
            <Grid item>
                <img style={{height: "180px"}} alt="trust studio logo" src="/trust_logo.png"/>
            </Grid>
            <Grid item>
                <Typography align="center">
                    This project was created at the chair for Service-centric Networking (SNET) at TU Berlin and is
                    open-source.
                </Typography>
            </Grid>
            <Grid item>
                <Grid container direction="row">
                    <Button onClick={() => {
                        history.push("/impressum")
                    }}>
                        Impressum
                    </Button>
                    <Button onClick={() => {
                        history.push("/privacy-policy")
                    }}>
                        Privacy Policy
                    </Button>
                </Grid>
            </Grid>
            <Grid item>
                <Button variant="contained"
                        color="secondary"
                        onClick={() => window.open("https://github.com/justdeko/trust-studio", "_blank")}>
                    Source code
                </Button>
            </Grid>
            <Grid item style={{marginTop: "10%"}}>
                <Typography>Loading animations: See github readme</Typography>
            </Grid>
        </Grid>
    )
}
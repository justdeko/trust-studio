import React from "react";
import {Grid, Typography} from "@material-ui/core";

export default function About() {
    return (
        <Grid container
              style={{height: '80vh'}}
              direction="column"
              justify="flex-start"
              alignItems="center">
            <Grid item>
                <img style={{height: "180px"}} alt="trust studio logo" src="/trust_logo.png"/>
                <Typography align="center">
                    This project was created lorem ipsum dolor sit amet etc. etc.
                </Typography>
            </Grid>
        </Grid>
    )
}
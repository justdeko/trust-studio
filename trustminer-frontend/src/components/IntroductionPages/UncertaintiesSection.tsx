import React from "react";
import {Grid, Typography} from "@material-ui/core";


export default function UncertaintiesSection() {
    return (
        <Grid container style={{padding: "30px", marginRight: "10"}} direction="row">
            <Grid item xs={4}>
                <Grid container direction="column" alignItems="center">
                    <img style={{maxWidth: "80%"}} src="/introduction_pictures/component_types.png" alt="logo"/>
                    <Typography align="center" style={{marginTop: "20px"}} color="textPrimary">
                        Different components uncertainties could exist for.
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={8}>
                <Grid container spacing={3} direction="column">
                    <Typography paragraph={true} align="center" color="textPrimary" variant="h6">
                        Uncertainties are the other relevant topic to understand this application. Uncertainties are,
                        in comparison to trust, actually detectable and measurable.
                        The existence of uncertainties in a process is what requires the need for trust;
                        They make processes vulnerable and have a specific trust concern.
                    </Typography>
                    <Grid item>
                        <Typography color="textPrimary" variant="h4">
                            Uncertainty classification
                        </Typography>
                        <Typography display="block" color="textPrimary" variant="h6">
                            Uncertainties in our case consider of several parts, the first one being what component they
                            belong
                            to.
                            This could be anything from an activity, a gateway, or even a message flow. <br/>
                            This means we need to look through all of the elements to find all uncertainties.
                            Another important part is the trust concern. This is what describes the objective of this
                            uncertainty.
                            It could be anything from performance to integrity. For example: "Does the task execute
                            correctly?"
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography color="textPrimary" variant="h4">
                            The uncertainty model
                        </Typography>
                        <Typography color="textPrimary" display="block" variant="h6">
                            In conclusion, an uncertainty in our process contains the following information:<br/>
                            - The component it belongs to.<br/>
                            - The uncertainty root, for example data or organization<br/>
                            - The trust concern, for example integrity or confidentiality. <br/>
                            - The uncertainty perspective (data, functional or control flow)
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
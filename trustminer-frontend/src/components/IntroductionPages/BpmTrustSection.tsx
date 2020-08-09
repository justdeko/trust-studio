import React from "react";
import {Grid, Typography} from "@material-ui/core";

export default function BpmTrustSection() {
    return (
        <Grid container spacing={3} direction="column">
            <Typography paragraph={true} align="center" color="textPrimary" variant="h6">
                The two main concepts behind the entire process are the following:
            </Typography>
            <Grid item>
                <Typography color="textPrimary" variant="h4">
                    Collaborative Business Processes
                </Typography>
                <Typography display="block" color="textPrimary" variant="h6">
                    Collaborative business processes consist of multiple participants, depicted in pools,
                    who interact with each other.
                    This makes the business process decentralized and contain multiple "stakeholders".
                </Typography>
            </Grid>
            <Grid item>
                <Typography color="textPrimary" variant="h4">
                    Trust
                </Typography>
                <Typography color="textPrimary" display="block" variant="h6">
                    The concept of trust is by definition the "firm belief in the reliability, truth, or ability of
                    someone".
                    However in the instance of collaborative business processes it is
                    referring to the judgment of confidence in the process itself.
                    Trust is always subjective and non-quantifiable.
                </Typography>
            </Grid>
        </Grid>
    )
}
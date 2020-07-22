import {Button, Grid, Typography} from "@material-ui/core";
import React from "react";
import {Delete} from "@material-ui/icons";

export default function Settings() {

    return (
        <Grid style={{width: "100%"}} container>
            <Grid style={{width: "100%"}} item>
                <Grid style={{width: "100%"}} container direction="row" justify="space-between">
                    <Grid item>
                        <Typography variant="h6">
                            Delete all data
                        </Typography>
                        <Typography variant="subtitle1">
                            Deletes all data, including trust policies, the current bpmn and your uncertainty list.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => {
                                localStorage.clear()
                                window.location.reload()
                            }}
                            startIcon={<Delete/>}>
                            Delete
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
import {Button, Grid, Switch, Typography} from "@material-ui/core";
import React, {useState} from "react";
import {Delete} from "@material-ui/icons";
import {getNightMode, setNightMode} from "../util/ui_util";

export default function Settings() {
    const [nightModeOn, setNightModeOn] = useState(getNightMode())

    function changeNightMode() {
        setNightModeOn(prevState => {
            setNightMode(!prevState)
            window.location.reload()
            return !prevState
        })
    }

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
                <Grid style={{width: "100%"}} container direction="row" justify="space-between">
                    <Grid item>
                        <Typography variant="h6">
                            Night mode
                        </Typography>
                        <Typography variant="subtitle1">
                            Enables/disables Night mode.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Switch
                            checked={nightModeOn}
                            onChange={changeNightMode}
                            name="checkedA"
                            inputProps={{'aria-label': 'secondary checkbox'}}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
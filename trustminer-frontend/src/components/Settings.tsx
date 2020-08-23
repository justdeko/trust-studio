import {Button, Grid, Switch, Typography} from "@material-ui/core";
import React, {useState} from "react";
import {Delete} from "@material-ui/icons";
import {getNightMode, setNightMode} from "../util/ui_util";
import {useHistory} from "react-router-dom"
import {SURVEY_COMPLETED, TYPE_CLICK} from "../util/constants";
import {saveEvent} from "../util/survey_util";

export default function Settings() {
    const [nightModeOn, setNightModeOn] = useState(getNightMode())
    const history = useHistory()

    function changeNightMode() {
        setNightModeOn(prevState => {
            setNightMode(!prevState)
            saveEvent("night_mode_button", TYPE_CLICK, (!prevState).toString())
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
                                let completed = localStorage.getItem(SURVEY_COMPLETED)
                                localStorage.clear()
                                //TODO: uncomment this in prod
                                //persist completed survey even after deleting all data
                                /*if (completed === "true") {
                                    localStorage.setItem(SURVEY_COMPLETED, "true")
                                }*/
                                history.push("/")
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
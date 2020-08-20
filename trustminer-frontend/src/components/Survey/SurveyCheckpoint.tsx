import React from "react";
import {Grid, Typography} from "@material-ui/core";
import {surveyTexts} from "../../util/survey_util";
import {Autorenew, Check} from "@material-ui/icons";
import {green} from "@material-ui/core/colors";

interface CheckpointProps {
    index: number,
    completed: boolean,
}

export default function SurveyCheckpoint(props: CheckpointProps) {
    const {index, completed} = props
    return <>
        <Typography style={{marginBottom: "10px"}}>
            {surveyTexts[index]}
        </Typography>
        <Grid container alignItems="center" justify="space-evenly" direction="row">
            <Typography variant="button" display="block">
                {completed ? "COMPLETED" : "IN PROGRESS"}
            </Typography>
            {completed
                ? <Check style={{color: green[500]}}/>
                : <Autorenew color="secondary"/>
            }
        </Grid>
    </>
}
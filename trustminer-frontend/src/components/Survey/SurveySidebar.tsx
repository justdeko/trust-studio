import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import SurveyCheckpoint from "./SurveyCheckpoint";
import SurveyQuestion from "./SurveyQuestion";
import {Button, CircularProgress, Grid, Typography} from "@material-ui/core";
import {useSurveySidebarStyles} from "../../styles/survey-sidebar-styles";
import {deleteSurvey, saveEvent, savePublicIp, surveyPost} from "../../util/survey_util";
import {SURVEY_COMPLETED, SURVEY_ENABLED, TYPE_CLICK} from "../../util/constants";
import {useSnackbar} from "notistack";
import {useHistory} from "react-router-dom"

interface SidebarProps {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>,
    completedTasks: boolean[]
}

export default function SurveySidebar(props: SidebarProps) {
    const classes = useSurveySidebarStyles();
    const {open, setOpen, completedTasks} = props
    const [completedCount, setCompletedCount] = useState(0)
    const [answeredCount, setAnsweredCount] = useState(0)
    const [updatingData, setUpdatingData] = useState(false)

    let history = useHistory()

    const {enqueueSnackbar} = useSnackbar();

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        saveEvent("open_survey_sidebar", TYPE_CLICK, open.toString())
        setOpen(open);
    }

    async function submitSurvey() {
        setUpdatingData(true)
        await savePublicIp()
        surveyPost().then((response) => {
            console.log(response)
            if (response && response.status === 200) {
                let data = response.data
                localStorage.setItem(SURVEY_ENABLED, "false")
                localStorage.setItem(SURVEY_COMPLETED, "true")
                enqueueSnackbar("That's all! Now time to answer some last questions.", {variant: 'success'})
                window.location.replace(process.env.REACT_APP_SURVEY_URL + data["survey_id"])
                deleteSurvey()
                setUpdatingData(false)
                history.push("/")
            } else {
                errorSnackbar()
            }
        }, (error) => {
            console.log(error)
            errorSnackbar()
        })
    }

    function errorSnackbar() {
        setUpdatingData(false)
        enqueueSnackbar("Something went wrong when sending the survey. Maybe try again?", {variant: 'error'})
    }

    useEffect(() => {
        let amount = completedTasks.filter(completed => completed).length
        setCompletedCount(answeredCount + amount)
    }, [completedTasks, answeredCount])

    const surveyContent = () => (
        <div
            className={classes.list}
            role="presentation"
        >
            <Typography align="center" variant="h4">Survey Tasks</Typography>
            <div className={classes.item}>
                <SurveyCheckpoint completed={completedTasks[0]} index={0}/>
            </div>
            <Divider/>
            {completedCount > 0 ?
                <>
                    <div className={classes.item}>
                        <SurveyCheckpoint completed={completedTasks[1]} index={1}/>
                    </div>
                    <Divider/>
                </>
                : undefined
            }
            {completedCount > 1 ?
                <>
                    <div className={classes.item}>
                        <SurveyQuestion
                            correctAnswer={41}
                            answeredCount={answeredCount}
                            index={2}
                            setCompletedCount={setAnsweredCount}
                        />
                    </div>
                    <Divider/>
                </>
                : undefined
            }
            {completedCount > 2 ?
                <>
                    <div className={classes.item}>
                        <SurveyQuestion
                            correctAnswer={6}
                            index={3}
                            answeredCount={answeredCount}
                            setCompletedCount={setAnsweredCount}
                        />
                    </div>
                    <Divider/>
                </>
                : undefined
            }
            {completedCount > 3 ?
                <>
                    <div className={classes.item}>
                        <SurveyCheckpoint completed={completedTasks[2]} index={4}/>
                    </div>
                    <Divider/>
                </>
                : undefined
            }
            {completedCount > 4 ?
                <Grid container alignItems="center" justify="center" className={classes.finalButton}>
                    {updatingData ?
                        <CircularProgress/> :
                        <Button onClick={submitSurvey} color="primary" variant="contained">
                            Finish Study
                        </Button>
                    }
                </Grid> : undefined
            }
        </div>
    );

    return (
        <div>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                {surveyContent()}
            </Drawer>
        </div>
    );
}

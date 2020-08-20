import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import SurveyCheckpoint from "./SurveyCheckpoint";
import SurveyQuestion from "./SurveyQuestion";
import {Button, Grid, Typography} from "@material-ui/core";
import {useSurveySidebarStyles} from "../../styles/survey-sidebar-styles";
import {surveyPost} from "../../util/survey_util";

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
        setOpen(open);
    }

    useEffect(() => {
        let amount = completedTasks.filter(completed => completed).length
        setCompletedCount(answeredCount + amount)
    }, [completedTasks])

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
                        <SurveyQuestion correctAnswer={25} index={2} setCompletedCount={setAnsweredCount}/>
                    </div>
                    <Divider/>
                </>
                : undefined
            }
            {completedCount > 2 ?
                <>
                    <div className={classes.item}>
                        <SurveyQuestion correctAnswer={2} index={3} setCompletedCount={setAnsweredCount}/>
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
                    <Button onClick={surveyPost} color="primary" variant="contained">
                        Finish Survey
                    </Button>
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

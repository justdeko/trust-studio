import React, {Dispatch, SetStateAction} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import SurveyCheckpoint from "./SurveyCheckpoint";
import SurveyQuestion from "./SurveyQuestion";

const useStyles = makeStyles({
    list: {
        width: 250,
    }
});

interface SidebarProps {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function SurveySidebar(props: SidebarProps) {
    const classes = useStyles();
    const {open, setOpen} = props

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
    };

    const surveyContent = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <SurveyCheckpoint/>
            <Divider/>
            <SurveyCheckpoint/>
            <Divider/>
            <SurveyQuestion/>
            <Divider/>
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

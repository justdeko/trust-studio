import React, {useState} from "react";
import {Button, Container, CssBaseline, Fade, Grid, Typography} from "@material-ui/core";
import {useFrontPageStyles} from "../styles/frontpage-styles";
import {useHistory} from "react-router-dom";
import {getFirstTime} from "../util/tour_util";
import FirstTimeDialog from "../components/Tour/FirstTimeDialog";
import {startTimer} from "../util/survey_util";
import {INTRO, SURVEY_ENABLED} from "../util/constants";

export default function FrontPage() {
    const classes = useFrontPageStyles();
    const history = useHistory();
    const [firstTimeDialogOpen, setFirstTimeDialogOpen] = useState(false)
    const [visible, setVisible] = useState(true)

    const redirect = () => {
        if (getFirstTime()) {
            setFirstTimeDialogOpen(true)
        } else {
            history.push('/analysis')
        }
    }

    function startIntro() {
        history.push("/introduction")
    }

    function startTour() {
        setFirstTimeDialogOpen(false)
        setVisible(false)
    }

    function cancelTour() {
        history.push("/analysis")
    }

    return (
        <>
            <CssBaseline/>
            <div className={classes.content}>
                <Fade in={visible} onExited={startIntro} timeout={1000}>
                    <Grid container
                          style={{height: '100vh'}}
                          direction="column"
                          justify="center"
                          alignItems="center">
                        <Grid container alignItems='center' direction='column'>
                            <img className={classes.image} src="/full_logo_white_color.png" alt="logo"/>
                        </Grid>
                        <Container maxWidth="sm">
                            <Typography variant="h5" align="center" className={classes.text} color="textSecondary"
                                        paragraph>
                                Trust Studio is a tool for evaluating and analysing trust and uncertainties in business
                                process models annotated with BPMN.
                            </Typography>
                            <div className={classes.buttons}>
                                <Grid container spacing={2} justify="center">
                                    <Grid item>
                                        <Button variant="contained"
                                                color="secondary"
                                                onClick={redirect}>
                                            Get started
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button className={classes.signInButton} variant="outlined"
                                                onClick={() => {
                                                    history.push('/introduction')
                                                    localStorage.setItem(SURVEY_ENABLED, "true")
                                                    startTimer(INTRO)
                                                }}>
                                            Start Survey
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </Grid>
                </Fade>
                <FirstTimeDialog dialogOpen={firstTimeDialogOpen}
                                 setDialogOpen={setFirstTimeDialogOpen}
                                 cancelTour={cancelTour}
                                 startTour={startTour}/>
            </div>

            <footer className={classes.footer}>
                <Typography className={classes.text}
                            variant="subtitle1"
                            align="center"
                            color="textSecondary"
                            component="p">
                    Copyright © SNET, Denis Koljada, Marcel Müller
                </Typography>
            </footer>
        </>
    )
}
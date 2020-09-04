import React, {useState} from "react";
import {Button, Container, CssBaseline, Fade, Grid, Link, Typography} from "@material-ui/core";
import {useFrontPageStyles} from "../styles/frontpage-styles";
import {useHistory} from "react-router-dom";
import {getFirstTime} from "../util/tour_util";
import FirstTimeDialog from "../components/Tour/FirstTimeDialog";
import {startTimer} from "../util/survey_util";
import {INTRO, SURVEY_COMPLETED, SURVEY_ENABLED} from "../util/constants";
import PrivacyDialog from "../components/PrivacyDialog";

export default function FrontPage() {
    const classes = useFrontPageStyles();
    const history = useHistory();
    const [firstTimeDialogOpen, setFirstTimeDialogOpen] = useState(false)
    const [privacyDialogOpen, setPrivacyDialogOpen] = useState(false)
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

    function startStudy() {
        startTour()
        localStorage.setItem(SURVEY_ENABLED, "true")
        startTimer(INTRO)
    }

    return (
        <>
            <CssBaseline/>
            <div className={visible ? classes.content : classes.contentFaded}>
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
                                Trust Studio is a tool for evaluating and analyzing trust and uncertainties in business
                                process models annotated with BPMN.
                            </Typography>
                            <div className={classes.buttons}>
                                <Grid container spacing={2} justify="center">
                                    {!(localStorage.getItem(SURVEY_COMPLETED) === "true") ?
                                        <Grid item>
                                            <Button variant="contained" color="secondary"
                                                    onClick={() => {
                                                        setPrivacyDialogOpen(true)
                                                    }}>
                                                Begin Study
                                            </Button>
                                        </Grid> : undefined
                                    }
                                    <Grid item>
                                        <Button className={classes.signInButton}
                                                variant="outlined"
                                                onClick={redirect}>
                                            Get started
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
                <PrivacyDialog dialogOpen={privacyDialogOpen}
                               setDialogOpen={setPrivacyDialogOpen}
                               startStudy={startStudy}/>
            </div>
            <footer className={classes.footer}>
                <Grid container direction="row" justify="space-between" alignItems="center"
                      style={{paddingInlineStart: "20px", paddingInlineEnd: "20px"}}>
                    <Grid item>
                        <img className={classes.snetImage} src="/snetlogo.png" alt="snet-logo"/>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.text}
                                    variant="subtitle1"
                                    align="center"
                                    color="textSecondary"
                                    component="p">
                            Copyright © SNET, Denis Koljada, Marcel Müller | <Link color="secondary" onClick={() => {
                            history.push("/impressum")
                        }}>Impressum</Link> | <Link color="secondary" onClick={() => {
                            history.push("privacy-policy")
                        }}>Privacy Policy</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </footer>
        </>
    )
}
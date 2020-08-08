import React, {useState} from "react";
import {introductionTheme, useIntroductionStyles} from "../styles/introduction-styles";
import {Button, Fade, Grid, MobileStepper, MuiThemeProvider, Typography} from "@material-ui/core";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";
import TrustMiningSteps from "../components/IntroductionPages/TrustMiningSteps";

function getIntroductionPage(step: number) {
    switch (step) {
        case 0:
            return {
                title: "Introduction",
                content: <div/>
            }
        case 1:
            return {
                title: "BPM and Trust",
                content: <div/>
            }
        case 2:
            return {
                title: "Uncertainties",
                content: <TrustMiningSteps/>
            }
        case 3:
            return {
                title: "Trust Mining",
                content: <TrustMiningSteps/>
            }
        case 4:
            return {
                title: "Final Words",
                content: <div/>
            }
        default:
            return {
                title: "Unknown step",
                content: <div/>
            }
    }
}

const FADE_DURATION = 300

export default function Introduction() {
    const classes = useIntroductionStyles()
    const [contentVisible, setContentVisible] = useState(true)
    const [currentStep, setCurrentStep] = React.useState(0);

    function handleNext() {
        setContentVisible(false)
        setTimeout(() => setCurrentStep(currentStep => currentStep + 1), FADE_DURATION)
    }

    function handleBack() {
        setContentVisible(false)
        setTimeout(() => setCurrentStep(currentStep => currentStep - 1), FADE_DURATION)
    }

    function fadeBackIn() {
        setContentVisible(true)
    }

    return (
        <MuiThemeProvider theme={introductionTheme}>
            <div className={classes.content}>
                <Fade in={contentVisible} onExited={fadeBackIn} timeout={FADE_DURATION}>
                    <Grid container direction="column">
                        <Typography variant="h2" color="textPrimary" style={{margin: 20}}>
                            {getIntroductionPage(currentStep).title}
                        </Typography>
                        {getIntroductionPage(currentStep).content}
                    </Grid>
                </Fade>
                <div style={{bottom: '0', width: '100%', position: 'fixed'}}>
                    <MobileStepper
                        variant="progress"
                        steps={5}
                        position="static"
                        activeStep={currentStep}
                        nextButton={
                            <Button size="small" onClick={handleNext} disabled={currentStep === 4}>
                                Next
                                <KeyboardArrowRight/>
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={currentStep === 0}>
                                <KeyboardArrowLeft/>
                                Back
                            </Button>
                        }
                    />
                </div>
            </div>
        </MuiThemeProvider>
    )
}
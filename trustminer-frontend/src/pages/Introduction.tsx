import React, {useState} from "react";
import {useIntroductionStyles} from "../styles/introduction-styles";
import {Button, Container, Fade, Grid, MobileStepper, Typography} from "@material-ui/core";
import {KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";
import TrustMiningSection from "../components/IntroductionPages/TrustMiningSection";
import UncertaintiesSection from "../components/IntroductionPages/UncertaintiesSection";
import BpmTrustSection from "../components/IntroductionPages/BpmTrustSection";
import FinalSection from "../components/IntroductionPages/FinalSection";
import {saveEvent} from "../util/survey_util";
import {TYPE_CLICK} from "../util/constants";

const description = (text: string) =>
    <Typography align="center" color="textPrimary" variant="h6" style={{whiteSpace: 'pre-line', margin: '10'}}>
        {text}
    </Typography>

function getIntroductionPage(step: number) {
    switch (step) {
        case 0:
            return {
                title: "Introduction",
                content: description("Welcome to Trust Studio!\nThis is an application for mining and analysing trust in business processes. " +
                    "This introduction will give you a quick overview of the relevant topics, " +
                    "related to trust and uncertainties in business processes.\n" +
                    "The app was developed with help from the SNET chair of the technical university berlin and is an open-source project.")
            }
        case 1:
            return {
                title: "BPM and Trust",
                content: <BpmTrustSection/>
            }
        case 2:
            return {
                title: "Uncertainties",
                content: <UncertaintiesSection/>
            }
        case 3:
            return {
                title: "Trust Mining",
                content: <TrustMiningSection/>
            }
        case 4:
            return {
                title: "Final Words",
                content: <FinalSection/>
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
        saveEvent("intro_next_button", TYPE_CLICK, (currentStep + 1).toString())
        setTimeout(() => setCurrentStep(currentStep => currentStep + 1), FADE_DURATION)
    }

    function handleBack() {
        setContentVisible(false)
        saveEvent("intro_back_button", TYPE_CLICK, (currentStep - 1).toString())
        setTimeout(() => setCurrentStep(currentStep => currentStep - 1), FADE_DURATION)
    }

    function fadeBackIn() {
        setContentVisible(true)
    }

    return (
        <div className={classes.content}>
            <Fade in={contentVisible} onExited={fadeBackIn} timeout={FADE_DURATION}>
                <Grid container direction="column">
                    <Typography variant="h2" color="textPrimary" style={{margin: 20}}>
                        {getIntroductionPage(currentStep).title}
                    </Typography>
                    <Container maxWidth={[0, 3, 4].includes(currentStep) ? "md" : "xl"}>
                        {getIntroductionPage(currentStep).content}
                    </Container>
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
    )
}
import {Box, Paper, Step, StepContent, StepLabel, Stepper, Typography} from "@material-ui/core";
import React, {useEffect} from "react";
import Button from "@material-ui/core/Button";
import {useTrustMiningStepsStyles} from "../../styles/trust-mining-steps-styles";
import {saveEvent} from "../../util/survey_util";
import {TYPE_CLICK} from "../../util/constants";


function getSteps() {
    return ['Uncertainty Identification', 'Dependency Analysis', 'Uncertainty Aggregation', 'Relevancy Analysis'];
}

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return `This step identifies general relevant uncertainties for each process component. 
            This is done by adding uncertainties into the model based on the type of a process component, 
            iterating through all of them. For example, for every message flow between different companies, 
            privacy is an important trust concern.`;
        case 1:
            return 'Step 2 finds functional relationships within the model between collaborators, ' +
                'both from a message flow and a data object perspective. For example, ' +
                'if one collaborator consumes data which another one produces, this is a data dependency.';
        case 2:
            return `Step 3 aggregates all of the data about uncertainties in relation to each collaborator and 
            calculate relevant statistics. Examples are for that global uncertainty and relative lane uncertainties. 
            The application lets you find out more about these metrics by hovering over the metric title.`;
        case 3:
            return 'The last step adds "perspective" to the view on trust. For example, ' +
                'if you trust all communication in a process, because everybody is using encrypted communication, ' +
                'the confidentiality of messages is not relevant for you anymore. ' +
                'This step reduces the general trust issues and gives you a list of trust concerns you really have ' +
                'to worry about. Therefore, the user defines a trust persona with these trust policies.';
        default:
            return 'You went a bit too far. Maybe go back one or a few steps?';
    }
}

const StepsBorderProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    style: {width: '100%'},
};

export default function TrustMiningSection() {
    const classes = useTrustMiningStepsStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)
    const handleReset = () => setActiveStep(0)

    useEffect(() => {
        saveEvent("intro_mining_step", TYPE_CLICK, activeStep.toString())
    }, [activeStep])

    return (
        <div className={classes.root}>
            <Typography paragraph={true} align="center" color="textPrimary" variant="h6">
                The trust mining process is the actual computation that lets you see relevant data about the current
                business process.
                Below you can see a short summary of each step:
            </Typography>
            <Box borderRadius={16} {...StepsBorderProps}>
                <Stepper style={{borderRadius: '30px'}} activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            <StepContent>
                                <Typography>{getStepContent(index)}</Typography>
                                <div className={classes.actionsContainer}>
                                    <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className={classes.button}
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} style={{borderRadius: '30px'}} className={classes.resetContainer}>
                        <Typography>All steps are completed and a trust report is now generated.</Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Back to the beginning
                        </Button>
                    </Paper>
                )}
            </Box>
        </div>
    )
}
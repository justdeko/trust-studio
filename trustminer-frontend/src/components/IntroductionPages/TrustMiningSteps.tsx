import {Paper, Step, StepContent, StepLabel, Stepper, Typography} from "@material-ui/core";
import React from "react";
import Button from "@material-ui/core/Button";
import {useTrustMiningStepsStyles} from "../../styles/trust-mining-steps-styles";


function getSteps() {
    return ['Uncertainty Identification', 'Dependency Analysis', 'Uncertainty Aggregation', 'Relevancy Analysis'];
}

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return `Identify uncertainties at every process component. 
            This is done by adding uncertainties into the model based on the type of a process component, 
            iterating through all of them. This step is optional, in case the bpmn model already contains uncertainties.`;
        case 1:
            return 'Find functional relationships within the model between collaborators, both from a message flow and ' +
                'a data object perspective.';
        case 2:
            return `Aggregate all of the data about uncertainties in relation to each collaborator and calculate 
            relevant statistics, for example global uncertainty, relative lane uncertainties, etc`;
        case 3:
            return 'Identify all relevant (critical) uncertainties in relation to each trust persona,' +
                ' both external and internal.';
        default:
            return 'Unknown step';
    }
}

export default function TrustMiningSteps() {
    const classes = useTrustMiningStepsStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)
    const handleReset = () => setActiveStep(0)

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
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
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>All steps are completed and a trust report is now generated.</Typography>
                    <Button onClick={handleReset} className={classes.button}>
                        Back to the beginning
                    </Button>
                </Paper>
            )}
        </div>
    )
}
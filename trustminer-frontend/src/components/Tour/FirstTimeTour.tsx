import Tour from "reactour";
import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Button, Link, useTheme} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {setFirstTime} from "../../util/tour_util";
import {saveEvent, saveTime, startTimer, surveyEnabled} from "../../util/survey_util";
import {CURRENT_BPMN, QUESTION_1, TOUR, TOUR_COMPLETED, TYPE_NAVIGATE} from "../../util/constants";
import {introductionBpmn} from "../../resources/introductionBpmn";

interface TourProps {
    tourOpen: boolean,
    setTourOpen: Dispatch<SetStateAction<boolean>>,
    setSurveySidebarOpen: Dispatch<SetStateAction<boolean>>,

    callWithUncertaintyGeneration(generate: boolean, isUpload: boolean, loadingScreen: boolean): void
}

export default function FirstTimeTour(props: TourProps) {
    const {tourOpen, setTourOpen, setSurveySidebarOpen, callWithUncertaintyGeneration} = props
    const [reportGenerated, setReportGenerated] = useState(false)
    let history = useHistory()

    useEffect(() => {
        if (surveyEnabled()) {
            startTimer(TOUR)
        }
    }, [])

    const pushToTarget = (target: string) => {
        if (history.location.pathname !== target) {
            history.push(target)
        }
    }

    const setDefaultBpmn = () => {
        if (!reportGenerated) {
            localStorage.setItem(CURRENT_BPMN, introductionBpmn)
            callWithUncertaintyGeneration(true, true, true)
            setReportGenerated(true)
        }
    }

    function closeTour() {
        if (surveyEnabled()) {
            saveTime(TOUR)
            setSurveySidebarOpen(true)
            startTimer(QUESTION_1)
        }
        setTourOpen(false)
        localStorage.setItem(TOUR_COMPLETED, "true")
        setFirstTime(false)
    }

    const tourConfig = [
        {
            selector: '[data-tour="welcome"]',
            content: `Welcome to Trust Studio! This is a tool for analyzing trust and uncertainties in collaborative business processes. I’ll take you through a quick walkthrough of the app.`
        },
        {
            selector: '[data-tour="upload"]',
            content: `This button lets you upload the BPMN file you want to analyze. In the study you are participating in, we are already doing this for you.`,
            action: () => setDefaultBpmn
        },

        {
            selector: '[data-tour="modeler"]',
            content: `In the modeler you can edit and export your BPMN file with annotated uncertainties.`,
            action: () => pushToTarget("/modeler")
        },
        {
            selector: '[data-tour="uncertainties"]',
            content: `In the uncertainties page you can modify all of the uncertainties, add new ones and remove ones you consider irrelevant. You can also export the table or import your own.`,
            action: () => pushToTarget("/uncertainty-list")
        },
        {
            selector: '[data-tour="trust-policies"]',
            content: `On this page you can configure trust policies about trusted process elements from the perspective of a specific trust persona. You can also add external trust personas.`,
            action: () => pushToTarget("/trust-policies")
        },
        {
            selector: '[data-tour="analysis"]',
            content: `The analysis page displays all relevant information about the status of uncertainties and trust.`,
            action: () => pushToTarget("/analysis")
        },
        {
            selector: '[data-tour="perspective"]',
            content: 'This dropdown menu lets you select the current perspective. A general view is the default. There are also collaborator and external perspectives. More on that later.'
        },
        {
            selector: '[data-tour="relationship-analysis"]',
            content: `This graph displays the relationships of collaborators between each other, both from a data and a message flow perspective.`,
            action: () => pushToTarget("/analysis")
        },
        {
            selector: '[data-tour="uncertainty-chart"]',
            content: `The uncertainty chart shows how uncertainties are distributed between collaborators.`,
            action: () => pushToTarget("/analysis")
        },
        {
            selector: '[data-tour="stats"]',
            content: `Here are some general statistics about uncertainties and trust.`,
            action: () => pushToTarget("/analysis")
        },
        {
            selector: '[data-tour="collab-section"]',
            content: `The collaborator section displays information about uncertainties and trust from the perspective of the selected collaborator.`,
            action: () => pushToTarget("/analysis")
        },
        {
            selector: '[data-tour="final"]',
            content: () => (
                <div>
                    This concludes our little tour. If you want more info about the project, check out our <Link
                    color="secondary" href="https://github.com/justdeko/trust-studio">Github Page</Link>. <br/>
                    <Button onClick={closeTour}>Finish Tour</Button>
                </div>
            ),
        }
    ]
    const theme = useTheme();

    return <Tour isOpen={tourOpen}
                 steps={tourConfig}
                 rounded={10}
                 showCloseButton={false}
                 disableInteraction={true}
                 accentColor={theme.palette.secondary.light}
                 getCurrentStep={curr => saveEvent("tour_step", TYPE_NAVIGATE, curr.toString())}
                 onRequestClose={() => {
                     setTourOpen(true)

                 }}/>
}
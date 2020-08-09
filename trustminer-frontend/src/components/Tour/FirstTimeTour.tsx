import Tour from "reactour";
import React, {Dispatch, SetStateAction} from "react";
import {Link, useTheme} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {setFirstTime} from "../../util/tour_util";

interface TourProps {
    tourOpen: boolean,
    setTourOpen: Dispatch<SetStateAction<boolean>>
}

export default function FirstTimeTour(props: TourProps) {
    const {tourOpen, setTourOpen} = props
    let history = useHistory()
    // TODO: fix tour error when routing to analysis
    const tourConfig = [
        {
            selector: '[data-tour="welcome"]',
            content: `Welcome to Trust Studio!. This is a tool for analysing trust and uncertainties in collaborative business processes. I'll take you through a quick walkthrough of the app.`
        },
        {
            selector: '[data-tour="upload"]',
            content: `Let's start by uploading a new bpmn file.`
        },
        {
            selector: '[data-tour="analysis"]',
            content: `The analysis page displays all relevant information about the status of uncertainties and trust.`,
            action: () => history.push("/analysis")
        },
        {
            selector: '[data-tour="perspective"]',
            content: 'This dropdown menu lets you select the current perspective. A general view is the default, there are also collaborator and external perspectives. More on that later.'
        },
        {
            selector: '[data-tour="relationship-analysis"]',
            content: `This graph displays the relationships of collaborators between each other, both from a data and a message flow perspective`,
            action: () => history.push("/analysis")
        },
        {
            selector: '[data-tour="uncertainty-chart"]',
            content: `The uncertainty chart shows how uncertainties are distributed between collaborators.`,
            action: () => history.push("/analysis")
        },
        {
            selector: '[data-tour="stats"]',
            content: `Here are some general statistics about uncertainties and trust.`,
            action: () => history.push("/analysis")
        },
        {
            selector: '[data-tour="collab-section"]',
            content: `The collaborator section displays information about uncertainties and trust from the perspective of the selected collaborator.`,
            action: () => history.push("/analysis")
        },
        {
            selector: '[data-tour="modeler"]',
            content: `In the modeler you can edit and even export your uploaded bpmn file.`,
            action: () => history.push("/modeler")
        },
        {
            selector: '[data-tour="trust-policies"]',
            content: `On this page you can configure trust policies about trusted process elements from the perspective of a specific trust persona. You can also add external trust personas.`,
            action: () => history.push("/trust-policies")
        },
        {
            selector: '[data-tour="uncertainties"]',
            content: `In the uncertainties page you can modify all of the uncertainties, add new ones and remove ones you consider irrelevant. You can also export the table or import your own.`,
            action: () => history.push("/uncertainty-list")
        },
        {
            selector: '[data-tour="final"]',
            content: () => (
                <div>
                    This concludes our little tour. If you want more info about the project, check out our <Link
                    color="secondary" href="https://github.com/justdeko/trustminer">Github Page</Link>.
                </div>
            ),
            action: () => setFirstTime(false)
        }
    ]
    const theme = useTheme();

    return <Tour isOpen={tourOpen}
                 steps={tourConfig}
                 rounded={10}
                 accentColor={theme.palette.secondary.light}
                 onRequestClose={() => setTourOpen(false)}/>
}
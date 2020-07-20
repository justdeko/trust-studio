import React, {useEffect, useState} from "react";
import {TrustReport} from "../../../model/TrustReport";
import {Grid} from "@material-ui/core";
import CollaboratorSelector from "./CollaboratorSelector";
import {Collaborator} from "../../../model/Collaborator";
import UncertaintyStats from "./UncertaintyStats";
import UncertaintyDependencies from "./UncertaintyDependencies";
import TrustConcernChart from "./TrustConcernChart";
import {mapToTrustConcernChartData, mapToTrustIssuesChartData} from "../../../util/chart_util";
import TrustIssuesChart from "./TrustIssuesChart";

interface CollaboratorSectionProps {
    trustReport: TrustReport
}

export default function CollaboratorSection(props: CollaboratorSectionProps) {
    const {trustReport} = props
    const [selectedCollaboratorName, setSelectedCollaboratorName] = useState<string>(trustReport.collaborators[0].name)
    const [selectedCollaborator, setSelectedCollaborator] = useState<Collaborator>(trustReport.collaborators[0])
    const [collaboratorNames, setCollaboratorNames] =
        useState<string[]>(trustReport.collaborators.map(collaborator => collaborator.name))

    useEffect(() => {
        let collaborator = trustReport.collaborators.find(collaborator => collaborator.name == selectedCollaboratorName)
        if (collaborator) {
            setSelectedCollaborator(collaborator)
        }
    }, [selectedCollaboratorName])

    return (
        <div>
            <CollaboratorSelector collaboratorNames={collaboratorNames} setSelected={setSelectedCollaboratorName}/>
            <Grid justify="space-between" alignItems="stretch" container spacing={2}>
                <Grid item xs>
                    <UncertaintyStats lu={selectedCollaborator.laneUncertainty}
                                      rlu={selectedCollaborator.relativeLanceUncertainty}
                                      lub={selectedCollaborator.laneUncertaintyBalance}/>
                </Grid>

                <Grid item>
                    <TrustConcernChart chartData={mapToTrustConcernChartData(selectedCollaborator)}/>
                </Grid>
                <Grid item xs>
                    <UncertaintyDependencies dd={selectedCollaborator.dataInDegree}
                                             di={selectedCollaborator.dataOutDegree}
                                             md={selectedCollaborator.messageInDegree}
                                             mi={selectedCollaborator.messageOutDegree}/>
                </Grid>
                <Grid item>
                    <TrustIssuesChart chartData={mapToTrustIssuesChartData(selectedCollaborator.trustIssues)}/>
                </Grid>
            </Grid>
        </div>
    )
}
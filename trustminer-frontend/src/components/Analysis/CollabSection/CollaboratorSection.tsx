import React, {useEffect, useState} from "react";
import {TrustReport} from "../../../model/TrustReport";
import {Grid} from "@material-ui/core";
import CollaboratorSelector from "./CollaboratorSelector";
import {Collaborator} from "../../../model/Collaborator";
import UncertaintyStats from "./UncertaintyStats";
import UncertaintyDependencies from "./UncertaintyDependencies";
import TrustConcernChart from "./TrustConcernChart";
import {mapToTrustConcernChartData} from "../../../util/chart_util";

interface CollaboratorSectionProps {
    trustReport: TrustReport
}

export default function CollaboratorSection(props: CollaboratorSectionProps) {
    const {trustReport} = props
    const [selectedCollaboratorName, setSelectedCollaboratorName] = useState<string>(trustReport.collaborators[0].name)
    const [selCollab, setSelectedCollaborator] = useState<Collaborator>(trustReport.collaborators[0])
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
            <Grid alignItems="stretch" container spacing={2}>
                <Grid item>
                    <UncertaintyStats lu={selCollab.laneUncertainty}
                                      rlu={selCollab.relativeLanceUncertainty}
                                      lub={selCollab.laneUncertaintyBalance}/>
                </Grid>

                <Grid item>
                    <TrustConcernChart chartData={mapToTrustConcernChartData(selCollab)}/>
                </Grid>
                <Grid item>
                    <UncertaintyDependencies dd={selCollab.dataInDegree} di={selCollab.dataOutDegree}
                                             md={selCollab.messageInDegree} mi={selCollab.messageOutDegree}/>
                </Grid>
            </Grid>
        </div>
    )
}
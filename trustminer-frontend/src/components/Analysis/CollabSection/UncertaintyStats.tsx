import React, {useEffect, useState} from "react";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import CollaboratorSelector from "./CollaboratorSelector";
import {Collaborator} from "../../../model/Collaborator";
import {mapToCollaboratorNames} from "../../../util/miner_util";

interface UncertaintyStatsProps {
    collaborators: Collaborator[]
}

export default function UncertaintyStats(props: UncertaintyStatsProps) {
    const {collaborators} = props
    const [selected, setSelected] = useState(mapToCollaboratorNames(collaborators)[0])
    const [lu, setLu] = useState(0)
    const [rlu, setRlu] = useState(0)
    const [lub, setLub] = useState(0)

    useEffect(() => {
        const relevantCollaborator = collaborators.filter(collaborator => collaborator.name === selected)[0]
        setLu(relevantCollaborator.laneUncertainty)
        setRlu(relevantCollaborator.relativeLanceUncertainty)
        setLub(relevantCollaborator.laneUncertaintyBalance)
    }, [selected])
    return <Card style={{height: '100%'}}>
        <CardContent>
            <Grid container justify="space-between" alignItems="center" direction="row">
                <Typography variant="h5" component="h2">
                    Uncertainty Statistics
                </Typography>
                <CollaboratorSelector
                    setSelected={setSelected}
                    collaboratorNames={mapToCollaboratorNames(collaborators)}/>
            </Grid>
            <Typography variant="subtitle1">
                Lane Uncertainty: {lu}
            </Typography>
            <Typography variant="subtitle1">
                Relative Lane Uncertainty: {rlu.toFixed(3)}
            </Typography>
            <Typography variant="subtitle1">
                Lane Uncertainty Balance: {lub.toFixed(3)}
            </Typography>
        </CardContent>
    </Card>
}
import React, {useEffect, useState} from "react";
import TrustPersonaSelector from "./TrustPersonaSelector";
import TrustPoliciesTable from "./TrustPoliciesTable";
import TrustPersonaEdit from "./TrustPersonaEdit";
import {Grid} from "@material-ui/core";


export default function TrustPolicies() {
    const [trustPersonas, setTrustPersonas] = useState<string[]>([])
    const [selectedTrustPersona, setSelectedTrustPersona] = useState("")

    useEffect(() => {
        /*getCollaborators().then(collaborators => {
            let names = collaborators.map(collaborator => collaborator.name)
            setTrustPersonas(names)
            setSelectedTrustPersona(names[0])
        })*/ //TODO
    }, [])

    return (
        <div>
            <Grid container
                  spacing={2}
                  justify="flex-start"
                  alignItems="center"
                  direction="row">
                <Grid item>
                    <TrustPersonaSelector personas={trustPersonas} setSelected={setSelectedTrustPersona}/>
                </Grid>
                <Grid item>
                    <TrustPersonaEdit personas={trustPersonas} setPersonas={setTrustPersonas}/>
                </Grid>
            </Grid>
            <TrustPoliciesTable trustPersona={selectedTrustPersona}/>
        </div>
    )
}
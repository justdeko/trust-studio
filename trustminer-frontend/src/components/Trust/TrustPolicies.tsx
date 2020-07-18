import React, {useEffect, useState} from "react";
import TrustPersonaSelector from "./TrustPersonaSelector";
import TrustPoliciesTable from "./TrustPoliciesTable";
import TrustPersonaEdit from "./TrustPersonaEdit";
import {Grid} from "@material-ui/core";
import {collaboratorNames, externalTrustPersonaNames} from "../../util/miner_util";


export default function TrustPolicies() {
    const [trustPersonas, setTrustPersonas] = useState<string[]>([])
    const [selectedTrustPersona, setSelectedTrustPersona] = useState("")

    useEffect(() => {
        collaboratorNames().then(names => {
            setTrustPersonas(names.concat(externalTrustPersonaNames()))
            setSelectedTrustPersona(names[0])
        })
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
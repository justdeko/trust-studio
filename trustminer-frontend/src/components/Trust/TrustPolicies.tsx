import React, {useEffect, useState} from "react";
import TrustPersonaSelector from "./TrustPersonaSelector";
import TrustPoliciesTable from "./TrustPoliciesTable";
import TrustPersonaEdit from "./TrustPersonaEdit";
import {Grid} from "@material-ui/core";
import {collaboratorNames, externalTrustPersonaNames} from "../../util/miner_util";

interface PoliciesProps {
    recomputeTrustReport?: () => void
}

export default function TrustPolicies(props: PoliciesProps) {
    const {recomputeTrustReport} = props
    const [trustPersonas, setTrustPersonas] = useState<string[]>([])
    const [selectedTrustPersona, setSelectedTrustPersona] = useState("")

    useEffect(() => {
        collaboratorNames().then(names => {
            let personaArray = names.concat(externalTrustPersonaNames())
            setTrustPersonas(personaArray)
            setSelectedTrustPersona(personaArray[0])
        })
    }, [])

    return (
        <div data-tour="trust-policies">
            <Grid container
                  spacing={2}
                  justify="flex-start"
                  alignItems="center"
                  direction="row">
                <Grid item>
                    {trustPersonas.length > 0 ?
                        <TrustPersonaSelector personas={trustPersonas} setSelected={setSelectedTrustPersona}/>
                        : <div/>
                    }
                </Grid>
                <Grid item>
                    <TrustPersonaEdit personas={trustPersonas} setPersonas={setTrustPersonas}/>
                </Grid>
            </Grid>
            <TrustPoliciesTable recomputeReport={recomputeTrustReport} trustPersona={selectedTrustPersona}/>
        </div>
    )
}
import React, {useEffect, useState} from "react";
import TrustPersonaSelector from "./TrustPersonaSelector";
import {getCollaborators} from "../../miner/uncertaintyAggregation";


export default function TrustPolicies() {
    const [trustPersonas, setTrustPersonas] = useState<string[]>([])

    useEffect(() => {
        getCollaborators().then(collaborators => {
            let names = collaborators.map(collaborator => collaborator.name)
            setTrustPersonas(names)
        })
    }, [])

    return (
        <div>
            <TrustPersonaSelector personas={trustPersonas}/>
        </div>
    )
}
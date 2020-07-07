import React, {useEffect, useState} from "react";
import TrustPersonaSelector from "./TrustPersonaSelector";
import {getCollaborators} from "../../miner/uncertaintyAggregation";
import TrustPoliciesTable from "./TrustPoliciesTable";


export default function TrustPolicies() {
    const [trustPersonas, setTrustPersonas] = useState<string[]>([])
    const [selectedTrustPersona, setSelectedTrustPersona] = useState("")

    useEffect(() => {
        getCollaborators().then(collaborators => {
            let names = collaborators.map(collaborator => collaborator.name)
            setTrustPersonas(names)
            setSelectedTrustPersona(names[0])
        })
    }, [])

    return (
        <div>
            <TrustPersonaSelector personas={trustPersonas} setSelected={setSelectedTrustPersona}/>
            <TrustPoliciesTable trustPersona={selectedTrustPersona}/>
        </div>
    )
}
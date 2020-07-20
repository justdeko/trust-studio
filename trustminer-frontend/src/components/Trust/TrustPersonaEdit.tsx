import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Button, Grid, IconButton, TextField} from "@material-ui/core";
import {Add, Close} from "@material-ui/icons";
import {editTrustPersonaNames} from "../../util/miner_util";
import {sep} from "../../util/csv_util";

interface EditorProps {
    personas: string[],
    setPersonas: Dispatch<SetStateAction<string[]>>
}

export default function TrustPersonaEdit(props: EditorProps) {
    const {personas, setPersonas} = props
    const [open, setOpen] = useState(false)
    const [personaName, setPersonaName] = useState("")
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!personas.includes(personaName)) {
            setError(false)
        }
    }, [personaName])

    function handleChange(e: any) {
        setPersonaName(e.target.value)
    }

    function addPersona() {
        if (personas.includes(personaName)) {
            setError(true)
        } else {
            editTrustPersonaNames(true, personaName)
            setPersonas((prevState => prevState.concat(personaName)))
            setPersonaName("")
        }
    }

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <div>
            {!open ?
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpen}
                    startIcon={<Add/>}>
                    Add Trust Persona
                </Button>
                :
                <Grid container
                      justify="flex-start"
                      alignItems="center"
                      direction="row">
                    <Grid item>
                        <TextField
                            error={error}
                            value={personaName}
                            id="outlined-error-helper-text"
                            onChange={handleChange}
                            label="Trust Persona Name"
                            helperText={error ? "Persona Already exists" : undefined}
                            variant="outlined"
                        />
                    </Grid>
                    {(error || personaName.length < 3 || personaName.includes(sep)) ? <div/> :
                        <Grid item>
                            <IconButton color="primary" aria-label="add trust persona" onClick={addPersona}>
                                <Add/>
                            </IconButton>
                        </Grid>
                    }
                    <Grid item>
                        <IconButton color="primary" aria-label="close editing" onClick={handleClose}>
                            <Close/>
                        </IconButton>
                    </Grid>
                </Grid>
            }
        </div>
    )

}
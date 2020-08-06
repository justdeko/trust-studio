import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {useSelectorStyles} from "../../../styles/selector-styles";

interface SelectorProps {
    collaboratorNames: string[],
    setSelected: Dispatch<SetStateAction<string>>,
    perspective: string
}

export default function CollaboratorSelector(props: SelectorProps) {
    const {collaboratorNames, setSelected, perspective} = props
    const [currentValue, setCurrentValue] = useState(collaboratorNames[0])

    useEffect(() => {
        setCurrentValue(collaboratorNames[0]) //necessary for resolving bug of empty selector
    }, [perspective])

    function handleChange(e: any) {
        setCurrentValue(e.target.value)
        setSelected(e.target.value)
    }

    const classes = useSelectorStyles();
    return <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel color="secondary" id="select-collaborator-label">Collaborator</InputLabel>
        <Select
            color="secondary"
            labelId="select-collaborator-label"
            id="select-collaborator"
            value={currentValue}
            onChange={handleChange}
            label="Collaborator"
        >
            {collaboratorNames.map((collaborator) =>
                <MenuItem key={collaborator} value={collaborator}>{collaborator}</MenuItem>)
            }
        </Select>
    </FormControl>
}
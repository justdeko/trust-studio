import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {useSelectorStyles} from "../../styles/selector-styles";
import {saveEvent} from "../../util/survey_util";
import {TYPE_SELECT} from "../../util/constants";

interface SelectorProps {
    personas: string[],
    setSelected: Dispatch<SetStateAction<string>>
}

export default function TrustPersonaSelector(props: SelectorProps) {
    const {personas, setSelected} = props
    const [currentValue, setCurrentValue] = useState(personas[0])

    useEffect(() => {
        setCurrentValue(personas[0])
    }, [personas])

    function handleChange(e: any) {
        saveEvent("trust_persona_selector", TYPE_SELECT, e.target.value)
        setCurrentValue(e.target.value)
        setSelected(e.target.value)
    }

    const classes = useSelectorStyles();
    return <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel color="secondary" id="select-trust-persona-label">Trust Persona</InputLabel>
        <Select
            color="secondary"
            labelId="select-trust-persona-label"
            id="select-trust-persona"
            value={currentValue}
            onChange={handleChange}
            label="Trust Persona"
        >
            {personas.map((persona) =>
                <MenuItem key={persona} value={persona}>{persona}</MenuItem>)
            }
        </Select>
    </FormControl>
}
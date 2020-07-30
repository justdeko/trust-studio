import React, {Dispatch, SetStateAction, useState} from "react";
import {useSelectorStyles} from "../styles/selector-styles";
import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";

interface PerspectiveProps {
    perspectiveNames: string[],
    setSelected: Dispatch<SetStateAction<string>>
}

export default function PerspectiveSelector(props: PerspectiveProps) {
    const {perspectiveNames, setSelected} = props
    const [currentValue, setCurrentValue] = useState(perspectiveNames[0])


    function handleChange(e: any) {
        setCurrentValue(e.target.value)
        setSelected(e.target.value)
    }

    const classes = useSelectorStyles();
    return <FormControl className={classes.formControl}>
        <InputLabel color="secondary" id="select-collaborator-label">Perspective</InputLabel>
        <Select
            color="secondary"
            classes={{
                root: 'white',
                icon: 'white'
            }}
            labelId="select-collaborator-label"
            id="select-collaborator"
            value={currentValue}
            onChange={handleChange}
            label="Collaborator"
        >
            {perspectiveNames.map((perspective) =>
                <MenuItem key={perspective} value={perspective}>{perspective}</MenuItem>)
            }
        </Select>
    </FormControl>
}
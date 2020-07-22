import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import React, {Dispatch, SetStateAction, useState} from "react";
import {useSelectorStyles} from "../../styles/selector-styles";

interface SelectorProps {
    setSelected: Dispatch<SetStateAction<string>>
}

export default function RelationshipGraphSelector(props: SelectorProps) {
    const {setSelected} = props
    const [currentValue, setCurrentValue] = useState("data")


    function handleChange(e: any) {
        setCurrentValue(e.target.value)
        setSelected(e.target.value)
    }

    const classes = useSelectorStyles();
    return <FormControl className={classes.formControl}>
        <InputLabel id="select-relationship-graph-label">Relationship View</InputLabel>
        <Select
            labelId="select-relationship-graph-label"
            id="select-relationship-graph-type"
            value={currentValue}
            onChange={handleChange}
            label="Relationship View"
        >
            <MenuItem value="data">Data</MenuItem>
            <MenuItem value="message-flow">Message Flow</MenuItem>
        </Select>
    </FormControl>
}
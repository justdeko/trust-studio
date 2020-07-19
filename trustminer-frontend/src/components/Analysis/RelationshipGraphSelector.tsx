import {createStyles, FormControl, InputLabel, MenuItem, Select, Theme} from "@material-ui/core";
import React, {Dispatch, SetStateAction, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 150,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

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

    const classes = useStyles();
    return <FormControl variant="outlined" className={classes.formControl}>
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
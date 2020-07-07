import {createStyles, FormControl, InputLabel, MenuItem, Select, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import React, {Dispatch, SetStateAction, useState} from "react";

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
    personas: string[],
    setSelected: Dispatch<SetStateAction<string>>
}

export default function TrustPersonaSelector(props: SelectorProps) {
    const {personas, setSelected} = props
    const [currentValue, setCurrentValue] = useState(personas[0])


    function handleChange(e: any) {
        setCurrentValue(e.target.value)
        setSelected(e.target.value)
    }

    const classes = useStyles();
    return <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="select-trust-persona-label">Trust Persona</InputLabel>
        <Select
            labelId="select-trust-persona-label"
            id="select-trust-persona"
            value={currentValue}
            onChange={handleChange}
            label="Trust Persona"
        >
            {personas.map((persona) =>
                <MenuItem value={persona}>{persona}</MenuItem>)
            }
        </Select>
    </FormControl>
}
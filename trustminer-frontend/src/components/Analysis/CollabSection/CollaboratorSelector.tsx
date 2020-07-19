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
    collaboratorNames: string[],
    setSelected: Dispatch<SetStateAction<string>>
}

export default function CollaboratorSelector(props: SelectorProps) {
    const {collaboratorNames, setSelected} = props
    const [currentValue, setCurrentValue] = useState(collaboratorNames[0])


    function handleChange(e: any) {
        setCurrentValue(e.target.value)
        setSelected(e.target.value)
    }

    const classes = useStyles();
    return <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="select-collaborator-label">Collaborator</InputLabel>
        <Select
            labelId="select-collaborator-label"
            id="select-collaborator"
            value={currentValue}
            onChange={handleChange}
            label="Collaborator"
        >
            {collaboratorNames.map((collaborator) =>
                <MenuItem value={collaborator}>{collaborator}</MenuItem>)
            }
        </Select>
    </FormControl>
}
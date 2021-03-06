import React, {useEffect, useState} from "react";
import MaterialTable, {Column} from "material-table";
import {tableIcons} from "../theme/MaterialTableIcons"
import {exportCsv, importCsv, loadUncertainties, resetToDefault, saveUncertainties} from "../util/csv_util";
import {Perspective} from "../model/Perspective";
import {TrustConcern} from "../model/TrustConcern";
import {UncertaintyRow} from "../model/UncertaintyRow";
import {Button, Grid} from "@material-ui/core";
import {useSnackbar} from "notistack";


export interface TableState {
    columns: Array<Column<UncertaintyRow>>;
    data: UncertaintyRow[];
}

export default function UncertaintyTable() {
    const [state, setState] = useState<TableState>({
        columns: [
            {title: 'Parent Component', field: "parentComponent"},
            {title: 'Component', field: 'component'},
            {title: 'Perspective', field: 'perspective', lookup: Perspective},
            {title: 'Trust Concern', field: 'trustconcern', lookup: TrustConcern},
            {title: 'Concern Root', field: 'root'},
            {title: 'Question', field: 'question'},
        ],
        data: [],
    });
    const {enqueueSnackbar} = useSnackbar();

    // load the current uncertainty state
    useEffect(() => {
        setState((prevState) => {
            let data = loadUncertainties()
            return {...prevState, data};
        })
    }, [])

    return (
        <div data-tour="uncertainties" style={{maxWidth: "100%"}}>
            <Grid container justify="space-between" direction="row">
                <Grid item>
                    <Button onClick={exportCsv}>Export to CSV</Button>
                    <Button onClick={() => {
                        importCsv(setState, enqueueSnackbar)
                    }}>Import from CSV</Button>
                    <Button onClick={() => resetToDefault(setState)}>Reset to default</Button>
                </Grid>
            </Grid>
            <MaterialTable
                icons={tableIcons}
                title="Uncertainty List"
                columns={state.columns}
                data={state.data}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.push(newData);
                                    saveUncertainties(data)
                                    return {...prevState, data};
                                });
                            }, 300);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState((prevState) => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        saveUncertainties(data)
                                        return {...prevState, data};
                                    });
                                }
                            }, 300);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    saveUncertainties(data)
                                    return {...prevState, data};
                                });
                            }, 300);
                        }),
                }}
            />
        </div>
    )
}
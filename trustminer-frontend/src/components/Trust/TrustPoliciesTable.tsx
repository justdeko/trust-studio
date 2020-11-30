import MaterialTable, {Column} from "material-table";
import {TrustPolicyRow} from "../../model/TrustPolicyRow";
import React, {useEffect, useState} from "react";
import {TrustConcern} from "../../model/TrustConcern";
import {tableIcons} from "../../theme/MaterialTableIcons";
import {loadTrustPoliciesForPersona, saveTrustPolicies} from "../../util/csv_util";
import {saveEvent} from "../../util/survey_util";
import {TYPE_MODIFY} from "../../util/constants";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {defaultBpmnElements} from "../../model/ComponentTypes";

interface TableState {
    columns: Array<Column<TrustPolicyRow>>;
    data: TrustPolicyRow[];
}

interface TrustTableProps {
    trustPersona: string,
    recomputeReport?: () => void
}

export default function TrustPoliciesTable(props: TrustTableProps) {
    const {trustPersona, recomputeReport} = props
    const [state, setState] = useState<TableState>({
        columns: [
            {
                title: 'Trust Entity',
                field: "trustEntity",
            },
            {
                title: 'Process Element',
                field: 'processElement',
                editComponent: props => (
                    <Autocomplete
                        id="autocomplete-textfield"
                        freeSolo
                        onChange={(e, value) => props.onChange(value)}
                        value={props.value}
                        options={defaultBpmnElements}
                        renderInput={(params: any) => (
                            <TextField {...params} onChange={e => props
                                .onChange(e.target.value)}/>
                        )}
                    />
                )
            },
            {
                title: 'Trust Concern',
                field: 'trustConcern',
                lookup: TrustConcern
            }
        ],
        data: loadTrustPoliciesForPersona(trustPersona),
    });

    useEffect(() => {
        setState((prevState) => {
            let data = loadTrustPoliciesForPersona(trustPersona)
            return {...prevState, data};
        })
    }, [trustPersona])

    useEffect(() => {
        if (recomputeReport) {
            recomputeReport()
        }
    }, [state])

    return (
        <div style={{maxWidth: "100%"}}>
            <MaterialTable
                icons={tableIcons}
                title={"Trust policies for " + trustPersona}
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
                                    saveEvent("trust_policy_table_add", TYPE_MODIFY,
                                        newData.processElement +
                                        ", " + newData.trustConcern +
                                        ", " + newData.trustEntity
                                    )
                                    saveTrustPolicies(data, trustPersona)
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
                                        saveEvent("trust_policy_table_update", TYPE_MODIFY,
                                            newData.processElement +
                                            ", " + newData.trustConcern +
                                            ", " + newData.trustEntity
                                        )
                                        saveTrustPolicies(data, trustPersona)
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
                                    saveEvent("trust_policy_table_delete", TYPE_MODIFY,
                                        oldData.processElement +
                                        ", " + oldData.trustConcern +
                                        ", " + oldData.trustEntity
                                    )
                                    data.splice(data.indexOf(oldData), 1);
                                    saveTrustPolicies(data, trustPersona)
                                    return {...prevState, data};
                                });
                            }, 300);
                        }),
                }}
            />
        </div>
    )
}
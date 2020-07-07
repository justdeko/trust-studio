import MaterialTable, {Column} from "material-table";
import {TrustPolicyRow} from "../../model/TrustPolicyRow";
import React, {useEffect} from "react";
import {TrustConcern} from "../../model/TrustConcern";
import {tableIcons} from "../../theme/MaterialTableIcons";
import {loadTrustPoliciesForPersona, saveTrustPolicies} from "../../util/csv_util";

interface TableState {
    columns: Array<Column<TrustPolicyRow>>;
    data: TrustPolicyRow[];
}

interface TrustTableProps {
    trustPersona: string
}

export default function TrustPoliciesTable(props: TrustTableProps) {
    const {trustPersona} = props
    const [state, setState] = React.useState<TableState>({
        columns: [
            {title: 'Trust Entity', field: "trustEntity"},
            {title: 'Process Element', field: 'processElement'},
            {title: 'Trust Concern', field: 'trustConcern', lookup: TrustConcern}
        ],
        data: loadTrustPoliciesForPersona(trustPersona),
    });

    useEffect(() => {
        setState((prevState) => {
            let data = loadTrustPoliciesForPersona(trustPersona)
            return {...prevState, data};
        })
    }, [trustPersona])

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
import React from "react";
import MaterialTable, {Column} from "material-table";
import {tableIcons} from "../theme/MaterialTableIcons"

interface Row {
    component: string,
    perspective: string,
    trustconcern: string,
    root: string,
    question: string
}

interface TableState {
    columns: Array<Column<Row>>;
    data: Row[];
}

export default function UncertaintyTable() {
    const [state, setState] = React.useState<TableState>({
        columns: [
            {title: 'Component', field: 'component'},
            {title: 'Perspective', field: 'perspective'},
            {title: 'Trust Concern', field: 'trustconcern'},
            {title: 'Concern Root', field: 'root'},
            {title: 'Question', field: 'question'},
        ],
        data: [
            { //TODO: import from csv
                component: "Manual Task",
                perspective: "Functional",
                trustconcern: "Integrity",
                root: "resource",
                question: "Do the involved resources execute the activity correctly?"
            },
        ],
    });
    return (
        <div style={{maxWidth: "100%"}}>
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
                                    return {...prevState, data};
                                });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setState((prevState) => {
                                        const data = [...prevState.data];
                                        data[data.indexOf(oldData)] = newData;
                                        return {...prevState, data};
                                    });
                                }
                            }, 600);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data.splice(data.indexOf(oldData), 1);
                                    return {...prevState, data};
                                });
                            }, 600);
                        }),
                }}
            />
        </div>
    )
}
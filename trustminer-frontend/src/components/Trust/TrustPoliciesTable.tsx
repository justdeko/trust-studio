import {Column} from "material-table";
import {TrustPolicyRow} from "../../model/TrustPolicyRow";
import React from "react";
import {TrustConcern} from "../../model/TrustConcern";

interface TableState {
    columns: Array<Column<TrustPolicyRow>>;
    data: TrustPolicyRow[];
}

export default function TrustPoliciesTable() {
    const [state, setState] = React.useState<TableState>({
        columns: [
            {title: 'Trust Entity', field: "trustEntity"},
            {title: 'Process Element', field: 'processElement'},
            {title: 'Trust Concern', field: 'trustConcern', lookup: TrustConcern}
        ],
        data: [],
    });
}
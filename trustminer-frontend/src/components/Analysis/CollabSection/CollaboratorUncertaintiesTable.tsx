import React from "react";
import {Collaborator} from "../../../model/Collaborator";
import MaterialTable from "material-table";
import {Perspective} from "../../../model/Perspective";
import {TrustConcern} from "../../../model/TrustConcern";
import {mapToUncertaintiesRowData} from "../../../util/csv_util";
import {tableIcons} from "../../../theme/MaterialTableIcons";

interface UncertaintiesChartProps {
    collaborator: Collaborator
}

export default function CollaboratorUncertaintiesTable(props: UncertaintiesChartProps) {
    const {collaborator} = props
    return <div style={{width: '100%'}}>
        <MaterialTable
            title={"All uncertainties of " + collaborator.name}
            icons={tableIcons}
            columns={[
                {title: 'Component', field: 'component'},
                {title: 'Perspective', field: 'perspective', lookup: Perspective},
                {title: 'Trust Concern', field: 'trustconcern', lookup: TrustConcern},
                {title: 'Concern Root', field: 'root'},
            ]} data={mapToUncertaintiesRowData(collaborator.uncertainties)}/>
    </div>
}
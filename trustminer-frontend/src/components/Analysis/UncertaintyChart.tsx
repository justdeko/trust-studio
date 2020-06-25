import React from "react";
import {Doughnut} from "react-chartjs-2";
import UncertaintyChartData from "../../model/UncertaintyChartData";

interface UncertaintyChartProps {
    data: UncertaintyChartData
}

export default function UncertaintyChart(props: UncertaintyChartProps) {

    return (
        <div>
            <h2>Uncertainty Distribution</h2>
            <Doughnut data={props.data}/>
        </div>
    )
}
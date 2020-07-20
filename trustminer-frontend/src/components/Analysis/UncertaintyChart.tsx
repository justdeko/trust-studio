import React from "react";
import {Doughnut} from "react-chartjs-2";
import UncertaintyChartData from "../../model/UncertaintyChartData";
import DataCard from "./DataCard";

interface UncertaintyChartProps {
    data: UncertaintyChartData
}

export default function UncertaintyChart(props: UncertaintyChartProps) {

    return (
        <DataCard
            content={<Doughnut data={props.data}/>}
            title="Uncertainty Distribution"/>
    )
}
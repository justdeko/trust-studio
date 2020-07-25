import React from "react";
import {Doughnut} from "react-chartjs-2";
import UncertaintyChartData from "../../model/UncertaintyChartData";
import DataCard from "./DataCard";

interface UncertaintyChartProps {
    data: UncertaintyChartData
}

export default function UncertaintyChart(props: UncertaintyChartProps) {

    const plugins = [{
        afterDraw: (chartInstance: any, _: any) => {
            localStorage.setItem("uncertainty_chart", chartInstance.toBase64Image())
        }
    }]


    return (
        <div data-tour="uncertainty-chart">
            <DataCard
                content={<Doughnut plugins={plugins} data={props.data}/>}
                title="Uncertainty Distribution"/>
        </div>
    )
}
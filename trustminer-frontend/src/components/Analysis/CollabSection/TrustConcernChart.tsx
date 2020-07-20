import {BarChartData} from "../../../model/BarChartData";
import {Bar} from "react-chartjs-2";
import React from "react";
import DataCard from "../DataCard";

interface concernChartProps {
    chartData: BarChartData
}

export const chartOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                min: 0
            }
        }]
    }
}

export default function TrustConcernChart(props: concernChartProps) {
    return <DataCard content={<Bar data={props.chartData} height={200} width={300}
                                   options={chartOptions}/>} title="Trust concern distribution"/>
}
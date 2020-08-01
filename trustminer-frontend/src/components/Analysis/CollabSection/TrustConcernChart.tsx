import {BarChartData} from "../../../model/BarChartData";
import {Bar} from "react-chartjs-2";
import React from "react";
import DataCard from "../DataCard";
import {chartOptions} from "../../../util/chart_util";

interface concernChartProps {
    chartData: BarChartData
}

export default function TrustConcernChart(props: concernChartProps) {
    return <DataCard content={<Bar data={props.chartData} height={200} width={400}
                                   options={chartOptions}/>} title="Trust concern distribution"/>
}
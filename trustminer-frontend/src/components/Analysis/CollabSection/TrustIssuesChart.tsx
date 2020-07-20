import {BarChartData} from "../../../model/BarChartData";
import {HorizontalBar} from "react-chartjs-2";
import React from "react";
import DataCard from "../DataCard";
import {chartOptions} from "./TrustConcernChart";

interface TrustIssuesProps {
    chartData: BarChartData
}

export default function TrustIssuesChart(props: TrustIssuesProps) {
    return (
        <DataCard content={<HorizontalBar data={props.chartData} height={200} options={chartOptions}/>}
                  title="Trust issues"/>
    )
}
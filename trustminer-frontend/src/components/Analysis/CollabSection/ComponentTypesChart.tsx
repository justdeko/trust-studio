import DataCard from "../DataCard";
import {Bar} from "react-chartjs-2";
import {chartOptions} from "../../../util/chart_util";
import React from "react";
import {BarChartData} from "../../../model/BarChartData";

interface componentTypesChartProps {
    chartData: BarChartData
}

export default function ComponentTypesChart(props: componentTypesChartProps) {
    return <DataCard content={
        <Bar data={props.chartData}
             height={200}
             width={500}
             options={chartOptions}/>
    } title="Component Types" tooltipTitle="The distribution of the bpmn components an uncertainty belongs to."/>
}
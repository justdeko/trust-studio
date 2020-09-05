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
        <div data-tour="uncertainty-chart" style={{height: '100%'}}>
            <DataCard
                content={<Doughnut plugins={plugins} width={500} height={300} data={props.data}/>}
                title="Uncertainty Distribution"
                tooltipTitle="This graph shows the distribution of uncertainties for each collaborator."/>
        </div>
    )
}
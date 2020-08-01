import {BarChartData} from "../../model/BarChartData";
import {HorizontalBar} from "react-chartjs-2";
import React from "react";
import DataCard from "./DataCard";
import {chartOptions} from "../../util/chart_util";
import {Grid} from "@material-ui/core";

interface TrustIssuesProps {
    chartData: BarChartData
}

export default function TrustIssuesChart(props: TrustIssuesProps) {
    return (
        <DataCard content={
            <Grid style={{height: '100%'}} container alignItems="center" justify="center">
                <Grid item>
                    <HorizontalBar data={props.chartData} height={300} width={400} options={chartOptions}/>
                </Grid>
            </Grid>
        }
                  title="Trust issues"/>
    )
}
import DataCard from "./DataCard";
import React from "react";
import {Typography} from "@material-ui/core";

interface IndicatorProps {
    indicatorNumber: number | string,
    indicatorTitle: string
}

export default function Indicator(props: IndicatorProps) {
    const {indicatorNumber, indicatorTitle} = props
    return <DataCard
        content={
            <Typography variant='h4'>{indicatorNumber}</Typography>
        }
        title={indicatorTitle}/>
}
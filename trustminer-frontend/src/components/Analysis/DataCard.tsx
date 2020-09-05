import {Card, CardContent, Tooltip, Typography} from "@material-ui/core";
import React from "react";

interface DataCardProps {
    content: React.ReactNode,
    title: string,
    tooltipTitle: string
}

export default function DataCard(props: DataCardProps) {
    const {content, title, tooltipTitle} = props
    return <Card style={{height: '100%'}}>
        <CardContent style={{height: '100%'}}>
            <Tooltip title={tooltipTitle}>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
            </Tooltip>
            {content}
        </CardContent>
    </Card>
}
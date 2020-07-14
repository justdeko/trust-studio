import {Card, CardContent, Typography} from "@material-ui/core";
import React from "react";

interface DataCardProps {
    content: React.ReactNode,
    title: string
}

export default function DataCard(props: DataCardProps) {
    const {content, title} = props
    return <Card>
        <CardContent>
            <Typography variant="h5" component="h2">
                {title}
            </Typography>
            {content}
        </CardContent>
    </Card>
}
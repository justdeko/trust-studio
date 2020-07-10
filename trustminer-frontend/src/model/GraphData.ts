export interface GraphData {
    nodes: { id: string }[]
    links: { source: string, target: string }[]
}

export interface DataObjectGraphData {
    nodes: { id: string }[]
    links: { source: string, target: string, label: string }[]
}

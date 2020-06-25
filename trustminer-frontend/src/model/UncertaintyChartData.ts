export default interface UncertaintyChartData {
    labels: string[],
    datasets: {
        data: number[],
        backgroundColor: string[]
        hoverBackgroundColor: string[]
    }[]
}
export interface BarChartData {
    labels: string[],
    datasets: {
        label: string,
        backgroundColor: string,
        borderColor: string,
        borderWidth: number,
        hoverBackgroundColor: string,
        hoverBorderColor: string,
        data: number[]
    }[]
}
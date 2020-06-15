export interface UncertaintyRow {
    component: string,
    parentComponent: string | null,
    perspective: number,
    trustconcern: number,
    root: string,
    question: string
}
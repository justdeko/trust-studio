export interface UncertaintyRow {
    component: string,
    parentComponent: string | null,
    perspective: number,
    trustconcern: string,
    root: string,
    question: string
}
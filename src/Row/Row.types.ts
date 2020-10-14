import { ReactNode } from "react";

export interface RowProps {
    gutter?: number,
    columns?: number,
    children?: ReactNode,
    title?: string,
    subTitle?: string
}

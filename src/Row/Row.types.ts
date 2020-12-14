import { ReactNode } from "react";

export interface RowProps {
    gutter?: number,
    columns?: number | number[],
    children?: ReactNode,
    title?: string,
    subTitle?: string,
    backgroundColor?: string,
    titleStyle?: "center" | "fullwidth",
    link?: string,
    linkText?: string,
    lastRow?: boolean,
    zIndex?: number,
    onLinkClick?: () => void
}

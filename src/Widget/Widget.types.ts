import { ReactNode } from 'react';

export interface WidgetProps {
    title: string,
    subTitle: string,
    onClick?: () => void,
    linkText: string,
    color: string,
    children?: ReactNode,
    fullHeight?: boolean
}

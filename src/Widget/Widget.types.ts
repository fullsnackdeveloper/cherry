import { ReactNode } from 'react';

export interface WidgetProps {
    title: string,
    subTitle: string,
    link: string,
    linkText: string,
    color: string,
    children?: ReactNode;
}

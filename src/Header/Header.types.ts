import { ReactNode } from 'react';

export interface HeaderProps {
    title?: string,
    subTitle?: string,
    description?: string | ReactNode,
    image?: {
        src: string,
        alt: string
    },
    categories?: { title: string, uri: string }[],
    stats?: { measurement: string, amount: string }[],
    collapsedAt?: [],
    squiggle?: boolean,
    maxWidth?: number
    type?: "display" | "content"
}

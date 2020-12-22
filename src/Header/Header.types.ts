import { ReactNode } from 'react';

export interface HeaderProps {
    title?: string,
    subTitle?: string,
    description?: string | ReactNode,
    image?: {
        src: string,
        alt: string
        source?: {
            author?: {
                name?: string,
                link?: string
            },
            site?: {
                name?: string,
                link?: string
            }
        },
    },
    categories?: { title: string, link: string }[],
    stats?: { measurement: string, amount: string }[],
    collapsedAt?: [],
    squiggle?: boolean,
    maxWidth?: number
    type?: "display" | "content",
    hideSource?: boolean,
    onCategoryClick?: any,
    nextImage?: ReactNode,
}

import { ReactNode } from 'react';

export interface CardProps {
    title?: string | ReactNode,
    category?: string,
    image?: string,
    type?: 'post' | 'category',
    size?: 'small' | 'large' | 'list',
    icon?: string,
    iconMessage?: string,
    author?: string,
    onClick?: () => void,
}

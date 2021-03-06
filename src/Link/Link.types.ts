import { ReactNode } from 'react';

export interface LinkProps {
    children?: ReactNode,
    link?: string,
    icon?: string,
    iconSize?: number,
    darkMode?: boolean,
    active?: boolean,
    compact?: boolean,
    onClick?: () => void,
}

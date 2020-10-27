import { ReactNode } from 'react';

export interface MenuProps {
    collapsedAt?: number[];
    children: ReactNode;
}

export interface MenuItemProps {
    children: ReactNode,
    icon: string,
    navState?: string
}

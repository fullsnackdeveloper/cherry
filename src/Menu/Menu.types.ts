import { ReactNode } from 'react';

export interface MenuProps {
    collapsedAt?: number[];
    mobileMenuOpen?: boolean;
    children: ReactNode;
}

export interface MenuItemProps {
    children: ReactNode,
    icon?: string,
    navState?: string,
    active?: boolean,
    compact?: boolean,
    chevron?: boolean,
    title?: string,
    onClick?: any,
    open?: boolean
}

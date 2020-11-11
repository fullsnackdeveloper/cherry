import { ReactNode } from 'react';

export interface MenuProps {
    collapsedAt?: number[];
    mobileMenuOpen?: boolean;
    children: ReactNode;
}

export interface SubMenuProps {
    children: ReactNode,
    icon: string,
    title: string
    mobileMenuOpen?: boolean,
    navState?: string
}

export interface MenuItemProps {
    children: ReactNode,
    icon?: string,
    navState?: string
}

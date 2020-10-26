import { ReactNode } from 'react';

export interface MenuProps {
    collapsed?: boolean;
    children: ReactNode;
    mobile?: boolean;
}

export interface MenuItemProps {
    children: ReactNode,
    icon: string,
    mobile?: boolean
}

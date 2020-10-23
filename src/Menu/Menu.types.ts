import { ReactNode } from 'react';

export interface MenuProps {
    children: ReactNode;
}

export interface MenuItemProps {
    children: ReactNode,
    icon: string
}

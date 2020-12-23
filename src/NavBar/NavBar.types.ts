import { ReactNode } from 'react';

export interface NavbarProps {
    menu: any,
    logoLink?: string,
    logo?: ReactNode,
    mobileLogo?: ReactNode,
    collapsedAt: number[],
    onNavigate?: any,
    activeLink?: string,
    hideDepth?: number
}

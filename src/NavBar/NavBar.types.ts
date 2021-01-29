import { ReactNode } from 'react';

export interface NavbarProps {
    menu: any,
    logoLink?: string,
    logo?: any,
    mobileLogo?: any,
    collapsedAt: number[],
    onNavigate?: any,
    activeLink?: string,
    hideDepth?: number
}

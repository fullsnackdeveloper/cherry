import { ReactNode } from 'react';

export interface ActionBarProps {
    authorContent: ReactNode | ReactNode[];
    productContent: ReactNode | ReactNode[];
    collapsedAt?: number[];
    authorAvatar?: string;
}

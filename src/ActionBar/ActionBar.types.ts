import { ReactNode } from 'react';

export interface ActionBarProps {
    authorContent: ReactNode | ReactNode[];
    collapsedAt?: number[];
}

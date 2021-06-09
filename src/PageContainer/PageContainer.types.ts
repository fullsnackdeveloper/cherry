import { ReactNode } from 'react';

export interface PageContainerProps {
    children: ReactNode;
    collapsedAt?: number[];
    hasActionBar?: boolean;
    hasSteps?: boolean;
    shadedBackground?: boolean;
    overflowHidden?: boolean;
    fullwidth?: boolean;
}

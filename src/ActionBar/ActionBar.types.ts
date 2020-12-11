import { ReactNode } from 'react';

export interface ActionBarProps {
    authorContent: ReactNode | ReactNode[];
    productContent: ReactNode | ReactNode[];
    collapsedAt?: number[];
    authorAvatar?: string;
    steps?: any,
    closeSteps?: boolean,
    top?: number,
    onStepsClick?: () => void,
    showDepth?: number
}

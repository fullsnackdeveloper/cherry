import { ReactNode } from 'react';

export interface PageContainerProps {
    children: ReactNode;
    collapsedAt?: number[];
}

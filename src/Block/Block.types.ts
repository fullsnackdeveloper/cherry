import { ReactNode } from 'react';

export interface BlockProps {
    children?: ReactNode;
    html?: string;
    isHeading?: boolean;
    pullUp?: boolean;
    pullDown?: boolean;
}

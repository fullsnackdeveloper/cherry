import { ReactNode } from 'react';

export interface PopupProps {
    children: ReactNode;
    content: ReactNode[] | ReactNode;
    title?: string;
    opened?: (boolean) => void;
    width?: number;
    position?: 'tl' | 't' | 'tr' | 'lt' | 'l' | 'lb' | 'bl' | 'b' | 'br' | 'rt' | 'r' | 'rb';
    className?: string;
    addedPadding?: boolean;
}

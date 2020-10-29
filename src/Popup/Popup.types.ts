import { ReactNode } from 'react';

export interface PopupProps {
    children: ReactNode;
    content: ReactNode[] | ReactNode;
    title?: string;
    opened?: (boolean) => void;
    width?: number;
}

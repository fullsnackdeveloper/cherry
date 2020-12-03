import { ReactNode } from 'react';

export interface PopupProps {
    children: ReactNode;
    content: ReactNode[] | ReactNode;
    title?: string;
    opened?: (boolean) => void;
    width?: number;
    position?: 'topLeft' | 'top' | 'topRight' | 'leftTop' | 'left' | 'leftBottom' | 'bottomLeft' | 'bottom' | 'bottomRight' | 'rightTop' | 'right' | 'rightBottom';
    className?: string;
    addedPadding?: boolean;
}

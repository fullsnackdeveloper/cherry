import { ReactNode } from 'react';

export interface PopupProps {
    children: ReactNode;
    content: ReactNode[] | ReactNode;
    title?: string;
    opened?: any;
    width?: number;
    fullWidth?: boolean;
    position?: 'topLeft' | 'top' | 'topRight' | 'leftTop' | 'left' | 'leftBottom' | 'bottomLeft' | 'bottom' | 'bottomRight' | 'rightTop' | 'right' | 'rightBottom';
    className?: string;
    addedPadding?: boolean;
    closePopup?: boolean;
    noOverlay?: boolean;
}

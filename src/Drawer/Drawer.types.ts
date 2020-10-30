import { ReactNode } from 'react';

export interface DrawerProps {
    children: ReactNode;
    open?: boolean;
    position?: 'top' | 'right' | 'bottom' | 'left';
    updateOpen?: (boolean) => void;
}

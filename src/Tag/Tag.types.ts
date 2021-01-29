import { ReactNode } from 'react';

export interface TagProps {
    activate?: boolean;
    children: string | ReactNode;
    onClick?: (number) => void;
}

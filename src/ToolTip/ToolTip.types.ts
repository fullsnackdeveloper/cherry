import { ReactNode } from 'react';

export interface ToolTipProps {
    children: ReactNode;
    message: string;
    disabled?: boolean;
    position?: "top" | "right" | "bottom" | "left";
    capitalize?: boolean;
}

import { ReactNode } from "react";

export interface ButtonProps {
    children?: ReactNode;
    onClick?: () => void;
    size?: 'tiny' | 'small' | 'regular' | 'large';
    type?: 'primary' | 'secondary' | 'link';
    icon?: string,
    className?: string
}

import { ReactNode } from "react";

export interface ButtonProps {
    /**
    * children prop
    */
    children?: ReactNode | string;
    onClick?: () => void;
    size?: 'small' | 'regular' | 'large';
    type?: 'primary' | 'secondary' | 'white' | 'icon';
    icon?: string,
    className?: string,
    shadow?: boolean,
    disabled?: boolean,
    iconSize?: number,
}

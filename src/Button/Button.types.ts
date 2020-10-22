import { ReactNode } from "react";

export interface ButtonProps {
    /**
    * children prop
    */
    children?: ReactNode | string;
    onClick?: () => void;
    size?: 'small' | 'regular' | 'large';
    type?: 'primary' | 'secondary' | 'white' | 'link';
    icon?: string,
    className?: string,
    shadow?: boolean,
    disabled?: boolean,
    /**
    * only avaliable for link currently
    */
    darkMode?: boolean
}

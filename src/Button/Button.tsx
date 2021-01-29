// import "./Button.scss";

import React, { FC } from "react";

import { ButtonProps } from "./Button.types";
import Icon from "../Icon/Icon";
import clsx from 'clsx';

const handleMouseDown = (e: any) => {
    const rippleContainer = e.currentTarget;
    const pos = rippleContainer.getBoundingClientRect();
    const x = e.pageX - pos.x - 50;
    const y = e.pageY - pos.y - 50 - window.scrollY;
    let rippler = document.createElement('span');
    rippler.style.top = y + 'px';
    rippler.style.left = x + 'px';
    rippleContainer.append(rippler);
    setTimeout(() => {
        rippleContainer.removeChild(rippler);
    }, 10000)
}

const Button: FC<ButtonProps> = ({ size, type, icon, children, onClick, className, shadow, disabled, iconSize, ...props }: ButtonProps) => (
    <button className={clsx("Button", className, type, "ripple", size, { withIcon: icon, iconButton: icon && !children, shadow })} disabled={disabled} onClick={onClick} {...props}>
        <div className="rippleContainer" onMouseDown={handleMouseDown}></div>
        {icon &&
            <Icon size={iconSize || (size === 'large' && 14) || (size === 'small' && 8) || 12} icon={icon}></Icon>
        }
        {children && (type !== 'icon') &&
            <div>{children}</div>
        }
    </button>
);

Button.defaultProps = {
    type: 'primary',
    size: 'regular',
    disabled: false,
    shadow: false
}

export default Button;


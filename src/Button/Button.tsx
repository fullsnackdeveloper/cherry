import "./Button.scss";

import React, { FC } from "react";

import { ButtonProps } from "./Button.types";
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

const Button: FC<ButtonProps> = ({ size, type, icon, children, onClick, className }: ButtonProps) => (
    <div className={clsx("Button", className, type, "ripple", size, { withIcon: icon, iconButton: icon && !children })} onClick={onClick}>
        <div className="rippleContainer" onMouseDown={handleMouseDown}></div>
        {children &&
            <div>{children}</div>
        }
    </div>
);

export default Button;


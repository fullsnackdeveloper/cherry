import "./NavBar.scss";

import React, { useEffect, useState } from "react";

import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { NavBarProps } from "./NavBar.types";
import { childrenWithProps } from "../utils";
import clsx from "clsx";
import { useResize } from '../useResize';

const NavBar: React.FC<NavBarProps> = ({ logo, mobileLogo, collapsedAt, children }) => {
    const { sizeIndex } = useResize();
    const [collapsed, updateCollapsed] = useState('desktop');
    const [mobileMenu, updateMobileMenu] = useState(false);

    useEffect(() => {
        let navState = 'desktop';
        if (sizeIndex <= collapsedAt[1])
            navState = 'tablet'
        if (sizeIndex <= collapsedAt[0])
            navState = 'mobile'
        updateCollapsed(navState);
    }, [sizeIndex])

    const handleOpenMobileMenu = () => {
        updateMobileMenu(!mobileMenu)
    }

    return <div data-testid="NavBar" className={clsx("NavBar", collapsed)}>
        <div className="NavBar-head">
            <div className="NavBar-logo">
                <img src={collapsed === 'mobile' ? mobileLogo : logo} alt="logo" />
            </div>
            {collapsed === 'mobile' &&
                <div className="NavBar-menuIcon" onClick={handleOpenMobileMenu}>
                    <Icon icon={mobileMenu ? "close" : "menu"} size={mobileMenu ? 18 : 24} />
                </div>
            }
        </div>
        <div className={clsx("NavBar-navigation", { open: mobileMenu })}>
            {childrenWithProps(children, { collapsed, mobile: mobileMenu })}
        </div>
    </div>
};

NavBar.defaultProps = {
    collapsedAt: [1, 3]
}

export default NavBar;


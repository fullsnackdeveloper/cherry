import "./NavBar.scss";

import React, { useEffect, useState } from "react";
import { childrenWithProps, responsiveState } from "../utils";

import ConditionalWrapper from "../ConditionalWrapper";
import Icon from "../Icon/Icon";
import { NavBarProps } from "./NavBar.types";
import ToAppLevel from "../ToAppLevel";
import clsx from "clsx";
import { useResize } from '../useResize';

const NavBar: React.FC<NavBarProps> = ({ hide, logo, mobileLogo, collapsedAt, children }) => {
    const { sizeIndex } = useResize();
    const [mobileMenu, updateMobileMenu] = useState(false);
    const [navState, updateNavState] = useState(null);

    useEffect(() => {
        updateNavState(responsiveState(sizeIndex, collapsedAt));
    }, [sizeIndex, collapsedAt]);

    useEffect(() => {
        mobileMenu ?
            document.body.style.overflow = 'hidden' :
            document.body.style.overflow = 'visible';
    }, [mobileMenu])

    const handleOpenMobileMenu = () => {
        updateMobileMenu(!mobileMenu)
    }

    return <div data-testid="NavBar" className={clsx("NavBar", navState, { hide })}>
        <ConditionalWrapper conditional={navState === 'mobile'} wrapper={children => <ToAppLevel>{children}</ToAppLevel>}>
            <div className={clsx("NavBar-head", navState)}>
                <div className="NavBar-logo">
                    <img src={navState === 'mobile' ? mobileLogo : logo} alt="logo" />
                </div>
                {navState === 'mobile' &&
                    <div className="NavBar-menuIcon" onClick={handleOpenMobileMenu}>
                        <Icon icon={mobileMenu ? "close" : "menu"} size={mobileMenu ? 18 : 24} />
                    </div>
                }
            </div>
        </ConditionalWrapper>
        <div className={clsx("NavBar-navigation", { open: mobileMenu })}>
            {childrenWithProps(children, { collapsedAt })}
        </div>
        <div className={clsx("NavBar-overlay", { open: mobileMenu })}></div>
    </div>
};

export default NavBar;


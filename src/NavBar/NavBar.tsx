import "./NavBar.scss";

import React, { useEffect, useState } from "react";
import { childrenWithProps, responsiveState } from "../utils";

import ConditionalWrapper from "../ConditionalWrapper";
import Icon from "../Icon/Icon";
import { NavBarProps } from "./NavBar.types";
import ToAppLevel from "../ToAppLevel";
import clsx from "clsx";
import { useResize } from '../useResize';

const NavBar: React.FC<NavBarProps> = ({ hide, logo, logoLink, mobileLogo, collapsedAt, children }) => {
    const { sizeIndex } = useResize();
    const [mobileMenuOpen, updateMobileMenuOpen] = useState(false);
    const [navState, updateNavState] = useState(null);

    useEffect(() => {
        updateNavState(responsiveState(sizeIndex, collapsedAt));
    }, [sizeIndex, collapsedAt]);

    useEffect(() => {
        mobileMenuOpen ?
            document.body.style.overflow = 'hidden' :
            document.body.style.overflow = 'visible';
    }, [mobileMenuOpen])

    const handleOpenMobileMenuOpen = () => {
        updateMobileMenuOpen(!mobileMenuOpen)
    }

    return <div data-testid="NavBar" className={clsx("NavBar", navState, { hide })}>
        <ConditionalWrapper conditional={navState === 'mobile'} wrapper={children => <ToAppLevel>{children}</ToAppLevel>}>
            <div className={clsx("NavBar-head", navState)}>
                <ConditionalWrapper conditional={logoLink} wrapper={children => <a href={logoLink}>{children}</a>}>
                    <div className="NavBar-logo">
                        <img src={navState === 'mobile' ? mobileLogo : logo} alt="logo" />
                    </div>
                </ConditionalWrapper>
                {navState === 'mobile' &&
                    <div className="NavBar-menuIcon" onClick={handleOpenMobileMenuOpen}>
                        <Icon icon={mobileMenuOpen ? "close" : "menu"} size={mobileMenuOpen ? 18 : 24} />
                    </div>
                }
            </div>
        </ConditionalWrapper>
        <div className={clsx("NavBar-navigation", { open: mobileMenuOpen })}>
            {childrenWithProps(children, { collapsedAt, mobileMenuOpen })}
        </div>
        <div className={clsx("NavBar-overlay", { open: mobileMenuOpen })} onClick={handleOpenMobileMenuOpen}></div>
    </div>
};

export default NavBar;


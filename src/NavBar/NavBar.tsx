import "./Navbar.scss";

import React, { useEffect, useRef, useState } from "react";

import ConditionalWrapper from "../ConditionalWrapper";
import Icon from "../Icon/Icon";
import Menu from "../Menu/Menu";
import { NavbarProps } from "./Navbar.types";
import clsx from "clsx";
import { responsiveState } from "../utils";
import { useResize } from "../useResize";

const Navbar: React.FC<NavbarProps> = ({ menu, logo, mobileLogo, logoLink, collapsedAt, onNavigate, activeLink, hideDepth }) => {
    const { sizeIndex } = useResize();
    const [subMenuOpen, subMenuOpenUpdate] = useState(null);
    const [mobileMenuOpen, mobileMenuOpenUpdate] = useState(null);
    const [navState, updateNavState] = useState(null);
    const [mobileHideNav, updateMobileHideNav] = useState(null);
    const scroll = useRef(0);

    useEffect(() => {
        updateNavState(responsiveState(sizeIndex, collapsedAt));
    }, [sizeIndex, collapsedAt]);

    useEffect(() => {
        subMenuOpen ?
            document.body.style.overflow = 'hidden' :
            document.body.style.overflow = 'visible';
    }, [subMenuOpen]);

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
        return () => {
            window.removeEventListener('scroll', listenToScroll)
        }
    }, []);

    const listenToScroll = () => {
        let y = window.pageYOffset;
        console.log(scroll.current, y)
        if (scroll.current > y) {
            scroll.current = y;
            return updateMobileHideNav(false);
        }
        if (scroll.current <= y) {
            if (y >= hideDepth) {
                updateMobileHideNav(true);
            } else {
                updateMobileHideNav(false);
            }
        }
        scroll.current = y;
    }

    const openSubMenu = index => () => {
        console.log(index)
        if (index === subMenuOpen)
            return subMenuOpenUpdate(null);
        subMenuOpenUpdate(index);
    }

    const handleCloseSubMenu = () => {
        subMenuOpenUpdate(null);
    }

    const handleOpenMobileMenu = () => {
        mobileMenuOpenUpdate(!mobileMenuOpen);
    }

    const handleClick = (link) => () => {
        onNavigate(link);
        subMenuOpenUpdate(null);
        mobileMenuOpenUpdate(false);
    }

    return <>
        <div data-testid="Navbar" className={clsx("Navbar", navState)}>
            <div className={clsx("Navbar-head", { hide: mobileHideNav })}>
                <div className="Navbar-logo">
                    <ConditionalWrapper conditional={logoLink} wrapper={children => <a href={logoLink}>{children}</a>}>
                        <img src={navState === 'mobile' ? mobileLogo : logo} alt="logo" />
                    </ConditionalWrapper>
                </div>
                {navState === 'mobile' &&
                    <div className="Navbar-menuIcon" onClick={handleOpenMobileMenu}>
                        <Icon icon={mobileMenuOpen ? "close" : "menu"} size={mobileMenuOpen ? 18 : 24} />
                    </div>
                }
            </div>
            <div className={clsx("Navbar-navigation", { open: mobileMenuOpen })}>
                {menu.map((item, index) => {
                    return [<Menu.Item
                        key={index}
                        compact={(navState === 'tablet')}
                        title={item.title.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}
                        icon={item.icon}
                        chevron={item.children}
                        onClick={item.children ? openSubMenu(index) : handleClick(item.link)}
                        open={subMenuOpen === index}
                        active={activeLink === item.link}
                    >
                        {item.title}
                    </Menu.Item>,
                    <div key={`${index}-subMenu`}>
                        {item.children && navState === 'mobile' &&
                            <div className="Navbar-inlineSubMenu" style={{
                                height: subMenuOpen === index ? (67 * (item.children.length + 7)) : 0
                            }}>
                                {item.children.map((subItem, subIndex) => {
                                    return <Menu.Item
                                        key={`${index}-${subIndex}`}
                                        compact={navState === 'tablet'}
                                        title={subItem.title.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}
                                        chevron={subItem.children}
                                        onClick={handleClick(subItem.link)}
                                        open={subMenuOpen === index}
                                        active={activeLink === subItem.link}
                                    >
                                        {subItem.title}
                                    </Menu.Item>
                                })}
                            </div>
                        }
                    </div>
                    ]
                })}
            </div>
        </div>
        {(navState !== 'mobile') && menu.map((menuItem, index) => {
            if (menuItem.children)
                return <div key={index} className={clsx("Navbar-subMenu", { open: subMenuOpen === index })}>
                    <div className="Navbar-subMenu-close" onClick={handleCloseSubMenu}>
                        <Icon icon="chevron-left" size={18} />
                    </div>
                    {menuItem.children.map((subItem, index) => {
                        return <Menu.Item key={index} onClick={handleClick(subItem.link)} active={activeLink === subItem.link}>
                            {subItem.title}
                        </Menu.Item>
                    })}
                </div>
            return null;
        })}
    </>
};

export default Navbar;


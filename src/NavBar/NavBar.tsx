// import "./Navbar.scss";

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
    const menuRef = useRef();
    const subRef = useRef();

    useEffect(() => {
        updateNavState(responsiveState(sizeIndex, collapsedAt));
    }, [sizeIndex, collapsedAt]);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [mobileMenuOpen]);

    useEffect(() => {
        if (subMenuOpen) {
            if (navState !== 'mobile') {
                document.addEventListener("mousedown", handleSubMenuOffClick);
            }
        } else {
            document.removeEventListener("mousedown", handleSubMenuOffClick);
        }
    }, [subMenuOpen])

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => {
            window.removeEventListener('scroll', listenToScroll)
        }
    }, []);

    const handleSubMenuOffClick = e => {
        if (menuRef && menuRef.current) {
            //@ts-ignore
            if (!menuRef.current.contains(e.target) && !subRef.current.contains(e.target))
                subMenuOpenUpdate(false);
        }
    }

    const listenToScroll = () => {
        let y = window.pageYOffset;
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
        if (index === subMenuOpen)
            return subMenuOpenUpdate(null);
        subMenuOpenUpdate(index);
    }

    const handleCloseSubMenu = () => {
        subMenuOpenUpdate(null);
    }

    const handleOpenMobileMenu = () => {
        mobileMenuOpenUpdate(!mobileMenuOpen);
        console.log(mobileMenuOpen)
        if (!mobileMenuOpen)
            subMenuOpenUpdate(3);
    }

    const handleClick = (link) => () => {
        onNavigate(link);
        subMenuOpenUpdate(null);
        mobileMenuOpenUpdate(false);
    }

    return <>
        <div data-testid="Navbar" className={clsx("Navbar")} ref={menuRef}>
            <div className={clsx("Navbar-overlay", { open: mobileMenuOpen })} onClick={handleOpenMobileMenu}></div>
            <div className={clsx("Navbar-head", { hide: mobileHideNav })} id="Navbar-head">
                <div className="Navbar-logo">
                    <ConditionalWrapper conditional={logoLink} wrapper={children => <div className="Navbar-logo-container" onClick={handleClick(logoLink)}>{children}</div>}>
                        {mobileLogo} {logo}
                    </ConditionalWrapper>
                </div>
                <div className="Navbar-menuIcon" onClick={handleOpenMobileMenu}>
                    <Icon icon={mobileMenuOpen ? "close" : "menu"} size={mobileMenuOpen ? 18 : 24} />
                </div>
            </div>
            <div className={clsx("Navbar-navigation", { open: mobileMenuOpen })}>
                {menu.map((item, index) => {
                    return [<Menu.Item
                        key={index}
                        title={item.title}
                        icon={item.icon}
                        chevron={item.children}
                        onClick={item.children ? openSubMenu(index) : handleClick(item.link)}
                        open={subMenuOpen === index}
                        active={activeLink === item.link}
                    >
                        <ConditionalWrapper conditional={!!item.nextWrapper} wrapper={item.nextWrapper}>
                            {item.title}
                        </ConditionalWrapper>
                    </Menu.Item>,
                    <div key={`${index}-subMenu`} className={clsx({ "Navbar-inlineSubMenu-wrapper": item.children })}>
                        {item.children &&
                            <div className="Navbar-inlineSubMenu" style={{
                                height: subMenuOpen === index ? (67 * (item.children.length + 2)) : 0
                            }}>
                                {item.children.map((subItem, subIndex) => {
                                    return <Menu.Item
                                        key={`${index}-${subIndex}`}
                                        chevron={subItem.children}
                                        onClick={handleClick(subItem.link)}
                                        open={subMenuOpen === index}
                                        active={activeLink === subItem.link}
                                    >
                                        <ConditionalWrapper conditional={!!subItem.nextWrapper} wrapper={subItem.nextWrapper}>
                                            {subItem.title}
                                        </ConditionalWrapper>
                                    </Menu.Item>
                                })}
                            </div>
                        }
                    </div>
                    ]
                })}
            </div>
        </div>
        {menu.map((menuItem, index) => {
            if (menuItem.children)
                return <div key={index} ref={subRef} className={clsx("Navbar-subMenu", { open: subMenuOpen === index })}>
                    <div className="Navbar-subMenu-close" onClick={handleCloseSubMenu}>
                        <Icon icon="chevron-left" size={18} />
                    </div>
                    {menuItem.children.map((subItem, index) => {
                        return <Menu.Item key={index} onClick={handleClick(subItem.link)} active={activeLink === subItem.link}>
                            <ConditionalWrapper conditional={!!subItem.nextWrapper} wrapper={subItem.nextWrapper}>
                                {subItem.title}
                            </ConditionalWrapper>
                        </Menu.Item>
                    })}
                </div>
            return null;
        })}
    </>
};

export default Navbar;


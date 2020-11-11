import "./Menu.scss";

import { MenuItemProps, MenuProps, SubMenuProps } from "./Menu.types";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { childrenWithProps, responsiveState } from "../utils";

import ConditionalWrapper from "../ConditionalWrapper";
import Icon from "../Icon/Icon";
import Link from "../Link/Link";
import ToAppLevel from "../ToAppLevel";
import clsx from "clsx";
import useDimension from "../useDimension";
import { useResize } from "../useResize";

const Item: React.FC<MenuItemProps> = ({ icon, navState, children }) => (
    <div className={clsx("MenuItem")}>
        <Link icon={icon}>
            {children}
        </Link>
        {navState === 'mobile' &&
            <div className="MenuItem-chevron">
                <Icon icon="chevron-right" size={10} />
            </div>
        }
    </div>
)

const SubMenu: React.FC<SubMenuProps> = ({ icon, navState, mobileMenuOpen, title, children }) => {
    const subMenuRef = useRef();
    const dimensions = useDimension(subMenuRef)
    const [subMenuOpen, updateSubMenuOpen] = useState(false);
    const [subMenuHeight, updateSubMenuHeight] = useState<any>('auto');
    const intialHeight = useRef(undefined);

    useEffect(() => {
        if (intialHeight.current === undefined)
            intialHeight.current = dimensions?.height
        if (dimensions?.height)
            updateSubMenuHeight(0)
    }, [dimensions]);

    useEffect(() => {
        if (!mobileMenuOpen)
            handleSubMenu(false);
    }, [mobileMenuOpen])

    const handleSubMenu = (setOpen?: boolean) => {
        updateSubMenuOpen(setOpen ?? !subMenuOpen);
        updateSubMenuHeight((setOpen ?? !subMenuOpen) ? intialHeight.current : 0);
    }

    return <Fragment>
        <div className={clsx("MenuItem", { open: subMenuOpen })} onClick={() => handleSubMenu()}>
            <Link icon={icon}>
                {title}
            </Link>
            {navState !== 'tablet' &&
                <div className={clsx("MenuItem-chevron")}>
                    <Icon icon="chevron-right" size={10} />
                </div>
            }
        </div>
        <ConditionalWrapper conditional={navState !== 'mobile'} wrapper={children => <ToAppLevel>{children}</ToAppLevel>}>
            <div className={clsx("SubMenu", navState, { open: subMenuOpen })} ref={subMenuRef} style={{ height: subMenuHeight }}>
                {navState !== 'mobile' &&
                    <div className="SubMenu-close" onClick={() => handleSubMenu()}>
                        <Icon icon="chevron-left" />
                    </div>
                }
                <div className="SubMenu-links">
                    {children}
                </div>
            </div>
        </ConditionalWrapper>
    </Fragment>
};

const Menu: React.FC<MenuProps> & { SubMenu: typeof SubMenu } & { Item: typeof Item } = ({ children, collapsedAt, mobileMenuOpen }) => {
    const { sizeIndex } = useResize();
    const [navState, updateNavState] = useState(null);
    useEffect(() => {
        updateNavState(responsiveState(sizeIndex, collapsedAt));
    }, [sizeIndex, collapsedAt])

    return <div data-testid="Menu" className={clsx("Menu", navState)}>{childrenWithProps(children, { navState, mobileMenuOpen })}</div>
};

Menu.Item = Item;
Menu.SubMenu = SubMenu;

export default Menu;


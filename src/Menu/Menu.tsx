import "./Menu.scss";

import { MenuItemProps, MenuProps } from "./Menu.types";
import React, { useEffect, useState } from "react";
import { childrenWithProps, responsiveState } from "../utils";

import Icon from "../Icon/Icon";
import Link from "../Link/Link";
import clsx from "clsx";
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

const Menu: React.FC<MenuProps> & { Item: typeof Item } = ({ children, collapsedAt }) => {
    const { sizeIndex } = useResize();
    const [navState, updateNavState] = useState(null);
    useEffect(() => {
        updateNavState(responsiveState(sizeIndex, collapsedAt));
    }, [sizeIndex, collapsedAt])

    return <div data-testid="Menu" className={clsx("Menu", navState)}>{childrenWithProps(children, { navState })}</div>
};

Menu.Item = Item;

export default Menu;


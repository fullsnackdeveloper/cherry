import "./Menu.scss";

import { MenuItemProps, MenuProps } from "./Menu.types";

import Icon from "../Icon/Icon";
import Link from "../Link/Link";
import React from "react";
import { childrenWithProps } from "../utils";
import clsx from "clsx";

const Item: React.FC<MenuItemProps> = ({ icon, mobile, children }) => (
    <div className={clsx("MenuItem")}>
        <Link icon={icon}>
            {children}
        </Link>
        {mobile &&
            <div className="MenuItem-chevron">
                <Icon icon="chevron-right" size={10} />
            </div>
        }
    </div>
)

const Menu: React.FC<MenuProps> & { Item: typeof Item } = ({ children, collapsed, mobile }) => (
    <div data-testid="Menu" className={clsx("Menu", collapsed)}>{childrenWithProps(children, { mobile })}</div>
);

Menu.Item = Item;

Menu.defaultProps = {
    collapsed: false
}

export default Menu;


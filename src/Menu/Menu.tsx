import "./Menu.scss";

import { MenuItemProps, MenuProps } from "./Menu.types";

import Link from "../Link/Link";
import React from "react";

const Item: React.FC<MenuItemProps> = ({ icon, children }) => (
    <div className="MenuItem">
        <Link icon={icon}>
            {children}
        </Link>
    </div>
)

const Menu: React.FC<MenuProps> & { Item: typeof Item } = ({ children }) => (
    <div data-testid="Menu" className="Menu">{children}</div>
);

Menu.Item = Item;

export default Menu;


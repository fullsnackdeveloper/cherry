import "./Menu.scss";

import { MenuItemProps, MenuProps } from "./Menu.types";
import React, { useEffect, useState } from "react";
import { childrenWithProps, responsiveState } from "../utils";

import ConditionalWrapper from "../ConditionalWrapper";
import Icon from "../Icon/Icon";
import Link from "../Link/Link";
import ToolTip from "../ToolTip/ToolTip";
import clsx from "clsx";
import { useResize } from "../useResize";

const Item: React.FC<MenuItemProps> = ({ open, compact, active, icon, children, title, chevron, onClick }) => (
    <div className={clsx("MenuItem", { open })}>
        <ToolTip message={title} disabled={!compact}>
            <Link compact={compact} onClick={onClick} icon={icon} active={active}>
                {children}
            </Link>
        </ToolTip>
        {chevron && !compact &&
            <div className="MenuItem-chevron">
                <Icon icon="chevron-right" size={10} />
            </div>
        }
    </div>
)

const Menu: React.FC<MenuProps> & { Item: typeof Item } = ({ children, collapsedAt, mobileMenuOpen }) => {
    const { sizeIndex } = useResize();
    const [navState, updateNavState] = useState(null);
    useEffect(() => {
        updateNavState(responsiveState(sizeIndex, collapsedAt));
    }, [sizeIndex, collapsedAt])

    return <div data-testid="Menu" className={clsx("Menu", navState)}>{childrenWithProps(children, { navState, mobileMenuOpen })}</div>
};

Menu.Item = Item;

export default Menu;


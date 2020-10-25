import "./NavBar.scss";

import { NavBarProps } from "./NavBar.types";
import React from "react";

const NavBar: React.FC<NavBarProps> = ({ logo, collapsed, children }) => {

    const childrenWithProps = () => {
        return React.Children.map(children, child => {
            const props = { collapsed };
            if (React.isValidElement(child)) {
                return React.cloneElement(child, props);
            }
            return child;
        });
    }

    return <div data-testid="NavBar" className="NavBar">
        <div className="NavBar-logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="NavBar-navigation">
            {childrenWithProps()}
        </div>
    </div>
};

export default NavBar;


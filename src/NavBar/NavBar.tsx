import "./NavBar.scss";

import { NavBarProps } from "./NavBar.types";
import React from "react";

const NavBar: React.FC<NavBarProps> = ({ logo, children }) => (
    <div data-testid="NavBar" className="NavBar">
        <div className="Sidebar-logo">
            <img src={logo} alt="logo" />
        </div>
        {children}
    </div>
);

export default NavBar;


import "./ActionBar.scss";

import { ActionBarProps } from "./ActionBar.types";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import React from "react";
import ToolTip from "../ToolTip/ToolTip";

const ActionBar: React.FC<ActionBarProps> = ({ children }) => (
    <div data-testid="ActionBar" className="ActionBar">
        <ToolTip message="Author">
            <Avatar initials="NO" />
        </ToolTip>
        <ToolTip message="Products">
            <Button icon="tags" type="icon" iconSize={26} />
        </ToolTip>
        <ToolTip message="Share">
            <Button icon="send" type="icon" iconSize={24} />
        </ToolTip>
    </div>
);

export default ActionBar;


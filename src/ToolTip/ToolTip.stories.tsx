import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import React from "react";
import ToolTip from "./ToolTip";

export default {
    title: "ToolTip",
    component: ToolTip
};

export const Default = () => <ToolTip message="Author">
    <Avatar initials="NO" />
</ToolTip>;

export const ToolTipAnything = () => <div style={{ display: "flex", justifyContent: "center" }}>
    <ToolTip message="This is a drill" position="left">
        <Button type="icon" icon="drill" iconSize={30} />
    </ToolTip>
</div>;

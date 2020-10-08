import Button from "./Button";
import React from "react";

export default {
    title: "Button",
    component: Button
};

export const Primary = () => <Button>Click here</Button>;

export const Secondary = () => <Button type="secondary">Click here</Button>;

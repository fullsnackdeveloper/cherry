import Divider from "./Divider";
import React from "react";

export default {
    title: "Divider",
    component: Divider
};

export const Default = () => <Divider />;

export const withText = () => <Divider children="Next Article" />;

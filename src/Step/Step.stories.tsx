import React from "react";
import Step from "./Step";

export default {
    title: "Step",
    component: Step
};

export const Default = () =>
    <div style={{ marginLeft: 50 }}>
        <Step stepNum={1} totalSteps={12} html="<h2>This is some heading text</h2>" />
    </div>

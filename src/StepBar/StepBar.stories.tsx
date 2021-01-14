import React, { useState } from "react";

import StepBar from "./StepBar";

export default {
    title: "StepBar",
    component: StepBar
};


export const Default = () => {
    const [step, updateStep] = useState(0);
    const handleClick = s => {
        console.log(s)
        updateStep(s)
    }

    return <StepBar activeStep={step} onSelect={handleClick} steps={[
        {
            key: 1,
            title: "Make something happen"
        },
        {
            key: 2,
            title: "Something once its done"
        },
        {
            key: 3,
            title: "There you go its close"
        },
        {
            key: 4,
            title: "Finished it"
        }
    ]} />
};

export const withWrapper = () => <StepBar activeStep={2} onSelect={() => alert('hey')} wrapper={children => <i className={"something"}>{children}</i>} steps={[
    {
        key: 1,
        title: "Make something happen"
    },
    {
        key: 2,
        title: "Something once its done"
    },
    {
        key: 3,
        title: "There you go its close"
    },
    {
        key: 4,
        title: "Finished it"
    }
]} />;

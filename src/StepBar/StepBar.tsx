import "./StepBar.scss";

import React, { useEffect, useState } from "react";

import ConditionalWrapper from "../ConditionalWrapper";
import { StepBarProps } from "./StepBar.types";
import Tag from "../Tag/Tag";

const StepBar: React.FC<StepBarProps> = ({ steps, wrapper, activeStep }) => {
    const [currentStep, updateCurrentStep] = useState(0);

    useEffect(() => {
        updateCurrentStep(activeStep)
    }, [activeStep])

    return <div data-testid="StepBar" className="StepBar">
        <div className="StepBar-setup">
            <ConditionalWrapper conditional={wrapper} wrapper={wrapper} props={{ index: 0 }}>
                <Tag activate={0 === currentStep}>Setup</Tag>
            </ConditionalWrapper>
        </div>
        <div className="StepBar-scroll">
            {steps.map((step, index) => (
                <div key={step.key} className="StepBar-step">
                    <ConditionalWrapper conditional={wrapper} wrapper={wrapper} props={{ index: index + 1 }}>
                        <Tag activate={step.key === currentStep}><span>Step {index + 1}:</span>{step.title}</Tag>
                    </ConditionalWrapper>
                </div>
            ))}
        </div>
    </div >
};

export default StepBar;


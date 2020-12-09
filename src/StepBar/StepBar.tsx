import "./StepBar.scss";

import React, { useState } from "react";

import ConditionalWrapper from "../ConditionalWrapper";
import { StepBarProps } from "./StepBar.types";
import Tag from "../Tag/Tag";

const StepBar: React.FC<StepBarProps> = ({ steps, onSelect, wrapper }) => {
    const [currentStep, updateCurrentStep] = useState(0);

    const handleStepSelect = key => () => {
        updateCurrentStep(key);
        onSelect(key);
    }

    return <div data-testid="StepBar" className="StepBar">
        <div className="StepBar-setup" onClick={handleStepSelect(0)}>
            <Tag activate={0 === currentStep}>Setup</Tag>
        </div>
        <div className="StepBar-scroll">
            {steps.map((step, index) => (
                <div key={step.key} className="StepBar-step" onClick={handleStepSelect(step.key)}>
                    <ConditionalWrapper conditional={wrapper} wrapper={wrapper}>
                        <Tag activate={step.key === currentStep}><span>Step {index + 1}:</span>{step.title}</Tag>
                    </ConditionalWrapper>
                </div>
            ))}
        </div>
    </div>
};

export default StepBar;


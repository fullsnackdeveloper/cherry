import "./StepBar.scss";

import React, { useState } from "react";

import { StepBarProps } from "./StepBar.types";
import Tag from "../Tag/Tag";

const StepBar: React.FC<StepBarProps> = ({ steps }) => {
    const [currentStep, updateCurrentStep] = useState(0);

    const handleStepSelect = key => () => {
        updateCurrentStep(key);
    }

    return <div data-testid="StepBar" className="StepBar">
        <div className="StepBar-setup" onClick={handleStepSelect(0)}>
            <Tag activate={0 === currentStep}>Setup</Tag>
        </div>
        {steps.map((step, index) => (
            <div key={step.key} className="StepBar-step" onClick={handleStepSelect(step.key)}>
                <Tag activate={step.key === currentStep}><span>Step: {index + 1}</span>{step.title}</Tag>
            </div>
        ))}
    </div>
};

export default StepBar;


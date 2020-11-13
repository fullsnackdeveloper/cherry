import "./Step.scss";

import React from "react";
import { StepProps } from "./Step.types";

const Step: React.FC<StepProps> = ({ html, stepNum, totalSteps }) => (
    <div data-testid="Step" className="Step">
        <div className="Step-num"><span>{('0' + stepNum).slice(-2)}</span><span>/{totalSteps}</span></div>
        <div className="Step-heading" dangerouslySetInnerHTML={html && { __html: html }} />
    </div>
);

export default Step;


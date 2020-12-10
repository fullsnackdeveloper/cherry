import { ReactNode } from 'react';

export interface StepBarProps {
    steps: any[];
    onSelect: (number) => void;
    wrapper?: any;
    activeStep: number;
}

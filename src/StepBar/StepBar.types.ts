import { ReactNode } from 'react';

export interface StepBarProps {
    steps: any[];
    onSelect: (number) => void;
}

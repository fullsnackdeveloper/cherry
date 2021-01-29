import { ReactNode } from 'react';

export interface ModalProps {
    children: ReactNode | ReactNode[];
    open?: boolean,
    maxWidth?: number,
    maxHeight?: number,
    close?: () => void
}

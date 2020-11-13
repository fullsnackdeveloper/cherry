import { ReactNode } from 'react';

export interface CarouselProps {
    /**
    * children prop
    */
    children: React.ReactNode[],
    columns: number[],
}

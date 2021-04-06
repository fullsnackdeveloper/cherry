
export interface StoryProps {
    title: string;
    description?: string;
    image: string;
    secondImage?: string;
    author: any;
    onClick?: () => void;
    linkText: string;
    frameNum?: number;
    share?: {
        facebook?: string;
        twitter?: string;
        pinterest?: string;
        copy?: string;
    }
    template?: {
        main?: {
            position?: 'middle' | 'top' | 'bottom'
            align?: 'left' | 'right' | 'center'
            background: {
                visible: boolean
                fullwidth: boolean
            }
        },
        author?: {
            showName: boolean
        }
    }
}

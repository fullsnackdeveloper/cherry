
export interface StoryProps {
    title: string;
    description?: string;
    image: string;
    author: any;
    link: string;
    linkText: string;
    template?: {
        main?: {
            position?: 'middle' | 'top' | 'bottom'
            align?: 'left' | 'right' | 'center'
        },
        author?: {
            position?: 'top' | 'bottom'
        },
        link?: {
            type?: 'tab' | 'button'
        }
    }
}

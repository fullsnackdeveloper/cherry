
export interface ImageProps {
    image: {
        src: string,
        alt: string
        source?: {
            author?: {
                name?: string,
                link?: string
            },
            site?: {
                name?: string,
                link?: string
            }
        },
    };
    hotspots?:
    {
        title: string,
        url: string,
        x: number,
        y: number
    }[]
}

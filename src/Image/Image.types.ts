
export interface ImageProps {
    image: {
        url: string,
        alt: string
        source: string,
        sourceUrl: string
    };
    hotspots?:
    {
        title: string,
        url: string,
        x: number,
        y: number
    }[]
}

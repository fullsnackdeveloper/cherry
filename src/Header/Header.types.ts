
export interface HeaderProps {
    title?: string,
    subTitle?: string,
    description?: string,
    image?: {
        src: string,
        alt: string
    },
    categories?: { title: string, uri: string }[],
    stats?: { measurement: string, amount: string }[],
    collapsedAt?: []
}

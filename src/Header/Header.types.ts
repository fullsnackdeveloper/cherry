
export interface HeaderProps {
    title?: string,
    subTitle?: string,
    description?: string,
    image?: {
        src: string,
        alt: string
    },
    categories?: { name: string, link: string }[],
    stats?: { measurement: string, amount: string }[],
    collapsedAt?: []
}

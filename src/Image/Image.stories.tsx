import Image from "./Image";
import React from "react";

export default {
    title: "Image",
    component: Image
};

const image = {
    src: 'https://images.unsplash.com/photo-1474128670149-7082a8d370ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    alt: 'chute',
    source: {
        author: {
            name: 'Paterson Mongumry',
            link: 'https://someone.com',
        },
        site: {
            name: 'Unsplash',
            link: 'https://unsplash.com',
        }
    }
}

const hotspots = [
    {
        title: "The Awesome Blue Mask",
        link: "https://amazon.com",
        x: 58,
        y: 40,
    },
    {
        title: "This other really cool thing with a long name",
        link: "https://amazon.com",
        x: 50,
        y: 50,
    }
]

export const Default = () => <Image image={image} hotspots={hotspots}>
    <img src={image.src} alt={image.alt} />
</Image>;
export const sameSiteAuthorName = () => <Image image={image} hotspots={hotspots}>
    <img src={image.src} alt={image.alt} />
</Image>;

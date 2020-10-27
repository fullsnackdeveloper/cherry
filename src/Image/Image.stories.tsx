import Image from "./Image";
import React from "react";

export default {
    title: "Image",
    component: Image
};

const image = {
    url: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
    alt: 'chute',
    source: 'Paterson Mongumry',
    sourceUrl: 'https://someone.com',
}

const hotspots = [
    {
        title: "The Awesome Blue Mask",
        url: "https://amazon.com",
        x: 58,
        y: 38,
    },
    {
        title: "This other really cool thing with a long name",
        url: "https://amazon.com",
        x: 90,
        y: 59,
    }
]

export const Default = () => <Image image={image} hotspots={hotspots} />;

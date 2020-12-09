import Header from "./Header";
import React from "react";

export default {
    title: "Header",
    component: Header
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

export const Default = () => <Header
    title="Header Title About Something Really Long to Test the Stretching Feature"
    subTitle="We’re here to help you out with whatever project you are working on, let’s DIY together!"
    // description="Originally contributed by name here • last updated 10/20/20"
    image={image}
    squiggle
    categories={[
        {
            title: 'Garden',
            uri: '/category/garden'
        },
        {
            title: 'Pottery',
            uri: '/category/garden/pottery'
        },
        {
            title: 'Planters',
            uri: '/category/garden/pottery/planters'
        },
    ]}
></Header>;

export const WithStats = () => <Header
    title="Header Title About Something Really Long to Test the Stretching Feature"
    description="Originally contributed by name here • last updated 10/20/20"
    image={{
        src: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        alt: "some alt text here"
    }}
    categories={[
        {
            title: 'Garden',
            uri: '/category/garden'
        },
        {
            title: 'Pottery',
            uri: '/category/garden/pottery'
        },
        {
            title: 'Planters',
            uri: '/category/garden/pottery/planters'
        },
    ]}
    stats={[
        {
            amount: '10Mins',
            measurement: 'Prep Time'
        },
        {
            amount: 'hard',
            measurement: 'Difficulty'
        },
        {
            amount: '2hr',
            measurement: 'Active Time'
        },
    ]}
></Header >;

export const Display = () => <Header
    maxWidth={380}
    title="Let’s How -To Together"
    subTitle="Skip store bought decorations and personalize your space with items that you make yourself. Browse beautiful and easy-to-follow DIY projects for every room in your home."
    image={{
        src: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        alt: "some alt text here"
    }}
    squiggle
></Header>;
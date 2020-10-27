import Header from "./Header";
import React from "react";

export default {
    title: "Header",
    component: Header
};

export const Default = () => <Header
    title="Header Title"
    // subTitle="We’re here to help you out with whatever project you are working on, let’s DIY together!"
    description="Originally contributed by name here • last updated 10/20/20"
    image="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    categories={[
        {
            name: 'Garden',
            link: '/category/garden'
        },
        {
            name: 'Pottery',
            link: '/category/garden/pottery'
        },
        {
            name: 'Planters',
            link: '/category/garden/pottery/planters'
        },
    ]}
></Header>;

import Header from "./Header";
import React from "react";

export default {
    title: "Header",
    component: Header
};

export const Default = () => <Header
    title="Header Title About Something Really Long to Test the Stretching Feature"
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

export const WithStats = () => <Header
    title="Header Title About Something Really Long to Test the Stretching Feature To Make it Always Look Good"
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

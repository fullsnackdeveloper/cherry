import Header from "./Header";
import React from "react";

export default {
    title: "Header",
    component: Header
};

export const Fullwidth = () => <Header
    title="Header Title"
    description="We’re here to help you out with whatever project you are working on, let’s DIY together!"
    image="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
></Header>;

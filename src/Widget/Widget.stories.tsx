import Card from "../Card/Card";
import React from "react";
import Widget from "./Widget";

export default {
    title: "Widget",
    component: Widget
};

export const Default = () => <Widget
    title="Make it"
    subTitle="DIY Projects tutorials, stories and more."
    link="/DIY-projects"
    linkText="See all DIY projects"
    color="#E18C5B"
>
    <Card
        title="Weaving"
        type="category"
        size="list"
        image="https://images.unsplash.com/photo-1593671186131-d58817e7dee0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    />
    <Card
        title="Ceramics"
        type="category"
        size="list"
        image="https://images.unsplash.com/photo-1532570204726-145c7199f10e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    />
    <Card
        title="Paper Crafts"
        type="category"
        size="list"
        image="https://images.unsplash.com/photo-1562173272-edd6186e492b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    />
</Widget>;

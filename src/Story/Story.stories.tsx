
import React from "react";
import Story from "./Story";
import Carousel from "../Carousel/Carousel";

export default {
    title: "Story",
    component: Story
};

const Template = (args) => <Story {...args} />;
export const Default = Template.bind({});

Default.args = {
    title: "The top 10 best examples",
    description: "This is an optional area for text",
    image: "https://images.unsplash.com/photo-1612831457732-0f6b2156b92d?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80",
    author: {
        name: "Kevin Malone",
        image: "https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
    },
    link: "https://makey.com",
    linkText: "Read more",
    template: {
        main: {
            position: 'middle'
        },
        link: {
            type: 'button'
        }
    }
}

export const CarouselStories = () => <Carousel columns={[1]}>
    <Story
        title="The Top 10 best examples"
        description="This is an optional area for text"
        image="https://images.unsplash.com/photo-1612831457732-0f6b2156b92d?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
        author={{
            name: "Kevin Malone",
            image: "https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        }}
        link="https://makey.com"
        linkText="Read more"
    />
    <Story
        title="The Top 10 best examples"
        description="This is an optional area for text"
        image="https://images.unsplash.com/photo-1615929380854-c39b4ac2cdb5?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        author={{
            name: "Kevin Malone",
            image: "https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        }}
        link="https://makey.com"
        linkText="Read more"
    />
    <Story
        title="The Top 10 best examples"
        description="This is an optional area for text"
        image="https://images.unsplash.com/photo-1615940073726-44554844aa6d?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        author={{
            name: "Kevin Malone",
            image: "https://images.unsplash.com/photo-1520223297779-95bbd1ea79b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
        }}
        link="https://makey.com"
        linkText="Read more"
    />
</Carousel>;


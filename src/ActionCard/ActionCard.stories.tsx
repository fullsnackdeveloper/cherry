import ActionCard from "./ActionCard";
import React from "react";

export default {
    title: "ActionCard",
    component: ActionCard,
    argTypes: {
        color: { control: 'color' },
        title: { control: 'text', defaultValue: 'Make it' },
        link: { control: 'text', defaultValue: 'See All DIY Projects' },
        icon: {
            control: {
                type: 'select',
                options: [null, 'drill', 'home', 'discover'],
            },
        },
    },
};

export const Default = ({ color, title, link, icon }) => <ActionCard
    color={color}
    title={title}
    icon={icon}
    link="https://google.com"
    linkText={link}
    image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
/>;

export const WithIcon = () => <ActionCard
    title="Fix it"
    icon="drill"
    link="https://google.com"
    linkText="See All DIY Projects"
    image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    color="#c69e7c"
/>;


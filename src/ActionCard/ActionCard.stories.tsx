import ActionCard from "./ActionCard";
import React from "react";

export default {
    title: "ActionCard",
    component: ActionCard
};

export const Default = () => <ActionCard
    title="Make it"
    link="https://google.com"
    linkText="See All DIY Projects"
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


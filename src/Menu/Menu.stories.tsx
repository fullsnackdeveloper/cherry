import Menu from "./Menu";
import { Meta } from '@storybook/react/types-6-0';
import React from "react";

export default {
    title: "Menu",
    component: Menu,
    subcomponents: {
        MenuItem: Menu.Item
    }
} as Meta;

export const Default = (args) => <Menu {...args}>
    <Menu.Item icon="home">home</Menu.Item>
    <Menu.Item icon="discover">discover</Menu.Item>
    <Menu.Item icon="categories">categories</Menu.Item>
    <Menu.Item icon="more">more</Menu.Item>
</Menu>;

import Menu from "./Menu";
import { Meta } from '@storybook/react/types-6-0';
import React from "react";

export default {
    title: "Menu",
    component: Menu,
    subcomponents: {
        MenuItem: Menu.Item,
        SubMenu: Menu.SubMenu,
    }
} as Meta;

export const Default = (args) => <Menu {...args}>
    <Menu.Item icon="home">home</Menu.Item>
    <Menu.Item icon="discover">discover</Menu.Item>
    <Menu.SubMenu title="more" icon="more">
        <Menu.Item>About</Menu.Item>
        <Menu.Item>Contact</Menu.Item>
    </Menu.SubMenu>
    <Menu.Item icon="categories">categories</Menu.Item>
</Menu>;

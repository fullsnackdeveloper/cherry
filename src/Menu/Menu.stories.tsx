import Menu from "./Menu";
import React from "react";

export default {
    title: "Menu",
    component: Menu
};

export const Default = () => <Menu>
    <Menu.Item icon="home">home</Menu.Item>
    <Menu.Item icon="discover">discover</Menu.Item>
    <Menu.Item icon="categories">categories</Menu.Item>
    <Menu.Item icon="more">more</Menu.Item>
</Menu>;

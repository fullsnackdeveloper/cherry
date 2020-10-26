import Button from "../Button/Button";
import Link from "../Link/Link";
import Menu from "../Menu/Menu";
import NavBar from "./NavBar";
import React from "react";
import logo from '../images/logo.png'
import mobileLogo from '../images/logo-horizontal.png'

export default {
    title: "NavBar",
    component: NavBar
};

export const Default = (args) => <NavBar {...args} logo={logo} mobileLogo={mobileLogo}>
    <Menu collapsed={args.collapsed}>
        <Menu.Item icon="home">home</Menu.Item>
        <Menu.Item icon="discover">discover</Menu.Item>
        <Menu.Item icon="categories">categories</Menu.Item>
        <Menu.Item icon="more">more</Menu.Item>
    </Menu>
</NavBar>;

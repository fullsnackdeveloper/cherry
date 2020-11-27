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

export const Default = (args) => <NavBar {...args} logo={logo} logoLink="/" mobileLogo={mobileLogo} collapsedAt={[2, 3]}>
    <Menu>
        <Menu.Item icon="home" active>home</Menu.Item>
        <Menu.Item icon="discover">discover</Menu.Item>
        <Menu.Item icon="categories">categories</Menu.Item>
        <Menu.SubMenu title="more" icon="more">
            <Menu.Item>about</Menu.Item>
            <Menu.Item>contact</Menu.Item>
        </Menu.SubMenu>
    </Menu>
</NavBar>;

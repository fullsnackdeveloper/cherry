import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import NavBar from "../NavBar/NavBar";
import PageContainer from "./PageContainer";
import React from "react";
import logo from '../images/logo.png'
import mobileLogo from '../images/logo-horizontal.png'

export default {
    title: "PageContainer",
    component: PageContainer
};

export const Default = () => <PageContainer collapsedAt={[2, 3]}>
    <NavBar logo={logo} mobileLogo={mobileLogo}>
        <Menu>
            <Menu.Item icon="home">home</Menu.Item>
            <Menu.Item icon="discover">discover</Menu.Item>
            <Menu.Item icon="categories">categories</Menu.Item>
            <Menu.Item icon="more">more</Menu.Item>
        </Menu>
    </NavBar>
    <Header
        title="Header Title"
        subTitle="We’re here to help you out with whatever project you are working on, let’s DIY together!"
        // description="Originally contributed by name here • last updated 10/20/20"
        image={{
            src: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            alt: "header image"
        }}
    ></Header>
</PageContainer>;

import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Navbar from "../Navbar/Navbar";
import PageContainer from "./PageContainer";
import React from "react";
import logo from '../images/logo.png'
import mobileLogo from '../images/logo-horizontal.png'

export default {
    title: "PageContainer",
    component: PageContainer
};

export const Default = () => <PageContainer collapsedAt={[2, 3]}>
    <Navbar
        logo={logo}
        mobileLogo={mobileLogo}
        collapsedAt={[2, 3]}
        menu={[
            {
                title: 'home',
                icon: 'home',
                link: '/'
            },
            {
                title: 'discover',
                icon: 'discover',
                link: '/discover'
            },
            {
                title: 'categories',
                icon: 'categories',
                link: '/categories'
            },
            {
                title: 'more',
                icon: 'more',
                children: [
                    {
                        title: 'about',
                        link: '/about'
                    },
                    {
                        title: 'contact',
                        link: '/contact'
                    }
                ]
            }
        ]}
    />
    <Header
        title="Header Title"
        subTitle="We’re here to help you out with whatever project you are working on, let’s DIY together!"
        image={{
            src: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            alt: "header image"
        }}
    ></Header>
</PageContainer>;

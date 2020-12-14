import Menu from "../Menu/Menu";
import Navbar from "./NavBar";
import React from "react";
import logo from '../images/logo.png';
import mobileLogo from '../images/logo-horizontal.png';

export default {
    title: "Navbar",
    component: Navbar
};

const handleNavigate = () => {
    console.log('click')
}

export const Default = () => <Navbar onNavigate={handleNavigate} logo={logo} logoLink="/" mobileLogo={mobileLogo} collapsedAt={[2, 3]} menu={[
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
    }
]} />;

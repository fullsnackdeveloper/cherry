import Button from "../Button/Button";
import NavBar from "./NavBar";
import React from "react";
import logo from '../images/logo@4x.png'

export default {
    title: "NavBar",
    component: NavBar
};

export const Default = () => <NavBar logo={logo}>
    <Button>link</Button>
</NavBar>;

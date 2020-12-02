import Image from "../Image/Image";
import React from "react";
import SideBySide from "./SideBySide";

export default {
    title: "SideBySide",
    component: SideBySide
};

export const Default = () => <SideBySide
    top={<div>
        <h2>What You'll Need</h2>
    </div>}
    left={<div>
        <h3>Equipment</h3>
        <ul>
            <li>Equipment</li>
            <li>Equipment</li>
            <li>Equipment</li>
            <li>Equipment</li>
            <li>Equipment</li>
            <li>Equipment</li>
        </ul>
    </div>}
    right={<div>
        <h3>Material</h3>
        <ul>
            <li>Material</li>
            <li>Material</li>
            <li>Material</li>
        </ul>
    </div>}
/>;

export const withImage = () => <SideBySide
    ratio="30-70"
    top={<div>
        <h2>What You'll Need</h2>
    </div>}
    left={[<div key="1" style={{ marginBottom: 24 }}>
        <h3>Equipment</h3>
        <ul>
            <li>Equipment</li>
            <li>Equipment</li>
            <li>Equipment</li>
            <li>Equipment</li>
            <li>Equipment</li>
            <li>Equipment</li>
        </ul>
    </div>,
    <div key="2">
        <h3>Material</h3>
        <ul>
            <li>Material</li>
            <li>Material</li>
            <li>Material</li>
        </ul>
    </div>]}
    right={
        <Image image={{ src: "https://images.unsplash.com/photo-1602526429399-f5955066ffe2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2195&q=80", alt: "something" }} />
    }
/>;
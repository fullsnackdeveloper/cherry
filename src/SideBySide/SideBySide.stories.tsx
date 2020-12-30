import Image from "../Image/Image";
import React from "react";
import SideBySide from "./SideBySide";

export default {
    title: "SideBySide",
    component: SideBySide
};

const image = {
    src: 'https://images.unsplash.com/photo-1474128670149-7082a8d370ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    alt: 'chute',
    source: {
        author: {
            name: 'Paterson Mongumry',
            link: 'https://someone.com',
        },
        site: {
            name: 'Unsplash',
            link: 'https://unsplash.com',
        }
    }
}

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
    backgroundColor="#F3F4F7"
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
        <Image image={image}>
            <img src={image.src} alt={image.alt} />
        </Image>
    }
/>;
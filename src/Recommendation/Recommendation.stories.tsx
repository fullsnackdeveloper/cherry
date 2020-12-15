import React from "react";
import Recommendation from "./Recommendation";

export default {
    title: "Recommendation",
    component: Recommendation
};

const article = {
    title: "This is the title of the article",
    description: "One of the most inspirational fake articles I have ever written",
    image: {
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
    },
    uri: "/example"
}

export const Default = () => <Recommendation {...article} onClick={() => alert('something')} />;
export const lesson = () => <Recommendation {...article} onClick={() => alert('something')} type="lesson" />;

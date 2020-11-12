import React from "react";
import Stats from "./Stats";

export default {
    title: "Stats",
    component: Stats
};

export const Default = () => <Stats stats={[
    {
        amount: '10Mins',
        measurement: 'Prep Time'
    },
    {
        amount: 'hard',
        measurement: 'Difficulty'
    },
    {
        amount: '2hr',
        measurement: 'Active Time'
    },
]} />;

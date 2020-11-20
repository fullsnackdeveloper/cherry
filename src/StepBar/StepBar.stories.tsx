import React from "react";
import StepBar from "./StepBar";
import Tag from '../Tag/Tag';
import _ from 'lodash';

export default {
    title: "StepBar",
    component: StepBar
};

export const Default = () => <StepBar steps={[
    {
        key: 1,
        title: "Step 1: Make something happen"
    },
    {
        key: 2,
        title: "Step 2: Something once its done"
    },
    {
        key: 3,
        title: "Step 3: There you go its close"
    },
    {
        key: 4,
        title: "Step 4: Finished it"
    }
]} />;

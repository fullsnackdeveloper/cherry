import React, { useState } from "react";

import ActionBar from "./ActionBar";
import Link from "../Link/Link";
import PageContainer from "../PageContainer/PageContainer";
import StepBar from "../StepBar/StepBar";

export default {
    title: "ActionBar",
    component: ActionBar
};

export const Default = () => {

    const [closeSteps, updateCloseSteps] = useState(false);

    return <PageContainer>
        <ActionBar
            top={100}
            authorAvatar="https://images.unsplash.com/photo-1606802523486-7fb118e84b8c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
            authorContent={<div>
                <h3>Originally contributed by Trent Weston</h3>
                <p>Hey, I’m Trent a Home repair writer with 20 years of hands-on home remodelling, fixing, and improving experience, here to guide you through your next home Reno project!</p>
                <Link>See profile</Link>
                <hr />
                <Link>Editorial guidelines</Link>
            </div>}
            productContent={<div>
                <h3>No products have been added yet.</h3>
            </div>}
            closeSteps={closeSteps}
            steps={<StepBar onSelect={() => { updateCloseSteps(true), setTimeout(() => updateCloseSteps(false), 200) }} steps={[
                {
                    key: 1,
                    title: "Make something happen"
                },
                {
                    key: 2,
                    title: "Something once its done"
                },
                {
                    key: 3,
                    title: "There you go its close"
                },
                {
                    key: 4,
                    title: "Finished it"
                }
            ]} />}
        />
    </PageContainer>
};

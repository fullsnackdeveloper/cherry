import "./Icon.scss";

import { Menu, View } from "@streamlinehq/streamline-regular/lib/interface-essential";

import { Alerts } from "@streamlinehq/streamline-regular/lib/interface-essential";
import { Apps } from "@streamlinehq/streamline-regular/lib/programing-apps-websites";
import { Arrows } from "@streamlinehq/streamline-regular/lib/arrows-diagrams";
import { Books } from "@streamlinehq/streamline-regular/lib/content";
import { Envelopes } from "@streamlinehq/streamline-regular/lib/emails";
import { FormValidation } from "@streamlinehq/streamline-regular/lib/interface-essential";
import { Glasses } from "@streamlinehq/streamline-regular/lib/clothes-footwear-accessories";
import { Home } from "@streamlinehq/streamline-regular/lib/interface-essential";
import { IconProps } from "./Icon.types";
import { Layouts } from "@streamlinehq/streamline-regular/lib/interface-essential";
import { LinkUnlink } from "@streamlinehq/streamline-regular/lib/interface-essential";
import { LoveIt } from "@streamlinehq/streamline-regular/lib/social-medias-rewards-rating";
import { PhotosImages } from "@streamlinehq/streamline-regular/lib/logos";
import { PowerTools } from "@streamlinehq/streamline-regular/lib/tools-constructions";
import React from "react";
import { Select } from "@streamlinehq/streamline-regular/lib/interface-essential";
import { SendEmail } from "@streamlinehq/streamline-regular/lib/emails";
import { Smileys } from "@streamlinehq/streamline-regular/lib/messages-chat-smileys";
import { SocialMedias } from "@streamlinehq/streamline-regular/lib/logos";
import StreamlineIcon from "@streamlinehq/streamline-icons-react";
import { StudyingLearning } from "@streamlinehq/streamline-bold/lib/school-learning";
import { TagsBookmarks } from "@streamlinehq/streamline-regular/lib/interface-essential";
import { Tasks } from "@streamlinehq/streamline-regular/lib/work-office-companies";
import { Wayfinder } from "@streamlinehq/streamline-mini-line/lib/maps-travel";
import gradHat from "../images/grad-hat.svg";

const Icon: React.FC<IconProps> = ({ icon, size }) => {
    return <div className="Icon">
        {(icon === "drill") && <StreamlineIcon icon={PowerTools.PowerToolsDrill} size={size} />}
        {(icon === "discover") && <StreamlineIcon icon={Glasses.GlassesRetro1} size={size} />}
        {(icon === "home") && <StreamlineIcon icon={Home.House} size={size} />}
        {(icon === "close") && <StreamlineIcon icon={FormValidation.Close} size={size} />}
        {(icon === "arrow-right") && <StreamlineIcon icon={Arrows.ArrowRight} size={size} />}
        {(icon === "arrow-left") && <StreamlineIcon icon={Arrows.ArrowLeft} size={size} />}
        {(icon === "chevron-up") && <StreamlineIcon icon={Arrows.ArrowUp1} size={size} />}
        {(icon === "chevron-down") && <StreamlineIcon icon={Arrows.ArrowDown1} size={size} />}
        {(icon === "chevron-left") && <StreamlineIcon icon={Arrows.ArrowLeft1} size={size} />}
        {(icon === "chevron-right") && <StreamlineIcon icon={Arrows.ArrowRight1} size={size} />}
        {(icon === "categories") && <StreamlineIcon icon={Layouts.LayoutModule1} size={size} />}
        {(icon === "bookmark") && <StreamlineIcon icon={Books.BookCloseBookmark1} size={size} />}
        {(icon === "card") && <StreamlineIcon icon={Apps.AppWindow} size={size} />}
        {(icon === "like") && <StreamlineIcon icon={LoveIt.LoveIt} size={size} />}
        {(icon === "check") && <StreamlineIcon icon={FormValidation.Check1} size={size} />}
        {(icon === "click") && <StreamlineIcon icon={Select.TouchFinger1} size={size} />}
        {(icon === "pointer") && <StreamlineIcon icon={Select.CursorHand1} size={size} />}
        {(icon === "email") && <StreamlineIcon icon={Envelopes.Envelope} size={size} />}
        {(icon === "facebook") && <StreamlineIcon icon={SocialMedias.SocialMediaFacebook} size={size} />}
        {(icon === "twitter") && <StreamlineIcon icon={SocialMedias.SocialMediaTwitter} size={size} />}
        {(icon === "pinterest") && <StreamlineIcon icon={PhotosImages.SocialPinterest} size={size} />}
        {(icon === "happy") && <StreamlineIcon icon={Smileys.SmileyThrilled} size={size} />}
        {(icon === "hide") && <StreamlineIcon icon={View.ViewOff} size={size} />}
        {(icon === "more") && <StreamlineIcon icon={Menu.NavigationMenuHorizontal} size={size} />}
        {(icon === "menu") && <StreamlineIcon icon={Menu.NavigationMenu} size={size} />}
        {(icon === "spot") && <StreamlineIcon icon={Select.CursorDoubleClick2} size={size} />}
        {(icon === "tags") && <div className="flip"><StreamlineIcon icon={TagsBookmarks.TagsDouble1} size={size} /></div>}
        {(icon === "send") && <StreamlineIcon icon={SendEmail.SendEmail} size={size} />}
        {(icon === "steps") && <StreamlineIcon icon={Wayfinder.TravelWayfinderStairs1} size={size} />}
        {(icon === "link") && <StreamlineIcon icon={LinkUnlink.Hyperlink2} size={size} />}
        {(icon === "learn") && <span className="Streamline_Icon"><svg id="Graduation_Icon" width={size + 4} height={size + 4} viewBox={`0 0 ${size} ${size}`}>
            <path id="Path_9821" data-name="Path 9821" d="M1103.505,4563.678a.433.433,0,0,1-.21-.374v-4.885l4.792,2.36a1.047,1.047,0,0,0,.468.109,1.025,1.025,0,0,0,.464-.109l4.8-2.36v4.877a.428.428,0,0,1-.221.378,11.31,11.31,0,0,1-5.142,1.33A10.191,10.191,0,0,1,1103.505,4563.678Zm11.813-.961a.654.654,0,0,1,.418-.59.413.413,0,0,1-.006-.068v-5.48l-2.217,1.093-4.8,2.368a.374.374,0,0,1-.312,0l-4.8-2.368-2.555-1.259a.422.422,0,0,1,0-.739l7.358-3.627a.355.355,0,0,1,.312,0l7.357,3.627a.913.913,0,0,1,.34.466v5.92a.373.373,0,0,1-.006.066.659.659,0,0,1,.42.592.758.758,0,0,1-1.5,0Z" transform="translate(-1100.821 -4552.01)" fill="#000" />
        </svg>
        </span>}
        {(icon === "remember") && <StreamlineIcon icon={Tasks.TaskFingerBandage} size={size} />}
        {(icon === "info") && <StreamlineIcon icon={Alerts.InformationCircle} size={size} />}
        {(icon === "warning") && <StreamlineIcon icon={Alerts.AlertTriangle} size={size} />}
    </div>
}

Icon.defaultProps = {
    size: 18
}

export default Icon;


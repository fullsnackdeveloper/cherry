// import "./Icon.scss";

import { Alerts, FormValidation, Home, Layouts, LinkUnlink, Menu, Select, TagsBookmarks, View } from "@streamlinehq/streamline-regular/lib/interface-essential";
import { PhotosImages, ProfessionalNetworks, SocialMedias, Videos } from "@streamlinehq/streamline-regular/lib/logos";

import { Apps } from "@streamlinehq/streamline-regular/lib/programing-apps-websites";
import { Arrows } from "@streamlinehq/streamline-regular/lib/arrows-diagrams";
import { Books } from "@streamlinehq/streamline-regular/lib/content";
import { Envelopes } from "@streamlinehq/streamline-regular/lib/emails";
import { GeomerticCloseUpSingleUserActionsNeutral } from "@streamlinehq/streamline-regular/lib/users";
import { GeomerticCloseUpSingleUserNeutral } from "@streamlinehq/streamline-regular/lib/users";
import { Glasses } from "@streamlinehq/streamline-regular/lib/clothes-footwear-accessories";
import { IconProps } from "./Icon.types";
import { LoveIt } from "@streamlinehq/streamline-regular/lib/social-medias-rewards-rating";
import { MultimediaControls } from "@streamlinehq/streamline-bold/lib/interface-essential"
import { PowerTools } from "@streamlinehq/streamline-regular/lib/tools-constructions";
import React from "react";
import { SendEmail } from "@streamlinehq/streamline-regular/lib/emails";
import { Smileys } from "@streamlinehq/streamline-regular/lib/messages-chat-smileys";
import StreamlineIcon from "@streamlinehq/streamline-icons-react";
import { Tasks } from "@streamlinehq/streamline-regular/lib/work-office-companies";
import { Wayfinder } from "@streamlinehq/streamline-mini-line/lib/maps-travel";

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
        {(icon === "snapchat") && <StreamlineIcon icon={SocialMedias.SocialMediaSnapchat} size={size} />}
        {(icon === "pinterest") && <StreamlineIcon icon={PhotosImages.SocialPinterest} size={size} />}
        {(icon === "youtube") && <StreamlineIcon icon={Videos.SocialVideoYoutube} size={size} />}
        {(icon === "instagram") && <StreamlineIcon icon={PhotosImages.SocialInstagram} size={size} />}
        {(icon === "linkedin") && <StreamlineIcon icon={ProfessionalNetworks.ProfessionalNetworkLinkedin} size={size} />}
        {(icon === "happy") && <StreamlineIcon icon={Smileys.SmileyThrilled} size={size} />}
        {(icon === "hide") && <StreamlineIcon icon={View.ViewOff} size={size} />}
        {(icon === "more") && <StreamlineIcon icon={Menu.NavigationMenuHorizontal} size={size} />}
        {(icon === "menu") && <StreamlineIcon icon={Menu.NavigationMenu} size={size} />}
        {(icon === "spot") && <StreamlineIcon icon={MultimediaControls.ButtonRecordAlternate} size={size} />}
        {(icon === "tags") && <div className="flip"><StreamlineIcon icon={TagsBookmarks.TagsDouble1} size={size} /></div>}
        {(icon === "send") && <StreamlineIcon icon={SendEmail.SendEmail} size={size} />}
        {(icon === "steps") && <StreamlineIcon icon={Wayfinder.TravelWayfinderStairs1} size={size} />}
        {(icon === "link") && <StreamlineIcon icon={LinkUnlink.Hyperlink2} size={size} />}
        {(icon === "learn") && <span className="Streamline_Icon"><svg id="Graduation_Icon" width={size + 4} height={size + 4} viewBox={`0 0 ${size} ${size}`}>
            <path d="M8.7,10.9c-0.2,0-0.3,0-0.5-0.1L3.5,8.4v4.9c0,0.2,0.1,0.3,0.2,0.4c1.5,0.9,3.2,1.3,5,1.3c1.8,0,3.6-0.5,5.1-1.3
	c0.1-0.1,0.2-0.2,0.2-0.4V8.4l-4.8,2.4C9.1,10.8,8.9,10.9,8.7,10.9z"/>
            <path d="M16.6,12.1C16.6,12.1,16.6,12.1,16.6,12.1l0-6c-0.1-0.2-0.2-0.4-0.3-0.5L8.9,2C8.8,2,8.7,2,8.6,2L1.2,5.7
	c-0.1,0-0.1,0.1-0.2,0.2C0.9,6,1,6.3,1.2,6.4l2.6,1.3L8.6,10c0.1,0,0.2,0,0.3,0l4.8-2.4l2.2-1.1V12c0,0,0,0,0,0.1
	c-0.2,0.1-0.4,0.3-0.4,0.6l0,0c0,0.3,0.3,0.6,0.6,0.6c0.4,0.1,0.8-0.2,0.9-0.6C17,12.4,16.8,12.2,16.6,12.1z"/>
        </svg>
        </span>}
        {(icon === "remember") && <StreamlineIcon icon={Tasks.TaskFingerBandage} size={size} />}
        {(icon === "info") && <StreamlineIcon icon={Alerts.InformationCircle} size={size} />}
        {(icon === "warning") && <StreamlineIcon icon={Alerts.AlertTriangle} size={size} />}
        {(icon === "user") && <StreamlineIcon icon={GeomerticCloseUpSingleUserNeutral.SingleNeutralCircle} size={size} />}
        {(icon === "userPencil") && <StreamlineIcon icon={GeomerticCloseUpSingleUserActionsNeutral.SingleNeutralActionsEdit1} size={size} />}
    </div>
}

Icon.defaultProps = {
    size: 18
}

export default Icon;

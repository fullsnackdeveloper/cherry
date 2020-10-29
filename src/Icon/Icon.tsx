import "./Icon.scss";

import { Menu, View } from "@streamlinehq/streamline-regular/lib/interface-essential";

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
import { TagsBookmarks } from "@streamlinehq/streamline-regular/lib/interface-essential";

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
        {(icon === "link") && <StreamlineIcon icon={LinkUnlink.Hyperlink2} size={size} />}
    </div>
}

Icon.defaultProps = {
    size: 18
}

export default Icon;


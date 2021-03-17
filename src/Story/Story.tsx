
import React from "react";

import { StoryProps } from "./Story.types";

import "./Story.scss";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import clsx from "clsx";

const Story: React.FC<StoryProps> = ({ title, description, image, author, link, linkText, template }) => (
    <div data-testid="Story" className="Story" style={{ backgroundImage: `url(${image})` }}>
        <div className="Story-head">
            <div className="Story-head-timeline">
                <hr />
                <hr />
                <hr />
            </div>
            <div className="Story-head-author">
                <Avatar image={author.image} size="small" />
                <h3>{author.name}</h3>
            </div>
        </div>
        <div className={clsx("Story-main", template?.main?.position)}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <div className={clsx("Story-link", template?.link?.type)}>
            <Button size={template?.link?.type === 'button' ? "regular" : 'small'}>
                {linkText}
            </Button>
        </div>
    </div>
);

export default Story;


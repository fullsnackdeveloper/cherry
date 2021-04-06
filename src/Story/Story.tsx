
import React from "react";

import { StoryProps } from "./Story.types";

import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import clsx from "clsx";

const Story: React.FC<StoryProps> = ({ title, description, image, secondImage, author, onClick, linkText, template, frameNum, share }) => {

    const renderTimeline = () => {
        let lines = [];
        for (let i = 0; i < frameNum; i++) {
            lines.push(<hr key={`line-${i}`} />);
        }
        return lines;
    }

    return <div data-testid="Story" className="Story" style={{ backgroundImage: `url(${image})` }}>
        <div className="Story-head">
            {frameNum &&
                <div className="Story-head-timeline">
                    {renderTimeline()}
                </div>
            }
            <div className="Story-head-info">
                {author && template?.author?.showName &&
                    <div className="Story-head-author">
                        <Avatar image={author.image} size="small" />
                        <h3>{author.name}</h3>
                    </div>
                }
                {share &&
                    <div className="Story-head-icons">
                        <Button icon="send" type="icon" iconSize={32} />
                    </div>
                }
            </div>
        </div>
        {((template?.main?.position === 'bottom' && template?.main?.background?.fullwidth) || (secondImage && template?.main?.position === 'middle')) &&
            <div className="Story-image" style={{ backgroundImage: `url(${image})` }}></div>
        }
        <div className={
            clsx("Story-main",
                template?.main?.position,
                template?.main?.align,
                {
                    hasSecondImage: secondImage,
                    backgroundVisible: template?.main?.background?.visible,
                    fullwidthBackground: template?.main?.background?.fullwidth
                })}>
            <div className="Story-main-title">
                {title && <h2>{title}</h2>}
            </div>
            <div className="Story-main-description">
                {description && <p>{description}</p>}
            </div>
        </div>
        {(template?.main?.position === 'top' && template?.main?.background?.fullwidth) &&
            <div className="Story-image" style={{ backgroundImage: `url(${image})` }}></div>
        }
        {template?.main?.position === 'middle' && secondImage &&
            <div className="Story-secondImage" style={{ backgroundImage: `url(${secondImage})` }}></div>
        }
        {linkText && onClick &&
            <div className={clsx("Story-link")}>
                <Button size="large" onClick={onClick}>
                    {linkText}
                </Button>
            </div>
        }
    </div>
};

export default Story;


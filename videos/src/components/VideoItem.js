import './VideoItem.css';
import React from "react";

const VideoItem = ({video, onVideoSelect}) => {
    const {description, snippet} = video
    return(
        <div onClick={() => onVideoSelect(video)} className=" video-item item">
            <img className="ui image" alt={description} src={snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                {snippet.title}
                </div>
            </div>
            </div>
    )
};

export default VideoItem;
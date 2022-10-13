import React from "react";

const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div>Loading...</div>;
  }

  const { snippet, id } = selectedVideo;
  const videoSrc = `https://www.youtube.com/embed/${id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{snippet.title}</h4>
        <p>{snippet.description} hj</p>
      </div>
    </div>
  );
};

export default VideoDetail;

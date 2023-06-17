import React from "react";

const Video = () => {
  return (
    <video autoPlay controls width="100%">
      <source src="/fire-video.webm" type="video/webm" />
      <source src="/fire-video.mp4" type="video/mp4"
      />
      Sorry, your browser doesn't support videos.
    </video>
  );
};

export default Video;
"use client";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  let videosrc = "https://www.youtube.com/watch?v=1vJR0Y4fwF4";

  return (
    <div>
    
      <ReactPlayer
        width="20rem"
        height="22rem"
        url={videosrc}
        controls={true}
        playing={true}  // Set playing to true for autoplay
        light={false}
        pip={true}
        style={{borderRadius:"22px"}}
      />
      <source src={videosrc} type="video/mp4" />
    </div>
  );
};

export default VideoPlayer;
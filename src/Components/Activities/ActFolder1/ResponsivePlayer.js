import React from "react";
import "./../ActFolder1/ResponsivePlayer.css";
import ReactPlayer from "react-player";

const ResponsivePlayer = () => {
  return (
    <div className="player-wrapper ">
      <ReactPlayer
        className="react-player  "
        url="https://youtu.be/d9ojk9-i7ks"
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export default ResponsivePlayer;

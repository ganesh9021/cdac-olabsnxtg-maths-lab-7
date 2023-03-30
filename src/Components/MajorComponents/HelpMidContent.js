import React from "react";
import ReactPlayer from "react-player";

const HelpMidContent = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100%", width: "100%" }}
    >
      <div className="player-wrapper ">
        <ReactPlayer
          className="react-player  "
          url="https://youtu.be/d9ojk9-i7ks"
          controls={true}
        />
      </div>
    </div>
  );
};

export default HelpMidContent;

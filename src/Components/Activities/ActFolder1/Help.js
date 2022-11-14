import React from "react";
import Headcomp from "../Headcomp";

import backgroundImg from "../../../Img/backg.jpg";
import ResponsivePlayer from "./ResponsivePlayer";



const Help = () => {
  return (
    <div
      className=""
      style={{
        height: "100vh",
        backgroundImage: "url(" + backgroundImg + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Headcomp />

      <div
        className=" d-flex justify-content-center align-items-center"
        style={{ height: "90%" }}
      >
        <div
          className="col-11 bg-light shadow-lg"
          style={{
            height: "94%",
            borderRadius: "20px",
          }}
        >
          <div
            className="d-flex justify-content-center align-items-center "
            style={{ height: "100%" }}
          >
            <div
              className=""
              style={{ height: "90%", width: "90%" }}
            >
              <ResponsivePlayer/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;

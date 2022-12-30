import { Button } from "@mui/material";
import React from "react";
import back from "../../../Img/back.png";
import next from "../../../Img/next.png";

const BackNextBar = ({ setBackward, setForward }) => {
  return (
    <div className=" d-flex" style={{ height: "10%" }}>
      <div
        className="  col-6 d-flex justify-content-center align-items-center"
        style={{}}
      >
        <Button
          onClick={setBackward}
          style={{
            height: "100%",
            marginBottom:"1%"
          }}
        >
          <img
            className="img-fluid"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxHeight: "150%",
              maxWidth: "150%",
            }}
            src={back}
            alt="Logo"
          />
        </Button>
      </div>
      <div
        className=" col-6 d-flex justify-content-center align-items-center"
        style={{}}
      >
        <Button style={{ height: "100%",marginBottom:"1%" }} onClick={setForward}>
          <img
            className="img-fluid"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxHeight: "150%",
              maxWidth: "150%",
            }}
            src={next}
            alt="Logo"
          />
        </Button>
      </div>
    </div>
  );
};

export default BackNextBar;
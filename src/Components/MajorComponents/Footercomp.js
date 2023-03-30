import { Button } from "@mui/material";
import React from "react";
// import Instructionimg from "../../Img/Instruction.png";

const Footercomp = ({ footheight, instruction }) => {
  return (
    <div className="" style={{ height: `${footheight}`, fontSize: "1rem" }}>
      {/* // <div className="" style={{ height: "auto" }}> */}

      <div
        className="bg-light col-11 d-flex justify-content-center"
        style={{
          height: "95%",
          borderRadius: "20px",
          boxShadow: "0px 7px 4px rgba(0, 0, 0, 0.25)",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="bg- col-1 d-flex align-items-center">
          {/* <img
        className="img-fluid"
 
        style={{
          // width: "100%",
          // height: "6%",
          // bottom:"7%",
          // left:"1%",
          right:"40%",
          position: "relative",
          maxWidth:"100%",
         
        }}
        src={instruct}
        alt="Logo"
      /> */}
          <Button
            style={{
              position: "relative",
              maxWidth: "100%",
              right: "40%",
              fontWeight: "700",
              fontSize: "70%",
              background: " #D6D3D3",
              color: "black",

              boxShadow: "0px 7px 4px rgba(0, 0, 0, 0.25)",
              cursor: "none",
            }}
          >
            <span className="instructionTag">instruction</span>
          </Button>
        </div>
        <div
          className="col-11 d-flex align-items-center fw-normal"
          style={{ overflow: "auto", padding: "1.5%" ,fontSize : '1.2rem'}}
        >
          {instruction}
        </div>
      </div>
    </div>
  );
};

export default Footercomp;

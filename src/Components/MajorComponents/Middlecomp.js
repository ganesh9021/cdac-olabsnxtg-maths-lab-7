import React, { useState } from "react";
import tools1 from "../../Img/tools1.png";
import Tools from "./Tools";
import { Button } from "@mui/material";

const Middlecomp = ({
  midheight,
  midcontent,
  toolvisible,
  toolimgsrc,
  toolname,
  toolnavigate,
}) => {
  const [flag, setFlag] = useState(false);

  const ToolStore = () => {
    setFlag(!flag);
    // instruction(Instru.Instruction_1());
  };

  return (
    <div className="" style={{ height: `${midheight}` }}>
      <div
        className="col-11 bg-light d-flex"
        style={{
          height: "95%",
          borderRadius: "20px",
          boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.40)",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="col-1">
          <div className="d-flex align-items-center" style={{ height: "40%" }}>
            <Button
              style={{
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
              <span className="workbenchTag">workbench</span>
            </Button>
          </div>
          <div
            className=" d-flex align-items-end"
            style={{
              height: "60%",
              width: "100%",
            }}
          >
            <Button
              className="bg-light"
              onClick={ToolStore}
              style={{
                border: "none",
                borderBottomLeftRadius: "20px",
                visibility: `${toolvisible}`,
              }}
            >
              <img
                className=""
                style={{
                  position: "relative",
                  // backgroundRepeat: "no-repeat",
                  // backgroundSize: "cover",
                  // maxHeight: "100%",
                  maxWidth: "100%",
                }}
                src={tools1}
                alt="Logo"
              />
            </Button>
          </div>
        </div>
        <div className="col" style={{ height: "100%", width: "93%" }}>
          {flag ? (
            <Tools
              sources={toolimgsrc}
              names={toolname}
              navigateto={toolnavigate}
            />
          ) : (
            midcontent
          )}
        </div>
      </div>
    </div>
  );
};

export default Middlecomp;

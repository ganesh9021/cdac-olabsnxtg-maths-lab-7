
import React, { createContext, useState } from "react";
import ActivityMiddleComp from "../ActivityMiddleComp";
import Headcomp from "../Headcomp";
import Elements from "./InstruSizeArr";
import { ToastContainer } from "react-toastify";
import backg from "../../../Img/backg.jpg";
import Instruction from "../../../Img/Instruction.png";
import { Button } from "@mui/material";
import "../../../styles/styles.css";

export const rezContext = createContext(null);

const Act1startpage = () => {
  const [arv, setArv] = useState(0);

  return (
    <div
      className="img"
      style={{
        height: "100vh",
        backgroundImage: "url(" + backg + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Headcomp />

      <div className="" style={{ height: `${Elements[arv].midHt}` }}>
        <rezContext.Provider
          value={{
            arv,
            setArv,
          }}
        >
          <ActivityMiddleComp />
        </rezContext.Provider>
      </div>

      <div className="" style={{ height: `${Elements[arv].footHt}` }}>
        {/* <img
          className="mt-4 ms-4"
          style={{
            width: "8%",
            height: "6%",
            position: "absolute",
          }}
          src={Instruction}
          alt="Logo"
        /> */}

        <div
          className="col-11 bg-light d-flex "
        style={{
          height: "95%",
          borderRadius: "20px",
          boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.40)",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        >
          <div
            className="d-flex align-items-end"
            style={{ height: "100%", width: "7%" }}
          >
            <Button
              style={{
                bottom : '35%',
                maxWidth: "100%",
                right: "45%",
                fontWeight: "700",
                fontSize: "1rem",
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
            className="col-11 d-flex align-items-center fw-normal fs-5"
            style={{ overflow: "auto", padding: "1.5%" }}
          >
            {Elements[arv].footContent}
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Act1startpage;

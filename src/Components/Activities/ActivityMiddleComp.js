
import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import ApproachSelect1 from "./ActFolder1/ApproachSelect1";
import workbench1 from "../../Img/workbench.png";
import tools1 from "../../Img/tools1.png";
import { Button } from "@mui/material";
import '../../styles/styles.css'

export const UserContext = createContext(null);

const ActivityMiddleComp = () => {
  const [flag, setFlag] = useState(false);
  const [len, setLen] = useState();
  const [bre, setBre] = useState();

  const [toolvisible, setToolvisible] = useState("hidden");

  return (
    <div className="" style={{ height: "100%" }}>
      {/* <img
        className="mt-5 ms-4"
        style={{
          width: "8%",
          height: "6%",
          position: "absolute",
        }}
        src={workbench1}
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
          bottom : '80%',
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
        <span className="workbenchTag">workbench</span>
      </Button>
          {/* <button
            className="bg-light"
            onClick={() => {
              //setFlag(!flag);
            }}
            style={{
              visibility: `${toolvisible}`,
              border: "none",
              borderBottomLeftRadius: "20px",
              marginBottom: "5%",
            }}
          >
            <img
              className="img-fluid"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                maxHeight: "100%",
                maxWidth: "4.0vw",
              }}
              src={tools1}
              alt="Logo"
            />
          </button> */}
        </div>

        <div
          className=""
          id="shapesdiv"
          style={{ height: "100%", width: "93%" }}
        >
          {/* //middle component rendering area */}
          <UserContext.Provider value={{ flag, setFlag }}>
            {flag ? (
              <ApproachSelect1 />
            ) : (
              <Outlet
                context={{
                  len,
                  setLen,
                  bre,
                  setBre,
                  setToolvisible,
                }}
              />
            )}
          </UserContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default ActivityMiddleComp;

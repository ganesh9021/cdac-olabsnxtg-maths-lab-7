
import React, { createContext, useState } from "react";
import ActivityMiddleComp from "../ActivityMiddleComp";
import Headcomp from "../Headcomp";
import Elements from "./InstruSizeArr";
import { ToastContainer } from "react-toastify";
import backg from "../../../Img/backg.jpg";
import Instruction from "../../../Img/Instruction.png";

export const rezContext = createContext(null);

const Act1startpage = () => {
  const [arv, setArv] = useState(0);

  return (
    <div
      className="img"
      style={{
        height: "100vh",
        backgroundImage: "url("+backg+")",
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
        <img
          className="mt-4 ms-4"
          style={{
            width: "8%",
            height: "6%",
            position: "absolute",
          }}
          src={Instruction}
          alt="Logo"
        />
        <div
          className="bg-light  col-11 d-flex justify-content-end"
          style={{
            height: "95%",
            borderRadius: "20px",
            borderRadius: "20px",
            boxShadow: "0px 7px 4px rgba(0, 0, 0, 0.25)",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="col-11 d-flex align-items-center ">
            {Elements[arv].footContent}
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Act1startpage;




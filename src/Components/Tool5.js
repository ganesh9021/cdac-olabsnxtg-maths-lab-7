import React from "react";
import Footercomp from "./MajorComponents/Footercomp";
import Headcomp from "./MajorComponents/Headcomp";
import Middlecomp from "./MajorComponents/Middlecomp";
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction";
import { ToastContainer } from "react-toastify";
import Tool5MidContent from "./Tool5MidContent";
import { useState } from "react";

const Tool5 = () => {
  const [instr, setInstr] = useState(Instru.Instruction_10());
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: "url(" + backgroundImg + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Headcomp />

      <Middlecomp
        midheight="70%"
        midcontent={
          <Tool5MidContent
            setInstr={(e) => {
              setInstr(e);
            }}
          />
        }
        toolvisible="hidden"
      />

      <Footercomp footheight="20%" instruction={instr} />
      <ToastContainer />
    </div>
  );
};

export default Tool5;

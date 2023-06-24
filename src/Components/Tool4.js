import React, { useEffect } from "react";
import Footercomp from "./MajorComponents/Footercomp";
import Headcomp from "./MajorComponents/Headcomp";
import Middlecomp from "./MajorComponents/Middlecomp";
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction";
import { ToastContainer } from "react-toastify";
import Tool4MidContent from "./Tool4MidContent";
import { useState } from "react";
import ReactGA from "react-ga4";

const Tool4 = () => {
  const [instr, setInstr] = useState(Instru.Instruction_9());

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "L7/letusverify/startpage/tool4",
      title: "L7|relation AUB is to be created",
    });
  }, []);
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
          <Tool4MidContent
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

export default Tool4;

import React, { useEffect, useState } from "react";
import Footercomp from "./MajorComponents/Footercomp";
import Headcomp from "./MajorComponents/Headcomp";
import Middlecomp from "./MajorComponents/Middlecomp";
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction";
import { ToastContainer } from "react-toastify";
import Tool1MidContent from "./Tool1MidContent";
import ReactGA from "react-ga4";

const Tool1 = () => {
  const [instr, setInstr] = useState(Instru.Instruction_4());
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "L7/letusverify/startpage/tool1",
      title:
        "L7|Set A is to be created by clicking on draw universal set and set A button",
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
          <Tool1MidContent
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

export default Tool1;

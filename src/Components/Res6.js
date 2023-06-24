import React, { useEffect } from "react";
import Footercomp from "./MajorComponents/Footercomp";
import Headcomp from "./MajorComponents/Headcomp";
import Middlecomp from "./MajorComponents/Middlecomp";
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction";
import { ToastContainer } from "react-toastify";
import Res6MidContent from "./Res6MidContent";
import ReactGA from "react-ga4";

const Res6 = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "L7/letusverify/startpage/tool6/res6",
      title: "L7|relation (A∪B)∩(A∪C) created successfully",
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
        midcontent={<Res6MidContent />}
        toolvisible="hidden"
      />

      <Footercomp footheight="20%" instruction={Instru.Instruction_14()} />
      <ToastContainer />
    </div>
  );
};

export default Res6;

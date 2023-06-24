import React, { useEffect } from "react";
import Footercomp from "./MajorComponents/Footercomp";
import Headcomp from "./MajorComponents/Headcomp";
import Middlecomp from "./MajorComponents/Middlecomp";
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction";
import { ToastContainer } from "react-toastify";
import Res6WithNoMidContent from "./Res6WithNoMidContent";
import ReactGA from "react-ga4";

const Res6WithNo = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "L7/letusverify/startpage/tool6/res6withno",
      title: "L7|example-1 page of (A∪B)∩(A∪C)",
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
        midcontent={<Res6WithNoMidContent />}
        toolvisible="hidden"
      />

      <Footercomp footheight="20%" instruction={Instru.Instruction_12()} />
      <ToastContainer />
    </div>
  );
};

export default Res6WithNo;

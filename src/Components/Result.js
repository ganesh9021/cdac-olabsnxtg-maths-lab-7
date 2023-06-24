import React, { useEffect } from "react";
import Footercomp from "./MajorComponents/Footercomp";
import Headcomp from "./MajorComponents/Headcomp";
import Middlecomp from "./MajorComponents/Middlecomp";
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction";
import { ToastContainer } from "react-toastify";
import ResultMidContent from "./ResultMidContent";
import ReactGA from "react-ga4";

const Result = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "L7/letusverify/startpage/result",
      title: "L7|result page",
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
        midcontent={<ResultMidContent />}
        toolvisible="hidden"
      />

      <Footercomp footheight="20%" instruction={Instru.Instruction_13()} />
      <ToastContainer />
    </div>
  );
};

export default Result;

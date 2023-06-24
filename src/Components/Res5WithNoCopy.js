import React, { useEffect } from 'react'
import Footercomp from './MajorComponents/Footercomp'
import Headcomp from './MajorComponents/Headcomp'
import Middlecomp from './MajorComponents/Middlecomp'
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction"
import { ToastContainer } from 'react-toastify'
import Res5WithNoMidContentCopy from './Res5WithNoMidContentCopy';
import ReactGA from "react-ga4";

const Res5WithNoCopy = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "L7/letusverify/startpage/tool5/res5/res5withnocopy",
      title: "L7|example-2 of AUC",
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
        midcontent={<Res5WithNoMidContentCopy/>}
        toolvisible="hidden"
       
      />

      <Footercomp footheight="20%" instruction={Instru.Instruction_7()} />
      <ToastContainer/>
    </div>
  )
}

export default Res5WithNoCopy;
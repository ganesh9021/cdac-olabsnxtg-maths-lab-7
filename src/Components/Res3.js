import React, { useEffect } from 'react'
import Footercomp from './MajorComponents/Footercomp'
import Headcomp from './MajorComponents/Headcomp'
import Middlecomp from './MajorComponents/Middlecomp'
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction"
import { ToastContainer } from 'react-toastify'
import Res3MidContent from './Res3MidContent'
import ReactGA from 'react-ga4'

const Res3 = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "L7/letusverify/startpage/tool3/res3",
      title: "L7|relation A∪(B∩C) created successfully",
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
        midcontent={<Res3MidContent/>}
        toolvisible="hidden"
       
      />

      <Footercomp footheight="20%" instruction={Instru.Instruction_14()} />
      <ToastContainer/>
    </div>
  )
}

export default Res3;
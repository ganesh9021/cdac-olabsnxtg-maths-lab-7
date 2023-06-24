import React, { useEffect } from 'react'
import Footercomp from './MajorComponents/Footercomp'
import Headcomp from './MajorComponents/Headcomp'
import Middlecomp from './MajorComponents/Middlecomp'
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction"
import { ToastContainer } from 'react-toastify'
import Res1WithNoMidContent from './Res1WithNoMidContent'
import ReactGA from 'react-ga4'

const Res1WithNo = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "L7/letusverify/startpage/tool1/res1withno",
      title: "L7|Example-1 for set A page",
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
        midcontent={<Res1WithNoMidContent/>}
        toolvisible="hidden"
       
      />

      <Footercomp footheight="20%" instruction={Instru.Instruction_12()} />
      <ToastContainer/>
    </div>
  )
}

export default Res1WithNo;
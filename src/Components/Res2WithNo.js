import React from 'react'
import Footercomp from './MajorComponents/Footercomp'
import Headcomp from './MajorComponents/Headcomp'
import Middlecomp from './MajorComponents/Middlecomp'
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction"
import { ToastContainer } from 'react-toastify'
import Res2WithNoMidContent from './Res2WithNoMidContent';

const Res2WithNo = () => {
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
        midcontent={<Res2WithNoMidContent/>}
        toolvisible="hidden"
       
      />

      <Footercomp footheight="20%" instruction={Instru.Instruction_12()} />
      <ToastContainer/>
    </div>
  )
}

export default Res2WithNo;
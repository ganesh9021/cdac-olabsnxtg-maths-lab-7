import React from 'react'
import Headcomp from './Headcomp'
import Middlecomp from './Middlecomp'
import backgroundImg from "../../Img/backg.jpg";
import HelpMidContent from './HelpMidContent';


const Help = () => {
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
      midheight="90%"
      midcontent={<HelpMidContent/>}
      toolvisible="hidden"
     
    />
  </div>
  )
}

export default Help

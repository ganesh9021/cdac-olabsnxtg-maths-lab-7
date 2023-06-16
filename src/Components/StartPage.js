import React, { useEffect, useState } from "react";
import Footercomp from "./MajorComponents/Footercomp";
import Headcomp from "./MajorComponents/Headcomp";
import Middlecomp from "./MajorComponents/Middlecomp";
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction";
import { ToastContainer } from "react-toastify";
import StartPageMidContent from "./StartPageMidContent";

const StartPage = () => {
  const [active, setACtive] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("A") == 6) {
      setACtive(false);
    }
  });

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
        midcontent={<StartPageMidContent />}
        toolvisible="hidden"
      />

      <Footercomp
        footheight="20%"
        instruction={
          active
            ? localStorage.getItem("A") == 3
              ? Instru.Instruction_2()
              : Instru.Instruction_1()
            : Instru.Instruction_3()
        }
      />
      <ToastContainer />
    </div>
  );
};

export default StartPage;

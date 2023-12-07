import React, { useEffect } from "react";
import Headcomp from "../Components/MajorComponents/Headcomp";
import Middlecomp from "../Components/MajorComponents/Middlecomp";
import backgroundImg from "../Img/backg.jpg";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";
import ProcedureMidContent from "./ProcedureMidContent";

const Procedure_main = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "L1/sqtheory",
      title: "L1 | Theory section",
    });
  }, []);

  return (
    <>
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
          midcontent={<ProcedureMidContent />}
          toolvisible="hidden"
        />
      </div>
    </>
  );
};

export default Procedure_main;

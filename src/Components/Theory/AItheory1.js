import React, { useEffect, useState } from "react";
import Headcomp from "../MajorComponents/Headcomp";
import Middlecomp from "../MajorComponents/Middlecomp";
import AltheoryMidContent1 from "./AltheoryMidContent1";
import backgroundImg from "../../Img/backg.jpg";
import ReactGA from "react-ga4";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../../config/dbconfig.js";
import { SendLogData } from "../../config/wslog.js";

const AItheory1 = () => {
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  const [pageName, setPageName] = useState("theory");
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "L7/letusverify/sqtheory",
      title: "L7|Theory page",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "theory",
      "Clicked",
      "Click on theory Button"
    );
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
        midheight="90%"
        midcontent={<AltheoryMidContent1 />}
        toolvisible="hidden"
      />
    </div>
  );
};

export default AItheory1;

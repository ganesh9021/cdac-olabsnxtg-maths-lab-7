import React, { useState } from "react";
import BackNextBar from "./MajorComponents/BackNextBar";
import Res3Copy from "./Res3Copy";
import Res6Copy from "./Res6Copy";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../config/dbconfig.js";
import { SendLogData } from "../config/wslog.js";

const ResultMidContent = () => {
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  const [pageName, setPageName] = useState("result");
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const onNext = () => {
    navigate("");
  };

  const Restart = () => {
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|RESTART button",
      label:
        "L7|navigate to letusverify page to perform the activity once again",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "RESTART",
      "button",
      "clicked on RESTART button"
    );
    navigate("/letusverify");
    localStorage.clear();
  };

  return (
    <div style={{ height: "100%" }}>
      <div
        className="container"
        style={{ height: "90%", fontFamily: "arial", overflow: "auto" }}
      >
        <div className="row mt-4">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <div>
              <b>LHS [A∪(B∩C)]</b>
            </div>
            <div>
              <Res3Copy />
            </div>
            <div>A∪(B∩C)=&#123; 3, 4, 5, 8, 11, 13 &#125;</div>
          </div>
          <div className="col-md-auto d-flex justify-content-center align-items-center text-center">
            <div className="fw-bolder">=</div>
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <div>
              <b>RHS [(A∪B)∩(A∪C)]</b>
            </div>
            <div>
              <Res6Copy />
            </div>
            <div>(A∪B)∩(A∪C)=&#123; 3, 4, 5, 8, 11, 13 &#125;</div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column align-items-center mb-4">
            {/* <div>{t("line-5")}</div> */}
            <div>
              <b>LHS [AU(B∩C)] = RHS [(AUB)∩(AUC)]</b>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-end">
          <Button id="btn" autoFocus variant="contained" onClick={Restart}>
            {t("btn-6")}
          </Button>
        </div>
      </div>
      <BackNextBar
        setForward={onNext}
        backvisible="hidden"
        nextvisible="hidden"
        submitvisible="hidden"
      />
    </div>
  );
};

export default ResultMidContent;

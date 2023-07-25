import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/styles.css";
import ReactGA from "react-ga4";
import useWebSocket from "react-use-websocket";
import logconfig from "../../config/dbconfig";
import { SendLogData } from "../../config/wslog";
import { useTranslation } from "react-i18next";

const Launchpage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  const [pageName, setPageName] = useState("lauchpage");

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "L7/launchpage",
      title: "L7|Homepage for activity",
    });
  }, []);

  const handleStartButton = () => {
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|START button",
      label: "L7|Navigate from launchpage to letusverify page successfully.",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "START",
      "Clicked",
      "Click on START Button"
    );
    navigate("/letusverify");
  };

  return (
    <div
      className="flex-column d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        // backgroundImage: "url(" + backgroundImg + ")",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        fontFamily: "Arial",
      }}
    >
     
      <div
        className="col-12 col-md-9 border border-light border-2"
        style={{
          background: "rgba(255, 255, 255, .45)",
          border: "3px solid rgba(255, 255, 255, .5)",
          // backdropFilter: "blur(5px)",
          borderRadius: "20px",
        }}
      >
        <div
          className="title text-center d-flex justify-content-center align-items-center fw-bolder mt-3 "
          style={{ color: "#ac3843" }}
        >
          {t("title")}:&nbsp;A∪(B∩C) = (A∪B)∩(A∪C)
        </div>

        <div
          className="title1 d-flex justify-content-center align-items-end fw-bolder"
          style={{ marginTop: "1%" }}
        >
          {t("obj")}:
        </div>

        <div className=" d-flex justify-content-center">
          <div className="col-12 objective text-center fw-normal">
            {t("obj_content")}&nbsp;A∪(B∩C) = (A∪B)∩(A∪C).
          </div>
        </div>

        <div className="">
          <div
            className="title1 d-flex justify-content-center align-items-end fw-bolder text-center"
            style={{ marginTop: "1%" }}
          >
            {t("Learning Outcome")}:
          </div>
          <div className="objective fw-normal d-flex justify-content-center">
            <div className="col-lg-11 col-md-11 d-flex justify-content-center">
              <ol>
                <li>{t("Learning Outcome-1")}.</li>
                <li>{t("Learning Outcome-2")}.</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mb-3 mt-3">
          <Link to="/letusverify" style={{ textDecoration: "none" }}>
            <div
              onClick={handleStartButton}
              className="btn px-lg-5 px-mb-4 px-sm-3"
              style={{
                fontWeight: "700",
                fontSize: "calc(0.5rem + 1.5vw)",
                background: " #eeeee6",
                color: "#5f5299",
                borderRadius: "50px",
                boxShadow: "0px 7px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              Start
            </div>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default Launchpage;

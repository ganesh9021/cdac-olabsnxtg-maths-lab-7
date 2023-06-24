import React, { useState } from "react";
import Rightsidemenu from "./Rightsidemenu";
import homeImg from "../../Img/homeimg.png";
import HomeQuitPopup from "./HomeQuitPopup";
import { useNavigate } from "react-router-dom";
import "../../styles/styles.css";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../../config/dbconfig.js";
import { SendLogData } from "../../config/wslog.js";

const Headcomp = ({ sidebarvisible }) => {
  const { t, i18n } = useTranslation();
  const [showDialog, setShowDialog] = useState(false);
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  const [pageName, setPageName] = useState("headcomp");

  const navigate = useNavigate();

  const openDialog = () => {
    setShowDialog(true);
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|Home button",
      label: "L7|Home quit pop-up appear",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "home",
      "Clicked",
      "Click on home Button"
    );
  };

  const closeDialog = () => {
    setShowDialog(false);
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|CANCEL button",
      label: "L7|Close the pop-up",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "CANCEL",
      "Clicked",
      "Click on CANCEL Button",
      [],
      [
        {
          popuptype: "Confirmation box",
          popuptext: "Are you sure you want to quit?",
        },
      ]
    );
  };

  const onAgree = () => {
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|OK button",
      label: "L7|navigate to launchpage successfully",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "OK",
      "Clicked",
      "Click on OK Button",
      [],
      [
        {
          popuptype: "Confirmation box",
          popuptext: "Are you sure you want to quit?",
        },
      ]
    );
    navigate("/");
  };

  return (
    <div className="d-flex" style={{ height: "10%", fontSize: "1rem" }}>
      <div className=" col-2  d-flex justify-content-center align-items-center">
        <img
          className="homeclass"
          src={homeImg}
          alt="Logo"
          onClick={openDialog}
          style={{ cursor: "pointer" }}
        />
        <HomeQuitPopup
          openDialog={showDialog}
          onAgree={onAgree}
          closeDialog={closeDialog}
        />
      </div>

      <div className="col-8 d-flex justify-content-center align-items-center">
        <div
          className=" px-5 border border-2 d-flex justify-content-center align-items-center "
          style={{
            height: "90%",
            borderRadius: "25px",
            background: "skyblue",
          }}
        >
          <div className="objective fw-bold" style={{}}>
            <span className="">{t("title")}</span>
          </div>
        </div>
      </div>

      <div
        className=" col-2 d-flex justify-content-center align-items-center"
        style={{ visibility: `${sidebarvisible}` }}
      >
        <Rightsidemenu />
      </div>
    </div>
  );
};

export default Headcomp;

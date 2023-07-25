import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LetsVerify from "../../Img/letusverify.png";
import InfoPopup from "./InfoPopup";
import ActStartPopupContent from "../ActStartPopupContent";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../../config/dbconfig.js";
import { SendLogData } from "../../config/wslog.js";

const Startact = () => {
  const { t, i18n } = useTranslation();
  const [showDialog, setShowDialog] = useState(false);
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  const [pageName, setPageName] = useState("startact");

  const navigate = useNavigate();

  const openDialog = () => {
    setShowDialog(true);
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|click on Let us verify image",
      label: "L7|'What are we going to learn?' popup will appear",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "letusverify",
      "Clicked",
      "Click on letusverify Button"
    );
  };

  const closeDialog = (event) => {
    event.stopPropagation();
    setShowDialog(false);
    console.log("do it false :" + showDialog);
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
          popuptext: "What are we going to learn?",
        },
      ]
    );
  };

  const onAgree = () => {
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|OK button",
      label: "L7|Navigate to startpage successfully",
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
          popuptext: "What are we going to learn?",
        },
      ]
    );
    navigate("/letusverify/startpage");
    localStorage.clear();
  };
  return (
    <div className="" style={{ height: "100%", fontSize: "1rem" }}>
      <div
        className="objective d-flex flex-column justify-content-center align-items-center text-center"
        style={{ height: "50%" }}
      >
        <span className="fw-bold">{t("obj")}:</span>
        <div>
          {t("obj_content")}
          <br />
          A∪(B∩C) = (A∪B)∩(A∪C).
        </div>
      </div>
      <div className=" d-flex justify-content-center" style={{ height: "50%" }}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=" d-flex justify-content-center align-items-center col-2"
          style={{
            height: "50%",
            width: "20%",
            backdropFilter: "none",
          }}
          onClick={openDialog}
        >
          <img
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxHeight: "100%",
              // maxWidth: "100%",
              cursor: "pointer",
            }}
            src={LetsVerify}
            alt="Logo"
          />

          <InfoPopup
            openDialog={showDialog}
            onAgree={onAgree}
            closeDialog={closeDialog}
            content={<ActStartPopupContent />}
            popuptitle={t("instr_popup-1")}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Startact;

import React, { useState } from "react";
import "./Rightsidemenu.css";
import { Navbar, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import theory from "../../Img/theory.png";
import mcq from "../../Img/mcq.png";
import help from "../../Img/help.png";
import settings from "../../Img/settings.png";
import InfoPopup from "./InfoPopup";
import QuizPopupContent from "../QuizPopupContent";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../../config/dbconfig.js";
import { SendLogData } from "../../config/wslog.js";

const Rightsidemenu = () => {
  const { t, i18n } = useTranslation();
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
  }));

  const [showDialog, setShowDialog] = useState(false);
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  const [pageName, setPageName] = useState("rightsidemenu");
  const navigate = useNavigate();

  const openDialog = () => {
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|quiz button",
      label: "L7|Quiz instruction pop-up will appear on screen",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "quiz",
      "Clicked",
      "Click on quiz Button"
    );
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|CANCEL button of quiz instruction pop-up",
      label: "L7|close the quiz instruction pop-up",
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
          popuptext: "Quiz instructions",
        },
      ]
    );
  };

  const onAgree = () => {
    navigate("/letusverify/quiz");
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|OK button of quiz instruction pop-up",
      label: "L7|start the quiz",
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
          popuptext: "Quiz instructions",
        },
      ]
    );
  };

  return (
    <>
      <InfoPopup
        openDialog={showDialog}
        onAgree={onAgree}
        closeDialog={closeDialog}
        content={<QuizPopupContent />}
        popuptitle={t("quiz-1")}
      />

      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid className="">
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ width: "125px", height: "200px", background: "#8bb7c5" }}
            >
              <div className="" style={{ height: "100%" }}>
                <div
                  className=" d-flex justify-content-center align-items-center p-3"
                  style={{ height: "50%" }}
                >
                  <LightTooltip title={t("Theory")} placement="left" arrow>
                    <Link to="/letusverify/sqtheory">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          maxHeight: "100%",
                          maxWidth: "100%",
                        }}
                        src={theory}
                        alt="Logo"
                      ></motion.img>
                    </Link>
                  </LightTooltip>
                </div>

                <div
                  className=" d-flex justify-content-center align-items-center p-3"
                  style={{ height: "50%" }}
                >
                  <LightTooltip title={t("Vivavice")} placement="left" arrow>
                    <div onClick={openDialog}>
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          maxHeight: "100%",
                          maxWidth: "100%",
                          cursor: "pointer",
                        }}
                        src={mcq}
                        alt="Logo"
                      ></motion.img>
                    </div>
                  </LightTooltip>
                </div>
              </div>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Rightsidemenu;

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
import procedure from "../../Img/procedure.png";
import settings from "../../Img/settings.png";
import InfoPopup from "./InfoPopup";
import QuizPopupContent from "../QuizPopupContent";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../../config/dbconfig";
import { SendLogData } from "../../config/wslog.js";

const Rightsidemenu = () => {
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  const [pageName, setPageName] = useState("Headcomp");

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

  const navigate = useNavigate();

  const openDialog = () => {
    setShowDialog(true);

    SendLogData(
      sendJsonMessage,
      pageName,
      "Viva voce button",
      "Clicked",
      "Cliked on Viva voce",
      [{ input: "", answer: "", result: "correct" }],
      [
        {
          popuptype: "Instructions for quiz",
          popuptext: "All Instructions",
        },
      ],
      [{ hint: "" }]
    );
  };

  const closeDialog = () => {
    setShowDialog(false);
    SendLogData(
      sendJsonMessage,
      pageName,
      "Cancel button",
      "Clicked",
      "Cliked on Cancel",
      [{ input: "", answer: "", result: "correct" }],
      [
        {
          popuptype: "",
          popuptext: "",
        },
      ],
      [{ hint: "" }]
    );
  };

  const onAgree = () => {
    navigate("/letusverify/quiz");

    SendLogData(
      sendJsonMessage,
      pageName,
      "ok button",
      "Clicked",
      "Cliked on ok",
      [{ input: "", answer: "", result: "correct" }],
      [
        {
          popuptype: "",
          popuptext: "",
        },
      ],
      [{ hint: "" }]
    );
  };
  const { t, i18n } = useTranslation();

  const Thhandler = () => {
    ReactGA.event({
      action: "L1 | Algebraic identity(a+b)²",
      category: "L1 | Theory button ",
      label: "L1 | Cliked on theory",
    });

    SendLogData(
      sendJsonMessage,
      pageName,
      "Theory button",
      "Clicked",
      "Cliked on theory",
      [{ input: "", answer: "", result: "correct" }],
      [
        {
          popuptype: "Home popup",
          popuptext: "Are you sure you want to quit?",
        },
      ],
      [{ hint: "" }]
    );
  };

  const Vivahandler = () => {
    ReactGA.event({
      action: "L1 | Algebraic identity(a+b)²",
      category: "L1 | Viva voce button ",
      label: "L1 | Cliked on Viva voce",
    });

    SendLogData(
      sendJsonMessage,
      pageName,
      "Viva voce button ",
      "Clicked",
      "Cliked on Viva voce",
      [{ input: "", answer: "", result: "correct" }],
      [
        {
          popuptype: "",
          popuptext: "",
        },
      ],
      [{ hint: "" }]
    );
  };

  const procedurehandler = () => {
    ReactGA.event({
      action: "OML|Rightsidemenu",
      category: "OML|procedure button ",
      label: "OML|Cliked on procedure",
    });

    SendLogData(
      sendJsonMessage,
      pageName,
      "procedure button ",
      "Clicked",
      "Cliked on procedure",
      [{ input: "", answer: "", result: "correct" }],
      [
        {
          popuptype: "",
          popuptext: "",
        },
      ],
      [{ hint: "" }]
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
        <Navbar key={expand} expand={expand} >
          <Container fluid >
            <Navbar.Brand href="#" className=""></Navbar.Brand>

            <LightTooltip title={t("menu")}  placement="left" arrow>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
                style={{
                  border: "3px solid white",
                  backgroundColor: "skyblue",
                }}
              />
            </LightTooltip>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ width: "125px", height: "300px", background: "#8bb7c5" }}
            >
              <div className="" style={{ height: "100%" }}>
                <div
                  className=" d-flex justify-content-center align-items-center p-3"
                  style={{ height: "33%" }}
                  onClick={Thhandler}
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
                  style={{ height: "33%" }}
                  onClick={procedurehandler}
                >
                  <LightTooltip title={t("procedure")} placement="left" arrow>
                    <Link to="/letusverify/procedure">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          maxHeight: "100%",
                          maxWidth: "100%",
                        }}
                        src={procedure}
                        alt="Logo"
                      ></motion.img>
                    </Link>
                  </LightTooltip>
                </div>

                <div
                  className=" d-flex justify-content-center align-items-center p-3"
                  style={{ height: "33%" }}
                  onClick={Vivahandler}
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

import React, { useState } from "react";
import "./Menusidebar.css";
import { Navbar, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

import theory from "../../Img/theory.png";
import mcq from "../../Img/mcq.png";
import help from "../../Img/help.png";
import game from "../../Img/game.png";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Offcanvas = () => {
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
  const navigate = useNavigate();

  const openDialog = () => {
    setShowDialog(true);
  };
  const closeDialog = () => {
    setShowDialog(false);
  };

  const onAgree = () => {
    navigate("/letusverify/quiz");
  };

  return (
    <>
      <Dialog open={showDialog}>
        <DialogTitle>{t("quiz-1")}</DialogTitle>
        <DialogContent dividers>
          <Typography>
            <ul className="broswer-default" id="main-list">
              <li>{t("quiz-2")}</li>
              <li>
              {t("quiz-3")}
              </li>
              <li>
              {t("quiz-4")}
              </li>
              <li>
              {t("quiz-5")}
              </li>
              <li>{t("quiz-6")}</li> {t("quiz-7")}
              <li>
              {t("quiz-8")}
              </li>
              <li>{t("quiz-9")}</li>
            </ul>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={onAgree}>
          {t("ok")}
          </Button>
          <Button variant="contained" color="secondary" onClick={closeDialog}>
          {t("cancel")}
          </Button>
        </DialogActions>
      </Dialog>

      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              className="offStyle"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <div className="" style={{ height: "100%" }}>
                <div
                  className=" d-flex justify-content-center align-items-center p-3"
                  style={{ height: "33%" }}
                >
                  <LightTooltip title={t("Theory")} placement="left">
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
                >
                  <LightTooltip title={t("Vivavice")} placement="left">
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

                {/* <div
                  className=" d-flex justify-content-center align-items-center p-3"
                  style={{ height: "25%" }}
                >
                  <LightTooltip title="Lets Play!" placement="left">
                    <Link to="/letusverify/game">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          maxHeight: "100%",
                          maxWidth: "100%",
                        }}
                        src={game}
                        alt="Logo"
                      ></motion.img>
                    </Link>
                  </LightTooltip>
                </div> */}

                <div
                  className=" d-flex justify-content-center align-items-center p-3"
                  style={{ height: "34%" }}
                >
                  <LightTooltip title={t("help")} placement="left">
                    <Link to="/letusverify/help">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          maxHeight: "100%",
                          maxWidth: "100%",
                        }}
                        src={help}
                        alt="Logo"
                      ></motion.img>
                    </Link>
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

export default Offcanvas;

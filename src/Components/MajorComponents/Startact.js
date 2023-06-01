import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LetsVerify from "../../Img/letusverify.png";
import InfoPopup from "./InfoPopup";
import ActStartPopupContent from "../ActStartPopupContent";
import { useTranslation } from "react-i18next";

const Startact = () => {
  const { t, i18n } = useTranslation();
  const [showDialog, setShowDialog] = useState(false);

  const navigate = useNavigate();

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = (event) => {
    event.stopPropagation();
    setShowDialog(false);
    console.log("do it false :" + showDialog);
  };

  const onAgree = () => {
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
        <div>{t("obj_content")}<br/>A∪(B∩C) = (A∪B)∩(A∪C)</div>
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


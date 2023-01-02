import React, { useState } from "react";

import homeImg from "../../Img/homeimg.png";
import * as expre from "../../Components/Superscript";
import HomeQuitPopup from "../../Components/MajorComponents/HomeQuitPopup";
import { useNavigate } from "react-router-dom";
//import Offcanvas from "./Offcanvas";
import Offcanvas from "../Activities/Offcanvas";
import { useTranslation } from "react-i18next";
import "../../styles/styles.css";

const Headcomp = ({ sidebarvisible }) => {
  const { t, i18n } = useTranslation();
  const [showDialog, setShowDialog] = useState(false);

  const navigate = useNavigate();

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  const onAgree = () => {
    navigate("/");
  };

  return (
    <div className="d-flex" style={{ height: "10%" , fontSize:"1rem"}}>
      <div className="col-2  d-flex justify-content-center align-items-center">
        <img
          className=""
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            maxHeight: "100%",
            cursor:"pointer"
          }}
          src={homeImg}
          alt="Logo"
          onClick={openDialog}
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
          <div className=" fw-bold" style={{}}>
          {t("title")}:{" "}
            <span className="fw-normal">{expre.default()}</span>
          </div>
        </div>
      </div>

      <div
        className="col-2 d-flex justify-content-center align-items-center"
        style={{ visibility: `${sidebarvisible}` }}
      >
        <Offcanvas />
      </div>
    </div>
  );
};

export default Headcomp;

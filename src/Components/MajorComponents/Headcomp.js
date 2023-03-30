import React, { useState } from "react";
import Rightsidemenu from "./Rightsidemenu";
import homeImg from "../../Img/homeimg.png";
import HomeQuitPopup from "./HomeQuitPopup";
import { useNavigate } from "react-router-dom";
import "../../styles/styles.css";
import { useTranslation } from "react-i18next";

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
    <div className="d-flex" style={{ height: "10%", fontSize: "1rem" }}>
      <div className=" col-2  d-flex justify-content-center align-items-center">
        <img
          className="homeclass"
          src={homeImg}
          alt="Logo"
          onClick={openDialog}
          style={{cursor : 'pointer'}}
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

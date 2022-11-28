import React from "react";
import { Link } from "react-router-dom";
import exp1 from "../../Superscript";
import backg from "../../../Img/backg.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";

const Activity7 = () => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className="flex-column d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage: "url("+ backg +")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        fontFamily : 'arial'
      }}
    >
      <div
        className="col-12 col-md-9 border border-light border-2 "
        style={{
          height: "75vh",
          background: "rgba(255, 255, 255, .45)",
          border: "3px solid rgba(255, 255, 255, .5)",
          backdropFilter: "blur(5px)",
          borderRadius: "20px",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center font-Arial fw-bolder "
          style={{ height: "15vh", color: "#ac3843" ,fontSize:'2.5vw',fontFamily:'arial'}}
        >
          <b>{t("title")}:&nbsp;</b> {exp1()}
        </div>
        <div className="" style={{ height: "20vh" }}>
          <div
            className="d-flex justify-content-center align-items-end fw-bolder"
            style={{ height: "10vh", fontSize : '2vw' }}
          >
            {t("obj")}:
          </div>
          <div
            className="d-flex justify-content-center align-items-center fw-normal text-center"
            style={{ height: "10vh",fontSize : '1.8vw' }}
          >
            {t("obj_content")}<br /> 
            {exp1()}
          </div>
        </div>
        <div className="" style={{ height: "30vh" }}>
          <div
            className="d-flex justify-content-center align-items-end fw-bolder"
            style={{ height: "10vh",fontSize : '2vw' }}
          >
            {t("Learning Outcome")}:
          </div>
          <div
            className="d-flex justify-content-center align-items-start fw-normal text-center"
            style={{ height: "20vh" ,fontSize : '1.5vw'}}
          >
            <ol>
              <li>{t("Learning Outcome-1")}.</li>
              <li>{t("Learning Outcome-2")}.</li>
            </ol>
          </div>
        </div>
        <div
          className="d-flex justify-content-center "
          style={{ height: "13vh" }}
        >
          <Link to="/activity7/letusverify" style={{ textDecoration:"none"  }}>
            <div
              className="btn px-5"
              style={{
                fontWeight: "700",
                fontSize: "2.0vw",
                background: " #eeeee6",
                color: "#5f5299",
                borderRadius: "50px",
                boxShadow: "0px 7px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              {t("start")}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Activity7;


import React from "react";
import "../MajorComponents/Mid.css";
import { useTranslation } from "react-i18next";
import A from "../../Img/results/A.png";
import BIC from "../../Img/results/BIC.png";
import AUBIC from "../../Img/results/AU(BIC).png";
import AUB from "../../Img/results/AUB.png";
import AUC from "../../Img/results/AUC.png";
import AUBIAUC from "../../Img/results/(AUB)I(AUC).png";

const AltheoryMidContent1 = () => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className="overflow-auto scrollbar-primary ms-5"
      style={{ height: "100%" }}
    >
      <div className="my-5" style={{ width: "93%" }}>
        <h6 className="fw-bolder">{t("obj")}</h6>
        <p>{t("obj_content")} A∪(B∩C) = (A∪B)∩(A∪C)</p>
        <h6 className="fw-bolder">{t("theory-1")}</h6>
        <ul>
          <li>{t("theory-2")}</li>
          <li>{t("theory-3")}</li>
          <li>{t("obj_content")} A∪(B∩C) = (A∪B)∩(A∪C)</li>
        </ul>
        <h6  className="fw-bolder">{t("theory-4")}</h6>
        <ul>
          {" "}
          <li>{t("theory-5")}</li>
        </ul>
        <h6 className="fw-bolder">{t("title")}</h6>
        <ul>
          {" "}
          <li>{t("theory-6")}</li>
          <li>{t("theory-7")}</li>
        </ul>

        <h6 className="fw-bolder">{t("theory-8")}</h6>
        <h6 className="fw-bolder">{t("theory-9")}</h6>
        <p>{t("theory-10")}</p>
        <h6 className="fw-bolder">{t("theory-11")}</h6>
        <ul>
          <li>{t("theory-12")}</li>
          <li>{t("theory-13")}</li>
        </ul>
        <h6 className="fw-bolder">{t("theory-14")}</h6>
        <p>{t("theory-15")}</p>
        <h6 className="fw-bolder">{t("theory-16")}</h6>
        <p>{t("theory-17")}</p>
        <div style={{ fontFamily: "arial", fontSize: "1.2vw" }}>
          <div className="row" style={{ height: "25%", marginLeft: "10%" }}>
            <div className="col-md-auto" style={{ fontSize: "1.2vw" }}>
              {/* <div className="d-flex justify-content-center">A</div> */}
              <div className="d-flex justify-content-center">
                <img
                  style={{ height: "150px", width: "150px" }}
                  src={A}
                  alt="logo"
                />
              </div>
            </div>
            <div className="col" style={{ fontSize: "1.2vw" }}>
              {/* <div className="d-flex justify-content-center">B∩C</div> */}
              <div className="d-flex justify-content-center">
                <img
                  style={{ height: "150px", width: "150px" }}
                  src={BIC}
                  alt="logo"
                />
              </div>
            </div>
            <div className="col" style={{ fontSize: "1.2vw" }}>
              {/* <div className="d-flex justify-content-center">A∪(B∩C)</div> */}
              <div className="d-flex justify-content-center">
                <img
                  style={{ height: "150px", width: "150px" }}
                  src={AUBIC}
                  alt="logo"
                />
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{ height: "25vh", fontSize: "1.2vw", marginLeft: "10%" }}
          >
            <div className="col-md-auto">
              {/* <div className="d-flex justify-content-center">A∪B</div> */}
              <div className="d-flex justify-content-center">
                <img
                  style={{ height: "150px", width: "150px" }}
                  src={AUB}
                  alt="logo"
                />
              </div>
            </div>
            <div className="col" style={{ fontSize: "1.2vw" }}>
              {/* <div className="d-flex justify-content-center">A∪C</div> */}
              <div className="d-flex justify-content-center">
                <img
                  style={{ height: "150px", width: "150px" }}
                  src={AUC}
                  alt="logo"
                />
              </div>
            </div>
            <div className="col" style={{ fontSize: "1.2vw" }}>
              {/* <div className="d-flex justify-content-center">
                      (A∪B)∩(A∪C)
                    </div> */}
              <div className="d-flex justify-content-center">
                <img
                  style={{ height: "150px", width: "150px" }}
                  src={AUBIAUC}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AltheoryMidContent1;

import { useTranslation } from "react-i18next";
import exp1 from "../../Superscript";
import { Link } from "react-router-dom";
import backgroundImg from "../../../Img/backg.jpg";
import "../../../styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Activity7 = () => {
  // const { t, i18n } = useTranslation();
  const { t, i18n } = useTranslation();

  return (
<div
      className="flex-column d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage: "url(" + backgroundImg + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        fontFamily: "Arial",
      }}
    >
      <div
        className="col-12 col-md-9 border border-light border-2 "
        style={{
         
          background: "rgba(255, 255, 255, .45)",
          border: "3px solid rgba(255, 255, 255, .5)",
          // backdropFilter: "blur(5px)",
          borderRadius: "20px",
        }}
      >
        <div
          className="title text-center d-flex justify-content-center align-items-center fw-bolder mt-3 "
          style={{ color: "#ac3843" }}
>
          {t("title")}:&nbsp;{exp1()}
        </div>
 
        <div className="title1 d-flex justify-content-center align-items-end fw-bolder">
        {t("obj")}:
        </div>
 
        <div className=" d-flex justify-content-center">
          <div className="col-9 objective text-center fw-normal">
          {t("obj_content")}
            <br />
            {exp1()}
         
          </div>
        </div>
 
        <div className="">
          <div className="title1 d-flex justify-content-center align-items-end fw-bolder text-center">
          {t("Learning Outcome")}:
          </div>
          <div className="objective fw-normal d-flex justify-content-center  ">
            <div className="col-12 col-md-9 d-flex justify-content-center text-center">
             
           <ol>
                <li>{t("Learning Outcome-1")}.</li>
                <li>{t("Learning Outcome-2")}.</li>
              </ol>
           
            </div>
          </div>
        </div>
 
        <div className="d-flex justify-content-center mb-3 mt-5">
          <Link to="/activity7/letusverify" style={{ textDecoration: "none" }}>
            <div
              className="btn px-lg-5 px-mb-4 px-sm-3"
              style={{
                fontWeight: "700",
                fontSize: "calc(0.5rem + 1.5vw)",
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

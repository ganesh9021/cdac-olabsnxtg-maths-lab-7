import React from "react";
import BackNextBar from "./MajorComponents/BackNextBar";
import Res3Copy from "./Res3Copy";
import Res6Copy from "./Res6Copy";
import { useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";

const ResultMidContent = () => {
  const { t, i18n } = useTranslation();
  
 
  const navigate = useNavigate();

  const onNext = () => {
    navigate("");
   
  };

  const Restart = () => {
    navigate("/letusverify");
  };

  return (
    <div style={{ height: "100%" }}>
      <div
        className="container"
        style={{ height: "90%", fontFamily: "arial", overflow: "auto" }}
      >
        <div className="row mt-4">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <div>
              <b>LHS [A∪(B∩C)]</b>
            </div>
            <div>
              <Res3Copy />
            </div>
            <div>&#123;5, 7, 8, 9, 4, 6 &#125;</div>
          </div>
          <div className="col-md-auto d-flex justify-content-center align-items-center text-center">
            <div className="fw-bolder" >=</div>
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <div>
              <b>RHS [(A∪B)∩(A∪C)]</b>
            </div>
            <div>
              <Res6Copy />
            </div>
            <div>&#123;5, 7, 8, 9, 4, 6 &#125;</div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column align-items-center mb-4">
            <div>{t("line-5")}</div>
            <div>
              <b>LHS [AU(B∩C)] = RHS [(AUB)∩(AUC)]</b>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center align-items-end'>
              <Button id="btn" autoFocus variant="contained" onClick={Restart}>
              {t("btn-6")}
              </Button>
            </div>
      </div>
      <BackNextBar
        setForward={onNext}
        backvisible="hidden"
        nextvisible="hidden"
        submitvisible="hidden"
      />
    </div>
  );
};

export default ResultMidContent;

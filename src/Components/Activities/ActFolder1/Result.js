import React, { useContext, useOutletContext } from "react";
import BackNextBar from "./BackNextBar";
import Res_3_Copy from "./Res_3_copy";
import Res_6_Copy from "./Res_6_Copy";
import { useNavigate } from "react-router-dom";
import { rezContext } from "./Act1startpage";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";

const Result = () => {
  const { t, i18n } = useTranslation();
  const { setArv } = useContext(rezContext);
  // const { setToolvisible } = useOutletContext();
  const navigate = useNavigate();

  const onBack = () => {
    navigate("/activity7/letusverify/act1startpage/lhs_rhs");
    setArv(2);
    // setToolvisible("visible");
  };

  const onNext = () => {
    navigate("");
    // setToolvisible("hidden");
  };

  const Restart = () => {
    navigate("/activity7");
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
              <Res_3_Copy />
            </div>
            <div>&#123;5, 7, 8, 9, 4, 6 &#125;</div>
          </div>
          <div className="col-1 d-flex justify-content-center align-items-center">
            <div className="fw-bolder">=</div>
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <div>
              <b>RHS [(A∪B)∩(A∪C)]</b>
            </div>
            <div>
              <Res_6_Copy />
            </div>
            <div>&#123;5, 7, 8, 9, 4, 6 &#125;</div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column align-items-center mb-4">
            <div>{t("line-5")}</div>
            <div>
              <b>LHS [AU(B∩C)] = RHS[(AUB)∩(AUC)]</b>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center align-items-end'>
              <Button id="btn" autoFocus variant="contained" onClick={Restart}>
              {t("btn-6")}
              </Button>
            </div>
      </div>
      <BackNextBar setBackward={onBack} setForward={onNext} />
    </div>
  );
};

export default Result;

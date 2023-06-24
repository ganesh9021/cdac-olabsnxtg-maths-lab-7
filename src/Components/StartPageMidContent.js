import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackNextBar from "./MajorComponents/BackNextBar";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../config/dbconfig.js";
import { SendLogData } from "../config/wslog.js";

const LHS_RHS = () => {
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  const [pageName, setPageName] = useState("startpage");
  //flags are used to disable or enable the button
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(true);
  const [flag3, setFlag3] = useState(true);

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (localStorage.getItem("A") == 3) {
      setFlag2(false);
      setFlag3(true);
      setFlag1(true);
    }
    if (localStorage.getItem("A") == 6) {
      setFlag3(false);
      setFlag1(true);
      setFlag2(true);
    }
  });

  const LHS = () => {
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|LHS button",
      label: "L7|Navigate to relations of LHS successfully.",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "LHS",
      "button",
      "clicked on LHS button"
    );
    navigate("/letusverify/startpage/tool1");
  };

  const RHS = () => {
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|RHS button",
      label: "L7|Navigate to relations of RHS successfully.",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "RHS",
      "button",
      "clicked on RHS button"
    );
    navigate("/letusverify/startpage/tool4");
  };

  const Result = () => {
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|RESULT button",
      label: "L7|Navigate to result page successfully.",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "RESULT",
      "button",
      "clicked on RESULT button"
    );
    navigate("/letusverify/startpage/result");
  };

  const onNext = () => {
    if (localStorage.getItem("A") == 3) {
      toast.error(`${t("restriction_2")}`, {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      toast.error(`${t("restriction_1")}`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("A") == 1) {
      document.getElementById("cb1").checked = true;
    }
    if (localStorage.getItem("A") == 2) {
      document.getElementById("cb1").checked = true;
      document.getElementById("cb2").checked = true;
    }
    if (localStorage.getItem("A") == 3) {
      document.getElementById("cb1").checked = true;
      document.getElementById("cb2").checked = true;
      document.getElementById("cb3").checked = true;
    }
    if (localStorage.getItem("A") == 4) {
      document.getElementById("cb1").checked = true;
      document.getElementById("cb2").checked = true;
      document.getElementById("cb3").checked = true;
      document.getElementById("cb4").checked = true;
    }
    if (localStorage.getItem("A") == 5) {
      document.getElementById("cb1").checked = true;
      document.getElementById("cb2").checked = true;
      document.getElementById("cb3").checked = true;
      document.getElementById("cb4").checked = true;
      document.getElementById("cb5").checked = true;
    }
    if (localStorage.getItem("A") == 6) {
      document.getElementById("cb1").checked = true;
      document.getElementById("cb2").checked = true;
      document.getElementById("cb3").checked = true;
      document.getElementById("cb4").checked = true;
      document.getElementById("cb5").checked = true;
      document.getElementById("cb6").checked = true;
    }
  });

  return (
    <div className="container-fluid" style={{ height: "100%" }}>
      <div style={{ height: "90%", overflow: "hidden auto" }}>
        <div className="row mb-4 mt-3">
          <div className="text-center text-danger fw-bolder">
            {t("obj_content")} <br /> A∪(B∩C) = (A∪B)∩(A∪C)
          </div>
        </div>

        <div className="row mb-3">
          {/* <div className="col-1"></div> */}
          <div className="col d-flex justify-content-center">
            <div className="d-flex flex-column">
              <div>
                <input
                  className="bg-primary me-3"
                  type="checkbox"
                  name="check_box"
                  id="cb1"
                  value="A"
                  disabled
                />
                <span>A</span>
              </div>
              <div>
                <input
                  className="bg-primary me-3"
                  type="checkbox"
                  name="check_box"
                  id="cb2"
                  value="BIC"
                  disabled
                />
                <span>B∩C</span>
              </div>
              <div className="mb-3">
                <input
                  className="bg-primary me-3"
                  type="checkbox"
                  name="check_box"
                  id="cb3"
                  value="AUBIC"
                  disabled
                />
                <span>A∪(B∩C)</span>
              </div>
              <div>
                <Button
                  disabled={flag1}
                  autoFocus
                  variant="contained"
                  onClick={LHS}
                >
                  LHS
                </Button>
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div>
              <div>
                <input
                  className="bg-primary me-3"
                  type="checkbox"
                  name="check_box"
                  id="cb4"
                  value="A∪B"
                  disabled
                />
                <span>A∪B</span>
              </div>
              <div>
                <input
                  className="bg-primary me-3"
                  type="checkbox"
                  name="check_box"
                  id="cb5"
                  value="A∪C"
                  disabled
                />
                <span>A∪C</span>
              </div>
              <div className="mb-3">
                <input
                  className="bg-primary me-3"
                  type="checkbox"
                  name="check_box"
                  id="cb6"
                  value="(A∪B)∩(A∪C)"
                  disabled
                />
                <span>(A∪B)∩(A∪C)</span>
              </div>
              <div>
                <Button
                  disabled={flag2}
                  autoFocus
                  variant="contained"
                  onClick={RHS}
                >
                  RHS
                </Button>
              </div>
            </div>
          </div>
          {/* <div className="col-1"></div> */}
        </div>
        <div className="row">
          <div className="d-flex justify-content-center">
            <Button
              disabled={flag3}
              id="btn"
              autoFocus
              variant="contained"
              onClick={Result}
            >
              {t("result")}
            </Button>
          </div>
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

export default LHS_RHS;

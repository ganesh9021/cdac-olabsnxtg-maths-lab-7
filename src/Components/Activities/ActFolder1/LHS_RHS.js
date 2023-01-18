import React, { useContext, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import BackNextBar from "./BackNextBar";
import { rezContext } from "./Act1startpage";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

const LHS_RHS = () => {
  const { setArv } = useContext(rezContext);
  const { setToolvisible } = useOutletContext();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const LHS = () => {
    setArv(3);
    navigate("tool_1");
  };
  const RHS = () => {
    if (localStorage.getItem("A") == 4) {
      setArv(8);
      navigate("tool_4");
    } else {
      toast.error(`${t("toaster-2")}`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const Result = () => {
    if (localStorage.getItem("A") === "7") {
      setArv(12);
      navigate("result");
    } else {
      document.getElementById("btn").disabled = true;
      toast.error(`${t("toaster-1")}`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const onBack = () => {
    navigate("/activity7/letusverify");
    //setArv(0);
    setToolvisible("visible");
  };

  const onNext = (e) => {
    navigate("/activity7/letusverify/act1startpage/lhs_rhs/tool_1");
    setToolvisible("visible");
    setArv(3);
  };
  useEffect(() => {
    if (localStorage.getItem("A") === "2") {
      document.getElementById("cb1").checked = true;
    }
    if (localStorage.getItem("A") === "3") {
      document.getElementById("cb1").checked = true;
      document.getElementById("cb2").checked = true;
    }
    if (localStorage.getItem("A") === "4") {
      document.getElementById("cb1").checked = true;
      document.getElementById("cb2").checked = true;
      document.getElementById("cb3").checked = true;
    }
    if (localStorage.getItem("A") === "5") {
      document.getElementById("cb1").checked = true;
      document.getElementById("cb2").checked = true;
      document.getElementById("cb3").checked = true;
      document.getElementById("cb4").checked = true;
    }
    if (localStorage.getItem("A") === "6") {
      document.getElementById("cb1").checked = true;
      document.getElementById("cb2").checked = true;
      document.getElementById("cb3").checked = true;
      document.getElementById("cb4").checked = true;
      document.getElementById("cb5").checked = true;
    }
    if (localStorage.getItem("A") === "7") {
      document.getElementById("cb1").checked = true;
      document.getElementById("cb2").checked = true;
      document.getElementById("cb3").checked = true;
      document.getElementById("cb4").checked = true;
      document.getElementById("cb5").checked = true;
      document.getElementById("cb6").checked = true;
    }
  }, []);

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
                />
                <span>A∪(B∩C)</span>
              </div>
              <div>
                <Button autoFocus variant="contained" onClick={LHS}>
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
                />
                <span>(A∪B)∩(A∪C)</span>
              </div>
              <div>
                <Button autoFocus variant="contained" onClick={RHS}>
                  RHS
                </Button>
              </div>
            </div>
          </div>
          {/* <div className="col-1"></div> */}
        </div>
        <div className="row">
          <div className="d-flex justify-content-center">
            <Button id="btn" autoFocus variant="contained" onClick={Result}>
              {t("result")}
            </Button>
          </div>
        </div>
      </div>
      <BackNextBar setBackward={onBack} setForward={onNext} />
    </div>
  );
};

export default LHS_RHS;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackNextBar from "./MajorComponents/BackNextBar";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

const LHS_RHS = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  useEffect(() => {
    console.log("local storage : ", localStorage.getItem("A"));
    if (localStorage.getItem("A") == 4) {
      setActive2(false);
      setActive1(true);
      setActive3(true);
    } else if (localStorage.getItem("A") == 7) {
      setActive3(false);
      setActive1(true);
      setActive2(true);
    } else {
      setActive1(false);
      setActive2(true);
      setActive3(true);
    }
  });
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const LHS = () => {
    navigate("/letusverify/startpage/tool1");
  };

  const RHS = () => {
    if (localStorage.getItem("A") == 4) {
      navigate("/letusverify/startpage/tool4");
    } else {
      toast.error(`${t("toaster-2")}`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const Result = () => {
    if (localStorage.getItem("A") === "7") {
      navigate("/letusverify/startpage/result");
    } else {
      document.getElementById("btn").disabled = true;
      toast.error(`${t("toaster-1")}`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const onNext = () => {
    if(localStorage.getItem('A') == 4)
    {
      toast.error(`${t("restriction_2")}`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
    else 
    {
      toast.error(`${t("restriction_1")}`, {
        position: "top-center",
        autoClose: 2000,
      });
    }

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
                  disabled={active1}
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
                  disabled={active2}
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
              disabled={active3}
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
        backvisible="visible"
        nextvisible="visible"
        submitvisible="hidden"
      />
    </div>
  );
};

export default LHS_RHS;

import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import { rezContext } from "./Act1startpage";
import "./App.css";
import BackNextBar from "./BackNextBar";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

function Tool_2() {
  let [count, setCount] = useState(0);
  let navigate = useNavigate();
  const canvas = useRef();
  const { setArv } = useContext(rezContext);
  const { setToolvisible } = useOutletContext();
  const { t, i18n } = useTranslation();
  let ctx = null;

  const onBack = () => {
    navigate("/activity7/letusverify/act1startpage/lhs_rhs/tool_1");
    setArv(3);
    setToolvisible("visible");
  };

  const onNext = (e) => {
    if (count == 2) {
      navigate("/activity7/letusverify/act1startpage/tool_2/dragndrop_2");
      setToolvisible("visible");
      setArv(5);
    } else {
      toast.error(`${t("toaster-5")}`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };
  // const Next = () => {
  //   setArv(6)
  //   navigate("/activity7/letusverify/act1startpage/tool_2/dragndrop_2");
  // }

  useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = 300;
    canvasEle.height = 200;
    ctx = canvasEle.getContext("2d");

    ctx.clearRect(
      0,
      0,
      canvas.current.clientWidth,
      canvas.current.clientHeight
    );
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText("U", 290, 10);
  }, []);

  const Draw_Circle_B = (style) => {
    if (count === 0) {
      count = count + 1;
      setCount(count);
      document.getElementById("id1").style.visibility = "hidden";
    }

    const canvasEle = canvas.current;
    ctx = canvasEle.getContext("2d");
    const { backgroundColor = "rgba(115, 230, 163, 0.4)" } = style;

    ctx.beginPath();
    ctx.fillStyle = backgroundColor;
    ctx.arc(83, 100, 50, 0, 2 * Math.PI);
    ctx.fill();

    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText("B", 83, 100);

    //border of circle A
    ctx.beginPath();
    ctx.arc(83, 100, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();
  };

  const Draw_Circle_C = (style) => {
    if (count === 1) {
      document.getElementById("id2").style.visibility = "hidden";
      count = count + 1;
      setCount(count);
    }

    const canvasEle = canvas.current;
    ctx = canvasEle.getContext("2d");
    const { backgroundColor = "rgba(59, 106, 237, 0.4)" } = style;

    ctx.beginPath();
    ctx.fillStyle = backgroundColor;
    ctx.arc(218, 100, 50, 0, 2 * Math.PI);
    ctx.fill();

    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText("C", 218, 100);

    //border of circle C
    ctx.beginPath();
    ctx.arc(218, 100, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();
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
    <div style={{ height: "100%" }}>
      <div className="container" style={{ height: "90%", overflow: "auto" }}>
        <div
          className="row align-items-center"
          style={{ height: "100%", width: "100%" }}
        >
          <div className="col">
            <div className="fs-1.2vw fw-bold">{t("line-2")}</div>
            <div className="d-flex">
              <div className="me-4">
                <div>
                  <input type="checkbox" name="check_box" id="cb1" value="A" />
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="check_box"
                    id="cb2"
                    value="B∩C"
                  />
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="check_box"
                    id="cb3"
                    value="AU(B∩C)"
                  />
                </div>
              </div>
              <div>
                <div>A</div>
                <div>B ∩ C</div>
                <div>A ∪ (B ∩ C)</div>
              </div>
            </div>
          </div>
          <div className="col">
            <div>
              <canvas
                ref={canvas}
                style={{ border: `1px solid black` }}
              ></canvas>
            </div>
            <div className="">
              <Button
                id="id1"
                autoFocus
                variant="contained"
                onClick={Draw_Circle_B}
                size="small"
                style={{ marginRight: "1%", marginBottom: "1%", marginLeft:'8%'}}
              >
                {t("btn-4")}
              </Button>
              <Button
                id="id2"
                autoFocus
                variant="contained"
                onClick={Draw_Circle_C}
                size="small"
                style={{ marginRight: "1%", marginBottom: "1%" }}
              >
                {t("btn-5")}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <BackNextBar setBackward={onBack} setForward={onNext} />
    </div>
  );
}

export default Tool_2;

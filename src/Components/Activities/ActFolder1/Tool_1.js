import Button from "@mui/material/Button";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import { rezContext } from "./Act1startpage";
import "./App.css";
import BackNextBar from "./BackNextBar";

function Tool_1() {
  const { setArv } = useContext(rezContext);
  const { setToolvisible } = useOutletContext();

  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  let navigate = useNavigate();
  const canvas = useRef();
  const { t, i18n } = useTranslation();
  var flag = "0"; //landscape

  let ctx = null;

  const onBack = (e) => {
    navigate("/activity7/letusverify/act1startpage/lhs_rhs");
    setArv(0);
    setToolvisible("visible");
  };

  const onNext = (e) => {
    if (count == 1) {
      localStorage.setItem("A", 2);
      navigate("/activity7/letusverify/act1startpage/tool_2");
      setToolvisible("visible");
      setArv(4);
    } else {
      toast.error(`${t("toaster-5")}`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const res1_withno = () => {
    //navigate("res1_withno");
    if (count == 1) {
      localStorage.setItem("A", 2);
      navigate("res1_withno");
      setToolvisible("visible");
      setArv(6);
    } else {
      toast.error(`${t("toaster-5")}`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const Draw_Rectangle = () => {
    if (count === 0) {
      count = count + 1;
      setCount(count);
      document.getElementById("id1").style.visibility = "hidden";
    } else {
      setCount(0);
    }
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
  };

  const Draw_Circle = (style) => {
    if (count == 1) {
      count1 = count1 + 1;
      setCount1(count1);
      console.log(count);
      if (count1 == 1) {
        document.getElementById("id2").style.visibility = "hidden";
      }

      const canvasEle = canvas.current;
      ctx = canvasEle.getContext("2d");
      const { backgroundColor = "rgba(255, 39, 77, 0.4)" } = style;

      ctx.beginPath();
      ctx.fillStyle = backgroundColor;
      ctx.arc(150, 100, 50, 0, 2 * Math.PI);
      ctx.fill();

      ctx.font = "18px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "Black";
      ctx.fillText("A", 150, 100);

      //border of circle A
      ctx.beginPath();
      ctx.arc(150, 100, 50, 0, 2 * Math.PI);
      ctx.strokeStyle = "black";
      ctx.stroke();

      toast.success(`${t("toaster-4")}`, {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      toast.error(`${t("toaster-3")}`, {
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
    
  }, []);

  return (
    <div style={{ height: "100%" }}>
      <div className="container" style={{ height: "90%", overflow: "auto" }}>
        <div className="row align-items-center" style={{ height: "100%" ,width : '95%'}}>
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
              <canvas
                ref={canvas}
                style={{ border: `${count}px solid black` }}
              ></canvas>
            <div className="">
              <Button
                id="id1"
                autoFocus
                variant="contained"
                onClick={Draw_Rectangle}
                size="small"
                style={{ marginRight: "1%" ,marginBottom:'1%'}}
              >
                {t("btn-1")}
              </Button>
              <Button
                id="id2"
                autoFocus
                variant="contained"
                onClick={Draw_Circle}
                size="small"
                style={{ marginRight: "1%" ,marginBottom:'1%'}}
              >
                {t("btn-2")}
              </Button>
              <Button
                autoFocus
                variant="contained"
                onClick={res1_withno}
                size="small"
              >
                {t("btn-3")}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <BackNextBar setBackward={onBack} setForward={onNext} />
    </div>
  );
}

export default Tool_1;

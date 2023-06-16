import Button from "@mui/material/Button";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BackNextBar from "./MajorComponents/BackNextBar";
import * as Instru from "./MajorComponents/Instruction";

function Tool1MidContent({ setInstr }) {
  //count is use to draw the border of canvas
  const [count, setCount] = useState(0);
  //flag is use to disable the draw universal set and draw set a button.
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(true);
  const [flag3, setFlag3] = useState(true);
  let navigate = useNavigate();
  const canvas = useRef();
  const { t, i18n } = useTranslation();
  let ctx = null;

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
  });

  useEffect(() => {
    if (flag1 && flag2) {
      setFlag3(false);
    }
  });

  const onNext = () => {
    if (flag1 && flag2) {
      localStorage.setItem("A", 1);
      navigate("/letusverify/startpage/tool2");
    } else {
      toast.error(`${t("toaster-5")}`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const res1_withno = () => {
    localStorage.setItem("A", 1);
    navigate("/letusverify/startpage/tool1/res1withno");
  };

  const Draw_Rectangle = () => {
    setCount(count + 1);
    setFlag1(true);
    setFlag2(false);
    setInstr(Instru.Instruction_41);

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
    setFlag2(true);
    setInstr(Instru.Instruction_42);
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
  };

  return (
    <div style={{ height: "100%" }}>
      <div className="container" style={{ height: "90%", overflow: "auto" }}>
        <div
          className="row align-items-center"
          style={{ height: "100%", width: "95%" }}
        >
          <div className="col">
            <div className="fs-1.2vw fw-bold">{t("line-2")}</div>
            <div className="d-flex">
              <div className="me-4">
                <div>
                  <input
                    type="checkbox"
                    name="check_box"
                    id="cb1"
                    value="A"
                    disabled
                  />
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="check_box"
                    id="cb2"
                    value="B∩C"
                    disabled
                  />
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="check_box"
                    id="cb3"
                    value="AU(B∩C)"
                    disabled
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
                style={{ marginRight: "1%", marginBottom: "1%" }}
                disabled={flag1}
              >
                {t("btn-1")}
              </Button>
              <Button
                id="id2"
                autoFocus
                variant="contained"
                onClick={Draw_Circle}
                size="small"
                style={{ marginRight: "1%", marginBottom: "1%" }}
                disabled={flag2}
              >
                {t("btn-2")}
              </Button>
              <Button
                autoFocus
                variant="contained"
                onClick={res1_withno}
                size="small"
                disabled={flag3}
              >
                {t("btn-3")}
              </Button>
            </div>
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
}

export default Tool1MidContent;

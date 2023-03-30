import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackNextBar from "./MajorComponents/BackNextBar";

import { useTranslation } from "react-i18next";

function Res2WithNoMidContent() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const canvas = useRef();

  const onNext = () => {
    navigate("/letusverify/startpage/tool3");
  };

  let ctx = null;
  const boxes = [
    { x: 133, y: 100, r: 50, s: 0, e: 2 * Math.PI, shapeName: "B" },
    { x: 193, y: 100, r: 50, s: 0, e: 2 * Math.PI, shapeName: "C" },
  ];

  useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = 300;
    canvasEle.height = 200;
    ctx = canvasEle.getContext("2d");
  }, []);

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

  useEffect(() => {
    draw();
  }, []);

  const draw = () => {
    ctx.clearRect(
      0,
      0,
      canvas.current.clientWidth,
      canvas.current.clientHeight
    );
    boxes.map((info) => drawFillCircle(info));
  };

  const drawFillCircle = (info, style = {}) => {
    const { x, y, r, s, e, shapeName } = info;
    const { backgroundColor = "rgba(73, 146, 228, 0.55)" } = style;

    ctx.beginPath();
    ctx.fillStyle = backgroundColor;
    ctx.arc(133, 100, 50, 0.9, 5.32, true);

    if (x === 133 && y === 100) {
      ctx.fill();
    } else {
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.fillStyle = backgroundColor;
    ctx.arc(193, 100, 50, 2.1816667, 4.04);
    if (x === 193 && y === 100) {
      ctx.fill();
    } else {
      ctx.stroke();
    }

    //Text
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText(shapeName, x, y);
    ctx.fillText("U", 290, 10);

    //Border of circle B
    ctx.beginPath();
    ctx.arc(133, 100, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //border of circle C
    ctx.beginPath();
    ctx.arc(193, 100, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //code for Numbers
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "red";
    ctx.fillText("4", 160, 75);
    ctx.fillText("6", 160, 120);
    ctx.fillText("3", 125, 75);
    ctx.fillText("5", 95, 100);
    ctx.fillText("2", 195, 75);
    ctx.fillText("8", 225, 100);
    ctx.fillText("10", 195, 130);
  };

  return (
    <div style={{ height: "100%" }}>
      <div className="container" style={{ height: "90%", overflow: "auto" }}>
        <div
          className="row align-items-center"
          style={{ height: "100%", width: "100%" }}
        >
          <div className="col mb-1">
            <div className="fs-1.2vw fw-bold">{t("line-2")}</div>
            <div className="d-flex">
              <div className="me-4">
                <div>
                  <input type="checkbox" name="check_box" id="cb1" value="A" disabled/>
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
          <div className="col mb-1">
            <div>
              <canvas
                ref={canvas}
                style={{ border: "1px solid black" }}
              ></canvas>
            </div>
          </div>
          <div className="col">
            <ul>
              <b>Set B:</b> &#123; 3, 4, 5, 6 &#125;
            </ul>
            <ul>
              <b>Set C:</b> &#123; 2, 4, 6, 8, 10 &#125;
            </ul>
            <ul>
              <b>Set B∩C:</b> &#123; 4, 6 &#125;
            </ul>
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

export default Res2WithNoMidContent;

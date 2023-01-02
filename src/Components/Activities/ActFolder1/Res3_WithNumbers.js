import React, { useRef, useEffect, useContext } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import BackNextBar from "./BackNextBar";

import { rezContext } from "./Act1startpage";

import { useTranslation } from "react-i18next";

function Res3_WithNumbers() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const canvas = useRef();
  const { setArv } = useContext(rezContext);
  const { setToolvisible } = useOutletContext();

  const onBack = () => {
    navigate("/activity7/letusverify/act1startpage/tool_3");
    setArv(7);
    setToolvisible("visible");
  };

  const onNext = (e) => {
    navigate("/activity7/letusverify/act1startpage/lhs_rhs");
    setToolvisible("visible");
    setArv(1);
  };

  let ctx = null;
  const boxes = [
    { x: 250, y: 75, r: 50, s: 0, e: 2 * Math.PI, shapeName: "A" },
    // { x: 230, y: 75, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'B'},
    // { x: 200, y: 130, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'C'},
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
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "black";
    ctx.fillText("U", 290, 10);
    boxes.map((info) => drawFillCircle(info));
  };

  const drawFillCircle = (info, style = {}) => {
    // const { x, y, r, s, e, shapeName} = info;
    // const { backgroundColor = 'rgba(201, 50, 48, 0.55)'} = style;

    //Circle A
    ctx.beginPath();
    ctx.fillStyle = "rgba(255, 39, 77, 0.4)";
    ctx.arc(160, 75, 50, 0, 2 * Math.PI, true);
    ctx.fill();

    //Circle B
    ctx.beginPath();
    ctx.fillStyle = "rgba(73, 146, 228, 0.55)";
    ctx.arc(130, 125, 50, 0.9, 5.32, true);
    ctx.fill();

    //Circle C
    ctx.beginPath();
    ctx.fillStyle = "rgba(73, 146, 228, 0.55)";
    ctx.arc(190, 125, 50, 2.1816667, 4.04);
    ctx.fill();

    //Border of circle B
    ctx.beginPath();
    ctx.arc(130, 125, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //border of circle C
    ctx.beginPath();
    ctx.arc(190, 125, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //border of circle A
    ctx.beginPath();
    ctx.arc(160, 75, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //Text A
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText("A", 160, 75);

    //Text B
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText("B", 130, 125);

    //Text C
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText("C", 190, 125);

    //code for numbers
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "red";
    ctx.fillText("4", 160, 135);
    ctx.fillText("6", 160, 150);
    ctx.fillText("5", 130, 90);
    ctx.fillText("7", 140, 50);
    ctx.fillText("9", 180, 50);
    ctx.fillText("8", 190, 90);
    ctx.fillText("3", 110, 135);
    ctx.fillText("10", 220, 135);
    ctx.fillText("2", 190, 160);
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
          <div className="col mb-1">
            <canvas ref={canvas} style={{ border: "1px solid black" }}></canvas>
          </div>
          <div className="col">
            <ul>
              <b>Set A:</b> &#123; 5, 7, 8, 9 &#125;
            </ul>
            <ul>
              <b>Set B:</b> &#123; 3, 4, 5, 6 &#125;
            </ul>
            <ul>
              <b>Set C:</b> &#123; 2, 4, 6, 8, 10 &#125;
            </ul>
            <ul>
              <b>Set B∩C:</b> &#123; 4, 6 &#125;
            </ul>
            <ul>
              <b>Set A∪(B∩C):</b> &#123; 5, 7, 8, 9, 4, 6 &#125;
            </ul>
          </div>
        </div>
      </div>
      <BackNextBar setBackward={onBack} setForward={onNext} />
    </div>
  );
}

export default Res3_WithNumbers;

import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackNextBar from "./MajorComponents/BackNextBar";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../config/dbconfig.js";
import { SendLogData } from "../config/wslog.js";

function Res5WithNoMidContentCopy() {
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  const [pageName, setPageName] = useState("example-2 page of A∪C)");
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const canvas = useRef();
  let ctx = null;

  const boxes = [
    {
      x: 120,
      y: 100,
      r: 50,
      s: 0,
      e: 2 * Math.PI,
      shapeName: "A",
      color: "rgba(255, 39, 77, 0.4)",
    },
    {
      x: 180,
      y: 100,
      r: 50,
      s: 0,
      e: 2 * Math.PI,
      shapeName: "C",
      color: "rgba(59, 106, 237, 0.4)",
    },
  ];

  useEffect(() => {
    if (localStorage.getItem("A") == 4) {
      document.getElementById("cb4").checked = true;
    }
    if (localStorage.getItem("A") == 5) {
      document.getElementById("cb4").checked = true;
      document.getElementById("cb5").checked = true;
    }
    if (localStorage.getItem("A") == 6) {
      document.getElementById("cb4").checked = true;
      document.getElementById("cb5").checked = true;
      document.getElementById("cb6").checked = true;
    }
  });

  const onNext = (e) => {
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|NEXT button of AUC on example-2 page",
      label: "L7|navigate to create the relation of (A∪B)∩(A∪C)",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "NEXT",
      "button",
      "clicked on NEXT button"
    );
    navigate("/letusverify/startpage/tool6");
  };

  useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = 300;
    canvasEle.height = 200;
    ctx = canvasEle.getContext("2d");
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
    const { x, y, r, s, e, shapeName, color } = info;
    const { backgroundColor = color } = style;

    ctx.beginPath();
    ctx.arc(x, y, r, s, e);
    ctx.fillStyle = backgroundColor;

    if ((x === 120 && y === 100) || (x === 180 && y === 100)) {
      ctx.fill();
    } else {
      ctx.stroke();
    }
    //Text alignment and decoration
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText(shapeName, x, y);
    ctx.fillText("U", 290, 10);

    //border of circle C
    ctx.beginPath();
    ctx.arc(180, 100, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //border of circle A
    ctx.beginPath();
    ctx.arc(120, 100, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //code for numbers
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "red";
    ctx.fillText("d", 150, 90);
    ctx.fillText("e", 150, 110);
    ctx.fillText("a", 90, 100);
    ctx.fillText("b", 120, 75);
    ctx.fillText("c", 120, 125);
    ctx.fillText("h", 180, 75);
    ctx.fillText("j", 210, 100);
    ctx.fillText("i", 180, 125);
  };

  return (
    <div style={{ height: "100%" }}>
      <div className="container" style={{ height: "90%", overflow: "auto" }}>
        <div
          className="row align-items-center"
          style={{ height: "100%", width: "100%" }}
        >
          <div className="col mb-1">
            <div className="fs-1.2vw fw-bold">{t("line-4")}</div>
            <div className="d-flex">
              <div className="me-4">
                <div>
                  <input
                    type="checkbox"
                    name="check_box"
                    id="cb4"
                    value="A∪B"
                    disabled
                  />
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="check_box"
                    id="cb5"
                    value="A∪C"
                    disabled
                  />
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="check_box"
                    id="cb6"
                    value="(A∪B)∩(A∪C)"
                    disabled
                  />
                </div>
              </div>
              <div>
                <div>A ∪ B</div>
                <div>A ∪ C</div>
                <div>(A ∪ B)∩(A ∪ C)</div>
              </div>
            </div>
          </div>
          <div className="col mb-1">
            <canvas ref={canvas} style={{ border: "1px solid black" }}></canvas>
          </div>

          <div className="col">
            <ul>
              <b>Set A:</b> &#123; a, b, c, d, e &#125;
            </ul>
            <ul>
              <b>Set C:</b> &#123; i, d, e, h, j &#125;
            </ul>
            <ul>
              <b>Set A∪C:</b> &#123; a, b, c, d, e, h, j, i &#125;
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

export default Res5WithNoMidContentCopy;

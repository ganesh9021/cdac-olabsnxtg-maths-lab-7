import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackNextBar from "./MajorComponents/BackNextBar";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../config/dbconfig.js";
import { SendLogData } from "../config/wslog.js";

function Res1WithNoMidContentCopy() {
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  const [pageName, setPageName] = useState("example-2 of set A");
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const canvas = useRef();
  let ctx = null;
  const boxes = [{ x: 200, y: 100, r: 50, s: 0, e: 2 * Math.PI }];

  const onNext = (e) => {
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|NEXT button",
      label: "L7|navigate to B∩C relation successfully",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "next",
      "button",
      "clicked on next button on example-2 page of set A"
    );
    navigate("/letusverify/startpage/tool2");
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
  });

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
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText("U", 290, 10);
    boxes.map((info) => drawFillCircle(info));
  };

  const drawFillCircle = () => {
    // fill Circle A
    ctx.beginPath();
    ctx.fillStyle = "rgba(255, 39, 77, 0.4)";
    ctx.arc(150, 100, 50, 0, 2 * Math.PI);
    ctx.fill();

    //Text of Letter A
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

    //code for numbers
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "red";
    ctx.fillText("a", 180, 100);
    ctx.fillText("b", 120, 100);
    ctx.fillText("c", 150, 75);
    ctx.fillText("d", 140, 130);
    ctx.fillText("e", 170, 125);
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
          <div className="col mb-1">
            <canvas ref={canvas} style={{ border: "1px solid black" }}></canvas>
          </div>
          <div className="col">
            <ul>
              <b>Set A:</b> &#123; a, b, c, d, e &#125;
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

export default Res1WithNoMidContentCopy;

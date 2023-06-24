import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackNextBar from "./MajorComponents/BackNextBar";
import ReactGA from "react-ga4";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../config/dbconfig.js";
import { SendLogData } from "../config/wslog.js";

function Res6WithNoMidContent() {
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  const [pageName, setPageName] = useState("example-1 page of (A∪B)∩(A∪C)");
  const { t, i18n } = useTranslation();
  const canvas = useRef();
  const navigate = useNavigate();
  let ctx = null;
  const boxes = [{ x: 90, y: 75, r: 50, s: 0, e: 2 * Math.PI, shapeName: "A" }];

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

  const onNext = () => {
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|NEXT button on example-1 page of (A∪B)∩(A∪C)",
      label: "L7|navigate on startpage after attempting both LHS and RHS",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "NEXT",
      "button",
      "clicked on NEXT button"
    );
    navigate("/letusverify/startpage");
  };
  const handleNextExample = () => {
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|NEXT EXAMPLE button on example-1 page of (A∪B)∩(A∪C)",
      label: "L7|navigate on example-2 page of (A∪B)∩(A∪C)",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "NEXT EXAMPLE",
      "button",
      "clicked on NEXT EXAMPLE button"
    );
    navigate("/letusverify/startpage/tool6/res6/res6withnocopy");
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
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText("U", 290, 10);
    boxes.map((info) => drawFillCircle(info));
  };

  const drawFillCircle = (info, style = {}) => {
    //Circle A
    ctx.beginPath();
    ctx.fillStyle = "rgba(255, 39, 77, 0.4)";
    ctx.arc(120, 110, 50, 0, 2 * Math.PI, true);
    ctx.fill();

    //Circle B
    ctx.beginPath();
    ctx.fillStyle = "rgba(73, 146, 228, 0.55)";
    ctx.arc(185, 110, 50, 3.1765, 5.02655);
    ctx.fill();

    //Circle C
    ctx.beginPath();
    ctx.fillStyle = "rgba(73, 146, 228, 0.55)";
    ctx.arc(150, 60, 50, 0.0523599, 1.8675);
    ctx.fill();

    //Border of circle B
    ctx.beginPath();
    ctx.arc(185, 110, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //border of circle C
    ctx.beginPath();
    ctx.arc(150, 60, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //border of circle A
    ctx.beginPath();
    ctx.arc(120, 110, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //Text A
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText("A", 120, 110);

    //Text B
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText("B", 185, 110);

    //Text C
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText("C", 150, 60);

    //code for numbers
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "red";

    ctx.fillText("5", 180, 80);
    ctx.fillText("3", 120, 80);
    ctx.fillText("4", 150, 130);
    ctx.fillText("8", 150, 95);
    ctx.fillText("11", 110, 140);
    ctx.fillText("13", 90, 100);
    ctx.fillText("15", 190, 140);
    ctx.fillText("17", 210, 100);
    ctx.fillText("9", 130, 40);
    ctx.fillText("6", 170, 40);
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
            <div>
              <canvas
                ref={canvas}
                style={{ border: "1px solid black" }}
              ></canvas>
            </div>
            <div className="text-center mt-1">
              <Button
                variant="contained"
                color="primary"
                onClick={handleNextExample}
              >
                Next Example
              </Button>
            </div>
          </div>
          <div className="col">
            <ul>
              <b>Set A:</b> &#123; 3, 4, 8, 11, 13 &#125;
            </ul>
            <ul>
              <b>Set B:</b> &#123; 4, 5, 8, 15, 17 &#125;
            </ul>
            <ul>
              <b>Set C:</b> &#123; 3, 5, 8, 9, 6 &#125;
            </ul>
            <ul>
              <b>Set A∪B:</b> &#123; 3, 4, 5, 8, 11, 13, 15, 17 &#125;
            </ul>
            <ul>
              <b>Set A∪C:</b> &#123; 3, 4, 5, 6, 8, 9, 11, 13 &#125;
            </ul>
            <ul>
              <b>Set (A∪B)∩(A∪C):</b> &#123; 3, 4, 5, 8, 11, 13 &#125;
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

export default Res6WithNoMidContent;

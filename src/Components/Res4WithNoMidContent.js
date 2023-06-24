import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackNextBar from "./MajorComponents/BackNextBar";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import ReactGA from "react-ga4";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../config/dbconfig.js";
import { SendLogData } from "../config/wslog.js";

function Res4WithNoMidContent() {
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  const [pageName, setPageName] = useState("example-1 page of A∪B)");
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
      shapeName: "B",
      color: "rgba(115, 230, 163, 0.4)",
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
      category: "L7|NEXT button of AUB on example-1 page",
      label: "L7|navigate to create the relation AUB page successfully",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "NEXT",
      "button",
      "clicked on NEXT button"
    );
    navigate("/letusverify/startpage/tool5");
  };

  const handleNextExample = () => {
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|NEXT EXAMPLE button of AUB",
      label: "L7|navigate to example-2 of AUB page successfully",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "NEXT EXAMPLE",
      "button",
      "clicked on NEXT EXAMPLE button"
    );
    navigate("/letusverify/startpage/tool4/res4/res4withnocopy");
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
    ctx.fillStyle = backgroundColor;
    ctx.arc(x, y, r, s, e);
    if ((x === 120 && y === 100) || (x === 180 && y === 100)) {
      ctx.fill();
    } else {
      ctx.stroke();
    }
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText(shapeName, x, y);
    ctx.fillText("U", 290, 10);

    //Border of circle B
    ctx.beginPath();
    ctx.arc(180, 100, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //border of circle A
    ctx.beginPath();
    ctx.arc(120, 100, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //code for position of numbers
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "red";
    ctx.fillText("4", 150, 80);
    ctx.fillText("8", 150, 120);

    ctx.fillText("3", 90, 100);
    ctx.fillText("11", 110, 75);
    ctx.fillText("13", 110, 125);
    ctx.fillText("15", 190, 75);
    ctx.fillText("17", 210, 100);
    ctx.fillText("5", 190, 125);
  };

  return (
    <div style={{ height: "100%" }}>
      <div className="container" style={{ height: "90%", overflow: "auto" }}>
        <div
          className="row align-items-center"
          style={{ height: "100%", width: "100%" }}
        >
          <div className="col">
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
          <div className="col">
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
              <b>Set B:</b> &#123; 4, 5, 8, 15,17 &#125;
            </ul>
            <ul>
              <b>Set A∪B:</b> &#123; 3, 4, 5, 8, 11, 13, 15, 17 &#125;
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

export default Res4WithNoMidContent;

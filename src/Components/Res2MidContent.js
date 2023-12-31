import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackNextBar from "./MajorComponents/BackNextBar";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../config/dbconfig.js";
import { SendLogData } from "../config/wslog.js";

function Res2MidContent() {
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  const [pageName, setPageName] = useState("result page of B∩C");
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const canvas = useRef();
  let ctx = null;
  const boxes = [
    { x: 133, y: 100, r: 50, s: 0, e: 2 * Math.PI, shapeName: "B" },
    { x: 193, y: 100, r: 50, s: 0, e: 2 * Math.PI, shapeName: "C" },
  ];

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

  const onNext = () => {
    navigate("/letusverify/startpage/tool3");
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "NEXT button of B∩C",
      label: "L7|navigate to create A∪(B∩C) relation page",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "next",
      "button",
      "clicked on next button on result page of B∩C"
    );
  };

  const res2_withno = () => {
    navigate("/letusverify/startpage/tool2/dragndrop2/res2/res2withno");
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|SET WITH NUMBERS button",
      label: "L7|navigate to example-1 of B∩C page",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "set with numbers",
      "button",
      "clicked on set with numbers button on result page of B∩C"
    );
  };

  useEffect(() => {
    toast.success(`${t("toaster-6")}`, {
      position: "top-center",
      autoClose: 2000,
    });
  }, []);

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
  };

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
          <div
            className="col d-flex flex-column justify-content-center"
            style={{ height: "100%" }}
          >
            <div>
              <canvas
                ref={canvas}
                style={{ border: "1px solid black" }}
              ></canvas>
            </div>
            <div style={{ marginLeft: "15%" }}>
              <Button
                id="id1"
                autoFocus
                variant="contained"
                onClick={res2_withno}
                size="small"
                style={{ marginRight: "1%", marginBottom: "1%" }}
              >
                {t("btn-3")}
              </Button>
            </div>
          </div>
          <ToastContainer />
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

export default Res2MidContent;

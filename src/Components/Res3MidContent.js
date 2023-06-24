import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackNextBar from "./MajorComponents/BackNextBar";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../config/dbconfig.js";
import { SendLogData } from "../config/wslog.js";

function Res3MidContent() {
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  const [pageName, setPageName] = useState("result page of A∪(B∩C)");
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const canvas = useRef();
  let ctx = null;
  const boxes = [
    { x: 250, y: 75, r: 50, s: 0, e: 2 * Math.PI, shapeName: "A" },
    // { x: 230, y: 75, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'B'},
    // { x: 200, y: 130, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'C'},
  ];

  useEffect(() => {
    toast.success(`${t("toaster-7")}`, {
      position: "top-center",
      autoClose: 2000,
    });
  }, []);

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
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|NEXT button of A∪(B∩C)",
      label:
        "L7|navigate to startpage successfully to attempt the relations of RHS",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "next",
      "button",
      "clicked on next button"
    );
    navigate("/letusverify/startpage");
  };

  const res3_withno = () => {
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|SET WITH NUMBERS button",
      label: "L7|navigate to example-1 of A∪(B∩C)",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "set with numbers",
      "button",
      "clicked on set with numbers button"
    );
    navigate("/letusverify/startpage/tool3/res3/res3withno");
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
            <div className="">
              <Button
                id="id1"
                autoFocus
                variant="contained"
                onClick={res3_withno}
                size="small"
                style={{
                  marginRight: "1%",
                  marginBottom: "1%",
                  marginLeft: "15%",
                }}
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

export default Res3MidContent;

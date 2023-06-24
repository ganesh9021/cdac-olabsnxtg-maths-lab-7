import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BackNextBar from "./MajorComponents/BackNextBar";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import * as Instru from "./MajorComponents/Instruction";
import ReactGA from "react-ga4";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../config/dbconfig.js";
import { SendLogData } from "../config/wslog.js";

function Tool2MidContent({ setInstr }) {
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  const [pageName, setPageName] = useState("page to create B∩C");
  //flag is use to disable the draw universal set and draw set a button.
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(true);
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

  const onNext = () => {
    if (flag1 && flag2) {
      ReactGA.event({
        action: "L7|set theory-distributive law",
        category: "L7|NEXT button",
        label:
          "L7|navigate to drag and drop page of set B to set C successfully",
      });
      SendLogData(
        sendJsonMessage,
        pageName,
        "NEXT",
        "button",
        "click on NEXT button",
        [],
        [],
        [],
        [
          {
            result:
              "navigate to drag and drop page of set B to set C successfully",
          },
        ]
      );
      navigate("/letusverify/startpage/tool2/dragndrop2");
    } else {
      ReactGA.event({
        action: "L7|set theory-distributive law",
        category: "L7|NEXT button",
        label:
          "L7|click on NEXT button without click on DRAW SET B and DRAW SET C button",
      });
      SendLogData(
        sendJsonMessage,
        pageName,
        "NEXT",
        "button",
        "click on NEXT button",
        [],
        [],
        [],
        [
          {
            result:
              "click on NEXT button without click on DRAW SET B and DRAW SET C button",
          },
        ]
      );
      toast.error(`${t("toaster-5")}`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
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
  }, []);

  const Draw_Circle_B = (style) => {
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|DRAW SET B button",
      label: "L7|set B will be drawn successfully",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "DRAW SET B",
      "button",
      "click on DRAW SET B button"
    );

    setFlag1(true);
    setFlag2(false);
    setInstr(Instru.Instruction_51);

    const canvasEle = canvas.current;
    ctx = canvasEle.getContext("2d");
    const { backgroundColor = "rgba(115, 230, 163, 0.4)" } = style;

    ctx.beginPath();
    ctx.fillStyle = backgroundColor;
    ctx.arc(83, 100, 50, 0, 2 * Math.PI);
    ctx.fill();

    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText("B", 83, 100);

    //border of circle A
    ctx.beginPath();
    ctx.arc(83, 100, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();
  };

  const Draw_Circle_C = (style) => {
    ReactGA.event({
      action: "L7|set theory-distributive law",
      category: "L7|DRAW SET C button",
      label: "L7|set C will be drawn successfully",
    });
    SendLogData(
      sendJsonMessage,
      pageName,
      "DRAW SET C",
      "button",
      "click on DRAW SET C button"
    );
    setFlag2(true);
    setInstr(Instru.Instruction_7);

    const canvasEle = canvas.current;
    ctx = canvasEle.getContext("2d");
    const { backgroundColor = "rgba(59, 106, 237, 0.4)" } = style;

    ctx.beginPath();
    ctx.fillStyle = backgroundColor;
    ctx.arc(218, 100, 50, 0, 2 * Math.PI);
    ctx.fill();

    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText("C", 218, 100);

    //border of circle C
    ctx.beginPath();
    ctx.arc(218, 100, 50, 0, 2 * Math.PI);
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
          <div className="col">
            <div>
              <canvas
                ref={canvas}
                style={{ border: `1px solid black` }}
              ></canvas>
            </div>
            <div className="">
              <Button
                id="id1"
                autoFocus
                variant="contained"
                onClick={Draw_Circle_B}
                size="small"
                style={{
                  marginRight: "1%",
                  marginBottom: "1%",
                  marginLeft: "8%",
                }}
                disabled={flag1}
              >
                {t("btn-4")}
              </Button>
              <Button
                id="id2"
                autoFocus
                variant="contained"
                onClick={Draw_Circle_C}
                size="small"
                style={{ marginRight: "1%", marginBottom: "1%" }}
                disabled={flag2}
              >
                {t("btn-5")}
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

export default Tool2MidContent;

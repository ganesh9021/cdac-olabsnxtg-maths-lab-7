import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BackNextBar from "./MajorComponents/BackNextBar";
import * as Instru from "./MajorComponents/Instruction";
import ReactGA from "react-ga4";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../config/dbconfig.js";
import { SendLogData } from "../config/wslog.js";

function Tool3MidContent({ setInstr }) {
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  const [pageName, setPageName] = useState(
    "dragging A to B∩C page to create A∪(B∩C)"
  );
  const { t, i18n } = useTranslation();
  let navigate = useNavigate();
  const canvas = useRef();
  let [count, setCount] = useState(0);
  let isDown = false;
  let dragTarget = null;
  let startX = null;
  let startY = null;
  let touchX = null;
  let touchY = null;
  let ctx = null;
  const boxes = [
    {
      x: 65,
      y: 125,
      r: 50,
      s: 0,
      e: 2 * Math.PI,
      shapeName: "A",
      color: "rgba(255, 39, 77, 0.4)",
    },
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
    if (count == 1) {
      localStorage.setItem("A", 3);
      navigate("/letusverify/startpage/tool3/res3");
      ReactGA.event({
        action: "L7|set theory-distributive law",
        category: "L7|NEXT button",
        label:
          "L7|navigate to result of A∪(B∩C) relation after dragging of set A correctly",
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
              "navigate to result of A∪(B∩C) relation after dragging of set A correctly",
          },
        ]
      );
    } else {
      toast.error(`${t("line-3")}`, {
        position: "top-center",
        autoClose: 2000,
      });
      ReactGA.event({
        action: "L7|set theory-distributive law",
        category: "L7|drag set A",
        label:
          "L7|click on NEXT button without dragging set A at correct position in A∪(B∩C) relation",
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
            result: "incorrect position of set A",
          },
        ]
      );
    }
  };

  useEffect(() => {
    draw();
  }, []);

  // draw rectangle
  const draw = () => {
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
    ctx.fillStyle = "black";
    ctx.fillText("U", 290, 10);
    boxes.map((info) => drawFillCircle(info));
  };

  // draw circle with background
  const drawFillCircle = (info) => {
    const { x, y, r, s, e, shapeName, color } = info;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, r, s, e);
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "black";
    ctx.fillText(shapeName, x, y);

    ctx.beginPath();
    ctx.fillStyle = "rgba(73, 146, 228, 0.55)";
    ctx.arc(170, 125, 50, 0.9, 5.32, true);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "rgba(73, 146, 228, 0.55)";
    ctx.arc(230, 125, 50, 2.1816667, 4.04);
    ctx.fill();

    //Text B
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText("B", 170, 125);

    //Text C
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText("C", 230, 125);

    //Border of circle B
    ctx.beginPath();
    ctx.arc(170, 125, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //border of circle C
    ctx.beginPath();
    ctx.arc(230, 125, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //Draw any random point
    ctx.beginPath();
    ctx.arc(200, 75, 1, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();
  };

  const isCoincide = (x, y) => {
    if ((x === 170 && y === 125) || (x === 230 && y === 125)) {
      //alert("Wrong position of sets as sets are coinciding....!");
      toast.error(`${t("line-3")}`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };
  const isFixed = (x, y) => {
    if (x >= 195 && x <= 205 && y >= 70 && y <= 80) {
      count = count + 1;
      setCount(count);
      dragTarget = false;
      setInstr(Instru.Instruction_7);
    }
  };

  const hitBox = (x, y) => {
    let isTarget = null;
    for (let i = 0; i < boxes.length; i++) {
      const box = boxes[i];
      if (
        x >= box.x - box.r &&
        x <= box.x + box.r &&
        y >= box.y - box.r &&
        y <= box.y + box.r
      ) {
        dragTarget = box;
        isTarget = true;
        break;
      }
    }
    return isTarget;
  };

  const handleMouseDown = (e) => {
    startX = parseInt(e.nativeEvent.offsetX - canvas.current.clientLeft);
    startY = parseInt(e.nativeEvent.offsetY - canvas.current.clientTop);
    isDown = hitBox(startX, startY);
  };
  const handleMouseMove = (e) => {
    if (!isDown) return;
    const mouseX = parseInt(e.nativeEvent.offsetX - canvas.current.clientLeft);
    const mouseY = parseInt(e.nativeEvent.offsetY - canvas.current.clientTop);
    const dx = mouseX - startX;
    const dy = mouseY - startY;
    startX = mouseX;
    startY = mouseY;
    dragTarget.x += dx;
    dragTarget.y += dy;
    isCoincide(dragTarget.x, dragTarget.y);
    isFixed(dragTarget.x, dragTarget.y);
    draw();
  };
  const handleMouseUp = (e) => {
    dragTarget = null;
    isDown = false;
  };
  const handleMouseOut = (e) => {
    handleMouseUp(e);
  };
  const handleTouchStart = (e) => {
    //console.log('event in touch : ',e)

    let rect = e.target.getBoundingClientRect().left;
    let rect1 = e.target.getBoundingClientRect().top;

    let offsetX = e.touches[0].clientX - window.pageXOffset - rect;

    let offsetY = e.touches[0].clientY - window.pageYOffset - rect1;
    // startX = parseInt(e.nativeEvent.offsetX - canvas.current.clientLeft);

    // console.log('offsetX and offsetY in touch : ',offsetX,offsetY)

    // let touch = e.touches[0];
    // touchX = touch.clientX;
    // touchY = touch.clientY;
    touchX = offsetX - canvas.current.clientLeft;
    touchY = offsetY - canvas.current.clientTop;
    touchX = Math.round(touchX);
    touchY = Math.round(touchY);
    //  touchX = touchX - 51;
    //  touchY = touchY - 241;
    // console.log('touchX and touchY in touchstart: ',touchX,touchY);
    isDown = hitBox(touchX, touchY);
  };
  const handleTouchMove = (e) => {
    // console.log('inside touch move')
    if (!isDown) return;
    // let touch = event.touches[0];
    let rect = e.target.getBoundingClientRect().left;
    let rect1 = e.target.getBoundingClientRect().top;

    let offsetX = e.touches[0].clientX - window.pageXOffset - rect;
    let offsetY = e.touches[0].clientY - window.pageYOffset - rect1;

    let touchXX = offsetX - canvas.current.clientLeft;
    let touchYY = offsetY - canvas.current.clientTop;

    touchXX = Math.round(touchXX);
    touchYY = Math.round(touchYY);

    //  touchXX = touchXX - 51;
    //  touchYY = touchYY - 241;

    let dx = touchXX - touchX;
    let dy = touchYY - touchY;
    touchX = touchXX;
    touchY = touchYY;
    dragTarget.x += dx;
    dragTarget.y += dy;
    // console.log("for touch dragtarget.x, dragtarget.y : ",dragTarget.x,dragTarget.y)
    isCoincide(dragTarget.x, dragTarget.y);
    isFixed(dragTarget.x, dragTarget.y);
    draw();
  };
  const handleTouchEnd = () => {
    dragTarget = null;
    isDown = false;
  };
  const handleTouchCancel = () => {
    dragTarget = null;
    isDown = false;
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
          <div className="col">
            <div>
              <canvas
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseOut={handleMouseOut}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchCancel}
                ref={canvas}
                style={{ border: "1px solid black" }}
              ></canvas>
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

export default Tool3MidContent;

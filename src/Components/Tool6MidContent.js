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

function Tool6MidContent({ setInstr }) {
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  const [pageName, setPageName] = useState(
    "dragging set C to create (A∪B)∩(A∪C) page"
  );
  const { t, i18n } = useTranslation();
  let navigate = useNavigate();
  const canvas = useRef();
  var [count, setCount] = useState(0);
  let isDown = false;
  let dragTarget = null;
  let startX = null;
  let startY = null;
  let touchX = null;
  let touchY = null;
  let ctx = null;
  const boxes = [
    {
      x: 150,
      y: 110,
      r: 50,
      s: 0,
      e: 2 * Math.PI,
      shapeName: "A",
      color: "rgba(255, 39, 77, 0.4)",
    },
    {
      x: 215,
      y: 110,
      r: 50,
      s: 0,
      e: 2 * Math.PI,
      shapeName: "B",
      color: "rgba(115, 230, 163, 0.4)",
    },
    {
      x: 85,
      y: 110,
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
    navigate("/letusverify/startpage/tool6/res6");
    if (count == 1) {
      localStorage.setItem("A", 6);
      navigate("/letusverify/startpage/tool6/res6");
      ReactGA.event({
        action: "L7|set theory-distributive law",
        category: "L7|NEXT button on drag and drop page of (A∪B)∩(A∪C)",
        label: "L7|navigate on result page of relation (A∪B)∩(A∪C)successfully",
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
              "navigate on result page of relation (A∪B)∩(A∪C)successfully",
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
        category: "L7|NEXT button on drag and drop page of (A∪B)∩(A∪C)",
        label: "L7|set C dragged at incorrect position",
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
            result: "set C dragged at incorrect position",
          },
        ]
      );
    }
  };

  // initialize the canvas context
  useEffect(() => {
   
    const canvasEle = canvas.current;
    canvasEle.width = 300;
    canvasEle.height = 200;
    ctx = canvasEle.getContext("2d");
  }, []);

  useEffect(() => {
    draw();
  }, []);

  // draw rectangle
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

    //draw a random point
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(180, 60, 1, 0, 2 * Math.PI);
    ctx.stroke();
  };

  const isCoincide = (x, y) => {
    if ((x === 150 && y === 110) || (x === 215 && y === 110)) {
      //alert("Wrong position of sets as sets are coinciding....!");
      toast.error(`${t("line-3")}`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const isFixed = (x, y) => {
    if (x >= 175 && x <= 185 && y >= 55 && y <= 65) {
      ReactGA.event({
        action: "L7|set theory-distributive law",
        category: "L7|dragging of set C",
        label: "L7|set C dragged at correct position",
      });
      dragTarget = false;
      count = count + 1;
      setCount(count);
      setInstr(Instru.Instruction_7);
    }
  };

  const hitBox = (x, y) => {
    let isTarget = null;
    for (let i = 2; i < boxes.length; i++) {
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

export default Tool6MidContent;

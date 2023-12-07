import { Divider } from "@material-ui/core";
import { width } from "@mui/system";
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackNextBar from "./MajorComponents/BackNextBar";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import * as Instru from "./MajorComponents/Instruction";
import ReactGA from "react-ga4";
import useWebSocket, { ReadyState } from "react-use-websocket";
import logconfig from "../config/dbconfig.js";
import { SendLogData } from "../config/wslog.js";

function DragnDrop2MidContent({ setInstr }) {
  const { sendJsonMessage } = useWebSocket(logconfig.logurl, { share: true });
  const [pageName, setPageName] = useState("drag drop of B∩C");
  let navigate = useNavigate();
  const canvas = useRef();
  var [count, setCount] = useState(0);
  const { t, i18n } = useTranslation();

  let isDown = false;
  let dragTarget = null;
  let startX = null;
  let startY = null;
  let touchX = null;
  let touchY = null;

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

  const boxes = [
    {
      x: 83,
      y: 100,
      r: 50,
      s: 0,
      e: 2 * Math.PI,
      shapeName: "B",
      color: "rgba(115, 230, 163, 0.4)",
    },
    {
      x: 218,
      y: 100,
      r: 50,
      s: 0,
      e: 2 * Math.PI,
      shapeName: "C",
      color: "rgba(59, 106, 237, 0.4)",
    },
  ];

  const onNext = () => {
    //navigate("/letusverify/startpage/tool2/dragndrop2/res2");
    if (count == 1) {
      localStorage.setItem("A", 2);
      navigate("/letusverify/startpage/tool2/dragndrop2/res2");
      ReactGA.event({
        action: "L7|set theory-distributive law",
        category: "L7|NEXT button of B∩C",
        label: "L7|navigate to result of B∩C page successfully",
      });
      SendLogData(
        sendJsonMessage,
        pageName,
        "next",
        "button",
        "clicked on next button on dragdrop page of B∩C",
        [],
        [],
        [],
        [{ result: "set B dragged at correct position" }]
      );
    } else {
      toast.error(`${t("line-3")}`, {
        position: "top-center",
        autoClose: 2000,
      });
      ReactGA.event({
        action: "L7|set theory-distributive law",
        category: "L7|NEXT button B∩C",
        label:
          "L7|wrong position of sets ie. set B not dragged at correct position",
      });
      SendLogData(
        sendJsonMessage,
        pageName,
        "next",
        "button",
        "clicked on next button on dragdrop page of B∩C",
        [],
        [],
        [],
        [{ result: "set B not dragged at correct position" }]
      );
    }
  };

  useEffect(() => {
    draw();
  },[]);

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
    boxes.map((info) => drawStrokeCircle(info));
  };

  // draw rectangle with background
  const drawStrokeCircle = (info) => {
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
    ctx.arc(158, 100, 1, 0, 2 * Math.PI);
    ctx.stroke();
  };

  //checking if sets are coinciding while dragging
  const isCoincide = (x, y) => {
    if (x === 218 && y === 100) {
      //alert("Wrong position of sets as sets are coinciding....!")
      toast.error(`${t("line-3")}`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };
  const isFixed = (x, y) => {
    if (x >= 153 && x <= 163 && y >= 95 && y <= 105) {
      console.log("inside if");
      count = count + 1;
      setCount(count);
      dragTarget = false;
      setInstr(Instru.Instruction_7);
    }
  };

  // identify the click event in the rectangle
  const hitBox = (x, y) => {
    let isTarget = null;

    for (let i = 0; i < boxes.length - 1; i++) {
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
    // console.log("offsetX offsetY :",e.nativeEvent.offsetX,e.nativeEvent.offsetY);
    // console.log('startX and startY in mouse : ',startX,startY)
    isDown = hitBox(startX, startY);
  };
  const handleMouseMove = (e) => {
    // console.log("inside handlemousemove");
    if (!isDown) return;
    const mouseX = parseInt(e.nativeEvent.offsetX - canvas.current.clientLeft);
    const mouseY = parseInt(e.nativeEvent.offsetY - canvas.current.clientTop); 
    // console.log("mousex, mousey : ", mouseX, mouseY);
    const dx = mouseX - startX;
    const dy = mouseY - startY;
    // console.log("dx,dy : ", dx, dy);
    startX = mouseX;
    startY = mouseY;
    // console.log("startx,starty : ", startX, startY);
    dragTarget.x += dx;
    dragTarget.y += dy;
    // console.log(" for mouse dragtarget.x , dragtarget.y : ",dragTarget.x, dragTarget.y);
    isCoincide(dragTarget.x, dragTarget.y);
    isFixed(dragTarget.x, dragTarget.y);
    draw();
  };

  const handleMouseUp = (e) => {
    // console.log("inside handlemouseup");
    dragTarget = null;
    isDown = false;
  };
  const handleMouseOut = (e) => {
    // console.log("inside handlemouseout");
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
            <canvas
              id="canvas"
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
      <BackNextBar
        setForward={onNext}
        backvisible="visible"
        nextvisible="visible"
        submitvisible="hidden"
      />
    </div>
  );
}

export default DragnDrop2MidContent;

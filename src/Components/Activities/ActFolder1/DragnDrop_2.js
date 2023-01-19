import { Divider } from "@material-ui/core";
import { width } from "@mui/system";
import React, { useRef, useEffect, useContext, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { rezContext } from "./Act1startpage";
import BackNextBar from "./BackNextBar";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function DragnDrop_2() {
  let navigate = useNavigate();
  const canvas = useRef();
  const { setArv } = useContext(rezContext);
  const { setToolvisible } = useOutletContext();
  var [count, setCount] = useState(0);
  const { t, i18n } = useTranslation();

  // useEffect(() => {

  //   let canvasContext = document.getElementById("canvas");
  //   canvasContext.addEventListener("touchstart", function (event) {
  //     let touch = event.touches[0];
  //     console.log('touch : ',touch);
  //     touchX = touch.clientX;
  //     touchY = touch.clientY;

  //      touchX = Math.round(touchX);
  //      touchY = Math.round(touchY);

  //      touchX = touchX - 51;
  //      touchY = touchY - 241;

  //     console.log("touchX , touchY : ",touchX,touchY);
  //     isDown = hitBox(touchX, touchY);

  //   });
  //   canvasContext.addEventListener("touchmove", function (event) {
  //     console.log('inside touch move')
  //     if (!isDown) return;
  //     let touch = event.touches[0];
  //     let touchXX = touch.clientX;
  //     let touchYY = touch.clientY;

  //      touchXX = Math.round(touchXX);
  //      touchYY = Math.round(touchYY);

  //      touchXX = touchXX - 51;
  //      touchYY = touchYY - 241;
     
  //     let dx = touchXX - touchX;
  //     let dy = touchYY - touchY;
  //     touchX = touchXX;
  //     touchY = touchYY;
  //     dragTarget.x += dx;
  //     dragTarget.y += dy;
  //     console.log("for touch dragtarget.x, dragtarget.y : ",dragTarget.x,dragTarget.y)
  //     isCoincide(dragTarget.x, dragTarget.y);
  //     isFixed(dragTarget.x, dragTarget.y);
  //     draw();
  //   });

  //   canvasContext.addEventListener("touchend", function () {
  //     dragTarget = null;
  //     isDown = false;
  //   });

  //   canvasContext.addEventListener("touchcancel", function () {
  //     dragTarget = null;
  //     isDown = false;
  //   });
  // });

  const onBack = () => {
    navigate("/activity7/letusverify/act1startpage/tool_2");
    setArv(4);
    setToolvisible("visible");
  };

  const onNext = () => {
    if (count == 1) {
      localStorage.setItem("A", 3);
      navigate(
        "/activity7/letusverify/act1startpage/lhs_rhs/tool_2/dragndrop_2/res_2"
      );
      setToolvisible("visible");
      setArv(13);
    } else {
      toast.error(`${t("line-3")}`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  let ctx = null;
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
  let isDown = false;
  let dragTarget = null;
  let startX = null;
  let startY = null;
  let touchX = null;
  let touchY = null;

  useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = 300;
    canvasEle.height = 200;
    ctx = canvasEle.getContext("2d");
  }, []);

  useEffect(() => {
    draw();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("A") === "2") {
      document.getElementById("cb1").checked = true;
    }
    if (localStorage.getItem("A") === "3") {
      document.getElementById("cb1").checked = true;
      document.getElementById("cb2").checked = true;
    }
    if (localStorage.getItem("A") === "4") {
      document.getElementById("cb1").checked = true;
      document.getElementById("cb2").checked = true;
      document.getElementById("cb3").checked = true;
    }
    if (localStorage.getItem("A") === "5") {
      document.getElementById("cb1").checked = true;
      document.getElementById("cb2").checked = true;
      document.getElementById("cb3").checked = true;
      document.getElementById("cb4").checked = true;
    }
    if (localStorage.getItem("A") === "6") {
      document.getElementById("cb1").checked = true;
      document.getElementById("cb2").checked = true;
      document.getElementById("cb3").checked = true;
      document.getElementById("cb4").checked = true;
      document.getElementById("cb5").checked = true;
    }
    if (localStorage.getItem("A") === "7") {
      document.getElementById("cb1").checked = true;
      document.getElementById("cb2").checked = true;
      document.getElementById("cb3").checked = true;
      document.getElementById("cb4").checked = true;
      document.getElementById("cb5").checked = true;
      document.getElementById("cb6").checked = true;
    }
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

    let offsetX = e.touches[0].clientX - window.pageXOffset-rect;
   
    let offsetY = e.touches[0].clientY - window.pageYOffset-rect1;
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
  }
  const handleTouchMove = (e) => {
    // console.log('inside touch move')
      if (!isDown) return;
      // let touch = event.touches[0];
      let rect = e.target.getBoundingClientRect().left;
      let rect1 = e.target.getBoundingClientRect().top;

      let offsetX = e.touches[0].clientX - window.pageXOffset-rect;
      let offsetY = e.touches[0].clientY - window.pageYOffset-rect1;

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
  }
  const handleTouchEnd = () => {
    dragTarget = null;
      isDown = false;
  }
  const handleTouchCancel = () => {
    dragTarget = null;
      isDown = false;
  }

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
                  <input type="checkbox" name="check_box" id="cb1" value="A" />
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="check_box"
                    id="cb2"
                    value="B∩C"
                  />
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="check_box"
                    id="cb3"
                    value="AU(B∩C)"
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
              onTouchEnd = {handleTouchEnd}
              onTouchCancel = {handleTouchCancel}
              ref={canvas}
              style={{ border: "1px solid black" }}
            ></canvas>
          </div>
        </div>
      </div>
      <BackNextBar setBackward={onBack} setForward={onNext} />
    </div>
  );
}

export default DragnDrop_2;

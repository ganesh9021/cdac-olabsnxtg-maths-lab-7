
import React, { useRef, useEffect, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import { rezContext } from "./Act1startpage";
import BackNextBar from "./BackNextBar";

function Tool_3() {
  const { t, i18n } = useTranslation();
  let navigate = useNavigate();
  const canvas = useRef();
  const { setArv } = useContext(rezContext);
  const { setToolvisible } = useOutletContext();
  let [count,setCount] = useState(0);

  const onBack = () => {
    navigate("/activity7/letusverify/act1startpage/lhs_rhs/tool_2/dragndrop_2/res_2");
    setArv(13);
    setToolvisible("visible");
  };

  const onNext = () => {
    if(count == 1)
    {
      localStorage.setItem("A",4);
      navigate("/activity7/letusverify/act1startpage/lhs_rhs/tool_3/res_3");
      setToolvisible("visible");
      setArv(13);
    }
    else
    {
      toast.error(`${t("line-3")}`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };
  
  

  let ctx = null;
  const boxes = [
    { x: 75, y: 125, r: 50, s: 0, e: 2 * Math.PI, shapeName: "A", color : 'rgba(255, 39, 77, 0.4)' },
    // { x: 200, y: 100, r: 50, s: 0, e: 2 * Math.PI, shapeName: "B", color : 'rgba(115, 230, 163, 0.4)' },
    // { x: 265, y: 100, r: 50, s: 0, e: 2 * Math.PI, shapeName: "C", color : 'rgba(59, 106, 237, 0.4)' },
  ];
  let isDown = false;
  let dragTarget = null;
  let startX = null;
  let startY = null;

  
  // initialize the canvas context
  useEffect(() => {
    // dynamically assign the width and height to canvas
    const canvasEle = canvas.current;
    canvasEle.width = 400;
    canvasEle.height = 200;
    ctx = canvasEle.getContext("2d");
  }, []);

  useEffect(() => {
    if(localStorage.getItem("A") === '2')
    {
      document.getElementById("cb1").checked = true;
    }
    if(localStorage.getItem("A") === '3')
    {
      document.getElementById("cb1").checked = true;
      document.getElementById("cb2").checked = true;
    }
    if(localStorage.getItem("A") === '4')
    {
      document.getElementById("cb1").checked = true;
      document.getElementById("cb2").checked = true;
      document.getElementById("cb3").checked = true;
    }
    if(localStorage.getItem("A") === '5')
    {
      document.getElementById("cb1").checked = true;
      document.getElementById("cb2").checked = true;
      document.getElementById("cb3").checked = true;
      document.getElementById("cb4").checked = true;
    }
    if(localStorage.getItem("A") === '6')
    {
      document.getElementById("cb1").checked = true;
      document.getElementById("cb2").checked = true;
      document.getElementById("cb3").checked = true;
      document.getElementById("cb4").checked = true;
      document.getElementById("cb5").checked = true;
    }
    if(localStorage.getItem("A") === '7')
    {
      document.getElementById("cb1").checked = true;
      document.getElementById("cb2").checked = true;
      document.getElementById("cb3").checked = true;
      document.getElementById("cb4").checked = true;
      document.getElementById("cb5").checked = true;
      document.getElementById("cb6").checked = true;
    }
  },[])

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
    ctx.fillStyle = "black"; 
    ctx.fillText("U", 390, 10);
    boxes.map((info) => drawFillCircle(info));
  };

  // draw circle with background 
  const drawFillCircle = (info) => {
    const { x, y, r, s, e, shapeName,color } = info;
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
    ctx.fillStyle = 'rgba(73, 146, 228, 0.55)';
    ctx.arc(220, 125, 50, 0.9,5.32,true);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'rgba(73, 146, 228, 0.55)';
    ctx.arc(280,125,50,2.1816667,4.04);
    ctx.fill();

    //Text B
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'Black';  
    ctx.fillText('B', 220, 125);

    //Text C
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'Black';  
    ctx.fillText('C', 280, 125);

    //Border of circle B
    ctx.beginPath();
    ctx.arc(220, 125, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //border of circle C
    ctx.beginPath();
    ctx.arc(280, 125, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //Draw any random point
    ctx.beginPath();
    ctx.arc(250, 75, 1, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

  };
 

  const isCoincide = (x,y) => {
    if((x === 220 && y === 125) || (x === 280 && y === 125))
    {
      //alert("Wrong position of sets as sets are coinciding....!");
      toast.error(`${t("line-3")}`, {
        position: "top-center",
        autoClose: 2000,
        });
    }
  }
  const isFixed = (x,y) => {
    
    if((x >= 245 && x <= 255) && (y >= 70 && y <= 80))
    {
      count = count + 1;
      setCount(count);
      dragTarget = false;
    }
  }

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
    isCoincide(dragTarget.x,dragTarget.y);
    isFixed(dragTarget.x,dragTarget.y);
    draw();
  };
  const handleMouseUp = (e) => {
    dragTarget = null;
    isDown = false;
  };
  const handleMouseOut = (e) => {
    handleMouseUp(e);
  };

  return (
    <div style={{height : '100%'}}>
      <div className="container-fluid" style={{height : '90%'}}>
      <div className="row align-items-center" style={{height : '10vh', fontFamily:'arial', fontSize:'1.2vw'}}>
      <div className=" fw-bold">{t("line-2")}</div>
      </div>
      <div className="row">
        <div className="col-3">
        <div className="row">
            <div className="col d-flex flex-column align-items-end" style={{fontSize:'1.2vw'}}>
              <div>
                <input type="checkbox" name="check_box" id="cb1" />
              </div>
              <div>
                <input type="checkbox" name="check_box" id="cb2" />
              </div>
              <div>
                <input type="checkbox" name="check_box" id="cb3" />
              </div>
            </div>
            <div className="col d-flex flex-column" style={{fontSize:'1.2vw'}}>
              <div>A</div>
              <div>B ∩ C</div>
              <div>A ∪ (B ∩ C)</div>
            </div>
          </div>
        </div>
        
        <div className="col-9 App">
        <canvas
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseOut={handleMouseOut}
            ref={canvas}
            style={{ border: "1px solid black" }}
          ></canvas>
        </div>
      </div>
    </div>
    <BackNextBar setBackward={onBack} setForward={onNext}/>
    </div>
  );
}

export default Tool_3;





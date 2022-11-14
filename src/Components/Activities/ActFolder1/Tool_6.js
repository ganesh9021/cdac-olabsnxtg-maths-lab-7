import { Divider } from "@material-ui/core";
import { width } from "@mui/system";
import React, { useRef, useEffect, useContext, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import { rezContext } from "./Act1startpage";
import BackNextBar from "./BackNextBar";

function Tool_6() {
  let navigate = useNavigate();
  const canvas = useRef();
  const { setArv } = useContext(rezContext);
  const { setToolvisible } = useOutletContext();
  var [count,setCount] = useState(0);


  // const Next_Res = () => {
  //   setArv(7);
  //   navigate("/activity7/letusverify/act1startpage/lhs_rhs/tool_6/res_6");
  // };
  const onBack = () => {
    navigate("/activity7/letusverify/act1startpage/lhs_rhs/tool_5/res_5");
    setArv(13);
    setToolvisible("visible");
  };

  const onNext = (e) => {
    if(count == 1)
    {
      localStorage.setItem("A",7);
      navigate("/activity7/letusverify/act1startpage/lhs_rhs/tool_6/res_6");
      setToolvisible("visible");
      setArv(13);
    }
    else 
    {
      toast.error("Wrong position of sets..!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };
  

  let ctx = null;
  const boxes = [
    // { x: 200, y: 220, w: 100, h: 50 ,shapeName : 'U' },
    // { x: 60, y: 55, r: 50, s: 0, e: 2 * Math.PI, shapeName: "A" },
    // { x: 190, y: 55, r: 50, s: 0, e: 2 * Math.PI, shapeName: "B" },
    // { x: 125, y: 145, r: 50, s: 0, e: 2 * Math.PI, shapeName: "C" },
    // { x: 135, y: 100, r: 50, s: 0, e: 2 * Math.PI, shapeName: "A", color : 'rgba(255, 39, 77, 0.4)' },
    // { x: 200, y: 100, r: 50, s: 0, e: 2 * Math.PI, shapeName: "B", color : 'rgba(115, 230, 163, 0.4)' },
    // { x: 325, y: 100, r: 50, s: 0, e: 2 * Math.PI, shapeName: "C", color : 'rgba(59, 106, 237, 0.4)' },
    { x: 200, y: 110, r: 50, s: 0, e: 2 * Math.PI, shapeName: "A", color : 'rgba(255, 39, 77, 0.4)' },
    { x: 265, y: 110, r: 50, s: 0, e: 2 * Math.PI, shapeName: "B", color : 'rgba(115, 230, 163, 0.4)' },
    { x: 135, y: 110, r: 50, s: 0, e: 2 * Math.PI, shapeName: "C", color : 'rgba(59, 106, 237, 0.4)' },
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
    
    if(localStorage.getItem("A") === '5')
    {
      document.getElementById("cb4").checked = true;
    }
    if(localStorage.getItem("A") === '6')
    {
      document.getElementById("cb4").checked = true;
      document.getElementById("cb5").checked = true;
    }
    if(localStorage.getItem("A") === '7')
    {
      document.getElementById("cb4").checked = true;
      document.getElementById("cb5").checked = true;
      document.getElementById("cb6").checked = true;
    }
  },[]);

  
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
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'Black';  
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

    //draw a random point
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(230, 60, 1, 0, 2 * Math.PI);
    ctx.stroke();
  };

  const isCoincide = (x,y) => {
    if((x === 200 && y === 110) || (x === 265 && y === 110))
    {
      //alert("Wrong position of sets as sets are coinciding....!");
      toast.error("Wrong position of sets.....!", {
        position: "top-center",
        autoClose: 2000,
        });
    }
  }

  const isFixed = (x,y) => {
    if((x >= 225 && x <= 235) && (y >= 55 && y <= 65))
    {
      dragTarget = false;
      count = count + 1;
      setCount(count);
    }
  }

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
      <div className="row align-items-center" style={{height : '10vh',fontFamily:'arial', fontSize:'1.2vw'}}>
      <div className=" fw-bold">Set Theory Relations - RHS</div>
      </div>
      <div className="row">
        <div className="col-3">
        <div className="row">
            <div className="col d-flex flex-column align-items-end" style={{fontSize:'1.2vw'}}>
              <div>
                <input type="checkbox" name="check_box" id="cb4" />
              </div>
              <div>
                <input type="checkbox" name="check_box" id="cb5" />
              </div>
              <div>
                <input type="checkbox" name="check_box" id="cb6" />
              </div>
            </div>
            <div className="col d-flex flex-column" style={{fontSize:'1.2vw'}}>
              <div>A ∪ B</div>
              <div>A ∪ C</div>
              <div>(A ∪ B)∩(A ∪ C)</div>
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
      {/* <div className="row">
        <div className="d-flex justify-content-center ">
          <div className="btn btn-primary btn-sm" onClick={Next_Res}>Next</div>
        </div>
      </div> */}
    </div>
    <BackNextBar setBackward={onBack} setForward={onNext}/>
    </div>

  );

  
}

export default Tool_6;



import React, { useRef, useEffect, useContext } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import BackNextBar from "./BackNextBar";
import { toast } from "react-toastify";
import { rezContext } from "./Act1startpage";
// import res_image from "../../../Img/res_image.png";
import { Button } from "@mui/material";


function Res6_withNumbers() {
  const canvas = useRef();
  const navigate = useNavigate();
  const { setArv } = useContext(rezContext);
  const { setToolvisible } = useOutletContext();

  const onBack = () => {
    navigate("/activity7/letusverify/act1startpage/lhs_rhs/tool_6/res_6");
    setArv(10);
    setToolvisible("hidden");
  };

  const onNext = (e) => {
    navigate("/activity7/letusverify/act1startpage/lhs_rhs");
    setToolvisible("visible");
    setArv(2);
  };


  let ctx = null;
  const boxes = [
    { x: 170, y: 75, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'A'},
    // { x: 230, y: 75, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'B'},
    // { x: 200, y: 130, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'C'},
  ];
  
  useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = 400;
    canvasEle.height = 200;
    ctx = canvasEle.getContext("2d");
  }, []);

  useEffect(() => {
    draw();
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
    ctx.fillText('U', 390, 10);
    boxes.map((info) => drawFillCircle(info));
  };

  const drawFillCircle = (info, style = {}) => {
    // const { x, y, r, s, e, shapeName} = info;
    // const { backgroundColor = 'rgba(201, 50, 48, 0.55)'} = style;

    // ctx.beginPath();
    // ctx.fillStyle = backgroundColor;
    // ctx.arc(170, 75, 50, 0, 2 * Math.PI);
    // if(x === 170 && y === 75)
    // {
    //     ctx.fill();
    // }
    // else
    // {
    //     ctx.stroke();
    // }
    
    // ctx.beginPath();
    // ctx.fillStyle = backgroundColor;
    // ctx.arc(230, 75, 50, 1.169,3);
    // if(x === 230 && y === 75)
    // {
    //     ctx.fill();
    // }
    // else
    // {
    //     ctx.stroke();
    // }

    // ctx.beginPath();
    // ctx.fillStyle = backgroundColor;
    // ctx.arc(200,130,50,4.35,6.11);
    // if(x === 200 && y === 130)
    // {
    //     ctx.fill();
    // }
    // else
    // {
    //     ctx.stroke();
    // }

    // //Text
    // ctx.font = '18px Arial';
    // ctx.textAlign = 'center';
    // ctx. textBaseline = 'middle';
    // ctx.fillStyle = 'black';  
    // ctx.fillText(shapeName, x, y);
    // ctx.fillText('U', 390, 10); 

    // //Border of circle B
    // ctx.beginPath();
    // ctx.arc(230, 75, 50, 0, 2 * Math.PI);
    // ctx.strokeStyle = "black";
    // ctx.stroke();

    // //border of circle C
    // ctx.beginPath();
    // ctx.arc(200, 130, 50, 0, 2 * Math.PI);
    // ctx.strokeStyle = "black";
    // ctx.stroke();

    // //border of circle A
    // ctx.beginPath();
    // ctx.arc(170, 75, 50, 0, 2 * Math.PI);
    // ctx.strokeStyle = "black";
    // ctx.stroke();
    //Circle A
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 39, 77, 0.4)';
    ctx.arc(200, 110, 50, 0,2 * Math.PI,true);
    ctx.fill();

    //Circle B
    ctx.beginPath();
    ctx.fillStyle = 'rgba(73, 146, 228, 0.55)';
    ctx.arc(265, 110, 50, 3.1765,5.02655);
    ctx.fill();

    //Circle C
    ctx.beginPath();
    ctx.fillStyle = 'rgba(73, 146, 228, 0.55)';
    ctx.arc(230,60,50,0.0523599,1.8675);
    ctx.fill();

    //Border of circle B
    ctx.beginPath();
    ctx.arc(265, 110, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //border of circle C
    ctx.beginPath();
    ctx.arc(230, 60, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //border of circle A
    ctx.beginPath();
    ctx.arc(200, 110, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //Text A
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'Black';  
    ctx.fillText('A', 200, 110);

    //Text B
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'Black';  
    ctx.fillText('B', 265, 110);

    //Text C
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'Black';  
    ctx.fillText('C', 230, 60);

    //code for numbers
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'red';  
    ctx.fillText('4', 270, 70);
    ctx.fillText('6', 250, 80);
    ctx.fillText('8', 200, 80);
    ctx.fillText('5', 230, 130);
    ctx.fillText('7', 190, 140);
    ctx.fillText('9', 170, 100);
    ctx.fillText('3', 280, 130);
    ctx.fillText('2', 230, 30);
    ctx.fillText('10', 250, 50);
    
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
              <div>A U B</div>
              <div>A U C</div>
              <div>(A U B)∩(A U C)</div>
            </div>
          </div>
        </div>
        
        <div className="col-5 App">
        {/* <div>
          <img style={{height : '200px', width:'400px'}} src={res_image} alt="logo" />
        </div> */}
          <canvas
          ref={canvas}
          style = {{border:"1px solid black"}}
          ></canvas>
        </div>
        <div className="col-4">
        <ul><b>Set A:</b> &#123; 5, 7, 8, 9 &#125;</ul>
                <ul><b>Set B:</b> &#123; 3, 4, 5, 6 &#125;</ul>
                <ul><b>Set C:</b> &#123; 2, 4, 6, 8, 10 &#125;</ul>
                <ul><b>Set A∪B:</b> &#123; 5, 7, 8, 9, 3, 4, 6 &#125;</ul>
                <ul><b>Set A∪C:</b> &#123; 5, 7, 8, 9, 2, 4, 6, 10&#125;</ul>
                <ul><b>Set (A∪B)∩(A∪C):</b> &#123; 5, 7, 8, 9, 4, 6 &#125;</ul>
        </div>
      </div>
    </div>
    <BackNextBar setBackward={onBack} setForward={onNext}/>
    </div>
  );
}

export default Res6_withNumbers;
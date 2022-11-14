
import React, { useRef, useEffect, useContext } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import BackNextBar from "./BackNextBar";
import { toast } from "react-toastify";
import { rezContext } from "./Act1startpage";
import { Button } from "@mui/material";
//import res_image from "../../../Img/res_image.png";


function Res_3_Copy() {

  const navigate = useNavigate();
  const canvas = useRef();
  const { setArv } = useContext(rezContext);
  const { setToolvisible } = useOutletContext();

  // const Component = () => {
  //   localStorage.setItem("A",4);
  //   setArv(2);
  //   navigate("/activity7/letusverify/act1startpage/lhs_rhs");
  // }
  const onBack = () => {
    navigate("/activity7/letusverify/act1startpage/lhs_rhs/tool_3/res_3");
    setArv(7);
    setToolvisible("visible");
  };

  const onNext = (e) => {
    navigate("/activity7/letusverify/act1startpage/lhs_rhs");
    setToolvisible("visible");
    setArv(1);
  };

  
  let ctx = null;
  const boxes = [
     { x: 250, y: 75, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'A'},
    // { x: 230, y: 75, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'B'},
    // { x: 200, y: 130, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'C'},
  ];
  
  useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = 400;
    canvasEle.height = 200;
    ctx = canvasEle.getContext("2d");
  }, []);

  // useEffect(() => {
  //   if(localStorage.getItem("A") === '2')
  //   {
  //     document.getElementById("cb1").checked = true;
  //   }
  //   if(localStorage.getItem("A") === '3')
  //   {
  //     document.getElementById("cb1").checked = true;
  //     document.getElementById("cb2").checked = true;
  //   }
  //   if(localStorage.getItem("A") === '4')
  //   {
  //     document.getElementById("cb1").checked = true;
  //     document.getElementById("cb2").checked = true;
  //     document.getElementById("cb3").checked = true;
  //   }
  //   if(localStorage.getItem("A") === '5')
  //   {
  //     document.getElementById("cb1").checked = true;
  //     document.getElementById("cb2").checked = true;
  //     document.getElementById("cb3").checked = true;
  //     document.getElementById("cb4").checked = true;
  //   }
  //   if(localStorage.getItem("A") === '6')
  //   {
  //     document.getElementById("cb1").checked = true;
  //     document.getElementById("cb2").checked = true;
  //     document.getElementById("cb3").checked = true;
  //     document.getElementById("cb4").checked = true;
  //     document.getElementById("cb5").checked = true;
  //   }
  //   if(localStorage.getItem("A") === '7')
  //   {
  //     document.getElementById("cb1").checked = true;
  //     document.getElementById("cb2").checked = true;
  //     document.getElementById("cb3").checked = true;
  //     document.getElementById("cb4").checked = true;
  //     document.getElementById("cb5").checked = true;
  //     document.getElementById("cb6").checked = true;
  //   }
  // },[])

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
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'black';  
    ctx.fillText('U', 390, 10); 
    boxes.map((info) => drawFillCircle(info));
  };

  const drawFillCircle = (info, style = {}) => {
    // const { x, y, r, s, e, shapeName} = info;
    // const { backgroundColor = 'rgba(201, 50, 48, 0.55)'} = style;

    //Circle A
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 39, 77, 0.4)';
    ctx.arc(250, 75, 50, 0,2 * Math.PI,true);
    ctx.fill();

    //Circle B
    ctx.beginPath();
    ctx.fillStyle = 'rgba(73, 146, 228, 0.55)';
    ctx.arc(220, 125, 50, 0.9,5.32,true);
    ctx.fill();

    //Circle C
    ctx.beginPath();
    ctx.fillStyle = 'rgba(73, 146, 228, 0.55)';
    ctx.arc(280,125,50,2.1816667,4.04);
    ctx.fill();

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

    //border of circle A
    ctx.beginPath();
    ctx.arc(250, 75, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //Text A
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'Black';  
    ctx.fillText('A', 250, 75);

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

    //code for numbers
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'red';  
    ctx.fillText('4', 250, 135);
    ctx.fillText('6', 250, 150);
    ctx.fillText('5', 220, 100);
    ctx.fillText('7', 230, 50);
    ctx.fillText('9', 270, 50);
    ctx.fillText('8', 280, 100);
    ctx.fillText('3', 200, 135);
    ctx.fillText('10', 310, 135);
    ctx.fillText('2', 280, 160);
  };

  return (

    <div style={{height : '100%'}}>
      <div className="container-fluid" style={{height : '90%'}}>
        <div className="row">
          <div className="col">
            <canvas
            ref={canvas}
            style = {{border:"1px solid black"}}
            ></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Res_3_Copy;
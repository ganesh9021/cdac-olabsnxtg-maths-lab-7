
import React, { useRef, useEffect, useContext } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import BackNextBar from "./BackNextBar";
import { toast } from "react-toastify";
import { rezContext } from "./Act1startpage";
import res_image from "../../../Img/res_image.png";
import { Button } from "@mui/material";


function Res_6() {
  const canvas = useRef();
  const navigate = useNavigate();
  const { setArv } = useContext(rezContext);
  const { setToolvisible } = useOutletContext();

  useEffect(() => {
    toast.success("Relation (AUB)∩(AUC) created successfully...!", {
      position: "top-center",
      autoClose: 2000,
    });
  },[]);

  // const Component = () => {
  //   localStorage.setItem("A",7);
  //   setArv(3);
  //   navigate("/activity7/letusverify/act1startpage/lhs_rhs"); 
  // }
  const onBack = () => {
    navigate("/activity7/letusverify/act1startpage/tool_6");
    setArv(10);
    setToolvisible("hidden");
  };

  const onNext = (e) => {
    navigate("/activity7/letusverify/act1startpage/lhs_rhs");
    setToolvisible("visible");
    setArv(2);
  };

  const res6_withno = () => {
    setArv(6);
    navigate("/activity7/letusverify/act1startpage/lhs_rhs/tool_6/res_6/res6_withno");
  }

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
        
        <div className="col-6 App">
        {/* <div>
          <img style={{height : '200px', width:'400px'}} src={res_image} alt="logo" />
        </div> */}
          <canvas
          ref={canvas}
          style = {{border:"1px solid black"}}
          ></canvas>
        </div>
      </div>
      <div className="row" style={{height:'40%'}}>
        <div className="d-flex justify-content-center align-items-end" >
          <Button autoFocus variant="contained" onClick={res6_withno}>
            Set With Numbers
          </Button>
        </div>
      </div>
    </div>
    <BackNextBar setBackward={onBack} setForward={onNext}/>
    </div>
  );
}

export default Res_6;
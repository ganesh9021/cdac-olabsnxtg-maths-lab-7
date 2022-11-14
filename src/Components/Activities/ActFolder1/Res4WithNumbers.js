
import React, { useRef, useEffect, useContext } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import BackNextBar from "./BackNextBar";
import { toast } from "react-toastify";
import { rezContext } from "./Act1startpage";


function Res4WithNumbers() {

  const navigate = useNavigate();
  const canvas = useRef();
  const { setArv } = useContext(rezContext);
  const { setToolvisible } = useOutletContext();


  // const Component = () => {
  //   localStorage.setItem("A",5);
  //   setArv(10);
  //   navigate("/activity7/letusverify/act1startpage/tool_5");
  // };
  const onBack = () => {
    navigate("/activity7/letusverify/act1startpage/lhs_rhs/tool_4");
    setArv(8);
    setToolvisible("hidden");
  };

  const onNext = (e) => {
    navigate("/activity7/letusverify/act1startpage/tool_5");
    setToolvisible("visible");
    setArv(9);
  };

  const res4_withno = () => {
    setArv(9);
    navigate("/activity7/letusverify/act1startpage/lhs_rhs/tool_4/res_4/res4_withno");
  }


  let ctx = null;
  const boxes = [
    // { x: 87, y: 72, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'A'},
    // { x: 163, y: 72, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'B'},
    //{ x: 125, y: 128, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'C'},
    { x: 170, y: 100, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'A', color : 'rgba(255, 39, 77, 0.4)'},
    { x: 230, y: 100, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'B', color : 'rgba(115, 230, 163, 0.4)'},
  ];
  
  useEffect(() => {
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

  const draw = () => {
    ctx.clearRect(
      0,
      0,
      canvas.current.clientWidth,
      canvas.current.clientHeight
    );
    boxes.map((info) => drawFillCircle(info));
  };

  const drawFillCircle = (info, style = {}) => {
    const { x, y, r, s, e, shapeName,color} = info;
    const { backgroundColor = color} = style;
    
    ctx.beginPath();
    ctx.fillStyle = backgroundColor;
    ctx.arc(x, y, r, s, e);
    if((x === 170 && y === 100) || (x === 230 && y === 100))
    {
        ctx.fill();
    }
    else
    {
        ctx.stroke();
    }
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'Black';  
    ctx.fillText(shapeName, x, y);
    ctx.fillText('U', 390, 10); 

    //Border of circle B
    ctx.beginPath();
    ctx.arc(230, 100, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //border of circle B
    // ctx.beginPath();
    // ctx.arc(125, 128, 50, 0, 2 * Math.PI);
    // ctx.strokeStyle = "black";
    // ctx.stroke();

    //border of circle A
    ctx.beginPath();
    ctx.arc(170, 100, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //code for numbers
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'red';  
    ctx.fillText('5', 200, 100);
    ctx.fillText('7', 150, 100);
    ctx.fillText('8', 170, 75);
    ctx.fillText('9', 170, 125);
    ctx.fillText('3', 230, 75);
    ctx.fillText('4', 250, 100);
    ctx.fillText('6', 230, 125);
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
        
        <div className="col-5 App">
            <canvas
            ref={canvas}
            style = {{border:"1px solid black"}}
          ></canvas>
        </div>
        <div className="col-4">
        <ul><b>Set A:</b> &#123; 5, 7, 8, 9 &#125;</ul>
                <ul><b>Set B:</b> &#123; 3, 4, 5, 6 &#125;</ul>
                <ul><b>Set A∪B:</b> &#123; 5, 7, 8, 9, 3, 4, 6 &#125;</ul>
        </div>
      </div>
    </div>
    <BackNextBar setBackward={onBack} setForward={onNext}/>
    </div>
  );
}

export default Res4WithNumbers;
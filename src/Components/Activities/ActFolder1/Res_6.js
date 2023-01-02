
import React, { useRef, useEffect, useContext } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import BackNextBar from "./BackNextBar";
import { toast } from "react-toastify";
import { rezContext } from "./Act1startpage";

import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";


function Res_6() {
  const { t, i18n } = useTranslation();
  const canvas = useRef();
  const navigate = useNavigate();
  const { setArv } = useContext(rezContext);
  const { setToolvisible } = useOutletContext();

  useEffect(() => {
    toast.success(`${t("toaster-11")}`, {
      position: "top-center",
      autoClose: 2000,
    });
  },[]);

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
    { x: 70, y: 75, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'A'},
    // { x: 230, y: 75, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'B'},
    // { x: 200, y: 130, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'C'},
  ];
  
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
    ctx.fillText('U', 290, 10);
    boxes.map((info) => drawFillCircle(info));
  };

  const drawFillCircle = (info, style = {}) => {
    
    //circle A
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 39, 77, 0.4)';
    ctx.arc(120, 110, 50, 0,2 * Math.PI,true);
    ctx.fill();

    //Circle B
    ctx.beginPath();
    ctx.fillStyle = 'rgba(73, 146, 228, 0.55)';
    ctx.arc(185, 110, 50, 3.1765,5.02655);
    ctx.fill();

    //Circle C
    ctx.beginPath();
    ctx.fillStyle = 'rgba(73, 146, 228, 0.55)';
    ctx.arc(150,60,50,0.0523599,1.8675);
    ctx.fill();

    //Border of circle B
    ctx.beginPath();
    ctx.arc(185, 110, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //border of circle C
    ctx.beginPath();
    ctx.arc(150, 60, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //border of circle A
    ctx.beginPath();
    ctx.arc(120, 110, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //Text A
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'Black';  
    ctx.fillText('A', 120, 110);

    //Text B
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'Black';  
    ctx.fillText('B', 185, 110);

    //Text C
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'Black';  
    ctx.fillText('C', 150, 60);
    
  };

  return (

    <div style={{ height: "100%" }}>
    <div className="container" style={{ height: "90%", overflow: "auto" }}>
      <div
        className="row align-items-center"
        style={{ height: "100%", width: "100%" }}
      >
        <div className="col mb-1">
          <div className="fs-1.2vw fw-bold">{t("line-4")}</div>
          <div className="d-flex">
            <div className="me-4">
              <div>
                <input
                  type="checkbox"
                  name="check_box"
                  id="cb4"
                  value="A∪B"
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  name="check_box"
                  id="cb5"
                  value="A∪C"
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  name="check_box"
                  id="cb6"
                  value="(A∪B)∩(A∪C)"
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
      ref={canvas}
      style = {{border:"1px solid black"}}
      ></canvas>
          </div>
          <div className="">
            <Button
              id="id1"
              autoFocus
              variant="contained"
              onClick={res6_withno}
              size="small"
              style={{ marginRight: "1%", marginBottom: "1%" , marginLeft : '15%'}}
            >
              {t("btn-3")}
            </Button>
          </div>
        </div>
      </div>
    </div>
    <BackNextBar setBackward={onBack} setForward={onNext} />
  </div>
  );
}

export default Res_6;
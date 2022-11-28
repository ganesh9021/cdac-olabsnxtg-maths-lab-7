
import React, { useRef, useEffect, useContext } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import BackNextBar from "./BackNextBar";
import { toast } from "react-toastify";
import { rezContext } from "./Act1startpage";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";


function Res_2() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const canvas = useRef();
  const { setArv } = useContext(rezContext);
  const { setToolvisible } = useOutletContext();

  // const Component = () => {
  //   localStorage.setItem("A",3);
  //   setArv(8)
  //   navigate("/activity7/letusverify/act1startpage/tool_3");
  // }
  const onBack = () => {
    navigate("/activity7/letusverify/act1startpage/tool_2/dragndrop_2");
    setArv(5);
    setToolvisible("visible");
  };

  const onNext = (e) => {
    navigate("/activity7/letusverify/act1startpage/tool_3");
    setToolvisible("visible");
    setArv(7);
  };

  const res2_withno = () => {
    setArv(6);
    navigate("/activity7/letusverify/act1startpage/lhs_rhs/tool_2/dragndrop_2/res_2/res2_withno");
  }

  useEffect(() => {
    toast.success(`${t("toaster-6")}`, {
      position: "top-center",
      autoClose: 2000,
    });
  },[])

  let ctx = null;
  const boxes = [
    { x: 208, y: 100, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'B'},
    { x: 268, y: 100, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'C'},
  ];
  
  useEffect(() => {
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
    const { x, y, r, s, e, shapeName} = info;
    const { backgroundColor = 'rgba(73, 146, 228, 0.55)'} = style;
    
    ctx.beginPath();
    ctx.fillStyle = backgroundColor;
    ctx.arc(208, 100, 50, 0.9,5.32,true);
    
    if(x === 208 && y === 100)
    {
        ctx.fill();
    }
    else
    {
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.fillStyle = backgroundColor;
    ctx.arc(268,100,50,2.1816667,4.04);
    if(x === 268 && y === 100)
    {
        ctx.fill();
    }
    else
    {
        ctx.stroke();
    }


    //Text
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'Black';  
    ctx.fillText(shapeName, x, y);
    ctx.fillText('U', 390, 10); 

    //Border of circle B
    ctx.beginPath();
    ctx.arc(208, 100, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //border of circle C
    ctx.beginPath();
    ctx.arc(268, 100, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();
    
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
        
        <div className="col-6 App">
        <canvas
        ref={canvas}
        style = {{border:"1px solid black"}}
      ></canvas>
        </div>
      </div>
      <div className="row"  style={{height:'40%'}}>
        <div className="d-flex justify-content-center align-items-end">
          <Button autoFocus variant="contained" onClick={res2_withno}>
            {t("btn-3")}
          </Button>
        </div>
      </div>
    </div>
    <BackNextBar setBackward={onBack} setForward={onNext}/>
    </div>
    
  );
}

export default Res_2;
import Button from "@mui/material/Button";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import { rezContext } from "./Act1startpage";
import "./App.css";
import BackNextBar from "./BackNextBar";


function Tool_1() {
  const { setArv } = useContext(rezContext);
  const { setToolvisible } = useOutletContext();

  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  let navigate = useNavigate();
  const canvas = useRef();
  let ctx = null;


  const onBack = (e) => {
    navigate("/activity7/letusverify/act1startpage/lhs_rhs");
    setArv(0);
    setToolvisible("visible");
  };

  const onNext = (e) => {
    if(count == 1)
    {
      localStorage.setItem("A",2);
      navigate("/activity7/letusverify/act1startpage/tool_2");
      setToolvisible("visible");
      setArv(4);
    }
    else 
    {
      toast.error("Please generate the result..!", {
        position: "top-center",
        autoClose: 2000,
        });
    }
  };

  const res1_withno = () => {
    //navigate("res1_withno");
    if(count == 1)
    {
      localStorage.setItem("A",2);
      navigate("res1_withno");
      setToolvisible("visible");
      setArv(6);
    }
    else 
    {
      toast.error("Please generate the result..!", {
        position: "top-center",
        autoClose: 2000,
        });
    }
  }

  const Draw_Rectangle = () => {
    if (count === 0) {
      count = count + 1;
      setCount(count);
      document.getElementById('id1').style.visibility = "hidden";
    } else {
      setCount(0);
    }
    const canvasEle = canvas.current;
    canvasEle.width = 400;
    canvasEle.height = 200;
    ctx = canvasEle.getContext("2d");
    
    ctx.clearRect(
      0,
      0,
      canvas.current.clientWidth,
      canvas.current.clientHeight
    );
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'Black';  
    ctx.fillText("U", 390, 10);
  };

  const Draw_Circle = (style) => {
    if(count == 1)
    {
      count1 = count1 + 1;
      setCount1(count1);
      console.log(count);
      if(count1 == 1)
      {
        document.getElementById('id2').style.visibility = "hidden";
      }
      
      const canvasEle = canvas.current;
      ctx = canvasEle.getContext("2d");
      const { backgroundColor = 'rgba(255, 39, 77, 0.4)'} = style;

      ctx.beginPath();
      ctx.fillStyle = backgroundColor;
      ctx.arc(200, 100, 50, 0, 2 * Math.PI);
      ctx.fill();
      ctx.fillText("A", 200, 100);

      ctx.font = '18px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = 'Black';  
      ctx.fillText('A', 200, 100);

      //border of circle A
      ctx.beginPath();
      ctx.arc(200, 100, 50, 0, 2 * Math.PI);
      ctx.strokeStyle = "black";
      ctx.stroke();

      toast.success("Relation A created successfully..!", {
        position: "top-center",
        autoClose: 2000,
        
      });
    }
    else 
    {
      toast.error("Please click on Draw Universal set..!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  }

  

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

  return (
    <div style={{height : '100%'}}>
      <div className="container-fluid" style={{height : '90%'}}>
      <div className="row align-items-center" style={{height : '10vh',fontFamily:'arial',fontSize:'1.2vw'}}>
        <div className="fs-1.2vw fw-bold">Set Theory Relations - LHS</div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="row">
            <div className="col d-flex flex-column align-items-end" style={{fontSize:'1.2vw'}}>
              <div>
                <input type="checkbox" name="check_box" id="cb1" value="A"/>
              </div>
              <div>
                <input type="checkbox" name="check_box" id="cb2" value="B∩C"/>
              </div>
              <div>
                <input type="checkbox" name="check_box" id="cb3" value="AU(B∩C)"/>
              </div>
            </div>
            <div className="col d-flex flex-column" style={{fontSize:'1.2vw'}}>
              <div>A</div>
              <div>B ∩ C</div>
              <div>A ∪ (B ∩ C)</div>
            </div>
          </div>
        </div>
        <div className="col-9">
          <div className="App">
            <canvas
              ref={canvas}
              style={{ border: `${count}px solid black` }}
            ></canvas>
            <div className="row justify-content-center">
                <div className="col d-flex justify-content-end">
                  <Button id="id1" autoFocus variant="contained" onClick={Draw_Rectangle}>
                    Draw Universal Set
                  </Button>
                </div>
                <div className="col d-flex justify-content-start ">
                  <Button id="id2" autoFocus variant="contained" onClick={Draw_Circle}>
                    Draw Set A
                  </Button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{height:'20%'}}>
        <div className="d-flex justify-content-center align-items-end" >
          <Button autoFocus variant="contained" onClick={res1_withno}>
            Set With Numbers
          </Button>
        </div>
      </div>
      </div>
      <BackNextBar setBackward={onBack} setForward={onNext}/>
    </div>
  );
}

export default Tool_1;

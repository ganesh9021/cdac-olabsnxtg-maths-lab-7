import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackNextBar from "./MajorComponents/BackNextBar";

import { useTranslation } from "react-i18next";

function Res2WithNoMidContent() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const canvas1 = useRef();
  const canvas2 = useRef();

  const onNext = () => {
    navigate("/letusverify/startpage/tool3");
  };

  let ctx1 = null;
  let ctx2 = null;

  const boxes = [
    { x: 133, y: 100, r: 50, s: 0, e: 2 * Math.PI, shapeName: "B" },
    { x: 193, y: 100, r: 50, s: 0, e: 2 * Math.PI, shapeName: "C" },
  ];

  useEffect(() => {
    const canvasEle1 = canvas1.current;
    const canvasEle2 = canvas2.current;
    canvasEle1.width = 300;
    canvasEle1.height = 200;
    canvasEle2.width = 300;
    canvasEle2.height = 200;
    ctx1 = canvasEle1.getContext("2d");
    ctx2 = canvasEle2.getContext("2d");
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

  useEffect(() => {
    draw1();
    draw2();
  }, []);

  const draw1 = () => {
    ctx1.clearRect(
      0,
      0,
      canvas1.current.clientWidth,
      canvas1.current.clientHeight
    );
    boxes.map((info) => drawFillCircle1(info));
  };

  const draw2 = () => {
    ctx2.clearRect(
      0,
      0,
      canvas2.current.clientWidth,
      canvas2.current.clientHeight
    );
    boxes.map((info) => drawFillCircle2(info));
  };

  const drawFillCircle1 = (info, style = {}) => {
    const { x, y, r, s, e, shapeName } = info;
    const { backgroundColor = "rgba(73, 146, 228, 0.55)" } = style;

    ctx1.beginPath();
    ctx1.fillStyle = backgroundColor;
    ctx1.arc(133, 100, 50, 0.9, 5.32, true);

    if (x === 133 && y === 100) {
      ctx1.fill();
    } else {
      ctx1.stroke();
    }

    ctx1.beginPath();
    ctx1.fillStyle = backgroundColor;
    ctx1.arc(193, 100, 50, 2.1816667, 4.04);
    if (x === 193 && y === 100) {
      ctx1.fill();
    } else {
      ctx1.stroke();
    }

    //Text
    ctx1.font = "18px Arial";
    ctx1.textAlign = "center";
    ctx1.textBaseline = "middle";
    ctx1.fillStyle = "Black";
    ctx1.fillText(shapeName, x, y);
    ctx1.fillText("U", 290, 10);

    //Border of circle B
    ctx1.beginPath();
    ctx1.arc(133, 100, 50, 0, 2 * Math.PI);
    ctx1.strokeStyle = "black";
    ctx1.stroke();

    //border of circle C
    ctx1.beginPath();
    ctx1.arc(193, 100, 50, 0, 2 * Math.PI);
    ctx1.strokeStyle = "black";
    ctx1.stroke();

    //code for Numbers
    ctx1.font = "18px Arial";
    ctx1.textAlign = "center";
    ctx1.textBaseline = "middle";
    ctx1.fillStyle = "red";
    ctx1.fillText("4", 160, 75);
    ctx1.fillText("6", 160, 120);
    ctx1.fillText("3", 125, 75);
    ctx1.fillText("5", 95, 100);
    ctx1.fillText("2", 195, 75);
    ctx1.fillText("8", 225, 100);
    ctx1.fillText("10", 195, 130);
  };

  const drawFillCircle2 = (info, style = {}) => {
    const { x, y, r, s, e, shapeName } = info;
    const { backgroundColor = "rgba(73, 146, 228, 0.55)" } = style;

    ctx2.beginPath();
    ctx2.fillStyle = backgroundColor;
    ctx2.arc(133, 100, 50, 0.9, 5.32, true);

    if (x === 133 && y === 100) {
      ctx2.fill();
    } else {
      ctx2.stroke();
    }

    ctx2.beginPath();
    ctx2.fillStyle = backgroundColor;
    ctx2.arc(193, 100, 50, 2.1816667, 4.04);
    if (x === 193 && y === 100) {
      ctx2.fill();
    } else {
      ctx2.stroke();
    }

    //Text
    ctx2.font = "18px Arial";
    ctx2.textAlign = "center";
    ctx2.textBaseline = "middle";
    ctx2.fillStyle = "Black";
    ctx2.fillText(shapeName, x, y);
    ctx2.fillText("U", 290, 10);

    //Border of circle B
    ctx2.beginPath();
    ctx2.arc(133, 100, 50, 0, 2 * Math.PI);
    ctx2.strokeStyle = "black";
    ctx2.stroke();

    //border of circle C
    ctx2.beginPath();
    ctx2.arc(193, 100, 50, 0, 2 * Math.PI);
    ctx2.strokeStyle = "black";
    ctx2.stroke();

    //code for Numbers
    ctx2.font = "10px Arial";
    ctx2.textAlign = "center";
    ctx2.textBaseline = "middle";
    ctx2.fillStyle = "red";
    ctx2.fillText("White", 160, 100);
    
    ctx2.fillText("Red", 125, 75);
    ctx2.fillText("Yellow", 125, 130);
    ctx2.fillText("Green", 100, 100);
    ctx2.fillText("Violet", 195, 75);
    ctx2.fillText("Black", 225, 100);
    ctx2.fillText("Purple", 195, 130);
  };

  return (
    <div style={{ height: "100%" }}>
      <div className="container" style={{ height: "90%", overflow: "auto" }}>
        <div
          className="row align-items-center"
          style={{ height: "100%", width: "100%" }}
        >
          <div className="col-md-auto col-sm-12 mb-1">
            <div className="fs-1.2vw fw-bold">{t("line-2")}</div>
            <div className="d-flex">
              <div className="me-4">
                <div>
                  <input
                    type="checkbox"
                    name="check_box"
                    id="cb1"
                    value="A"
                    disabled
                  />
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="check_box"
                    id="cb2"
                    value="B∩C"
                    disabled
                  />
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="check_box"
                    id="cb3"
                    value="AU(B∩C)"
                    disabled
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
          <div
            className="col mb-1"
            style={{
              backgroundColor: "#F2FBFF",
              height: "100%",
              borderRadius: "13px",
              boxShadow: "0px 4px 7px #00000029",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: "2%",
              overflow: "auto",
            }}
          >
            <div className="row mb-2">
              <div className="col d-flex align-items-center">
                <canvas
                  ref={canvas1}
                  style={{ border: "1px solid black" }}
                ></canvas>
              </div>
              <div className="col d-flex align-items-center">
                <div>
                  <ul>
                    <b>Set B:</b> &#123; 3, 4, 5, 6 &#125;
                  </ul>
                  <ul>
                    <b>Set C:</b> &#123; 2, 4, 6, 8, 10 &#125;
                  </ul>
                  <ul>
                    <b>Set B∩C:</b> &#123; 4, 6 &#125;
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col d-flex align-items-center">
                <canvas
                  ref={canvas2}
                  style={{ border: "1px solid black" }}
                ></canvas>
              </div>
              <div className="col d-flex align-items-center">
                <div>
                  <ul>
                    <b>Set B:</b> &#123;Red,Green,yellow,white&#125;
                  </ul>
                  <ul>
                    <b>Set C:</b> &#123;Violet,Black,White,Purple&#125;
                  </ul>
                  <ul>
                    <b>Set B∩C:</b> &#123;White&#125;
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackNextBar
        setForward={onNext}
        backvisible="visible"
        nextvisible="visible"
        submitvisible="hidden"
      />
    </div>
  );
}

export default Res2WithNoMidContent;

import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackNextBar from "./MajorComponents/BackNextBar";
import { useTranslation } from "react-i18next";

function Res5WithNoMidContent() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const canvas1 = useRef();
  const canvas2 = useRef();

  const onNext = (e) => {
    navigate("/letusverify/startpage/tool6");
  };

  let ctx1 = null;
  let ctx2 = null;

  const boxes = [
    // { x: 87, y: 72, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'A'},
    // { x: 163, y: 72, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'B'},
    // { x: 125, y: 128, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'C'},
    // { x: 87, y: 72, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'A'},
    // { x: 125, y: 128, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'C'},
    {
      x: 120,
      y: 100,
      r: 50,
      s: 0,
      e: 2 * Math.PI,
      shapeName: "A",
      color: "rgba(255, 39, 77, 0.4)",
    },
    {
      x: 180,
      y: 100,
      r: 50,
      s: 0,
      e: 2 * Math.PI,
      shapeName: "C",
      color: "rgba(59, 106, 237, 0.4)",
    },
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
    if (localStorage.getItem("A") === "5") {
      document.getElementById("cb4").checked = true;
    }
    if (localStorage.getItem("A") === "6") {
      document.getElementById("cb4").checked = true;
      document.getElementById("cb5").checked = true;
    }
    if (localStorage.getItem("A") === "7") {
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
    const { x, y, r, s, e, shapeName, color } = info;
    const { backgroundColor = color } = style;

    ctx1.beginPath();
    ctx1.arc(x, y, r, s, e);
    ctx1.fillStyle = backgroundColor;

    if ((x === 120 && y === 100) || (x === 180 && y === 100)) {
      ctx1.fill();
    } else {
      ctx1.stroke();
    }
    //Text alignment and decoration
    ctx1.font = "18px Arial";
    ctx1.textAlign = "center";
    ctx1.textBaseline = "middle";
    ctx1.fillStyle = "Black";
    ctx1.fillText(shapeName, x, y);
    ctx1.fillText("U", 290, 10);

    //border of circle C
    ctx1.beginPath();
    ctx1.arc(180, 100, 50, 0, 2 * Math.PI);
    ctx1.strokeStyle = "black";
    ctx1.stroke();

    //border of circle A
    ctx1.beginPath();
    ctx1.arc(120, 100, 50, 0, 2 * Math.PI);
    ctx1.strokeStyle = "black";
    ctx1.stroke();

    //code for numbers
    ctx1.font = "18px Arial";
    ctx1.textAlign = "center";
    ctx1.textBaseline = "middle";
    ctx1.fillStyle = "red";
    ctx1.fillText("8", 150, 100);
    ctx1.fillText("7", 100, 100);
    ctx1.fillText("5", 120, 75);
    ctx1.fillText("9", 120, 125);
    ctx1.fillText("2", 180, 75);
    ctx1.fillText("4", 210, 90);
    ctx1.fillText("6", 180, 130);
    ctx1.fillText("10", 210, 115);
  };

  const drawFillCircle2 = (info, style = {}) => {
    const { x, y, r, s, e, shapeName, color } = info;
    const { backgroundColor = color } = style;

    ctx2.beginPath();
    ctx2.arc(x, y, r, s, e);
    ctx2.fillStyle = backgroundColor;

    if ((x === 120 && y === 100) || (x === 180 && y === 100)) {
      ctx2.fill();
    } else {
      ctx2.stroke();
    }
    //Text alignment and decoration
    ctx2.font = "18px Arial";
    ctx2.textAlign = "center";
    ctx2.textBaseline = "middle";
    ctx2.fillStyle = "Black";
    ctx2.fillText(shapeName, x, y);
    ctx2.fillText("U", 290, 10);

    //border of circle C
    ctx2.beginPath();
    ctx2.arc(180, 100, 50, 0, 2 * Math.PI);
    ctx2.strokeStyle = "black";
    ctx2.stroke();

    //border of circle A
    ctx2.beginPath();
    ctx2.arc(120, 100, 50, 0, 2 * Math.PI);
    ctx2.strokeStyle = "black";
    ctx2.stroke();

    //code for numbers
    ctx2.font = "18px Arial";
    ctx2.textAlign = "center";
    ctx2.textBaseline = "middle";
    ctx2.fillStyle = "red";
    ctx2.fillText("40", 150, 100);
    ctx2.fillText("30", 90, 100);
    ctx2.fillText("10", 120, 75);
    ctx2.fillText("20", 120, 125);
    ctx2.fillText("50", 180, 75);
    ctx2.fillText("60", 210, 100);
    ctx2.fillText("70", 180, 125);
  };

  return (
    <div style={{ height: "100%" }}>
      <div className="container" style={{ height: "90%", overflow: "auto" }}>
        <div
          className="row align-items-center"
          style={{ height: "100%", width: "100%" }}
        >
          <div className="col-md-auto col-sm-12 mb-1">
            <div className="fs-1.2vw fw-bold">{t("line-4")}</div>
            <div className="d-flex">
              <div className="me-4">
                <div>
                  <input
                    type="checkbox"
                    name="check_box"
                    id="cb4"
                    value="A∪B"
                    disabled
                  />
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="check_box"
                    id="cb5"
                    value="A∪C"
                    disabled
                  />
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="check_box"
                    id="cb6"
                    value="(A∪B)∩(A∪C)"
                    disabled
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
              <div className="col">
                <canvas
                  ref={canvas1}
                  style={{ border: "1px solid black" }}
                ></canvas>
              </div>
              <div className="col d-flex align-items-center">
                <div>
                  <ul>
                    <b>Set A:</b> &#123; 5, 7, 8, 9 &#125;
                  </ul>
                  <ul>
                    <b>Set C:</b> &#123; 2, 4, 6, 8, 10 &#125;
                  </ul>
                  <ul>
                    <b>Set A∪C:</b> &#123;5, 7, 8, 9, 2, 4, 6, 8, 10 &#125;
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col">
                <canvas
                  ref={canvas2}
                  style={{ border: "1px solid black" }}
                ></canvas>
              </div>
              <div className="col d-flex align-items-center">
                <div>
                  <ul>
                    <b>Set A:</b> &#123;10,20,30,40&#125;
                  </ul>
                  <ul>
                    <b>Set C:</b> &#123;40,50,60,70&#125;
                  </ul>
                  <ul>
                    <b>Set A∪C:</b> &#123;10,20,30,40,50,60,70 &#125;
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

export default Res5WithNoMidContent;

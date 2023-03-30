import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackNextBar from "./MajorComponents/BackNextBar";
import { useTranslation } from "react-i18next";

function Res4WithNoMidContent() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const canvas = useRef();

  const onNext = (e) => {
    navigate("/letusverify/startpage/tool5");
  };

  let ctx = null;
  const boxes = [
    // { x: 87, y: 72, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'A'},
    // { x: 163, y: 72, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'B'},
    //{ x: 125, y: 128, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'C'},
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
      shapeName: "B",
      color: "rgba(115, 230, 163, 0.4)",
    },
  ];

  useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = 300;
    canvasEle.height = 200;
    ctx = canvasEle.getContext("2d");
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
    const { x, y, r, s, e, shapeName, color } = info;
    const { backgroundColor = color } = style;

    ctx.beginPath();
    ctx.fillStyle = backgroundColor;
    ctx.arc(x, y, r, s, e);
    if ((x === 120 && y === 100) || (x === 180 && y === 100)) {
      ctx.fill();
    } else {
      ctx.stroke();
    }
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText(shapeName, x, y);
    ctx.fillText("U", 290, 10);

    //Border of circle B
    ctx.beginPath();
    ctx.arc(180, 100, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //border of circle B
    // ctx.beginPath();
    // ctx.arc(125, 128, 50, 0, 2 * Math.PI);
    // ctx.strokeStyle = "black";
    // ctx.stroke();

    //border of circle A
    ctx.beginPath();
    ctx.arc(120, 100, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //code for numbers
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "red";
    ctx.fillText("5", 150, 100);
    ctx.fillText("7", 100, 100);
    ctx.fillText("8", 120, 75);
    ctx.fillText("9", 120, 125);
    ctx.fillText("3", 180, 75);
    ctx.fillText("4", 200, 100);
    ctx.fillText("6", 180, 125);
  };

  return (
    <div style={{ height: "100%" }}>
      <div className="container" style={{ height: "90%", overflow: "auto" }}>
        <div
          className="row align-items-center"
          style={{ height: "100%", width: "100%" }}
        >
          <div className="col">
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
          <div className="col">
            <div>
              <canvas
                ref={canvas}
                style={{ border: "1px solid black" }}
              ></canvas>
            </div>
          </div>
          <div className="col">
            <ul>
              <b>Set A:</b> &#123; 5, 7, 8, 9 &#125;
            </ul>
            <ul>
              <b>Set B:</b> &#123; 3, 4, 5, 6 &#125;
            </ul>
            <ul>
              <b>Set A∪B:</b> &#123; 5, 7, 8, 9, 3, 4, 6 &#125;
            </ul>
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

export default Res4WithNoMidContent;

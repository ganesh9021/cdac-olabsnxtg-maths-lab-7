import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackNextBar from "./MajorComponents/BackNextBar";
import { useTranslation } from "react-i18next";

function Res6WithNoMidContent() {
  const { t, i18n } = useTranslation();
  const canvas1 = useRef();
  const canvas2 = useRef();
  const navigate = useNavigate();

  const onNext = (e) => {
    navigate("/letusverify/startpage");
  };

  let ctx1 = null;
  let ctx2 = null;

  const boxes = [
    { x: 90, y: 75, r: 50, s: 0, e: 2 * Math.PI, shapeName: "A" },
    // { x: 230, y: 75, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'B'},
    // { x: 200, y: 130, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'C'},
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
    draw1();
    draw2();
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

  const draw1 = () => {
    ctx1.clearRect(
      0,
      0,
      canvas1.current.clientWidth,
      canvas1.current.clientHeight
    );
    ctx1.font = "18px Arial";
    ctx1.textAlign = "center";
    ctx1.textBaseline = "middle";
    ctx1.fillStyle = "Black";
    ctx1.fillText("U", 290, 10);
    boxes.map((info) => drawFillCircle1(info));
  };

  const draw2 = () => {
    ctx2.clearRect(
      0,
      0,
      canvas2.current.clientWidth,
      canvas2.current.clientHeight
    );
    ctx2.font = "18px Arial";
    ctx2.textAlign = "center";
    ctx2.textBaseline = "middle";
    ctx2.fillStyle = "Black";
    ctx2.fillText("U", 290, 10);
    boxes.map((info) => drawFillCircle2(info));
  };

  const drawFillCircle1 = (info, style = {}) => {
    //Circle A
    ctx1.beginPath();
    ctx1.fillStyle = "rgba(255, 39, 77, 0.4)";
    ctx1.arc(120, 110, 50, 0, 2 * Math.PI, true);
    ctx1.fill();

    //Circle B
    ctx1.beginPath();
    ctx1.fillStyle = "rgba(73, 146, 228, 0.55)";
    ctx1.arc(185, 110, 50, 3.1765, 5.02655);
    ctx1.fill();

    //Circle C
    ctx1.beginPath();
    ctx1.fillStyle = "rgba(73, 146, 228, 0.55)";
    ctx1.arc(150, 60, 50, 0.0523599, 1.8675);
    ctx1.fill();

    //Border of circle B
    ctx1.beginPath();
    ctx1.arc(185, 110, 50, 0, 2 * Math.PI);
    ctx1.strokeStyle = "black";
    ctx1.stroke();

    //border of circle C
    ctx1.beginPath();
    ctx1.arc(150, 60, 50, 0, 2 * Math.PI);
    ctx1.strokeStyle = "black";
    ctx1.stroke();

    //border of circle A
    ctx1.beginPath();
    ctx1.arc(120, 110, 50, 0, 2 * Math.PI);
    ctx1.strokeStyle = "black";
    ctx1.stroke();

    //Text A
    ctx1.font = "18px Arial";
    ctx1.textAlign = "center";
    ctx1.textBaseline = "middle";
    ctx1.fillStyle = "Black";
    ctx1.fillText("A", 120, 110);

    //Text B
    ctx1.font = "18px Arial";
    ctx1.textAlign = "center";
    ctx1.textBaseline = "middle";
    ctx1.fillStyle = "Black";
    ctx1.fillText("B", 185, 110);

    //Text C
    ctx1.font = "18px Arial";
    ctx1.textAlign = "center";
    ctx1.textBaseline = "middle";
    ctx1.fillStyle = "Black";
    ctx1.fillText("C", 150, 60);

    //code for numbers
    ctx1.font = "18px Arial";
    ctx1.textAlign = "center";
    ctx1.textBaseline = "middle";
    ctx1.fillStyle = "red";
    ctx1.fillText("4", 190, 70);
    ctx1.fillText("6", 170, 80);
    ctx1.fillText("8", 120, 80);
    ctx1.fillText("5", 150, 130);
    ctx1.fillText("7", 110, 140);
    ctx1.fillText("9", 90, 100);
    ctx1.fillText("3", 200, 130);
    ctx1.fillText("2", 150, 30);
    ctx1.fillText("10", 170, 50);
  };

  const drawFillCircle2 = (info, style = {}) => {
    //Circle A
    ctx2.beginPath();
    ctx2.fillStyle = "rgba(255, 39, 77, 0.4)";
    ctx2.arc(120, 110, 50, 0, 2 * Math.PI, true);
    ctx2.fill();

    //Circle B
    ctx2.beginPath();
    ctx2.fillStyle = "rgba(73, 146, 228, 0.55)";
    ctx2.arc(185, 110, 50, 3.1765, 5.02655);
    ctx2.fill();

    //Circle C
    ctx2.beginPath();
    ctx2.fillStyle = "rgba(73, 146, 228, 0.55)";
    ctx2.arc(150, 60, 50, 0.0523599, 1.8675);
    ctx2.fill();

    //Border of circle B
    ctx2.beginPath();
    ctx2.arc(185, 110, 50, 0, 2 * Math.PI);
    ctx2.strokeStyle = "black";
    ctx2.stroke();

    //border of circle C
    ctx2.beginPath();
    ctx2.arc(150, 60, 50, 0, 2 * Math.PI);
    ctx2.strokeStyle = "black";
    ctx2.stroke();

    //border of circle A
    ctx2.beginPath();
    ctx2.arc(120, 110, 50, 0, 2 * Math.PI);
    ctx2.strokeStyle = "black";
    ctx2.stroke();

    //Text A
    ctx2.font = "18px Arial";
    ctx2.textAlign = "center";
    ctx2.textBaseline = "middle";
    ctx2.fillStyle = "Black";
    ctx2.fillText("A", 120, 110);

    //Text B
    ctx2.font = "18px Arial";
    ctx2.textAlign = "center";
    ctx2.textBaseline = "middle";
    ctx2.fillStyle = "Black";
    ctx2.fillText("B", 185, 110);

    //Text C
    ctx2.font = "18px Arial";
    ctx2.textAlign = "center";
    ctx2.textBaseline = "middle";
    ctx2.fillStyle = "Black";
    ctx2.fillText("C", 150, 60);

    //code for numbers
    ctx2.font = "10px Arial";
    ctx2.textAlign = "center";
    ctx2.textBaseline = "middle";
    ctx2.fillStyle = "red";
    ctx2.fillText("900", 180, 80);
    ctx2.fillText("600", 120, 80);
    ctx2.fillText("300", 150, 120);
    ctx2.fillText("50", 150, 95);
    ctx2.fillText("200", 110, 140);
    ctx2.fillText("100", 90, 100);
    ctx2.fillText("700", 200, 140);
    ctx2.fillText("800", 210, 90);
    ctx2.fillText("400", 130, 30);
    ctx2.fillText("500", 170, 40);
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
                    <b>Set B:</b> &#123; 3, 4, 5, 6 &#125;
                  </ul>
                  <ul>
                    <b>Set C:</b> &#123; 2, 4, 6, 8, 10 &#125;
                  </ul>
                  <ul>
                    <b>Set A∪B:</b> &#123; 5, 7, 8, 9, 3, 4, 6 &#125;
                  </ul>
                  <ul>
                    <b>Set A∪C:</b> &#123; 5, 7, 8, 9, 2, 4, 6, 10&#125;
                  </ul>
                  <ul>
                    <b>Set (A∪B)∩(A∪C):</b> &#123; 5, 7, 8, 9, 4, 6 &#125;
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
                    <b>Set A:</b> &#123;100,200,300,600,50&#125;
                  </ul>
                  <ul>
                    <b>Set B:</b> &#123;300,900,700,800,50&#125;
                  </ul>
                  <ul>
                    <b>Set C:</b> &#123;400,500,600,900,50&#125;
                  </ul>
                  <ul>
                    <b>Set A∪B:</b> &#123;50,100,200,300,600,700,800,900&#125;
                  </ul>
                  <ul>
                    <b>Set A∪C:</b> &#123;50,100,200,300,600,400,500,900&#125;
                  </ul>
                  <ul>
                    <b>Set (A∪B)∩(A∪C):</b> &#123;50,100,200,300,600,900&#125;
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

export default Res6WithNoMidContent;

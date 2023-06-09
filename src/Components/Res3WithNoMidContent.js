import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackNextBar from "./MajorComponents/BackNextBar";

import { useTranslation } from "react-i18next";

function Res3WithNoMidContent() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const canvas1 = useRef();
  const canvas2 = useRef();

  const onNext = () => {
    navigate("/letusverify/startpage");
  };

  let ctx1 = null;
  let ctx2 = null;

  const boxes = [
    { x: 250, y: 75, r: 50, s: 0, e: 2 * Math.PI, shapeName: "A" },
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
    ctx1.font = "18px Arial";
    ctx1.textAlign = "center";
    ctx1.textBaseline = "middle";
    ctx1.fillStyle = "black";
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
    ctx2.fillStyle = "black";
    ctx2.fillText("U", 290, 10);
    boxes.map((info) => drawFillCircle2(info));
  };

  const drawFillCircle1 = (info, style = {}) => {
    //Circle A
    ctx1.beginPath();
    ctx1.fillStyle = "rgba(255, 39, 77, 0.4)";
    ctx1.arc(160, 75, 50, 0, 2 * Math.PI, true);
    ctx1.fill();

    //Circle B
    ctx1.beginPath();
    ctx1.fillStyle = "rgba(73, 146, 228, 0.55)";
    ctx1.arc(130, 125, 50, 0.9, 5.32, true);
    ctx1.fill();

    //Circle C
    ctx1.beginPath();
    ctx1.fillStyle = "rgba(73, 146, 228, 0.55)";
    ctx1.arc(190, 125, 50, 2.1816667, 4.04);
    ctx1.fill();

    //Border of circle B
    ctx1.beginPath();
    ctx1.arc(130, 125, 50, 0, 2 * Math.PI);
    ctx1.strokeStyle = "black";
    ctx1.stroke();

    //border of circle C
    ctx1.beginPath();
    ctx1.arc(190, 125, 50, 0, 2 * Math.PI);
    ctx1.strokeStyle = "black";
    ctx1.stroke();

    //border of circle A
    ctx1.beginPath();
    ctx1.arc(160, 75, 50, 0, 2 * Math.PI);
    ctx1.strokeStyle = "black";
    ctx1.stroke();

    //Text A
    ctx1.font = "18px Arial";
    ctx1.textAlign = "center";
    ctx1.textBaseline = "middle";
    ctx1.fillStyle = "Black";
    ctx1.fillText("A", 160, 75);

    //Text B
    ctx1.font = "18px Arial";
    ctx1.textAlign = "center";
    ctx1.textBaseline = "middle";
    ctx1.fillStyle = "Black";
    ctx1.fillText("B", 130, 125);

    //Text C
    ctx1.font = "18px Arial";
    ctx1.textAlign = "center";
    ctx1.textBaseline = "middle";
    ctx1.fillStyle = "Black";
    ctx1.fillText("C", 190, 125);

    //code for numbers
    ctx1.font = "18px Arial";
    ctx1.textAlign = "center";
    ctx1.textBaseline = "middle";
    ctx1.fillStyle = "red";
    ctx1.fillText("4", 160, 135);
    ctx1.fillText("6", 160, 150);
    ctx1.fillText("5", 130, 90);
    ctx1.fillText("7", 140, 50);
    ctx1.fillText("9", 180, 50);
    ctx1.fillText("8", 190, 90);
    ctx1.fillText("3", 110, 135);
    ctx1.fillText("10", 220, 135);
    ctx1.fillText("2", 190, 160);
  };

  const drawFillCircle2 = (info, style = {}) => {
    //Circle A
    ctx2.beginPath();
    ctx2.fillStyle = "rgba(255, 39, 77, 0.4)";
    ctx2.arc(160, 75, 50, 0, 2 * Math.PI, true);
    ctx2.fill();

    //Circle B
    ctx2.beginPath();
    ctx2.fillStyle = "rgba(73, 146, 228, 0.55)";
    ctx2.arc(130, 125, 50, 0.9, 5.32, true);
    ctx2.fill();

    //Circle C
    ctx2.beginPath();
    ctx2.fillStyle = "rgba(73, 146, 228, 0.55)";
    ctx2.arc(190, 125, 50, 2.1816667, 4.04);
    ctx2.fill();

    //Border of circle B
    ctx2.beginPath();
    ctx2.arc(130, 125, 50, 0, 2 * Math.PI);
    ctx2.strokeStyle = "black";
    ctx2.stroke();

    //border of circle C
    ctx2.beginPath();
    ctx2.arc(190, 125, 50, 0, 2 * Math.PI);
    ctx2.strokeStyle = "black";
    ctx2.stroke();

    //border of circle A
    ctx2.beginPath();
    ctx2.arc(160, 75, 50, 0, 2 * Math.PI);
    ctx2.strokeStyle = "black";
    ctx2.stroke();

    //Text A
    ctx2.font = "18px Arial";
    ctx2.textAlign = "center";
    ctx2.textBaseline = "middle";
    ctx2.fillStyle = "Black";
    ctx2.fillText("A", 160, 75);

    //Text B
    ctx2.font = "18px Arial";
    ctx2.textAlign = "center";
    ctx2.textBaseline = "middle";
    ctx2.fillStyle = "Black";
    ctx2.fillText("B", 130, 125);

    //Text C
    ctx2.font = "18px Arial";
    ctx2.textAlign = "center";
    ctx2.textBaseline = "middle";
    ctx2.fillStyle = "Black";
    ctx2.fillText("C", 190, 125);

    //code for numbers
    ctx2.font = "10px Arial";
    ctx2.textAlign = "center";
    ctx2.textBaseline = "middle";
    ctx2.fillStyle = "red";
    ctx2.fillText("Orange", 160, 140);
    ctx2.fillText("Fig", 160, 110);
    ctx2.fillText("Peach", 130, 90);
    ctx2.fillText("Kiwi", 140, 50);
    ctx2.fillText("Grape", 180, 50);
    ctx2.fillText("Mango", 190, 90);
    ctx2.fillText("Pear", 100, 110);
    ctx2.fillText("Plum", 120, 150);
    ctx2.fillText("Guava", 220, 135);
    ctx2.fillText("Cherry", 190, 160);
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
                    <b>Set B∩C:</b> &#123; 4, 6 &#125;
                  </ul>
                  <ul>
                    <b>Set A∪(B∩C):</b> &#123; 5, 7, 8, 9, 4, 6 &#125;
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
                    <b>Set A:</b> &#123;Kiwi,Grape,Peach,Mango,fig&#125;
                  </ul>
                  <ul>
                    <b>Set B:</b> &#123;Pear,Plum,Peach,Fig,Orange&#125;
                  </ul>
                  <ul>
                    <b>Set C:</b> &#123;Cherry,Guava,Mango,Orange,Fig&#125;
                  </ul>
                  <ul>
                    <b>Set B∩C:</b> &#123;Fig,Orange&#125;
                  </ul>
                  <ul>
                    <b>Set A∪(B∩C):</b> &#123;Kiwi,Grape,Peach,Mango,fig,Orange&#125;
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

export default Res3WithNoMidContent;

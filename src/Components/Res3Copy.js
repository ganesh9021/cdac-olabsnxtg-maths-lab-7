import React, { useRef, useEffect } from "react";

function Res3Copy() {
  const canvas = useRef();

  let ctx = null;
  const boxes = [
    { x: 250, y: 75, r: 50, s: 0, e: 2 * Math.PI, shapeName: "A" },
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

  const draw = () => {
    ctx.clearRect(
      0,
      0,
      canvas.current.clientWidth,
      canvas.current.clientHeight
    );
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "black";
    ctx.fillText("U", 290, 10);
    boxes.map((info) => drawFillCircle(info));
  };

  const drawFillCircle = (info, style = {}) => {
    //Circle A
    ctx.beginPath();
    ctx.fillStyle = "rgba(255, 39, 77, 0.4)";
    ctx.arc(150, 75, 50, 0, 2 * Math.PI, true);
    ctx.fill();

    //Circle B
    ctx.beginPath();
    ctx.fillStyle = "rgba(73, 146, 228, 0.55)";
    ctx.arc(120, 125, 50, 0.9, 5.32, true);
    ctx.fill();

    //Circle C
    ctx.beginPath();
    ctx.fillStyle = "rgba(73, 146, 228, 0.55)";
    ctx.arc(180, 125, 50, 2.1816667, 4.04);
    ctx.fill();

    //Border of circle B
    ctx.beginPath();
    ctx.arc(120, 125, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //border of circle C
    ctx.beginPath();
    ctx.arc(180, 125, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //border of circle A
    ctx.beginPath();
    ctx.arc(150, 75, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //Text A
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText("A", 150, 75);

    //Text B
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText("B", 120, 125);

    //Text C
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText("C", 180, 125);

    //code for numbers
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "red";
    ctx.fillText("4", 150, 135);
    ctx.fillText("6", 150, 150);
    ctx.fillText("5", 120, 100);
    ctx.fillText("7", 130, 50);
    ctx.fillText("9", 170, 50);
    ctx.fillText("8", 180, 100);
    ctx.fillText("3", 100, 135);
    ctx.fillText("10", 210, 135);
    ctx.fillText("2", 180, 160);
  };

  return (
    <div style={{ height: "100%" }}>
      <div className="container-fluid" style={{ height: "90%" }}>
        <div className="row">
          <div className="col">
            <canvas ref={canvas} style={{ border: "1px solid black" }}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Res3Copy;

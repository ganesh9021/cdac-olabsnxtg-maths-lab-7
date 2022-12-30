
import React, { useRef, useEffect} from "react";

function Res_6_Copy() {
  const canvas = useRef();

  let ctx = null;
  const boxes = [
    { x: 170, y: 75, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'A'},
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
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'Black';  
    ctx.fillText('U', 290, 10);
    boxes.map((info) => drawFillCircle(info));
  };

  const drawFillCircle = (info, style = {}) => {
   
    //Circle A
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255, 39, 77, 0.4)';
    ctx.arc(120, 120, 50, 0,2 * Math.PI,true);
    ctx.fill();

    //Circle B
    ctx.beginPath();
    ctx.fillStyle = 'rgba(73, 146, 228, 0.55)';
    ctx.arc(185, 120, 50, 3.1765,5.02655);
    ctx.fill();

    //Circle C
    ctx.beginPath();
    ctx.fillStyle = 'rgba(73, 146, 228, 0.55)';
    ctx.arc(150,70,50,0.0523599,1.8675);
    ctx.fill();

    //Border of circle B
    ctx.beginPath();
    ctx.arc(185, 120, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //border of circle C
    ctx.beginPath();
    ctx.arc(150, 70, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //border of circle A
    ctx.beginPath();
    ctx.arc(120, 120, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //Text A
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'Black';  
    ctx.fillText('A', 120, 120);

    //Text B
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'Black';  
    ctx.fillText('B', 185, 120);

    //Text C
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'Black';  
    ctx.fillText('C', 150, 70);

    //code for numbers
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx. textBaseline = 'middle';
    ctx.fillStyle = 'red';  
    ctx.fillText('4', 190, 80);
    ctx.fillText('6', 170, 90);
    ctx.fillText('8', 120, 90);
    ctx.fillText('5', 150, 140);
    ctx.fillText('7', 110, 150);
    ctx.fillText('9', 90, 110);
    ctx.fillText('3', 200, 140);
    ctx.fillText('2', 150, 40);
    ctx.fillText('10', 170, 60);
    
  };

  return (

    <div style={{height : '100%'}}>
      <div className="container-fluid" style={{height : '90%'}}>
        <div className="row">
          <div className="col">
            <canvas
            ref={canvas}
            style = {{border:"1px solid black"}}
            ></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Res_6_Copy;
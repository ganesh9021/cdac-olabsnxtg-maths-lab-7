import { Divider } from "@material-ui/core";
import { width } from "@mui/system";
import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DragnDrop_5() {
  let navigate = useNavigate();

  const Next_Res = () => {
    navigate("/activity1/letusverify/act1startpage/lhs_rhs/tool_5/dragndrop_5/res_5");
  };
  const canvas = useRef();

  let ctx = null;
  const boxes = [
    // { x: 200, y: 220, w: 100, h: 50 ,shapeName : 'U' },
    // { x: 60, y: 55, r: 50, s: 0, e: 2 * Math.PI, shapeName: "A" },
    // { x: 190, y: 55, r: 50, s: 0, e: 2 * Math.PI, shapeName: "B" },
    // { x: 125, y: 145, r: 50, s: 0, e: 2 * Math.PI, shapeName: "C" },

    { x: 133, y: 100, r: 50, s: 0, e: 2 * Math.PI, shapeName: "A" },
    { x: 268, y: 100, r: 50, s: 0, e: 2 * Math.PI, shapeName: "C" },
  ];
  let isDown = false;
  let dragTarget = null;
  let startX = null;
  let startY = null;

  //console.log(boxes[0].x);

  // initialize the canvas context
  useEffect(() => {
    // dynamically assign the width and height to canvas
    const canvasEle = canvas.current;
    canvasEle.width = 400;
    canvasEle.height = 200;
    //console.log(canvasEle.clientHeight);
    // get context of the canvas
    ctx = canvasEle.getContext("2d");
  }, []);

  useEffect(() => {
    draw();
  }, []);

  // draw rectangle
  const draw = () => {
    ctx.clearRect(
      0,
      0,
      canvas.current.clientWidth,
      canvas.current.clientHeight
    );
    boxes.map((info) => drawStrokeCircle(info));
  };

  // draw rectangle with background 
  const drawStrokeCircle = (info, style = {}) => {
    const { x, y, r, s, e, shapeName } = info;
    //const { backgroundColor = "black" } = style;

    // ctx.beginPath();
    // ctx.fillStyle = backgroundColor;
    // ctx.fillRect(x, y, w, h);
    // ctx.beginPath();
    // ctx.arc(90, 75, 5, 0, 2 * Math.PI);
    // ctx.stroke();
    // ctx.beginPath();
    // ctx.arc(170, 75, 5, 0, 2 * Math.PI);
    // ctx.stroke();
    // ctx.beginPath();
    // ctx.arc(130, 135, 5, 0, 2 * Math.PI);
    // ctx.stroke();

    ctx.beginPath();
    ctx.arc(x, y, r, s, e);
    ctx.stroke();
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "black"; // a color name or by using rgb/rgba/hex values
    ctx.fillText(shapeName, x, y);
    ctx.fillText("U", 390, 10); // text and position
  };

  // identify the click event in the rectangle
  const hitBox = (x, y) => {
    //console.log("hitbox gets called",x,y);
    let isTarget = null;

    for (let i = 0; i < boxes.length; i++) {
      const box = boxes[i];
      if (
        x >= box.x - box.r &&
        x <= box.x + box.r &&
        y >= box.y - box.r &&
        y <= box.y + box.r
      ) {
        dragTarget = box;
        isTarget = true;
        break;
      }
    }
    return isTarget;
  };

  const Fix_pos = (a,b) => {
    if( ((a === 190 && b === 55) ||(a === 125 && b === 145)) || ((a === 60 && b === 55) || (a === 125 && b === 145)) || ((a === 60 && b === 55) || (a === 190 && b === 55)))
    {
      alert("wrong postion of sets....!");
    }
    else 
    {
      if(((Math.abs(a-190)<= 99) && (Math.abs(b-55 <= 99))) || ((Math.abs(a-125) <= 99) && (Math.abs(b-145) <= 99)))
      {
        console.log("you dragged at the correct position....!");
      }
      else 
      {
        alert("wrong postion of sets....!");
      }
    }
  }


  //fixing position of each element

  // const fix_pos = (a,b,e) => {
  //   if( a >= 85 && a <= 95 && b >= 70 && b <= 80)
  //   {
  //     dragTarget = false;
  //   }
  //   if( a >= 165 && a <= 175 && b >= 70 && b <= 80)
  //   {
  //     dragTarget = false;
  //   }
  //   if( a >= 125 && a <= 135 && b >= 130 && b <= 140)
  //   {
  //     dragTarget = false;
  //   }
  // }

  const handleMouseDown = (e) => {
    startX = parseInt(e.nativeEvent.offsetX - canvas.current.clientLeft);
    startY = parseInt(e.nativeEvent.offsetY - canvas.current.clientTop);
    isDown = hitBox(startX, startY);
    //console.log("inside hadleMouseDown",e);
    //console.log(startX,startY);
  };
  const handleMouseMove = (e) => {

    //console.log(e.startX,e.startY);
    // console.log(e.x,e.y);

    if (!isDown) return;
    const mouseX = parseInt(e.nativeEvent.offsetX - canvas.current.clientLeft);
    const mouseY = parseInt(e.nativeEvent.offsetY - canvas.current.clientTop);
    const dx = mouseX - startX;
    const dy = mouseY - startY;
    startX = mouseX;
    startY = mouseY;
    dragTarget.x += dx;
    dragTarget.y += dy;
    //fix_pos(startX,startY,e);
    Fix_pos(dragTarget.x,dragTarget.y);
    draw();
    //console.log(dragTarget.x,dragTarget.y);
  };
  const handleMouseUp = (e) => {
    dragTarget = null;
    isDown = false;
    //console.log("inside hadleMouseup",e);
  };
  const handleMouseOut = (e) => {
    //console.log("handleMouseOut",e)
    handleMouseUp(e);
  };

  return (

    <div className="container">
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
              <div>A U B</div>
              <div>A U C</div>
              <div>(A U B)∩(A U C)</div>
            </div>
          </div>
        </div>
        
        <div className="col-9 App">
        <canvas
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseOut={handleMouseOut}
            ref={canvas}
            style={{ border: "1px solid black" }}
          ></canvas>
        </div>
      </div>
      <div className="row">
        <div className="d-flex justify-content-center ">
          <div className="btn btn-primary btn-sm" onClick={Next_Res}>Next</div>
        </div>
      </div>
    </div>

    /*
    <div className="container-fluid">
      <div className="row flex-column App" style={{ height: "50vh" }}>
        <div className="col">
          <canvas
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseOut={handleMouseOut}
            ref={canvas}
            style={{ border: "1px solid black" }}
          ></canvas>
        </div>
        <div className="col mt-3">
          <button className="btn btn-primary btn-sm" onClick={Next_Res}>Next</button>
        </div>
      </div>
    </div>
    */
  );

  {
    /* <div className="App">
      <canvas
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseOut={handleMouseOut}
        ref={canvas}
        style = {{border:"1px solid black"}}
      ></canvas>
      <div className="btn btn-primary btn-small" onClick={Next_Res}>Next</div>
    </div> */
  }
}

export default DragnDrop_5;

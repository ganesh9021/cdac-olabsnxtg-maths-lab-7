import React, { useRef, useEffect, useContext } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import BackNextBar from "./BackNextBar";
import { toast } from "react-toastify";
import { rezContext } from "./Act1startpage";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

function Res_3() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const canvas = useRef();
  const { setArv } = useContext(rezContext);
  const { setToolvisible } = useOutletContext();

  // const Component = () => {
  //   localStorage.setItem("A",4);
  //   setArv(2);
  //   navigate("/activity7/letusverify/act1startpage/lhs_rhs");
  // }
  const onBack = () => {
    navigate("/activity7/letusverify/act1startpage/tool_3");
    setArv(7);
    setToolvisible("visible");
  };

  const onNext = (e) => {
    navigate("/activity7/letusverify/act1startpage/lhs_rhs");
    setToolvisible("visible");
    setArv(1);
  };

  const res3_withno = () => {
    setArv(6);
    navigate(
      "/activity7/letusverify/act1startpage/lhs_rhs/tool_3/res_3/res3_withno"
    );
  };

  useEffect(() => {
    toast.success(`${t("toaster-7")}`, {
      position: "top-center",
      autoClose: 2000,
    });
  }, []);

  let ctx = null;
  const boxes = [
    { x: 250, y: 75, r: 50, s: 0, e: 2 * Math.PI, shapeName: "A" },
    // { x: 230, y: 75, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'B'},
    // { x: 200, y: 130, r: 50, s: 0, e: 2 * Math.PI, shapeName : 'C'},
  ];

  useEffect(() => {
    const canvasEle = canvas.current;
    canvasEle.width = 300;
    canvasEle.height = 200;
    ctx = canvasEle.getContext("2d");
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
    // const { x, y, r, s, e, shapeName} = info;
    // const { backgroundColor = 'rgba(201, 50, 48, 0.55)'} = style;

    //Circle A
    ctx.beginPath();
    ctx.fillStyle = "rgba(255, 39, 77, 0.4)";
    ctx.arc(160, 75, 50, 0, 2 * Math.PI, true);
    ctx.fill();

    //Circle B
    ctx.beginPath();
    ctx.fillStyle = "rgba(73, 146, 228, 0.55)";
    ctx.arc(130, 125, 50, 0.9, 5.32, true);
    ctx.fill();

    //Circle C
    ctx.beginPath();
    ctx.fillStyle = "rgba(73, 146, 228, 0.55)";
    ctx.arc(190, 125, 50, 2.1816667, 4.04);
    ctx.fill();

    //Border of circle B
    ctx.beginPath();
    ctx.arc(130, 125, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //border of circle C
    ctx.beginPath();
    ctx.arc(190, 125, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //border of circle A
    ctx.beginPath();
    ctx.arc(160, 75, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.stroke();

    //Text A
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText("A", 160, 75);

    //Text B
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText("B", 130, 125);

    //Text C
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "Black";
    ctx.fillText("C", 190, 125);
  };

  return (
    <div style={{ height: "100%" }}>
      <div className="container" style={{ height: "90%", overflow: "auto" }}>
        <div
          className="row align-items-center"
          style={{ height: "100%", width: "100%" }}
        >
          <div className="col mb-1">
            <div className="fs-1.2vw fw-bold">{t("line-2")}</div>
            <div className="d-flex">
              <div className="me-4">
                <div>
                  <input type="checkbox" name="check_box" id="cb1" value="A" />
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="check_box"
                    id="cb2"
                    value="B∩C"
                  />
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="check_box"
                    id="cb3"
                    value="AU(B∩C)"
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
          <div className="col">
            <div>
              <canvas
                ref={canvas}
                style={{ border: "1px solid black" }}
              ></canvas>
            </div>
            <div className="">
              <Button
                id="id1"
                autoFocus
                variant="contained"
                onClick={res3_withno}
                size="small"
                style={{ marginRight: "1%", marginBottom: "1%" ,marginLeft : "15%"}}
              >
                {t("btn-3")}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <BackNextBar setBackward={onBack} setForward={onNext} />
    </div>
  );
}

export default Res_3;

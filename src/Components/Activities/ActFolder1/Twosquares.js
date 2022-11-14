import React, { useContext, useRef } from "react";
//import { Modal } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { rezContext } from "./Act1startpage";

const Twosquares = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const imght1 = useRef();
  const imght2 = useRef();
  const { arv, setArv } = useContext(rezContext);
  const v1 = location.state.val1;
  const v2 = location.state.val2;
  console.log(arv);
  const onNext = (e) => {
    navigate("/activity1/letusverify/act1startpage", {
      state: { len: `${location.state.val1}`, bre: `${location.state.val2}` },
    });
    setArv(3);
  };

  return (
    <div className=" d-flex flex-column" style={{ height: "100%" }}>
      <div className=" d-flex" style={{ height: "80%" }}>
        <div className=" col-6  d-flex justify-content-center align-items-center">
          {v1} cm
          <img
            ref={imght1}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "200%",
            }}
            src={"/img/Shapes/a2.png"}
            alt="Logo"
          />
          {v1} cm
        </div>
        <div className=" col-6  d-flex justify-content-center align-items-center">
          {v2} cm
          <img
            ref={imght2}
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              // maxHeight: "100%",
              height: "200%",
            }}
            src={"/img/Shapes/b2.png"}
            alt="Logo"
          />
          {v2} cm
        </div>
      </div>

      <div
        className=" d-flex justify-content-center align-items-center "
        style={{ height: "20%" }}
      >
        <div className="btn btn-warning btn-lg" onClick={onNext}>
          Next
        </div>
      </div>
    </div>
  );
};

export default Twosquares;

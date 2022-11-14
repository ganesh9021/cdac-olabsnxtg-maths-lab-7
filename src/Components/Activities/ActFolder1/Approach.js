import React from "react";
import { useNavigate } from "react-router-dom";


export default function Approach() {

  const navigate = useNavigate();
  const button_A = () => {
    navigate("/activity1/letusverify/act1startpage/tools");
  };

  const button_AUB = () => {
    navigate("/activity1/letusverify/act1startpage/tools");
  };

  const button_AUC = () => {
    navigate("/activity1/letusverify/act1startpage/tools");
  };

  const button_BIC = () => {
    navigate("/activity1/letusverify/act1startpage/tools");
  };

  const button_AUBIC = () => {
    navigate("/activity1/letusverify/act1startpage/tools");
  };

  const button_AUBIAUC = () => {
    navigate("/activity1/letusverify/act1startpage/tools");
  };

  return (
    <div className="container-fluid">
      <div className="row" style={{height : '50vh'}}>
        <div className="col-4 d-flex flex-column justify-content-center">
          <button className="btn btn-primary btn-lg rounded-pill mb-2" onClick={button_A}>A</button>
          <button className="btn btn-primary btn-lg rounded-pill" onClick={button_AUB}>AUB</button>
        </div>
        <div className="col-4 d-flex flex-column justify-content-center">
          <button className="btn btn-primary btn-lg rounded-pill mb-2" onClick={button_AUC}>AUC</button>
          <button className="btn btn-primary btn-lg rounded-pill" onClick={button_BIC}>B∩C</button>
        </div>
        <div className="col-4 d-flex flex-column justify-content-center">
          <button className="btn btn-primary btn-lg rounded-pill mb-2" onClick={button_AUBIC}>AU(B∩C)</button>
          <button className="btn btn-primary btn-lg rounded-pill " onClick={button_AUBIAUC}>(AUB)∩(AUC)</button>
        </div>
      </div>
    </div>
  );
}

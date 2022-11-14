import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Startact from "../Startact";

const Overview = () => {

  const navigate = useNavigate();
  const Next = () => {
    navigate("/activity1/letusverify/act1startpage/approach");
  }
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        backgroundImage: "url(/img/backg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="col-12 col-md-9 border border-light border-2"
        style={{
          height: "75vh",
          background: "rgba(255, 255, 255, .45)",
          border: "3px solid rgba(255, 255, 255, .5)",
          backdropFilter: "blur(5px)",
          borderRadius: "20px",
        }}
      >
        <div className="container-fluid">
          <div className="row" style={{height : '60vh'}}>
            <div className="d-flex justify-content-center align-items-start">
              <h1>Overview</h1>
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-center align-items-start">
            <Button variant="outline-primary" onClick={Next}>Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

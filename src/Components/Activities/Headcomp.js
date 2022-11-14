import React from "react";
import { Link } from "react-router-dom";
import exp1 from "../Superscript";
import homeimg from "../../Img/homeimg.png";


const Headcomp = () => {
  return (
    <div className="d-flex " style={{height:"10%"}}>
      <div className="col-2 d-flex justify-content-center align-items-center" >
        <Link to="/activity7">
          <img
            className=""
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxHeight: "100%",
            }}
            src={homeimg}
            alt="Logo"
          />
        </Link>
      </div>

      <div className="col-8  d-flex justify-content-center align-items-center" >
        <div
          className=" px-5 border border-2 d-flex justify-content-center align-items-center "
          style={{
            height: "90%",
            borderRadius: "25px",
            background: "skyblue",
          }}
        >
          <div className="" style={{ fontSize: "1.4vw" }}>
            <b>Set Theory:</b> {exp1()}
          </div>
        </div>
      </div>

      <div className="col-2 d-flex justify-content-center align-items-center">
        {/* <Offcanvas /> */}
      </div>
    </div>
  );
};

export default Headcomp;


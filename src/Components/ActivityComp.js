import React from "react";


import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function ActivityComp({ actname, expression, backcolor, redirect }) {
  return (
    <>
      <Link to={redirect} style={{ textDecoration: 'none' }} >
        <div
          className="col-12 border text-center d-flex flex-column justify-content-center align-items-center"
          style={{
            height: "110px",
            borderRadius: "25px",
            color: "white",
            background: `${backcolor}`,
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: " 700",
            fontSize: "25px",
          
          }}
        >
          {actname}
          <div
            className="col-11 d-flex justify-content-center align-items-center"
            style={{
              height: "60px",
              borderBottomLeftRadius: "25px",
              borderBottomRightRadius: "25px",
              background: "white",
              color: "black",
              flexWrap: "wrap",
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontSize: "23px",
              fontWeight: "700",
            }}
          >
            {expression}
          </div>
        </div>
      </Link>
    </>
  );
}

export default ActivityComp;

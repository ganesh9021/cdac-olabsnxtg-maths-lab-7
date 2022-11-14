import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { UserContext } from "../ActivityMiddleComp";
import { rezContext } from "./Act1startpage";

const ActivityShapes = ({ sources, names, redirectedto, arval }) => {
  const { flag, setFlag } = useContext(UserContext);
  const { setArv } = useContext(rezContext);
  const [cnt, setCnt] = useState(0);

  function clickCnt(num) {
    setCnt(num);
    console.log("This is count :" + cnt);
  }
  return (
    <div className="col-2" style={{ height: "50%", textDecoration: "none" }}>
      <Link
        style={{ textDecoration: "none" }}
        onClick={() => {
          setFlag(!{ flag });
          setArv(arval);
          clickCnt(5);
        }}
        to={redirectedto}
      >
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: "70%" }}
        >
          <img
            className="col-10"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxHeight: "100%",
            }}
            src={sources}
            alt="img"
          />
        </div>
      </Link>

      <div
        className="d-flex align-items-center justify-content-center fs-4 fw-normal"
        style={{ height: "30%" }}
      >
        {names}
      </div>
    </div>
  );
};

export default ActivityShapes;

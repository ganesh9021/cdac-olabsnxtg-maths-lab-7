import React, {useContext, useEffect} from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { rezContext } from "./Act1startpage";
import BackNextBar from "./BackNextBar";


const ApproachSelect1 = () => {

  const navigate = useNavigate();
 
  const { setArv } = useContext(rezContext);
  const { setToolvisible } = useOutletContext();

  useEffect(() => {localStorage.setItem("A",1)},[])
  
  const Next = () => {
    setArv(1);
    navigate("/activity7/letusverify/act1startpage/lhs_rhs");
  }
  const onBack = () => {
    navigate("/activity7/letusverify");
    //setArv(1);
    setToolvisible("visible");
  };

  const onNext = (e) => {
    navigate("/activity7/letusverify/act1startpage/lhs_rhs");
    setToolvisible("visible");
    setArv(1);
  };

  return (
    <div className="" style={{height : '100%'}}>
      <div className="row align-items-end" style={{height : '90%'}}>
        <div className="row justify-content-center align-items-end fw-bold" style={{ height: "10vh" ,fontSize:'1.2vw',fontFamily:'arial'}}>
          To verify distributive law for three given non-empty sets A, B and C,
          that is, A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)
        </div>
        <div className="row " style={{ height: "20vh" }}>
          <div className="col d-flex flex-column justify-content-center align-items-start" style={{fontSize:'1.2vw'}}>
            <button
              className="btn btn-secondary btn-sm mb-3"
              style={{ width: "60%"}}
              // onClick={button_A}
            >
              A
            </button>
            <button
              className="btn btn-secondary btn-sm"
              style={{ width: "60%" }}
              // onClick={button_AUB}
            >
              A U B
            </button>
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <button
              className="btn btn-secondary btn-sm mb-3"
              style={{ width: "60%" }}
              // onClick={button_BIC}
            >
              B ∩ C
            </button>
            <button
              className="btn btn-secondary btn-sm"
              style={{ width: "60%" }}
              // onClick={button_AUC}
            >
              A U C
            </button>
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <button
              className="btn btn-secondary btn-sm mb-3"
              style={{ width: "60%" }}
              // onClick={button_AUBIC}
            >
              A U (B ∩ C)
            </button>
            <button
              className="btn btn-secondary btn-sm"
              style={{ width: "60%" }}
              // onClick={button_AUBIAUC}
            >
              (A U B)∩(A U C)
            </button>
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <img
              className="img-fluid img-thumbnail mb-3"
              style={{ height: "30px", width: "200px" }}
              src="/img/Shapes/pointing.png"
              alt="logo"
            />
            <img
              className="img-fluid img-thumbnail"
              style={{ height: "30px", width: "200px" }}
              src="/img/Shapes/pointing.png"
              alt="logo"
            />
          </div>
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <button
              className="btn btn-white btn-sm mb-3 fw-bold"
              style={{ width: "80%",fontSize:'1.2vw',fontFamily:'arial' }}
              // onClick={button_AUBIC}
            >
              Part of LHS
            </button>
            <button
              className="btn btn-white btn-sm fw-bold"
              style={{ width: "80%",fontSize:'1.2vw',fontFamily:'arial' }}
              // onClick={button_AUBIAUC}
            >
              Part of RHS
            </button>
          </div>
        </div>
        <div className="row" style={{height : '30%'}}>
          <div className="d-flex justify-content-center align-items-end">
            <div className="btn btn-primary btn-sm" onClick={Next}>Start</div>
          </div>
        </div>
      </div>
      <BackNextBar setBackward={onBack} setForward={onNext}/>
      
    </div>
  );
};

export default ApproachSelect1;

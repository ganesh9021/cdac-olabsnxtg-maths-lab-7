import Offcanvas from "./Offcanvas";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BackNextBar from "./BackNextBar";

const Theory1 = () => {
  const navigate = useNavigate();
  const onBack = () => {
  navigate("/activity7/letusverify/theory");
  //setArv(10);
  //setToolvisible("hidden");
};

const onNext = (e) => {
  //localStorage.setItem("A",6);
  navigate("");
  //setToolvisible("visible");
  //setArv(11);
};
  return (
    <div>
      <div
        class="container-fluid"
        className=""
        style={{
          height: "100vh",
          backgroundImage: "url(/img/backg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center "
          style={{ marginRight: "5%" }}
        >
          <Link to="/activity7">
            <img
              className="ms-5"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                maxHeight: "100%",
                maxWidth: "100%",
              }}
              src={"/Img/homeimg.png"}
              alt="Logo"
            />
          </Link>
          <div className="col-6 col-md-10 me-5 my-3">
            <div
              className="border border-2 flex-column d-flex justify-content-center align-items-center "
              style={{
                height: "60px",
                borderRadius: "25px",
                background: "#B0C4DE",
                backdropFilter: "blur(5px)",
                marginLeft: "10%",
              }}
            >
              <div className="" style={{ fontSize: "1.4vw" }}>
                <b>Set Theory:</b> A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)
              </div>
            </div>
          </div>
          <Offcanvas />
        </div>

        <div
          class="container"
          style={{
            backgroundColor: "white",
            border: "3px solid rgba(255, 255, 255, .5)",
            backdropFilter: "blur(5px)",
            borderRadius: "20px",
            borderColor: "black",
          }}
        >
          <div className="container-fluid " style={{fontFamily:'arial'}}>
            <div className=" fw-bold d-flex justify-content-center" style={{fontSize:'1.8vw'}}>Theory</div>
            <ul style={{fontSize:'1.2vw'}}>
              <li>Now lets see the verification of distributive law using Venn diagram</li>
              <li>Distributive laws for three given non-empty sets A, B and C, that is, A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)</li>
              <li>Let us consider the three sets A, B and C. U be the universal set.</li>
            </ul>

            <div style={{fontFamily:'arial', fontSize:'1.2vw'}}>
              <div className="row" style={{height : '25vh'}}>
                <div className="col" style={{fontSize:'1.2vw'}}>
                  <div className="d-flex justify-content-center">A</div>
                  <div className="d-flex justify-content-center"><img style={{height:'150px',width:'150px'}} src="/results/A.png" alt="logo" /></div>
                </div>
                <div className="col" style={{fontSize:'1.2vw'}}>
                  <div className="d-flex justify-content-center">B∩C</div>
                  <div className="d-flex justify-content-center"><img style={{height:'150px',width:'150px'}}  src="/results/BIC.png" alt="logo" /></div>
                </div>
                <div className="col" style={{fontSize:'1.2vw'}}>
                  <div className="d-flex justify-content-center">A∪(B∩C)</div>
                  <div className="d-flex justify-content-center"><img style={{height:'150px',width:'150px'}} src="/results/AU(BIC).png" alt="logo" /></div>
                </div>
              </div>
              <div className="row" style={{height : '25vh',fontSize:'1.2vw'}}>
                <div className="col">
                  <div className="d-flex justify-content-center">A∪B</div>
                  <div className="d-flex justify-content-center"><img style={{height:'150px',width:'150px'}} src="/results/AUB.png" alt="logo" /></div>
                </div>
                <div className="col" style={{fontSize:'1.2vw'}}>
                  <div className="d-flex justify-content-center">A∪C</div>
                  <div className="d-flex justify-content-center"><img style={{height:'150px',width:'150px'}} src="/results/AUC.png" alt="logo" /></div>
                </div>
                <div className="col" style={{fontSize:'1.2vw'}}>
                  <div className="d-flex justify-content-center">(A∪B)∩(A∪C)</div>
                  <div className="d-flex justify-content-center"><img style={{height:'150px',width:'150px'}} src="/results/(AUB)I(AUC).png" alt="logo" /></div>
              </div>
            </div>
            </div>
          </div>
          <BackNextBar setBackward={onBack} setForward={onNext}/>
        </div>
        
      </div>
      
    </div>
  );
}

export default Theory1;

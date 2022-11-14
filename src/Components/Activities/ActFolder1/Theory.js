import Offcanvas from "./Offcanvas";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BackNextBar from "./BackNextBar";


const Theory = () =>  {
  const navigate = useNavigate();

const onBack = () => {
  navigate("/activity7/letusverify");
  //setArv(10);
  //setToolvisible("hidden");
};

const onNext = (e) => {
  //localStorage.setItem("A",6);
  navigate("/activity7/letusverify/theory/theory1");
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
          fontFamily : 'arial'
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
              <li>Distributive Law states that, the sum and product remain the same value even when the order of the elements is altered.</li>
              <li>We will see the distributive property of sets using Venn diagram. Before start with the distributive property. Lets see some basic concepts of set theory. </li>   
            </ul>
            
            <div className=" " style={{fontSize:'1.2vw'}}><b>Set Theory</b></div>
            <ul style={{fontSize:'1.2vw'}}>
              <li>Set Theory is a branch of mathematical logic where we learn sets and their properties. A set is a collection of objects or groups of objects. </li>
              <li>These objects are often called elements or members of a set. For example, a group of players in a cricket team is a set. </li>
            </ul>
            <div className=" fw-bold" style={{fontSize:'1.2vw'}}>Non-Empty Set</div>
            <ul style={{fontSize:'1.2vw'}}>
              <li>A nonempty set is a set containing one or more elements. Any set other than the empty set is called non-empty set. Nonempty sets are sometimes also called nonvoid sets.</li>
              <li>A nonempty set containing a single element is called a singleton set.</li>
            </ul>
            <div className=" fw-bold" style={{fontSize:'1.2vw'}}>Venn Diagram</div>
            <ul style={{fontSize:'1.2vw'}}>
              <li>A Venn diagram in math is used in logic theory and set theory to show various sets or data and their relationship with each other.</li>
            </ul>
          </div>
          <BackNextBar setBackward={onBack} setForward={onNext}/>
        </div>
        
      </div>
      
    </div>
  );
};

export default Theory;

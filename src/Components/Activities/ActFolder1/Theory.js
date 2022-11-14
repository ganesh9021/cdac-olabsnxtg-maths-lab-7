import React from "react";
import Headcomp from "../Headcomp";
import "../ActFolder1/Mid.css";
import backgroundImg from "../../../Img/backg.jpg";
import A from "../../../Img/results/A.png";
import BIC from "../../../Img/results/BIC.png";
import AUBIC from "../../../Img/results/AU(BIC).png";
import AUB from "../../../Img/results/AUB.png";
import AUC from "../../../Img/results/AUC.png";
import AUBIAUC from "../../../Img/results/(AUB)I(AUC).png";
import { useNavigate } from "react-router-dom";

const Theory = () => {
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  const onNext = (e) => {
    navigate("/letusverify/recttheory");
  };

  return (
    <div
      className=""
      style={{
        height: "100vh",
        backgroundImage: "url(" + backgroundImg + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Headcomp />

      <div
        className=" d-flex justify-content-center align-items-center"
        style={{ height: "90%" }}
      >
        <div
          className="col-11 bg-light shadow-lg"
          style={{
            height: "94%",
            borderRadius: "20px",
          }}
        >
          <div
            className="overflow-auto scrollbar-primary ms-5"
            style={{ height: "100%" }}
          >
            <div className="my-5" style={{ width: "93%" }}>
              <h6 className="">Objective</h6>
              <p>
                To verify distributive law for three given non-empty sets A, B,
                and C, that is, A∪(B∩C) = (A∪B)∩(A∪C)
              </p>
              <h6>Distributive Law </h6>
              <ul>
                <li>
                  Distributive Law states that the sum and product remain at the
                  same value even when the order of the elements is altered.
                </li>
                <li>
                  We will see the distributive property of sets using the Venn
                  diagram. Before starting with the distributive property. Let's
                  see some basic concepts of set theory.
                </li>
                <li>
                  Distributive laws for three given non-empty sets A, B, and C,
                  that is, A∪(B∩C) = (A∪B)∩(A∪C)
                </li>
              </ul>
              <h6>Venn Diagram</h6>
              <ul>
                {" "}
                <li>
                  A Venn diagram in math is used in logic theory and set theory
                  to show various sets of data and their relationship with each
                  other.
                </li>
              </ul>
              <h6>Set Theory</h6>
              <ul>
                {" "}
                <li>
                  Set Theory is a branch of mathematical logic where we learn
                  sets and their properties. A set is a collection of objects or
                  groups of objects.
                </li>
                <li>
                  These objects are often called elements or members of a set.
                  For example, a group of players in a cricket team is a set.
                </li>
              </ul>

              <h6>Prerequisite Knowledge</h6>
              <h6>Null Set</h6>
              <p>
                In mathematical sets, the null set, also called the empty set,
                is the set that does not contain anything.
              </p>
              <h6>Non-Empty Set</h6>
              <ul>
                <li>
                  A nonempty set is a set containing one or more elements. Any
                  set other than the empty set is called a non-empty set.
                  Nonempty sets are sometimes also called nonvoid sets.
                </li>
                <li>
                  A non-empty set containing a single element is called a
                  singleton set.
                </li>
              </ul>
              <h6>Union</h6>
              <p>
                The union of two sets A and B is the set of all those elements
                which are either in A or B, i.e. A ∪ B
              </p>
              <h6>Intersection</h6>
              <p>
                The intersection of two sets A and B is the set of all common
                elements. The intersection of these two sets is denoted by A∩B.
              </p>
              <div style={{ fontFamily: "arial", fontSize: "1.2vw" }}>
                <div className="row" style={{ height: "25vh" }}>
                  <div className="col" style={{ fontSize: "1.2vw" }}>
                    {/* <div className="d-flex justify-content-center">A</div> */}
                    <div className="d-flex justify-content-center">
                      <img
                        style={{ height: "150px", width: "150px" }}
                        src={A}
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className="col" style={{ fontSize: "1.2vw" }}>
                    {/* <div className="d-flex justify-content-center">B∩C</div> */}
                    <div className="d-flex justify-content-center">
                      <img
                        style={{ height: "150px", width: "150px" }}
                        src={BIC}
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className="col" style={{ fontSize: "1.2vw" }}>
                    {/* <div className="d-flex justify-content-center">A∪(B∩C)</div> */}
                    <div className="d-flex justify-content-center">
                      <img
                        style={{ height: "150px", width: "150px" }}
                        src={AUBIC}
                        alt="logo"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ height: "25vh", fontSize: "1.2vw" }}
                >
                  <div className="col">
                    {/* <div className="d-flex justify-content-center">A∪B</div> */}
                    <div className="d-flex justify-content-center">
                      <img
                        style={{ height: "150px", width: "150px" }}
                        src={AUB}
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className="col" style={{ fontSize: "1.2vw" }}>
                    {/* <div className="d-flex justify-content-center">A∪C</div> */}
                    <div className="d-flex justify-content-center">
                      <img
                        style={{ height: "150px", width: "150px" }}
                        src={AUC}
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className="col" style={{ fontSize: "1.2vw" }}>
                    {/* <div className="d-flex justify-content-center">
                      (A∪B)∩(A∪C)
                    </div> */}
                    <div className="d-flex justify-content-center">
                      <img
                        style={{ height: "150px", width: "150px" }}
                        src={AUBIAUC}
                        alt="logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theory;

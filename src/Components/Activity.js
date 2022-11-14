import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ActivityComp from "./ActivityComp";
import * as expre from "./Superscript";

function Activity() {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          height: "100vh",
          background: "linear-gradient(to left, #84A5D4,#B5F9FE)",
        }}
      >
        <div className="row  justify-content-center">
          <div
            className="col-12 col-md-6 p-2 mt-3 d-flex justify-content-center align-items-center"
            style={{
              height: "15vh",
              fontSize: "2.5rem",
              background: "linear-gradient(to left, #DF6C96, #904C9D)",
              color: "white",
              borderBottomRightRadius: "125px",
              fontWeight: "700",
              fontFamily: "inter",
              fontStyle: "normal",
            }}
          >
            Set Theory
          </div>
        </div>

        <div className="d-flex flex-wrap justify-content-center mt-3 " style={{ height: "125px" }}>
          <div className="col-12 col-md-6 p-2 ">
            <ActivityComp
              actname="Activity I"
              expression={expre.default()}
              backcolor="linear-gradient(to right, #430089, #82ffa1)"
              redirect="/activity1"
            />
          </div>
          {/*
          <div className="col-12 col-md-6 p-2">
            <ActivityComp
              actname="Activity II"
              expression={expre.exp2()}
              backcolor="linear-gradient(to right, #F99F84,  #ED6660)"
              redirect="/activity2"
            />
          </div>
          
          <div className="col-12 col-md-6 p-2">
            <ActivityComp
              actname="Activity III"
              expression={expre.exp3()}
              backcolor="linear-gradient(to right, #DF6C96, #904C9D)"
              redirect="/activity3"
            />
          </div>
          <div className="col-12 col-md-6 p-2">
            <ActivityComp
              actname="Activity IV"
              expression={expre.exp4()}
              backcolor="linear-gradient(to right, #A585F6,  #C096FA)"
              redirect="/activity4"
            />
          </div>
          <div className="col-12 col-md-6 p-2">
            <ActivityComp
              actname="Activity V"
              expression={expre.exp5()}
              backcolor="linear-gradient(to right, #FAB338, #F78745)"
              redirect="/activity5"
            />
          </div>
          <div className="col-12 col-md-6 p-2">
            <ActivityComp
              actname="Activity VI"
              expression={expre.exp6()}
              backcolor="linear-gradient(to right, #A2DF6C ,#1C9240)"
              redirect="/activity6"
            />
          </div>
          <div className="col-12 col-md-6 p-2">
            <ActivityComp
              actname="Activity VII"
              expression={expre.exp7()}
              backcolor="linear-gradient(to right, #6C9EDF, #904C9D)"
              redirect="/activity7"
            />
          </div>
          <div className="col-12 col-md-6 p-2">
            <ActivityComp
              actname="Activity VIII"
              expression={expre.exp8()}
              backcolor="linear-gradient(to right, #FABD35 , #F8D511)"
              redirect="/activity8"
            />
          </div>
          */}
        </div>
      </div>
    </>
  );
}

export default Activity;

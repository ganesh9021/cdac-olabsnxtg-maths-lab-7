import React from "react";

// const Instructions = () => {
//   return (
//     <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
//       <li>Step:1 Read the instructions appearing here carefully and do the activity as per the instructions.</li>
//       <li>Step:2 Click on <b>Start button</b> to start the activity.</li>
//     </ul>
//   );
// };

const Instructions = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      Click on <b>LHS</b> button to start with the relations of LHS.
    </ul>
  );
};
const Instructions_1 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      Click on <b>RHS</b> button to start with the relations of RHS.
    </ul>
  );
};
const Instructions_2 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      <li><b>Step1:</b> Check whether all the checkboxes are ticked or not, if yes then</li>
      <li><b>Step2:</b> Click on <b>Result</b> button to redirect on result page.</li>
    </ul>
  );
};

const Instructions_3 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      <li><b>Step1:</b> Click on <b>Draw Universal Set</b> button to create universal set.</li>
      <li><b>Step2:</b> Click on <b>Draw Set A</b> button to create set A.</li>
      <li><b>Step3: </b> Click on <b>Set With Numbers</b> button for example of relation with numbers.</li>
      <b>OR</b>
      <li><b>Step3:</b>Click on <b>Next</b></li>
    </ul>
  );
};

const Instructions_4 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      <li><b>Step1:</b> Click on <b>Draw set B</b> button to create set B</li>
      <li><b>Step2:</b> Click on <b>Draw Set C</b> button to create set C</li>
      <li><b>Step3:</b> Click on <b>Next</b></li>
    </ul>
  );
};

const Instructions_5 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      <li><b>Step1:</b>  Drag set B towards dot appearing just before Set C in such away that the center of set B should get completely overlapped with the dot. </li>
      <li><b>Step2:</b> Click on <b>Next</b></li>
    </ul>
  );
};

const Instructions_6 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      Click on <b>Next</b>.
    </ul>
  );
};

const Instructions_7 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      <li><b>Step1:</b> Drag set A towards dot appearing above (B∩C) in such away that the center of set A should get completely overlapped with the dot.</li>
      <li><b>Step2:</b> Click on <b>Next</b>.</li>
    </ul>
  );
};

const Instructions_8 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      <li><b>Step1:</b> Drag Set A towards dot appearing just before the set B in such away that the center of set A completely gets overlapped with the dot.</li>
      <li><b>Step2:</b> Click on <b>Next</b>.</li>
    </ul>
  );
};


const Instructions_9 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      <li><b>Step1:</b> Drag Set A towards dot appearing just before the set C in such away that the center of set A completely gets overlapped with the dot.</li>
      <li><b>Step2:</b> Click on <b>Next</b>.</li>
    </ul>
  );
};


const Instructions_10 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      <li><b>Step1:</b> Drag Set C towards dot appearing just above the set (A∪B) in such away that the center of set C completely gets overlapped with the dot.</li>
      <li><b>Step2:</b> Click on <b>Next</b>.</li>
    </ul>
  );
};

const Instructions_11 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      <li><b>Step1:</b> Drag the relations towards the center</li>
      <li><b>Step2:</b> Click on <b>Verify</b> button to prove whether LHS is Equal to RHS or not.</li>
    </ul>
  );
};

const Instructions_12 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      <li><b>Observation:</b> We can observe that <b>LHS [ A∪(B∩C) ] = RHS [ (A∪B)∩(A∪C) ]</b></li>
      <li>Hence proved.</li>
      <li>Click on <b>Restart</b> button to restart the activity.</li>
    </ul>
  );
};

const Instructions_13 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      <li><b>Step1: </b> Click on <b>Set With Numbers</b> button for example of relation with numbers.</li>
      <b>OR</b>
      <li><b>Step1:</b>Click on <b>Next</b></li>
    </ul>
  );
};

export default Instructions;
export {Instructions_1, Instructions_2,Instructions_3,Instructions_4,Instructions_5,Instructions_6,Instructions_7,Instructions_8,Instructions_9,Instructions_10,Instructions_11,Instructions_12,Instructions_13 };


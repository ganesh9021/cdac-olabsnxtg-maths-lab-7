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
      Click on the <q>LHS</q> button to start with the relations of LHS.
    </ul>
  );
};
const Instructions_1 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      Click on the <q>RHS</q> button to start with the relations of RHS.
    </ul>
  );
};
const Instructions_2 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      <li>Check whether all the checkboxes are ticked or not, if yes then</li>
      <li>Click on the <q>RESULT</q> button to redirect on result page.</li>
    </ul>
  );
};

const Instructions_3 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      <li>Click on the <q>DRAW UNIVERSAL SET</q> button to create a universal set.</li>
      <li>Click on the <q>DRAW SET A</q> button to create set A.</li>
      <li>Click on the <q>SET WITH NUMBERS</q> button for an example of a relation with numbers.</li>
      <b>OR</b>
      <li>Click on the <q>NEXT</q> button.</li>
    </ul>
  );
};

const Instructions_4 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      <li>Click on the <q>DRAW SET B</q> button to create set B.</li>
      <li>Click on the <q>DRAW SET C</q> button to create set C.</li>
      <li>Click on the <q>NEXT</q> button.</li>
    </ul>
  );
};

const Instructions_5 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      <li>Drag set B toward the dot appearing just before set C in such a way that the center of set B should get completely overlapped with the dot. </li>
      <li>Click on the <q>NEXT</q> button.</li>
    </ul>
  );
};

const Instructions_6 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      Click on the <q>NEXT</q> button.
    </ul>
  );
};

const Instructions_7 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      <li>Drag set A toward the dot appearing above (B∩C) in such a way that the center of set A should get completely overlapped with the dot.</li>
      <li>Click on the <q>NEXT</q> button.</li>
    </ul>
  );
};

const Instructions_8 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      <li>Drag set A toward the dot appearing just before the set B in such a way that the center of set A completely gets overlapped with the dot.</li>
      <li>Click on the <q>NEXT</q> button.</li>
    </ul>
  );
};


const Instructions_9 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      <li>Drag set A toward the dot appearing just before the set C in such a way that the center of set A completely gets overlapped with the dot.</li>
      <li>Click on the <q>NEXT</q> button.</li>
    </ul>
  );
};


const Instructions_10 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      <li>Drag set C toward the dot appearing just above the set (A∪B) in such a way that the center of set C completely gets overlapped with the dot.</li>
      <li>Click on the <q>NEXT</q> button.</li>
    </ul>
  );
};

const Instructions_11 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      <li>Drag the relations toward the center.</li>
      <li>Click on the <q>VERIFY</q> button to prove whether LHS is Equal to RHS or not.</li>
    </ul>
  );
};

const Instructions_12 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      <li><b>Observation:</b> We can observe that <b>LHS [A∪(B∩C)] = RHS [(A∪B)∩(A∪C)]</b></li>
      <li>Hence proved.</li>
      <li>Click on the <q>RESTART</q> button to perform the activity again.</li>
    </ul>
  );
};

const Instructions_13 = () => {
  return (
    <ul className=" fw-normal" style={{fontSize:'1.2vw'}}>
      <li>Click on the <q>SET WITH NUMBERS</q> button for example of relation with numbers.</li>
      <b>OR</b>
      <li>Click on the <q>NEXT</q> button</li>
    </ul>
  );
};

export default Instructions;
export {Instructions_1, Instructions_2,Instructions_3,Instructions_4,Instructions_5,Instructions_6,Instructions_7,Instructions_8,Instructions_9,Instructions_10,Instructions_11,Instructions_12,Instructions_13 };


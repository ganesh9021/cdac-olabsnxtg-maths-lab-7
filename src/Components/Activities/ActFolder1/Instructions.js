import React from "react";
import { Translation } from "react-i18next";

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
    <ul className=" fw-normal" style={{ fontSize: "1rem" }}>
      <Translation>{(t) => t("instr-1")}</Translation>
    </ul>
  );
};
const Instructions_1 = () => {
  return (
    <ul className=" fw-normal" style={{ fontSize: "1rem" }}>
      <Translation>{(t) => t("instr-2")}</Translation>
    </ul>
  );
};
const Instructions_2 = () => {
  return (
    <ul className=" fw-normal" style={{ fontSize: "1rem" }}>
      <li><Translation>{(t) => t("instr-3")}</Translation></li>
      <li>
      <Translation>{(t) => t("instr-4")}</Translation>
      </li>
    </ul>
  );
};

const Instructions_3 = () => {
  return (
    <ul className=" fw-normal" style={{ fontSize: "1rem" }}>
      <li>
      <Translation>{(t) => t("instr-5")}</Translation>
      </li>
      <li>
      <Translation>{(t) => t("instr-6")}</Translation>
      </li>
      <li>
      <Translation>{(t) => t("instr-7")}</Translation>
      </li>
      <b><Translation>{(t) => t("instr-8")}</Translation></b>
      <li>
      <Translation>{(t) => t("instr-9")}</Translation>
      </li>
    </ul>
  );
};

const Instructions_4 = () => {
  return (
    <ul className=" fw-normal" style={{ fontSize: "1rem" }}>
      <li>
      <Translation>{(t) => t("instr-10")}</Translation>
      </li>
      <li>
      <Translation>{(t) => t("instr-11")}</Translation>
      </li>
      <li>
      <Translation>{(t) => t("instr-9")}</Translation>
      </li>
    </ul>
  );
};

const Instructions_5 = () => {
  return (
    <ul className=" fw-normal" style={{ fontSize: "1rem" }}>
      <li>
      <Translation>{(t) => t("instr-12")}</Translation>{" "}
      </li>
      <li>
      <Translation>{(t) => t("instr-9")}</Translation>
      </li>
    </ul>
  );
};

const Instructions_6 = () => {
  return (
    <ul className=" fw-normal" style={{ fontSize: "1rem" }}>
      <Translation>{(t) => t("instr-9")}</Translation>
    </ul>
  );
};

const Instructions_7 = () => {
  return (
    <ul className=" fw-normal" style={{ fontSize: "1rem" }}>
      <li>
      <Translation>{(t) => t("instr-13")}</Translation>
      </li>
      <li>
      <Translation>{(t) => t("instr-9")}</Translation>
      </li>
    </ul>
  );
};

const Instructions_8 = () => {
  return (
    <ul className=" fw-normal" style={{ fontSize: "1rem" }}>
      <li>
      <Translation>{(t) => t("instr-14")}</Translation>
      </li>
      <li>
      <Translation>{(t) => t("instr-9")}</Translation>
      </li>
    </ul>
  );
};

const Instructions_9 = () => {
  return (
    <ul className=" fw-normal" style={{ fontSize: "1rem" }}>
      <li>
      <Translation>{(t) => t("instr-15")}</Translation>
      </li>
      <li>
      <Translation>{(t) => t("instr-9")}</Translation>
      </li>
    </ul>
  );
};

const Instructions_10 = () => {
  return (
    <ul className=" fw-normal" style={{ fontSize: "1rem" }}>
      <li>
      <Translation>{(t) => t("instr-16")}</Translation>
      </li>
      <li>
      <Translation>{(t) => t("instr-9")}</Translation>
      </li>
    </ul>
  );
};

const Instructions_11 = () => {
  return (
    <ul className=" fw-normal" style={{ fontSize: "1rem" }}>
      <li>Drag the relations toward the center.</li>
      <li>
        Click on the <q>VERIFY</q> button to prove whether LHS is Equal to RHS
        or not.
      </li>
    </ul>
  );
};

const Instructions_12 = () => {
  return (
    <ul className=" fw-normal" style={{ fontSize: "1rem" }}>
      <li>
        <b><Translation>{(t) => t("instr-18")}</Translation>:</b> <Translation>{(t) => t("instr-19")}</Translation>{" "}
        <b>LHS [A∪(B∩C)] = RHS [(A∪B)∩(A∪C)]</b>
      </li>
      <li><Translation>{(t) => t("instr-17")}</Translation></li>
      <li>
      <Translation>{(t) => t("instr-20")}</Translation>
      </li>
    </ul>
  );
};

const Instructions_13 = () => {
  return (
    <ul className=" fw-normal" style={{ fontSize: "1rem" }}>
      <li>
      <Translation>{(t) => t("instr-21")}</Translation>
      </li>
      <b><Translation>{(t) => t("instr-8")}</Translation></b>
      <li>
      <Translation>{(t) => t("instr-9")}</Translation>
      </li>
    </ul>
  );
};

export default Instructions;
export {
  Instructions_1,
  Instructions_2,
  Instructions_3,
  Instructions_4,
  Instructions_5,
  Instructions_6,
  Instructions_7,
  Instructions_8,
  Instructions_9,
  Instructions_10,
  Instructions_11,
  Instructions_12,
  Instructions_13,
};

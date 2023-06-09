import React from "react";
import { Translation } from "react-i18next";

const expression = () => {
  return <>Welcome................</>;
};

const Instruction_1 = () => {
  return (
    <ul>
      <Translation>{(t) => t("instr-1")}</Translation>
    </ul>
  );
};

const Instruction_2 = () => {
  return (
    <ul>
      <Translation>{(t) => t("instr-2")}</Translation>
    </ul>
  );
};

const Instruction_3 = () => {
  return (
    <ul>
      <li>
        <Translation>{(t) => t("instr-3")}</Translation>
      </li>
      <li>
        <Translation>{(t) => t("instr-4")}</Translation>
      </li>
    </ul>
  );
};

const Instruction_4 = () => {
  return (
    <ul>
      <Translation>{(t) => t("instr-5")}</Translation>
    </ul>
  );
};

const Instruction_41 = () => {
  return (
    <ul>
      <Translation>{(t) => t("instr-6")}</Translation>
    </ul>
  );
};

const Instruction_42 = () => {
  return (
    <ul>
      <li>
        <Translation>{(t) => t("instr-7")}</Translation>
      </li>
      <b>
        <Translation>{(t) => t("instr-8")}</Translation>
      </b>
      <li>
        <Translation>{(t) => t("instr-9")}</Translation>
      </li>
    </ul>
  );
};

const Instruction_5 = () => {
  return (
    <ul>
      <Translation>{(t) => t("instr-10")}</Translation>
    </ul>
  );
};
const Instruction_51 = () => {
  return (
    <ul>
      <Translation>{(t) => t("instr-11")}</Translation>
    </ul>
  );
};

const Instruction_6 = () => {
  return (
    <ul>
      <Translation>{(t) => t("instr-12")}</Translation>
    </ul>
  );
};

const Instruction_7 = () => {
  return (
    <ul>
      <Translation>{(t) => t("instr-9")}</Translation>
    </ul>
  );
};

const Instruction_8 = () => {
  return (
    <ul>
      <Translation>{(t) => t("instr-13")}</Translation>
    </ul>
  );
};

const Instruction_9 = () => {
  return (
    <ul>
      <Translation>{(t) => t("instr-14")}</Translation>
    </ul>
  );
};

const Instruction_10 = () => {
  return (
    <ul>
      <Translation>{(t) => t("instr-15")}</Translation>
    </ul>
  );
};

const Instruction_11 = () => {
  return (
    <ul>
      <Translation>{(t) => t("instr-16")}</Translation>
    </ul>
  );
};

const Instruction_12 = () => {
  return (
    <ul>
      <li>Drag the relations toward the center.</li>
      <li>
        Click on the <q>VERIFY</q> button to prove whether LHS is Equal to RHS
        or not.
      </li>
    </ul>
  );
};

const Instruction_13 = () => {
  return (
    <ul>
      {/* <li>
        <b>
          <Translation>{(t) => t("instr-18")}</Translation>
        </b>{" "}
        <Translation>{(t) => t("instr-19")}</Translation>
        <b>LHS [A∪(B∩C)] = RHS [(A∪B)∩(A∪C)]</b>
      </li> */}
      <li>
        <Translation>{(t) => t("instr-17")}</Translation>
      </li>
      <li>
        <Translation>{(t) => t("instr-20")}</Translation>
      </li>
    </ul>
  );
};

const Instruction_14 = () => {
  return (
    <ul>
      <li>
        <Translation>{(t) => t("instr-7")}</Translation>
      </li>
      <b>
        <Translation>{(t) => t("instr-8")}</Translation>
      </b>
      <li>
        <Translation>{(t) => t("instr-9")}</Translation>
      </li>
    </ul>
  );
};

export default expression;

export {
  Instruction_1,
  Instruction_2,
  Instruction_3,
  Instruction_4,
  Instruction_5,
  Instruction_6,
  Instruction_7,
  Instruction_8,
  Instruction_9,
  Instruction_10,
  Instruction_11,
  Instruction_12,
  Instruction_13,
  Instruction_14,
  Instruction_41,
  Instruction_42,
  Instruction_51,
};

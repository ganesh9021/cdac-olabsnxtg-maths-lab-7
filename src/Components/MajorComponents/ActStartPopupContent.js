import React from "react";
import { ListItemText } from "@mui/material";
import { useTranslation } from "react-i18next";

const ActStartPopupContent = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <ListItemText sx={{ display: "list-item" }}>
        {t("instr_popup-2")}
      </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
        {" "}
        <u>{t("instr_popup-3")}</u>
      </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
        {" "}
        {t("instr_popup-4")}
      </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
        {" "}
        {t("instr_popup-5")}
      </ListItemText>

      <ol>
        <li>{t("instr_popup-6")}&nbsp;A</li>
        <li>B∩C</li>
        <li>A∪(B∩C)</li>
      </ol>
      <ListItemText sx={{ display: "list-item" }}>
        {" "}
        {t("instr_popup-7")}
      </ListItemText>
      <ol>
        <li>(A∪B)</li>
        <li>(A∪C)</li>
        <li>(A∪B)∩(A∪C)</li>
      </ol>
    </>
  );
};

export default ActStartPopupContent;

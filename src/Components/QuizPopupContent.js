import React from "react";
import { ListItemText } from "@mui/material";
import { useTranslation } from "react-i18next";

const QuizPopupContent = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      {" "}
      <ListItemText sx={{ display: "list-item" }}>{t("quiz-2")} </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
        {t("quiz-3")}{" "}
      </ListItemText>{" "}
      <ListItemText sx={{ display: "list-item" }}>{t("quiz-4")} </ListItemText>{" "}
      <ListItemText sx={{ display: "list-item" }}>{t("quiz-5")} </ListItemText>{" "}
      <ListItemText sx={{ display: "list-item" }}>{t("quiz-6")} </ListItemText>{" "}
      <ListItemText sx={{ display: "list-item" }}>{t("quiz-7")} </ListItemText>{" "}
      <ListItemText sx={{ display: "list-item" }}>{t("quiz-8")} </ListItemText>{" "}
    </>
  );
};

export default QuizPopupContent;

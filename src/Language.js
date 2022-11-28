import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "title": "Set Theory",
          "obj" : "Objective",
          "obj_content" : "To verify distributive law for three given non-empty sets A, B and C, that is,",
          "Learning Outcome" : "Learning Outcome",
          "Learning Outcome-1" : "The student will understand the concepts of distributive law in set theory",
          "Learning Outcome-2" : "The student will able to use distributive law wherever required efficiently",
          "start" : "Start",
          "instr_popup-1" : "What are we going to learn?",
          "instr_popup-2" : "We are going to verify the distributive law of set theory with three non-empty sets: A, B, and C.",
          "instr_popup-3" : "Distributive law is A∪(B∩C) = (A∪B)∩(A∪C).",
          "instr_popup-4" : "To verify the distributive law of set theory, we need to verify the relations of LHS and RHS.",
          "instr_popup-5" : "For LHS the different relations are",
          "instr_popup-6" : "Set",
          "instr_popup-7" : "For RHS the different relations are",
          "ok" : "ok",
          "cancel" : "Cancel",

        }
      },
      hn: {
        translation: {
          "title": "समुच्चय सिद्धान्त",
          "obj" : "उद्देश्य",
          "obj_content" : "दिए गए तीन अरिक्त समुच्चयों A, B और C के लिए वितरण नियम का सत्यापन करना, अर्थात,",
          "Learning Outcome" : "सीखने के परिणाम",
          "Learning Outcome-1" : "छात्र समुच्चय सिद्धांत में वितरण नियम की अवधारणाओं को समझेंगे",
          "Learning Outcome-2" : "जहाँ कहीं आवश्यकता होगी, विद्यार्थी वितरणात्मक नियम का कुशलतापूर्वक उपयोग करने में सक्षम होगा",
          "start" : "शुरू",
          "instr_popup-1" : "हम क्या सीखने जा रहे हैं?",
          "instr_popup-2" : "हम तीन गैर-रिक्त सेटों के साथ सेट सिद्धांत के वितरण कानून को सत्यापित करने जा रहे हैं: ए, बी और सी।",
          "instr_popup-3" : "वितरण नियम A∪(B∩C) = (A∪B)∩(A∪C) है।",
          "instr_popup-4" : "सेट सिद्धांत के वितरण नियम को सत्यापित करने के लिए, हमें LHS और RHS के संबंधों को सत्यापित करने की आवश्यकता है।",
          "instr_popup-5" : "एलएचएस के लिए विभिन्न संबंध हैं",
          "instr_popup-6" : "समूह",
          "instr_popup-7" : "RHS के लिए विभिन्न संबंध हैं",
          "ok" : "ठीक है",
          "cancel" : "रद्द करना",
        },
      },
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

const Language = () => {
  return <div>Language</div>;
};

export default Language;

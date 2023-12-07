import React from "react";
import "../Components/MajorComponents/Mid.css";
import { useTranslation } from "react-i18next";
import img1 from "../Img/ProcedureImages/BIC.png";
import img2 from "../Img/ProcedureImages/AUC.png";
import img3 from "../Img/ProcedureImages/AUB.png";
import img4 from "../Img/ProcedureImages/AU(BIC).png";
import img5 from "../Img/ProcedureImages/(A∪B)∩(A∪C).png";

const ProcedureMidContent = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="overflow-auto scrollbar-primary" style={{ height: "100%" }}>
      <div className="my-5" style={{ width: "93%" }}>
        <div className="fw-bold">{t("procedure")}:</div>
        <ol>
          <li>{t("proc1")}</li>
          <li>{t("proc2")}</li>
          <li>{t("proc3")}</li>
          <li>{t("proc4")}</li>
          {/* instr-9 ---> click on the next button */}
          <li>{t("instr-9")}</li>
          <li>{t("proc5")}</li>
          <div className="text-center">
            <div>
              <img
                style={{ margin: "1%", height: "30%", width: "30%" }}
                src={img1}
                alt="Image not avilable"
              />
            </div>
            <div>{t("fig")} 1. B∩C</div>
          </div>

          <li>{t("proc6")}</li>
          <div className="text-center">
            <div>
              {" "}
              <img
                style={{ margin: "1%", height: "30%", width: "30%" }}
                src={img4}
                alt="Image not available"
              />
            </div>
            <div>{t("fig")} 2. A∪(B∩C)</div>
          </div>

          <li>{t("proc7")}</li>
          <li>{t("proc8")}</li>
          <li>{t("proc9")}</li>
          <div className="text-center">
            <div>
              <img
                style={{ margin: "1%", height: "30%", width: "30%" }}
                src={img3}
                alt="Image not available"
              />
            </div>
            <div>{t("fig")} 3. A∪B</div>
          </div>

          <li>{t("instr-9")}</li>
          <li>{t("proc10")}</li>
          <div className="text-center">
            <div>
              {" "}
              <img
                style={{ margin: "1%", height: "30%", width: "30%" }}
                src={img2}
                alt="Image not available"
              />
            </div>
            <div>{t("fig")} 4. A∪C</div>
          </div>

          <li>{t("instr-9")}</li>
          <li>{t("proc11")}</li>
          <div className="text-center">
            <div>
              <img
                style={{ margin: "1%", height: "30%", width: "30%" }}
                src={img5}
                alt="Image not available"
              />
            </div>
            <div>{t("fig")} 5. (A∪B)∩(A∪C)</div>
          </div>

          <li>{t("instr-9")}</li>
          <li>{t("proc12")}</li>
        </ol>

        <div className="fw-bolder">{t("proc13")}:</div>
        <div className="ms-5">
          <div>{t("proc14")}</div>
        </div>
      </div>
    </div>
  );
};

export default ProcedureMidContent;

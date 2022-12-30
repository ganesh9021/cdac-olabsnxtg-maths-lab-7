
import React, { useContext, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import BackNextBar from "./BackNextBar";
import { rezContext } from "./Act1startpage";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

const LHS_RHS = () => {
    const { setArv } = useContext(rezContext);
    const { setToolvisible } = useOutletContext();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    
    const LHS = () => {
      setArv(3);
      navigate("tool_1");
    }
    const RHS = () => {
      if(localStorage.getItem("A") == 4)
      {
        setArv(8);
        navigate("tool_4");
      }
      else 
      {
        toast.error(`${t("toaster-2")}`, {
          position: "top-center",
          autoClose: 2000,
        });
      }
    }
    
    const Result = () => {
      if(localStorage.getItem("A") === '7')
      {
        setArv(12)
        navigate("result")
      }
      else 
      {
        document.getElementById("btn").disabled = true;
        toast.error(`${t("toaster-1")}`, {
          position: "top-center",
          autoClose: 2000,
          });
      }
    }

    const onBack = () => {
      navigate("/activity7/letusverify");
      //setArv(0);
      setToolvisible("visible");
    };
  
    const onNext = (e) => {
      navigate("/activity7/letusverify/act1startpage/lhs_rhs/tool_1");
      setToolvisible("visible");
      setArv(3);
    };
    useEffect(() => {
      if(localStorage.getItem("A") === '2')
      {
        document.getElementById("cb1").checked = true;
      }
      if(localStorage.getItem("A") === '3')
      {
        document.getElementById("cb1").checked = true;
        document.getElementById("cb2").checked = true;
      }
      if(localStorage.getItem("A") === '4')
      {
        document.getElementById("cb1").checked = true;
        document.getElementById("cb2").checked = true;
        document.getElementById("cb3").checked = true;
      }
      if(localStorage.getItem("A") === '5')
      {
        document.getElementById("cb1").checked = true;
        document.getElementById("cb2").checked = true;
        document.getElementById("cb3").checked = true;
        document.getElementById("cb4").checked = true;
      }
      if(localStorage.getItem("A") === '6')
      {
        document.getElementById("cb1").checked = true;
        document.getElementById("cb2").checked = true;
        document.getElementById("cb3").checked = true;
        document.getElementById("cb4").checked = true;
        document.getElementById("cb5").checked = true;
      }
      if(localStorage.getItem("A") === '7')
      {
        document.getElementById("cb1").checked = true;
        document.getElementById("cb2").checked = true;
        document.getElementById("cb3").checked = true;
        document.getElementById("cb4").checked = true;
        document.getElementById("cb5").checked = true;
        document.getElementById("cb6").checked = true;
      }
    },[])

  return (
    <div style={{height : '100%',fontFamily:'arial'}}>
      <div className="container-fluid" style={{height : '90%'}}>
      <div className="row justify-content-center align-items-end" style={{fontSize:'1.2vw',height:'20%'}}>
        <div className="d-flex justify-content-center text-danger"><b>{t("obj_content")}:</b></div>
        <div className="d-flex justify-content-center text-danger"><b>A∪(B∩C) = (A∪B)∩(A∪C)</b></div>
      </div>
      <div className="row" style={{height : '20vh',fontSize:'1.2vw'}}>
        <div className="col-3 d-flex flex-column align-items-end justify-content-center">
            <div><input type="checkbox" name="check_box" id="cb1" value="A" /></div>
            <div><input type="checkbox" name="check_box" id="cb2" value="BIC"/></div>
            <div><input type="checkbox" name="check_box" id="cb3" value="AUBIC"/></div>
        </div>
        <div className="col-3 d-flex flex-column justify-content-center" style={{fontSize:'1.2vw'}}>
            <div>A</div>
            <div>B ∩ C</div>
            <div>A ∪ (B ∩ C)</div>
        </div>
        <div className="col-3 d-flex flex-column align-items-end justify-content-center">
        <div><input type="checkbox" name="check_box" id="cb4" /></div>
            <div><input type="checkbox" name="check_box" id="cb5" /></div>
            <div><input type="checkbox" name="check_box" id="cb6" /></div>
        </div>
        <div className="col-3 d-flex flex-column justify-content-center" style={{fontSize:'1.2vw'}}>
            <div>A ∪ B</div>
            <div>A ∪ C</div>
            <div>(A ∪ B) ∩ (A ∪ C)</div>
        </div>
      </div>
      
      <div className="row">
        <div className="col d-flex justify-content-center">
          <Button autoFocus variant="contained" onClick={LHS}>
            LHS
          </Button>
          {/* <div>
            <Button variant="outline-primary" onClick={LHS}>LHS</Button>
          </div> */}
        </div>
        <div className="col d-flex justify-content-center">
          <Button autoFocus variant="contained" onClick={RHS}>
            RHS
          </Button>
          {/* <div>
            <Button variant="outline-primary" onClick={RHS}>RHS</Button>
          </div> */}
        </div>
      </div>
      <div className="row" style={{height : '35%'}}>
        <div className="d-flex justify-content-center align-items-end" >
          {/* <div id="btn" className="btn btn-primary btn-sm" onClick={Result}>Result</div> */}
          <Button id="btn" autoFocus variant="contained" onClick={Result}>
            {t("result")}
          </Button>
        </div>
      </div>
      </div>
      <BackNextBar setBackward={onBack} setForward={onNext}/>
    </div>
  );
};

export default LHS_RHS;
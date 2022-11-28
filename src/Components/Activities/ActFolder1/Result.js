import React, { useContext ,useOutletContext} from 'react'
import BackNextBar from './BackNextBar'
import Res_3_Copy from './Res_3_copy'
import Res_6_Copy from './Res_6_Copy'
import { useNavigate } from "react-router-dom";
import { rezContext } from "./Act1startpage";
import Button from "@mui/material/Button";
import { useTranslation } from 'react-i18next';


const Result = () => {
  const { t, i18n } = useTranslation();
  const { setArv } = useContext(rezContext);
  // const { setToolvisible } = useOutletContext();
  const navigate = useNavigate();

  const onBack = () => {
    navigate("/activity7/letusverify/act1startpage/lhs_rhs");
    setArv(2);
    // setToolvisible("visible");
  }

  const onNext = () => {
    navigate("");
    // setToolvisible("hidden");
  }

  const Restart = () => {
    navigate("/activity7");
  }

  return (
    <div style={{height : '100%'}}>
      <div className="container-fluid" style={{height:'90%', fontFamily:'arial'}}>
        <div className="row" style={{height:'10vh',fontSize:'1.2vw'}}>
          <div className="col d-flex justify-content-center align-items-center"><b>LHS [A∪(B∩C)]</b></div>
          <div className="col d-flex justify-content-center align-items-center"><b>RHS [(A∪B)∩(A∪C)]</b></div>
        </div>
          <div className="row">
            <div className="col-5 d-flex justify-content-center"><Res_3_Copy/></div>
            <div className="col-2 d-flex justify-content-center align-items-center fw-bolder fs-5">=</div>
            <div className="col-5 d-flex justify-content-center"><Res_6_Copy/></div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center">&#123;5, 7, 8, 9, 4, 6 &#125;</div>
            <div className="col d-flex justify-content-center">&#123;5, 7, 8, 9, 4, 6 &#125;</div>
          </div>
          <div className="row" style={{height:'10vh',fontSize:'1.2vw'}}>
            <div className='d-flex  justify-content-center align-items-center'> {t("line-5")} &nbsp; <b>LHS [AU(B∩C)] = RHS[(AUB)∩(AUC)]</b></div>
          </div>
          <div className="row" style={{height:'20%'}}>
            <div className='d-flex justify-content-center align-items-end'>
              <Button id="btn" autoFocus variant="contained" onClick={Restart}>
              {t("btn-6")}
              </Button>
            </div>
          </div>
      </div>
      <BackNextBar setBackward={onBack} setForward={onNext}/>
    </div>
  )
}

export default Result

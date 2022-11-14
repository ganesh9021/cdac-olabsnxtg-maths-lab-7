import React, { useContext } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import BackNextBar from './BackNextBar';
import { rezContext } from './Act1startpage';
import { toast } from 'react-toastify';
import Button from "@mui/material/Button";
import A from "../../../Img/results/A.png"; 
import BIC from "../../../Img/results/BIC.png";
import AUBIC from "../../../Img/results/AU(BIC).png";
import dragndrop from "../../../Img/results/dragndrop.jpg";
import AUB from "../../../Img/results/AUB.png";
import AUC from "../../../Img/results/AUC.png";
import AUBIAUC from "../../../Img/results/(AUB)I(AUC).png";



const Combine_Result = () => {
  const { setArv } = useContext(rezContext);
  const { setToolvisible } = useOutletContext();
  const navigate = useNavigate();

  let name1 = "";
  let name2 = "";
  let url1 = "";
  let url2 = "";

  const dragStart1 = (e) => {
    e.dataTransfer.setData("drag-item", e.target.src);  
    e.dataTransfer.setData("drag-item-name",e.target.name);
    //console.log(e.target.name);
    url1 = e.target.src;
    name1 = e.target.name;
  }
  const dragStart2 = (e) => {
    e.dataTransfer.setData("drag-item", e.target.src);  
    e.dataTransfer.setData("drag-item-name",e.target.name);
    //console.log(e.target.name);
    url2 = e.target.src;
    name2 = e.target.name;
  }

  const dragEnter = (e) => {
      //console.log("drag enter ... !!!" + e.target.innerHTML);
  }

  const drop1 = (ev) => {
      var src1 = ev.dataTransfer.getData("drag-item");
      //var name1 = ev.dataTransfer.getData("drag-item-name");
      ev.target.src = src1;
  }

  const drop2 = (ev) => {
      var src2 = ev.dataTransfer.getData("drag-item");
      //var name2 = ev.dataTransfer.getData("drag-item-name");
      ev.target.src = src2;
  }


  const dragOver = (ev) =>{
      ev.preventDefault();
  }
  
    const Verify = () => {
      
      if(name1 === name2 && url1 !== url2)
        {
          setArv(12);
          toast.success("Hence Proved....!", {
            position: "top-center",
            autoClose: 2000,
            });
        }
        else{
          toast.error(`Wrong Match....you have taken ${name1}, ${name2}`, {
            position: "top-center",
            autoClose: 2000,
            });
        }
    }

    const Restart = () => {
      navigate("/activity7");
    }

    const onBack = () => {
      navigate("/activity7/letusverify/act1startpage/lhs_rhs");
      setArv(2);
      setToolvisible("visible");
    };

  const onNext = (e) => {
    navigate("");
    setToolvisible("hidden");
    //setArv();
  };

  return (
    <div style={{height : '100%'}}>
      <div className="container-fluid" style={{height : '90%'}}>
        <div className="row" style={{height : '50vh'}}>
          <div className="col">
            <div className="row flex-column">
              <div className="col">
                <div className='d-flex justify-content-center align-items-center' style={{height : '30%'}} >
                  <img className='img-fluid' id='id1' name="A"  style={{height : '150px', width : '150px'}} src={A} alt="logo"  onDragStart={(e) => dragStart1(e)} onDragEnter={(e) => dragEnter(e)}  />
                </div>
              </div>
              <div className="col">
                <div className='d-flex justify-content-center align-items-center' style={{height : '30%'}}>
                  <img className='img-fluid' id='id2' name="B∩C" style={{height : '150px', width : '150px'}} src={BIC} alt="logo" onDragStart={(e) => dragStart1(e)} onDragEnter={(e) => dragEnter(e)} />
                </div>
              </div>
              <div className="col">
                <div className='d-flex justify-content-center align-items-center' style={{height : '30%'}}>
                  <img className='img-fluid' id='id3' name="AU(B∩C)" style={{height : '150px', width : '150px'}} src={AUBIC} alt="logo" onDragStart={(e) => dragStart1(e)} onDragEnter={(e) => dragEnter(e)} />
                </div>
              </div>
            </div>
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            <div className="row flex-column">
              <div className="col">
                <div className='d-flex justify-content-center align-items-center' style={{height : '30%'}}>
                  <img className='img-fluid' id='res_1' name="res_1" style={{height : '150px', width : '150px'}} src={dragndrop} alt="logo"  onDrop={drop1} onDragOver={dragOver}  />
                </div>
              </div>
              <div className="col d-flex justify-content-center fs-4"> = </div>
              <div className="col">
                <div className='d-flex justify-content-center align-items-center' style={{height : '30%'}}>
                  <img className='img-fluid' id='res_2' name="res_2" style={{height : '150px', width : '150px'}} src={dragndrop} alt="logo"  onDrop={drop2} onDragOver={dragOver}  />
                </div>
              </div>
              <div className="col">
                <div className='d-flex justify-content-center align-items-center mt-3'>
                  {/* <div className="btn btn-primary btn-sm" onClick={Verify}>Verify</div> */}
                  <Button autoFocus variant="contained" onClick={Verify}>
                    Verify
                  </Button>
                </div>
              </div>
              <div className="col">
                <div className='d-flex justify-content-center align-items-center mt-3'>
                  {/* <div className="btn btn-primary btn-sm" onClick={Verify}>Verify</div> */}
                  <Button autoFocus variant="contained" onClick={Restart}>
                    Restart
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row flex-column">
              <div className="col">
                <div className='d-flex justify-content-center align-items-center' style={{height : '30%'}}>
                  <img className='img-fluid' id='id4' name="A∪B" style={{height : '150px', width : '150px'}} src={AUB} alt="logo" onDragStart={(e) => dragStart2(e)} onDragEnter={(e) => dragEnter(e)}/>
                </div>
              </div>
              <div className="col">
                <div className='d-flex justify-content-center align-items-center' style={{height : '30%'}}>
                  <img className='img-fluid' id='id5' name="A∪C" style={{height : '150px', width : '150px'}} src={AUC} alt="logo" onDragStart={(e) => dragStart2(e)} onDragEnter={(e) => dragEnter(e)}/>
                </div>
              </div>
              <div className="col">
                <div className='d-flex justify-content-center align-items-center' style={{height : '30%'}}>
                  <img className='img-fluid' id='id6' name="AU(B∩C)" style={{height : '150px', width : '150px'}} src={AUBIAUC} alt="logo" onDragStart={(e) => dragStart2(e)} onDragEnter={(e) => dragEnter(e)}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackNextBar setBackward={onBack} setForward={onNext}/>
    </div>
  )
}

export default Combine_Result;
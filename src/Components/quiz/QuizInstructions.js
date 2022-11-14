import { useState } from "react";
import backgroundImg from "../../Img/backg.jpg";
// import question from "../../assets/img/question.jpg";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import "../../styles/components/_quiz-instructions.css";

//import "../../../node_modules/materialize-css/dist/css/materialize.min.css"
//import "../../../node_modules/materialize-css/dist/js/materialize.min.js"

import "../../../node_modules/@mdi/font/css/materialdesignicons.min.css";
import Headcomp from "../MajorComponents/Headcomp";


const QuizInstructions = () => {
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();

  const openDialog = () => {
    setShowDialog(true);
  };
  const closeDialog = () => {
    setShowDialog(false);
  };

  const onAgree = () => {
    navigate("/letusverify/quiz");
  };

  return (
    <div
      className=""
      style={{
        height: "100vh",
        backgroundImage: "url(" + backgroundImg + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Headcomp />

      <div
        className=" d-flex justify-content-center align-items-center"
        style={{ height: "90%" }}
      >
        <div
          className="col-11 bg-light shadow-lg"
          style={{
            height: "94%",
            borderRadius: "20px",
          }}
        >
          <div
            className=" d-flex justify-content-center align-items-center flex-column"
            style={{ height: "100%" }}
          >
            <div className=" bg-warning col-6 d-flex justify-content-center align-items-center" style={{ height: "60%" }}>
              <ul>
                <li> </li>
                <li> </li>
                <li> </li>
              </ul>
            </div>
            <div
              className=" col-6 d-flex justify-content-around align-items-center"
              style={{ height: "10%" }}
            >
              <Button variant="contained" color="primary">
                <Link
                  className="text-light"
                  to="/letusverify/act1startpage"
                  style={{ textDecoration: "none" }}
                >
                  No take me back
                </Link>
              </Button>
              <Button variant="contained" color="primary" onClick={openDialog}>
                Okay, Let's do it !!
              </Button>
            </div>
          </div>

          <Dialog open={showDialog}>
            <DialogTitle>Instructions for quiz</DialogTitle>
            <DialogContent dividers>
              <DialogContentText>
                <p>Read all instructions given below.</p>
                <ul className="broswer-default" id="main-list">
                  <li>
                  The quiz will start after clicking on the "OK" button, along with a timer.
                  </li>
                  <li>
                  To select an option as an answer to a given question click on it.
                  </li>
                  <li>
                    You will get two attempts to select the correct option to the question.
                  </li>
                  <li>
                  You may skip the question, if you want.
                  </li>
                  <li>
                  The score and timing are displayed on the top of the screen throughout the quiz.
                  </li>
                  <li>
                    {" "}
                    You will get +1 for each correct answer. There is no negative marking.
                    <li>
                    The scorecard will be generated at the end of the quiz.
                    </li>
                    
                  </li>
                </ul>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="secondary" onClick={onAgree}>
                Agree
              </Button>
              <Button onClick={closeDialog}>Cancel</Button>
            </DialogActions>
          </Dialog>

        </div>
      </div>
    </div>
  );
};

export default QuizInstructions;

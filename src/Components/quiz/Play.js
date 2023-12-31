import React, { Fragment } from "react";
import questions from "../../questions.json";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import backgroundImg from "../../Img/backg.jpg";
import isEmpty from "../../utils/is-empty";
import correctNotification from "../../assets/audio/correct-answer.mp3";
import wrongNotification from "../../assets/audio/wrong-answer.mp3";
import buttonSound from "../../assets/audio/button-sound.mp3";
// import { withRouter } from "react-router";
// import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { Navigate } from "react-router";
import classNames from "classnames";
import Confetti from "react-confetti";
//import Draggable from 'react-draggable';
import "../../styles/components/_play.css";
//import "../../../node_modules/materialize-css/dist/css/materialize.min.css"
//import "../../../node_modules/materialize-css/dist/js/materialize.min.js"
import "../../../node_modules/@mdi/font/css/materialdesignicons.min.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import parse from "html-react-parser";
import QuestionStatusUpdate from "./QuestionStatusUpdate";
import QuestionExplanation from "./QuestionExplanation";
import QuitExamAlert from "./QuitExamAlert";
import ExamFinalScoreStats from "./ExamFinalScoreStats";
import Headcomp from "../MajorComponents/Headcomp";
import "../MajorComponents/Mid.css";
import { Translation } from "react-i18next";
import questionsHindi from '../../questionsHindi.json'
import questionsEnglish from '../../questionsEnglish.json'

class Play extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.lang == "hn") {
      questions = questionsHindi;

      //console.log("inside play.js assigned hindi json file "+this.props.lang )
    } else if (this.props.lang == "en") {
      questions = questionsEnglish;
      //console.log("inside play.js assigned english json file "+this.props.lang )
    } 


    this.state = {
      counter: 0,
      questions,
      currentQuestion: {},
      nextQuestion: {},
      previousQuestion: {},
      answer: "",
      explanation: "",
      noOfAttempts: 1,
      numberOfQuestions: 0,
      numberOfAnsweredQuestions: 0,
      numberOfQuestionIndex: 0,
      currentQuestionIndex: 0,
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      hints: 5,
      fiftyFifty: 2,
      usedFiftyFifty: false,
      time: {},
      redirect: false,
      questionTwiceWrongAttempt: false,
      displayExplanationFlag: false,
      seconds: 0,
      nextButtonDisabled: false,
      previousButtonDisabled: true,
      congratulationsMessage: false,
      dragContents: "",
      attemptedQueStatus: [],
      showModal: false,
      showModalQuitExam: false,
      showModalExamScore: false,
      optionChoosen: "",
      changeBackColor: [false, false, false, false],
      noOfQuesList: Array(questions.length).fill(-1),
      noOfAttemptList: Array(questions.length).fill(0),
    };
    this.interval = null;
  }

  // Function to update state
  handleExplnationUpdate = (statusExplanationModal) => {
    this.setState({ showModal: statusExplanationModal });
  };

  handleAlertUpdate = (statusAlertModal) => {
    this.setState({ showModalQuitExam: statusAlertModal });
  };

  handleScoreUpdate = (statusScoreModal) => {
    this.setState({ showModalExamScore: statusScoreModal });
  };

  displayQuestions = (
    questions = this.state.questions,
    currentQuestion,
    nextQuestion,
    previousQuestion
  ) => {
    let { currentQuestionIndex, noOfAttemptList } = this.state;

    if (!isEmpty(this.state.questions)) {
      questions = this.state.questions;
      currentQuestion = questions[currentQuestionIndex];
      nextQuestion = questions[currentQuestionIndex + 1];
      previousQuestion = questions[currentQuestionIndex - 1];

      const answer = currentQuestion.answer;
      //console.log("Although ..... Get done ... !!", this.state.currentQuestionIndex);
      //console.log("Although ..... Get done ... !!", this.state.attemptedQueStatus[this.state.currentQuestionIndex]);

      if (
        this.state.attemptedQueStatus[this.state.currentQuestionIndex] &&
        currentQuestion.noOfAttempts >= noOfAttemptList[currentQuestionIndex]
      ) {
        this.setState(
          {
            currentQuestion: currentQuestion,
            nextQuestion: nextQuestion,
            previousQuestion: previousQuestion,
            numberOfQuestions: questions.length,
            answer: answer,
            noOfAttempts: 1,
            questionTwiceWrongAttempt: true,
            displayExplanationFlag: false,
            congratulationsMessage: false,
            optionChoosen: "",
            changeBackColor: [false, false, false, false],
          },
          () => {
            this.handleDisableButton();
          }
        );

        // console.log(
        //   "Although ..... Get done ... !!",
        //   this.state.attemptedQueStatus[this.state.currentQuestionIndex]
        // );
      } else {
        this.setState(
          {
            currentQuestion: currentQuestion,
            nextQuestion: nextQuestion,
            previousQuestion: previousQuestion,
            numberOfQuestions: questions.length,
            answer: answer,
            noOfAttempts: 1,
            questionTwiceWrongAttempt: false,
            displayExplanationFlag: false,
            congratulationsMessage: false,
            optionChoosen: "",
            changeBackColor: [false, false, false, false],
          },
          () => {
            this.handleDisableButton();
          }
        );

        console.log(
          "Question not attempted .... !!",
          this.state.attemptedQueStatus[this.state.currentQuestionIndex]
        );
      }
    }
  };

  componentDidMount() {
    const { questions, currentQuestion, nextQuestion, previousQuestion } =
      this.state;

    this.displayQuestions(
      questions,
      currentQuestion,
      nextQuestion,
      previousQuestion
    );
    this.startTimer();
  }

  setQuestionAttemptState = () => {
    let tempAttemptedQues = [...this.state.attemptedQueStatus]; // copying the old datas array
    tempAttemptedQues[this.state.currentQuestionIndex] = true; // replace e.target.value with whatever you want to change it to
    console.log("tempAttemptedQues", tempAttemptedQues);
    this.setState({
      attemptedQueStatus: tempAttemptedQues,
    });
  };

  updateBackColorParams = (targetId) => {
    let changeBackColorOptions = [...this.state.changeBackColor];
    for (let i = 0; i < changeBackColorOptions.length; i++) {
      if (targetId === i) {
        changeBackColorOptions[i] = true;
      } else {
        changeBackColorOptions[i] = false;
      }
    }
    this.setState({ changeBackColor: changeBackColorOptions });
  };

  handleOptionClick = (e) => {
    e.preventDefault();
    //this.setState({ optionChoosen: e.target.innerHTML.toLowerCase() });

    var elementId = "";
    var studentOptionChoosen = "";

    // if clicked on text .. id will not be available
    if (
      e.target.id === "option-a" ||
      e.target.id === "option-b" ||
      e.target.id === "option-c" ||
      e.target.id === "option-d"
    ) {
      elementId = e.target.id;
    } else {
      //var firstParElement = document.getElementsByClassName(e.target.className).item(0).parentNode;
      elementId = e.target.parentNode.id;
    }

    studentOptionChoosen = document
      .getElementById(elementId)
      .firstElementChild.innerHTML.toLowerCase();

    this.setState({ optionChoosen: studentOptionChoosen });

    switch (elementId) {
      case "option-a":
        this.updateBackColorParams(0);
        break;
      case "option-b":
        this.updateBackColorParams(1);
        break;
      case "option-c":
        this.updateBackColorParams(2);
        break;
      case "option-d":
        this.updateBackColorParams(3);
        break;
      default:
        break;
    }
  };

  // Display the status of attempted and unattempted questions on top of the page ....
  setQueAttemptOpt = (selectedAnswer) => {
    let tempQuesList = [...this.state.noOfQuesList]; // copying the old datas array

    switch (selectedAnswer) {
      case "correct":
        tempQuesList[this.state.currentQuestionIndex] = 2; // replace e.target.value with whatever you want to change it to
        break;
      case "wrong":
        if (
          this.state.currentQuestion.noOfAttempts - 1 >
          this.state.noOfAttemptList[this.state.currentQuestionIndex]
        ) {
          tempQuesList[this.state.currentQuestionIndex] = 0;
        } else if (
          this.state.currentQuestion.noOfAttempts - 1 ===
          this.state.noOfAttemptList[this.state.currentQuestionIndex]
        ) {
          tempQuesList[this.state.currentQuestionIndex] = 1;
        }
        break;
      default:
        break;
    }

    this.setState({
      noOfQuesList: tempQuesList,
    });
  };

  handleSubmitClick = (e) => {
    if (this.state.optionChoosen.toLowerCase().trim().length === 0) {
      toast.error(<Translation>{(t) => t("selectoption")}</Translation>, {
        position: "top-center",
        autoClose: 700,
      });
    } else {
      //if (e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
      if (
        this.state.optionChoosen.toLowerCase().trim() ===
        this.state.answer.toLowerCase().trim()
      ) {
        setTimeout(() => {
          document.getElementById("correct-sound").play();
        }, 200);
        this.setQuestionAttemptState();
        this.correctAnswer();
      } else {
        setTimeout(() => {
          document.getElementById("wrong-sound").play();
        }, 200);
        const { currentQuestion } = this.state;
        navigator.vibrate(1000); // vibrate screen on wrong answer

        toast.error(<Translation>{(t) => t("alert-5")}</Translation>, {
          position: "top-center",
          autoClose: 500,
        });

        //display alert message ... !!!
        setTimeout(() => {
          this.setState({ showModal: true });
        }, 400);

        let tempNoOfAttemptList = [...this.state.noOfAttemptList]; // copying the old datas array
        tempNoOfAttemptList[this.state.currentQuestionIndex] =
          tempNoOfAttemptList[this.state.currentQuestionIndex] + 1; // replace e.target.value with whatever you want to change it to

        this.setState({
          noOfAttempts: this.state.noOfAttempts + 1,
          noOfAttemptList: tempNoOfAttemptList,
        });

        if (
          currentQuestion.noOfAttempts ===
          this.state.noOfAttemptList[this.state.currentQuestionIndex] + 1
        ) {
          this.setQuestionAttemptState();
          this.wrongAnswer();
        }
        this.setQueAttemptOpt("wrong");
      }
    }
  };

  handleButtonClick = (e) => {
    switch (e.target.id) {
      case "next-button":
        //this.playButtonSound();
        this.handleNextButtonClick();
        break;
      case "previous-button":
        //this.playButtonSound();
        this.handlePreviousButtonClick();
        break;
      case "exit-button":
        this.handleQuitButtonClick();
        break;
      default:
        break;
    }
  };

  playButtonSound = () => {
    document.getElementById("button-sound").play();
  };

  handleNextButtonClick = () => {
    this.playButtonSound();
    if (this.state.nextQuestion !== undefined) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex + 1,
          dragContents: "",
          changeBackColor: [false, false, false, false],
        }),
        () => {
          this.displayQuestions(
            this.state.questions,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      );
    }
  };

  handlePreviousButtonClick = () => {
    this.playButtonSound();
    if (this.state.previousQuestion !== undefined) {
      this.setState(
        (prevState) => ({
          currentQuestionIndex: prevState.currentQuestionIndex - 1,
          dragContents: "",
          changeBackColor: [false, false, false, false],
        }),
        () => {
          this.displayQuestions(
            this.state.questions,
            this.state.currentQuestion,
            this.state.nextQuestion,
            this.state.previousQuestion
          );
        }
      );
    }
  };

  handleQuitButtonClick = () => {
    this.playButtonSound();
    this.setState({ showModalQuitExam: true });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Navigate to="/letusverify" />;
    }
  };

  disableCongratulationMessage = () => {
    setInterval(() => {
      this.setState({ congratulationsMessage: false });
    }, 5000);
  };

  correctAnswer = () => {
    toast.success(<Translation>{(t) => t("alert-6")}</Translation>, {
      position: "top-center",
      autoClose: 500,
    });

    this.setState(
      (prevState) => ({
        score: prevState.score + 1,
        correctAnswers: prevState.correctAnswers + 1,
        //currentQuestionIndex: prevState.currentQuestionIndex + 1,
        //numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
        congratulationsMessage: true,
        questionTwiceWrongAttempt: !prevState.questionTwiceWrongAttempt,
      }),
      () => {
        this.setQueAttemptOpt("correct");
        this.disableCongratulationMessage();
        //this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
      }
    );
  };

  wrongAnswer = () => {
    //navigator.vibrate(1000);
    this.setState(
      (prevState) => ({
        wrongAnswers: prevState.wrongAnswers + 1,
        //currentQuestionIndex: prevState.currentQuestionIndex + 1,
        //numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
        questionTwiceWrongAttempt: !prevState.questionTwiceWrongAttempt,
        displayExplanationFlag: true,
      }),
      () => {
        console.log("Please go through the explanation ... !!");
        //this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
      }
    );
  };

  handleHints = () => {
    alert("Hints ... Clicked ... !!");
  };

  startTimer = () => {
    const countDownTime = Date.now();
    this.interval = setInterval(() => {
      const now = new Date();
      const distance = now - countDownTime;
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.setState({
        time: {
          minutes: minutes,
          seconds: seconds,
        },
      });
    }, 1000);
  };

  handleDisableButton = () => {
    if (
      this.state.previousQuestion === undefined ||
      this.state.currentQuestionIndex === 0
    ) {
      this.setState({
        previousButtonDisabled: true,
      });
    } else {
      this.setState({
        previousButtonDisabled: false,
      });
    }

    if (
      this.state.nextQuestion === undefined ||
      this.state.currentQuestionIndex + 1 === this.state.numberOfQuestions
    ) {
      this.setState({
        nextButtonDisabled: true,
      });
    } else {
      this.setState({
        nextButtonDisabled: false,
      });
    }
  };

  // Handle fill in the bank
  handleFillInBlankDrag = (e) => {
    this.setQuestionAttemptState();

    if (
      e.dataTransfer.getData("drag-item").toLowerCase() ===
      this.state.answer.toLowerCase()
    ) {
      //if(e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()){
      setTimeout(() => {
        document.getElementById("correct-sound").play();
      }, 200);
      this.correctAnswer();
    } else {
      setTimeout(() => {
        document.getElementById("wrong-sound").play();
      }, 200);
      const { currentQuestion } = this.state;

      navigator.vibrate(1000); // vibrate screen on wrong answer
      toast.error(
        <Translation>{(t) => t("alert-5")}</Translation>, {
        position: "top-center",
        autoClose: 500,
      });

      //display alert message ... !!!
      //setTimeout(()=>{this.onShowAlert();}, 400);
      setTimeout(() => {
        this.setState({ showModal: true });
      }, 400);

      this.setState({ noOfAttempts: this.state.noOfAttempts + 1 });
      if (currentQuestion.noOfAttempts === this.state.noOfAttempts) {
        this.wrongAnswer();
      }
    }
  };

  dragStart = (e) => {
    //console.log(e.target.innerHTML);
    e.dataTransfer.setData("drag-item", e.target.innerHTML);
  };

  dragEnter = (e) => {
    console.log("drag enter ... !!!" + e.target.innerHTML);
  };

  drop = (ev) => {
    var data = ev.dataTransfer.getData("drag-item");
    this.setState({
      dragContents: data,
    });
    this.handleFillInBlankDrag(ev);
  };

  dragOver = (ev) => {
    ev.preventDefault();
  };

  onShowAlert = () => {
    const explantion = this.state.currentQuestion.explanation;
    console.log(
      this.state.currentQuestion.noOfAttempts + " " + this.state.noOfAttempts
    );

    alert(
      "alert" +
        this.state.currentQuestion.noOfAttempts +
        " " +
        this.state.noOfAttemptList[this.state.currentQuestionIndex]
    );

    if (
      this.state.noOfAttemptList[this.state.currentQuestionIndex] >
      this.state.currentQuestion.noOfAttempts
    ) {
      alert(
        <Translation>{(t) => t("alert-1")}</Translation> +
          "\n\n" +
          explantion +
          "\n\n" +
          <Translation>{(t) => t("alert-2")}</Translation> +
          "\n\n" +
          <Translation>{(t) => t("alert-3")}</Translation>
      );
    } else {
      alert(
        <Translation>{(t) => t("alert-1")}</Translation> + "\n\n" + explantion + "\n\n" + <Translation>{(t) => t("alert-4")}</Translation>
      );
    }
  };

  render() {
    const {
      currentQuestion,
      currentQuestionIndex,
      noOfQuesList,
      numberOfQuestions,
      questionTwiceWrongAttempt,
      time,
      congratulationsMessage,
      score,
    } = this.state;

    return (
      <div
        className=""
        style={{
          backgroundImage: "url(" + backgroundImg + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Headcomp sidebarvisible="hidden" />
        <div
          className=" d-flex justify-content-center align-items-center"
          style={{ height: "90%" }}
        >
          <div
            className="col-11 bg-light shadow-lg overflow-auto scrollbar-primary "
            style={{
              height: "94%",
              borderRadius: "20px",
            }}
          >
            <Fragment>
              <title><Translation>{(t) => t("quiz-10")}</Translation></title>
              <Fragment>
                <audio id="correct-sound" src={correctNotification}></audio>
                <audio id="wrong-sound" src={wrongNotification}></audio>
                <audio id="button-sound" src={buttonSound}></audio>
              </Fragment>

              {/*<p id="drag1" draggable="true" onDragStart={(e) => this.dragStart(e)} onDragEnter={(e) => this.dragEnter(e)}>
                This is a draggable paragraph. Drag this element into the rectangle.
            </p>*/}
              {/*<div id="div1" onDrop={this.drop} onDragOver={this.dragOver} onDragEnter={this.dragEnter}>Drop here {this.state.dragContents} </div>*/}

              <div className="questions ">
                {/* <h4 className="quizTitle">Quiz Mode</h4> */}
                <QuestionStatusUpdate noOfQues={noOfQuesList} />
                <div className="lifeline-container fw-bold">
                  <p>
                    {" "}
                    <span><Translation>{(t) => t("que")}</Translation>: </span>{" "}
                    <span className="lifeline"></span>{" "}
                    <span className="text-success">
                      {" "}
                      {currentQuestionIndex + 1} of {numberOfQuestions}{" "}
                    </span>{" "}
                  </p>
                  {/*<p><span className="mdi mdi-set-center mdi-24px lifeline-icon"></span><span className="lifeline">2</span></p>*/}
                  {/*<p><span className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon" onClick={this.handleHints} ></span><span className="lifeline">5</span></p>*/}
                  <p className="text-success">
                    <span>
                      {" "}
                      {time.minutes}:{time.seconds}{" "}
                    </span>
                    <span className="mdi mdi-clock-outline mdi-24px"></span>
                  </p>
                </div>
                <div className="lifeline-container text-success fw-bold">
                  <p>
                    {" "}
                    <span className="text-black"> <Translation>{(t) => t("que-1")}</Translation>: </span>{" "}
                    <span className="lifeline"></span>{" "}
                    <span> {currentQuestion.maxMarks} </span>{" "}
                  </p>
                  <p>
                    {" "}
                    <span className="text-black"><Translation>{(t) => t("que-2")}</Translation>: </span>{" "}
                    <span>{score}</span>{" "}
                  </p>
                </div>

                {currentQuestion.questionType === "selectOptions" ? (
                  <Fragment>
                    <div
                      className={
                        currentQuestion.questionHasImg
                          ? "main-quiz-component-img"
                          : "main-quiz-component"
                      }
                    >
                      {" "}
                      {/* Main quiz container .... */}
                      <div
                        className={
                          currentQuestion.questionHasImg
                            ? "question-container-img"
                            : "question-container"
                        }
                      >
                        <h5
                          className="questionTitle "
                          // style={
                          //   currentQuestion.questionHasImg
                          //     ? { width: "70%" }
                          //     : null
                          // }
                        >
                          {" "}
                          {parse(currentQuestion.question)}{" "}
                        </h5>
                        {currentQuestion.questionHasImg && (
                          <div className="img-container">
                            {" "}
                            <img
                              className="question-img img-fluid"
                              src={require(`../../Img/OptionImg/${currentQuestion.questionImg}`)}
                              alt="cannot load img"
                            />{" "}
                          </div>
                        )}
                      </div>
                      <div
                        className={
                          currentQuestion.questionHasImg
                            ? "main-option-container-img"
                            : "main-option-container"
                        }
                      >
                        {/*Display options of questions A and B... */}
                        <div
                          className={
                            currentQuestion.questionHasImg
                              ? "options-container-img"
                              : "options-container"
                          }
                        >
                          <button
                            onClick={this.handleOptionClick}
                            disabled={questionTwiceWrongAttempt ? true : false}
                            className={
                              currentQuestion.questionHasImg
                                ? "option-img"
                                : "option"
                            }
                            id="option-a"
                            style={{
                              backgroundColor: this.state.changeBackColor[0]
                                ? "#4da6ff"
                                : "#99ccff",
                              display:
                                currentQuestion.optionA === "" &&
                                currentQuestion.isOptionsHaveImages[0] === false
                                  ? "none"
                                  : null,
                            }}
                          >
                            {" "}
                            <span className="optionText">
                              {" "}
                              A. {parse(currentQuestion.optionA)}{" "}
                            </span>
                            {currentQuestion.isOptionsHaveImages[0] && (
                              <img
                                src={require(`../../Img/OptionImg/${currentQuestion.optionAImg}`)}
                                width="60"
                              />
                            )}
                          </button>

                          <button
                            onClick={this.handleOptionClick}
                            disabled={questionTwiceWrongAttempt ? true : false}
                            className={
                              currentQuestion.questionHasImg
                                ? "option-img"
                                : "option"
                            }
                            id="option-b"
                            style={{
                              backgroundColor: this.state.changeBackColor[1]
                                ? "#4da6ff"
                                : "#99ccff",
                              display:
                                currentQuestion.optionB === "" &&
                                currentQuestion.isOptionsHaveImages[1] === false
                                  ? "none"
                                  : null,
                            }}
                          >
                            {" "}
                            <div className="optionText">
                              {" "}
                              B. {parse(currentQuestion.optionB)}{" "}
                            </div>
                            {currentQuestion.isOptionsHaveImages[1] && (
                              <img
                                src={require(`../../Img/OptionImg/${currentQuestion.optionBImg}`)}
                                width="60"
                              />
                            )}
                          </button>
                        </div>

                        {/* Display Question Options .. C and D */}
                        <div
                          className={
                            currentQuestion.questionHasImg
                              ? "options-container-img"
                              : "options-container"
                          }
                        >
                          <button
                            onClick={this.handleOptionClick}
                            disabled={questionTwiceWrongAttempt ? true : false}
                            className={
                              currentQuestion.questionHasImg
                                ? "option-img"
                                : "option"
                            }
                            id="option-c"
                            style={{
                              backgroundColor: this.state.changeBackColor[2]
                                ? "#4da6ff"
                                : "#99ccff",
                              display:
                                currentQuestion.optionC === "" &&
                                currentQuestion.isOptionsHaveImages[2] === false
                                  ? "none"
                                  : null,
                            }}
                          >
                            {" "}
                            <span className="optionText">
                              {" "}
                              C. {parse(currentQuestion.optionC)}{" "}
                            </span>
                            {currentQuestion.isOptionsHaveImages[2] && (
                              <img
                                src={require(`../../Img/OptionImg/${currentQuestion.optionCImg}`)}
                                width="60"
                              />
                            )}
                          </button>

                          <button
                            onClick={this.handleOptionClick}
                            disabled={questionTwiceWrongAttempt ? true : false}
                            className={
                              currentQuestion.questionHasImg
                                ? "option-img"
                                : "option"
                            }
                            id="option-d"
                            style={{
                              backgroundColor: this.state.changeBackColor[3]
                                ? "#4da6ff"
                                : "#99ccff",
                              display:
                                currentQuestion.optionD === "" &&
                                currentQuestion.isOptionsHaveImages[3] === false
                                  ? "none"
                                  : null,
                            }}
                          >
                            {" "}
                            <div className="optionText">
                              {" "}
                              D. {parse(currentQuestion.optionD)}{" "}
                            </div>
                            {currentQuestion.isOptionsHaveImages[3] && (
                              <img
                                src={require(`../../Img/OptionImg/${currentQuestion.optionDImg}`)}
                                width="60"
                              />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </Fragment>
                ) : (
                  <Fragment>
                    <h5 className="questionTitle ">
                      <div
                        id="div1"
                        onDrop={this.drop}
                        onDragOver={this.dragOver}
                        onDragEnter={this.dragEnter}
                      >
                        {" "}
                        {parse("" + currentQuestion.question)}{" "}
                        {this.state.dragContents}{" "}
                      </div>
                    </h5>
                    <div className="options-container ">
                      <button
                        draggable={questionTwiceWrongAttempt ? false : true}
                        onDragStart={(e) => this.dragStart(e)}
                        onDragEnter={(e) => this.dragEnter(e)}
                        disabled={questionTwiceWrongAttempt ? true : false}
                        className="option"
                      >
                        A. {parse(" " + currentQuestion.optionA)}
                      </button>
                      <button
                        draggable={questionTwiceWrongAttempt ? false : true}
                        onDragStart={(e) => this.dragStart(e)}
                        onDragEnter={(e) => this.dragEnter(e)}
                        disabled={questionTwiceWrongAttempt ? true : false}
                        className="option"
                      >
                        C. {parse(" " + currentQuestion.optionB)}
                      </button>
                      {/*<button draggable={true} onDragStart={(e) => this.dragStart(e)} onDragEnter={(e) => this.dragEnter(e)} disabled={questionTwiceWrongAttempt ? true : false} className="option">{currentQuestion.optionA}</button>
                            <button draggable={true} onDragStart={(e) => this.dragStart(e)} onDragEnter={(e) => this.dragEnter(e)} disabled={questionTwiceWrongAttempt ? true : false} className="option">{currentQuestion.optionB}</button>*/}
                    </div>
                    <div className="options-container ">
                      <button
                        draggable={questionTwiceWrongAttempt ? false : true}
                        onDragStart={(e) => this.dragStart(e)}
                        onDragEnter={(e) => this.dragEnter(e)}
                        disabled={questionTwiceWrongAttempt ? true : false}
                        className="option"
                      >
                        B. {parse(" " + currentQuestion.optionC)}
                      </button>
                      <button
                        draggable={questionTwiceWrongAttempt ? false : true}
                        onDragStart={(e) => this.dragStart(e)}
                        onDragEnter={(e) => this.dragEnter(e)}
                        disabled={questionTwiceWrongAttempt ? true : false}
                        className="option"
                      >
                        D. {parse(" " + currentQuestion.optionD)}
                      </button>
                      {/*<button draggable={true} onDragStart={(e) => this.dragStart(e)} onDragEnter={(e) => this.dragEnter(e)} disabled={questionTwiceWrongAttempt ? true : false} className="option">{currentQuestion.optionC}</button>
                            <button draggable={true} onDragStart={(e) => this.dragStart(e)} onDragEnter={(e) => this.dragEnter(e)} disabled={questionTwiceWrongAttempt ? true : false} className="option">{currentQuestion.optionD}</button>*/}
                    </div>
                  </Fragment>
                )}

                <div className="button-container ">
                  <button
                    className={classNames("", {
                      disable: this.state.previousButtonDisabled,
                    })}
                    id="previous-button"
                    onClick={this.handleButtonClick}
                  >
                    <FaAngleDoubleLeft size={11} />
                    <Translation>{(t) => t("que-3")}</Translation>
                  </button>

                  <button
                    onClick={this.handleSubmitClick}
                    disabled={questionTwiceWrongAttempt ? true : false}
                  >
                    <Translation>{(t) => t("que-4")}</Translation>
                  </button>

                  <button
                    className={classNames("", {
                      disable: this.state.nextButtonDisabled,
                    })}
                    id="next-button"
                    onClick={this.handleButtonClick}
                  >
                    <Translation>{(t) => t("que-5")}</Translation>
                    <FaAngleDoubleRight size={11} />
                  </button>
                  {currentQuestionIndex + 1 === numberOfQuestions ? (
                    <button id="exit-button" onClick={this.handleButtonClick}>
                    <Translation>{(t) => t("que-6")}</Translation>
                    </button>
                  ) : null}
                  {/*<button id="exit-button" onClick={this.handleButtonClick}>Quit</button>*/}
                </div>
                {/* <div className="explanation-container ">
                  {this.state.displayExplanationFlag ? (
                    <Fragment>
                      <h4> Explanation: </h4>
                      <p> {currentQuestion.explanation} </p>
                    </Fragment>
                  ) : (
                    <Fragment></Fragment>
                  )}
                </div> */}
                {this.renderRedirect()}

                <div className="congratulations-container">
                  {congratulationsMessage ? (
                    <Fragment>
                      <Confetti
                        className="canvas"
                        numberOfPieces={300}
                        gravity={0.15}
                      />
                    </Fragment>
                  ) : (
                    <Fragment></Fragment>
                  )}
                </div>
              </div>
              <ToastContainer />
            </Fragment>
          </div>
        </div>

        {/* Modal For Score and Navigate to Home(/letusverify) */}
        {this.state.showModalExamScore ? (
          <ExamFinalScoreStats
            propsScore={{
              showModalExamScore: this.state.showModalExamScore,
              scoreUpdate: this.handleScoreUpdate,
              score: this.state.score,
              questions: this.state.questions,
              noOfQuesList: this.state.noOfQuesList,
              time: this.state.time,
            }}
          />
        ) : null}

        {/* ======== Explanation for Quit Exam ======== */}
        {this.state.showModalQuitExam && (
          <QuitExamAlert
            propsAlert={{
              showModalQuitExam: this.state.showModalQuitExam,
              score: this.state.score,
              alertUpdate: this.handleAlertUpdate,
              showModalExamScore: this.state.showModalExamScore,
              scoreUpdate: this.handleScoreUpdate,
            }}
          />
        )}

        {/* ======== Explanation for Wrong Attempts ======== */}
        {this.state.showModal && (
          <QuestionExplanation
            propsExlanation={{
              showModal: this.state.showModal,
              currentQuestion: currentQuestion,
              noOfAttemptList: this.state.noOfAttemptList,
              currentQuestionIndex: currentQuestionIndex,
              ExplnationUpdate: this.handleExplnationUpdate,
            }}
          />
        )}
      </div>
    );
  }
}

export default Play;

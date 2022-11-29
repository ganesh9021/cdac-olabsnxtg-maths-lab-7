import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import parse from "html-react-parser";
import {Modal} from 'react-bootstrap'
import { Translation } from "react-i18next";

class QuestionExplanation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        showModalQueExp: this.props.propsExlanation.showModal,
        currentQuestion: this.props.propsExlanation.currentQuestion,
        currentQuestionIndex: this.props.propsExlanation.currentQuestionIndex,
        noOfAttemptList: this.props.propsExlanation.noOfAttemptList,
    };
  }
  //style={(this.state.changeBackColor[0]) ? {backgroundColor:"red"} : {backgroundColor:"rgba(75, 75, 177, 0.808)"}} 
  
  handleClose = () => {
    this.setState({ showModalQueExp: false });
    this.props.propsExlanation.ExplnationUpdate(false);
  };

  render() {

    const {
        currentQuestion,
        showModalQueExp,
        currentQuestionIndex,
        noOfAttemptList,
      } = this.state;    

    return (<Fragment>
        <Modal size="lg"
          show={showModalQueExp ? true : false}
          onHide={this.handleClose} centered>
        
        <Modal.Header closeButton>
          <Modal.Title><Translation>{(t) => t("alert-1")}</Translation></Modal.Title>
         </Modal.Header>

        <Modal.Body>
          <p>{parse("" + currentQuestion.explanation)}</p>

          {currentQuestion.explanationHasImg ? (
              <img
                src={require(`../../Img/OptionImg/${currentQuestion.explanationImg}`)}
                alt="cannot load img"
              />
            ) : null}

            {noOfAttemptList[currentQuestionIndex] >= currentQuestion.noOfAttempts ? (
                <div className="DisplayExplanationMssg">
                    <p><Translation>{(t) => t("alert-2")}</Translation></p>
                    <p><Translation>{(t) => t("alert-3")}</Translation></p>
                </div>
                ) : (
                <div className="DisplayExplanationMssg">
                    <p><Translation>{(t) => t("alert-4")}</Translation></p>
                </div>
            )}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="contained" color="primary"  size="small" onClick={this.handleClose}>
            <Translation>{(t) => t("Close")}</Translation>    </Button>
          </Modal.Footer>
        </Modal>
        
    </Fragment>);
}}

export default QuestionExplanation;
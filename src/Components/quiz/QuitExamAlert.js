import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import parse from "html-react-parser";
import {Modal} from 'react-bootstrap'
import { Translation } from "react-i18next";

class QuitExamAlert extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModalExamScore: this.props.propsAlert.showModalExamScore,
      showModalQuitExam: this.props.propsAlert.showModalQuitExam,
    };
  }
  
  handleYesQuit = () => {
    this.setState({
      showModalExamScore : true,
      showModalQuitExam : false,
    });
    this.props.propsAlert.alertUpdate(false);
    this.props.propsAlert.scoreUpdate(true);
  };

  handleClose = () => {
    this.props.propsAlert.alertUpdate(false);
    this.setState({ showModalQuitExam: false});
  };

  render() {

    const {showModalQuitExam} = this.state;   

    return (<Fragment>
        {/* Modal for Qeustion Attempt Status */}
        <Modal size="sm"
          show={showModalQuitExam ? true : false}
          onHide={() => {
            this.handleClose();
          }}
          centered
        >
          <Modal.Body>
            <h6><Translation>{(t) => t("quit")}</Translation></h6>
          </Modal.Body>

          <Modal.Footer style={{ justifyContent: "space-around" }}>
            <Button variant="contained" color="primary" size="small"
              onClick={() => {
                this.handleYesQuit();
            }}  >   <Translation>{(t) => t("yes")}</Translation>   </Button>

            <Button variant="contained" color="secondary" size="small"
              onClick={() => {  this.handleClose(); }}  >   <Translation>{(t) => t("cancel")}</Translation>    </Button>

          </Modal.Footer>
        </Modal>
    </Fragment>);
}}

export default QuitExamAlert;
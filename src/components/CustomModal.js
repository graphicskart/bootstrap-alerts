import React, { Component } from "react";
import { Modal, Button, Col } from "react-bootstrap";

export default class CustomModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <Modal
        show={this.state.show}
        onHide={this.handleClose}
        className={`${this.props.type} ${this.props.type} text-center`}
        size="sm"
        centered
      >
        <Modal.Body className="text-left">
          <Col xs={12}>
            <p className="title-block">
              <span className="icon">{this.props.icon}</span>{" "}
              <span className="title">{this.props.title}</span>
            </p>
          </Col>
          <Col xs={12} className="body form-group">
            {this.props.description}
          </Col>
          <Col xs={12} className="modal-footer-area">
            <Button
              variant={`outline-${this.props.type}`}
              onClick={this.handleClose}
              className="float-right"
            >
              {this.props.buttonTitle}
            </Button>
            {this.props.type == "danger" ? (
              <Button
                variant={`custom outline-${this.props.type}`}
                onClick={this.handleClose}
                className="float-right"
              >
                Open a Ticket
              </Button>
            ) : null}
          </Col>
        </Modal.Body>
      </Modal>
    );
  }
}

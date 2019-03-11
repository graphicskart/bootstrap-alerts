import React, { Component } from "react";
import "./App.css";
import { Button, Col, Container } from "react-bootstrap";
import { CustomModal } from "./components";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      title: "",
      buttonTitle: "",
      icon: "",
      description: ""
    };
  }
  openModal = (type, title, buttonTitle, icon, description) => {
    this.setState({
      type,
      title,
      buttonTitle,
      icon,
      description
    });

    this.modal.handleShow();
  };

  render() {
    return (
      <Container className="App">
        <Col xs={12}>
          <Button
            variant="outline-success"
            onClick={() =>
              this.openModal(
                "success",
                "Success",
                "Okay",
                <i class="far fa-check-circle" />,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              )
            }
          >
            Success
          </Button>
          &nbsp;
          <Button
            variant="outline-danger"
            onClick={() =>
              this.openModal(
                "danger",
                "Failure",
                "Okay",
                <i class="far fa-times-circle" />,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              )
            }
          >
            Failure
          </Button>
        </Col>
        <CustomModal
          ref={c => (this.modal = c)}
          type={this.state.type}
          title={this.state.title}
          buttonTitle={this.state.buttonTitle}
          icon={this.state.icon}
          description={this.state.description}
        />
      </Container>
    );
  }
}

export default App;

import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";

class Error extends Component {
  render() {
    return (
      <Fragment>
        <div className="fixed-background" />
        <main>
          <div className="container">
            <Row className="h-100">
              404 - ERROR
            </Row>
          </div>
        </main>
      </Fragment>
    );
  }
}
export default Error;

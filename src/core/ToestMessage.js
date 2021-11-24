import React, { useState } from "react";
import { Row, Col, Toast } from "react-bootstrap";

function ToastMessage(props) {
  const [show, setShow] = useState(false);
  setShow(props.toastfun);
  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto light-blue">Logout</strong>
          </Toast.Header>
          <Toast.Body>You have successfully logout.</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}></Col>
    </Row>
  );
}
export default ToastMessage;

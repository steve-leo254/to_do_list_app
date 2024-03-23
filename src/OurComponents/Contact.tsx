import React from "react";

import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const Contact: React.FC = () => {
  return (
    <Form>
      <FormGroup Row>
        <Label for="exampleEmail" sm={2}>
          Email
        </Label>
        <Col sm={10}>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Input email"
            type="email"
          />
        </Col>
      </FormGroup>
      <FormGroup Row>
        <Label for="exampleText"sm={13} >
          Message
        </Label>
        <Col sm={13}>
          <Input id="exampleText" name="text" type="textarea" />
        </Col>
      </FormGroup>
      <FormGroup check Row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Label check>
            <Input id="checkbox2" type="checkbox" /> Check me out
          </Label>
        </Col>
      </FormGroup>
      <FormGroup check Row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default Contact;

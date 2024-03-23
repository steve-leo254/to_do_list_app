import React from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

interface ContactProps {
    submitHandler: () => void;
}

const Contact: React.FC<ContactProps> = ({ submitHandler }) => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        submitHandler();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup row>
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
            <FormGroup row>
                <Label for="exampleText" sm={13}>
                    Message
                </Label>
                <Col sm={13}>
                    <Input id="exampleText" name="text" type="textarea" />
                </Col>
            </FormGroup>
            <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                    <Label check>
                        <Input id="checkbox2" type="checkbox" /> Check me out
                    </Label>
                </Col>
            </FormGroup>
            <FormGroup check row>
                <Col sm={{ size: 10, offset: 2 }}>
                    <Button type="submit">Submit</Button>
                </Col>
            </FormGroup>
        </Form>
    );
};

export default Contact;
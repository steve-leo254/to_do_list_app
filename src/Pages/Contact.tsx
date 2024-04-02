import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";

interface ContactFor {
  submitHandler: (name: string, email: string, message: string) => void;
}

const ContactUs: React.FC<ContactFor> = ({ submitHandler }) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for validation errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = { name: "", email: "", message: "" };

    if (!formState.name.trim()) {
      isValid = false;
      newErrors.name = "Name is required.";
    }

    if (!formState.email.trim()) {
      isValid = false;
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      isValid = false;
      newErrors.email = "Email is not valid.";
    }

    if (!formState.message.trim()) {
      isValid = false;
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;
    submitHandler(formState.name, formState.email, formState.message);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup row>
        <Label for="exampleName" sm={1}>
          Name
        </Label>
        <Col sm={10}>
          <Input
            id="exampleName"
            name="name"
            placeholder="Input name"
            type="text"
            value={formState.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </Col>
      </FormGroup>
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
            value={formState.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleText" sm={13}>
          Message
        </Label>
        <Col sm={13}>
          <Input
            id="exampleText"
            name="message"
            type="textarea"
            value={formState.message}
            onChange={handleChange}
          />
          {errors.message && <div className="error">{errors.message}</div>}
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

export default ContactUs;

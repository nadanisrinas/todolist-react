import React, { useState } from "react";
import { Col, Form, FormGroup, Label, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

const FormEditTodo = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Form>
      <FormGroup row>
        <Label for="title" sm={2}>
          title
        </Label>
        <Col sm={10}>
          <Input type="text" name="title" id="title" placeholder="update title" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="description" sm={2}>
          description
        </Label>
        <Col sm={10}>
          <Input type="textarea" name="description" id="description" placeholder="update description" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="status" sm={2}>
          status
        </Label>
        <Col sm={10}>
          <Dropdown color="" isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Dropdown</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Complete</DropdownItem>
              <DropdownItem header>Not Complete Yet</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default FormEditTodo;

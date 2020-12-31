import React, { useState } from "react";
import { Col, Form, FormGroup, Label, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { addDataTodo } from "../../store/actions";
import { useHistory } from "react-router-dom";

const FormCreateTodo = (props) => {
  const history = useHistory();
  let idToDo = useSelector((state) => state.dataReducer.dataTodo.length + 1);
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(0);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const handleCreate = async () => {
    dispatch(
      addDataTodo({
        id: idToDo,
        title: title,
        description: description,
        status: status,
        createdAt: new Date(),
      })
    );
    history.push("/");
  };
  return (
    <Form>
      <FormGroup row>
        <Label for="title" sm={2}>
          title
        </Label>
        <Col sm={10}>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="title" placeholder="update title" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="description" sm={2}>
          description
        </Label>
        <Col sm={10}>
          <Input value={description} onChange={(e) => setDescription(e.target.value)} type="textarea" name="description" id="description" placeholder="update description" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="status" sm={2}>
          status
        </Label>
        <Col sm={10}>
          <Dropdown color="" isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>{status === 0 ? "Not Complete Yet" : "Complete"}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={(e) => setStatus(1)}>Complete</DropdownItem>
              <DropdownItem onClick={(e) => setStatus(0)}>Not Complete Yet</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </FormGroup>
      <Button onClick={handleCreate}>Create To Do</Button>
    </Form>
  );
};

export default FormCreateTodo;

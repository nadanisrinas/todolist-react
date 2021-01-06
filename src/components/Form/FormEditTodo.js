import React, { useState } from "react";
import { Col, Form, FormGroup, Label, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { editDataTodo } from "../../store/actions";
// css
import "../../assets/styles/button.css";
import "../../assets/styles/label.css";

const FormEditTodo = (props) => {
  const dispatch = useDispatch();
  const { dataDetail, toggleModalDetail } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let idToDo = dataDetail ? dataDetail.id : "";
  const [title, setTitle] = useState(dataDetail ? dataDetail.title : "");
  const [description, setDescription] = useState(dataDetail ? dataDetail.description : "");
  const [status, setStatus] = useState(dataDetail ? dataDetail.status : "");
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const handleEdit = () => {
    dispatch(
      editDataTodo({
        id: idToDo,
        title: title,
        description: description,
        status: status,
        createdAt: new Date(),
      })
    );
    toggleModalDetail();
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
            <DropdownToggle color="" className={status == 0 ? "labelNotComplete" : "labelComplete"} caret>
              {status == 0 ? "Not Complete Yet" : "Complete"}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={(e) => setStatus(1)}>Complete</DropdownItem>
              <DropdownItem onClick={(e) => setStatus(0)}>Not Complete Yet</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </FormGroup>
      <Button color="" className="mr-2 btnEdit" onClick={handleEdit}>
        <span className="fa fa-edit pr-1"></span>
        Edit
      </Button>
    </Form>
  );
};

export default FormEditTodo;

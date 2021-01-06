import React, { Fragment } from "react";
import FormCreateTodo from "../../components/Form/FormCreateTodo";
import { Container, Row } from "reactstrap";
const Todo = () => {
  return (
    <Fragment>
      <Container>
        <Row className="d-flex justify-content-center font-weight-bold">Create To Do</Row>
        <FormCreateTodo />
      </Container>
    </Fragment>
  );
};

export default Todo;

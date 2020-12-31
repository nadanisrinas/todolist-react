import React, { Fragment } from "react";
import TableListTodo from "../components/Table/TableListTodo";
import { Container, Row } from "reactstrap";
const Todo = () => {
  return (
    <Fragment>
      <Container>
        <Row className="d-flex justify-content-center font-weight-bold">List To Do</Row>
        <TableListTodo />
      </Container>
    </Fragment>
  );
};

export default Todo;

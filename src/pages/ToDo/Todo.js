import React, { Fragment } from "react";
import TableListTodo from "../../components/Table/TableListTodo";
import { Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
//css
import "../../assets/styles/button.css";
const Todo = () => {
  return (
    <Fragment>
      <Container>
        <Row className="mt-2 d-flex justify-content-between flex-wrap">
          <span className="font-weight-bold">To Do List </span>
        </Row>
        <Row className="mb-2 d-flex justify-content-end flex-wrap">
          <Link className="btn btnCreate rounded-pill" to="/create">
            <span className="fa fa-plus-circle pr-2"></span>
            Create
          </Link>
        </Row>
        <Row>
          <TableListTodo />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Todo;

import React, { Fragment, useEffect } from "react";
import TableListTodo from "../components/Table/TableListTodo";
import { Container, Row } from "reactstrap";
import { useDispatch } from "react-redux";
import { addDataTodo } from "../store/actions";
import axios from "axios";
import { Link } from "react-router-dom";
const Todo = () => {
  return (
    <Fragment>
      <Container>
        <Row className="d-flex justify-content-between flex-wrap">
          <span className="font-weight-bold">List To Do</span>
          <Link to="/create">+ Create</Link>
        </Row>
        <Row>
          <TableListTodo />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Todo;

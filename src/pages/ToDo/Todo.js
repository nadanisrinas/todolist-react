import React, { Fragment, useEffect, useState } from "react";
import TableListTodo from "../../components/Table/TableListTodo";
import { Container, Row, Alert } from "reactstrap";
import { Link } from "react-router-dom";
//css
import "../../assets/styles/button.css";
const Todo = (props) => {
  let dataSuccess = props.location.state;
  const [success, setSuccess] = useState(false);
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (dataSuccess) {
      setSuccess(dataSuccess.success);
      setTitle(dataSuccess.title);
    }
  }, [success, title, dataSuccess]);
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
        {dataSuccess && (
          <Row>
            <Alert className="w-100" color={success ? "success" : "danger"} isOpen={success}>
              To Do <span className="font-weight-bold">{title}</span> Berhasil Di Buat
            </Alert>
          </Row>
        )}
        <Row>
          <TableListTodo />
        </Row>
      </Container>
    </Fragment>
  );
};

export default Todo;

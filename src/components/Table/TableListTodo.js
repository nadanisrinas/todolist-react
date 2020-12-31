import React, { Fragment, useState } from "react";
import { Table, Button } from "reactstrap";
import ModalCreateTodo from "../Modal/ModalCreateTodo";
const TableListTodo = () => {
  //toggle modal detail
  //   const [dataDetail, setDataDetail] = useState("");
  const [modalDetail, setModalDetail] = useState(false);
  //get data to do
  const handleModalDetail = () => {
    // setDataDetail
    setModalDetail(!modalDetail);
  };
  return (
    <Fragment>
      <ModalCreateTodo
        // dataDetail
        modalDetail={modalDetail}
        toggleModalDetail={() => setModalDetail(!modalDetail)}
      />
      <Table striped>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
            <th>status</th>
            <th>createdAt</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <td>id</td>
          <td>title</td>
          <td>description</td>
          <td>status</td>
          <td>createdAt</td>
          <td>
            <Button onClick={() => handleModalDetail()}>Detail</Button>
          </td>
        </tbody>
      </Table>
    </Fragment>
  );
};

export default TableListTodo;

import React, { Fragment, useState, useEffect, useMemo } from "react";
import { Table, Button } from "reactstrap";
import ModalCreateTodo from "../Modal/ModalCreateTodo";
import axios from "axios";
import moment from "moment";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
const TableListTodo = () => {
  const dataTodo = useSelector((state) => state.dataReducer.dataTodo);
  //toggle modal detail
  const [dataDetail, setDataDetail] = useState({});
  const [modalDetail, setModalDetail] = useState(false);
  //get data to do
  const handleModalDetail = (data) => {
    setDataDetail(data);
    setModalDetail(!modalDetail);
  };
  return (
    <Fragment>
      <ModalCreateTodo dataDetail={dataDetail} modalDetail={modalDetail} toggleModalDetail={() => setModalDetail(!modalDetail)} />
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
          {Array.isArray(dataTodo) && dataTodo.length ? (
            dataTodo.map((data, index) => (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.description}</td>
                <td>{data.status === "0" ? "Not Complete" : "Complete"}</td>
                <td>{moment(data.createdAt, "YYYY-MM-DD hh:ss").format("DD-MM-YYYY")}</td>
                <td>
                  <Button onClick={() => handleModalDetail(data)}>Detail</Button>
                </td>
              </tr>
            ))
          ) : (
            <Skeleton count={10} />
          )}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default TableListTodo;

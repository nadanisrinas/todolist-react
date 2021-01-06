import React, { Fragment, useState } from "react";
import { Table, Button, Col, Row } from "reactstrap";
import ModalCreateTodo from "../Modal/ModalCreateTodo";
import ModalDelete from "../Modal/ModalDelete";
import moment from "moment";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import _ from "lodash";
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
  //modal delete
  const [dataDelete, setDataDelete] = useState({});
  const [modalDelete, setModalDelete] = useState(false);
  const handleDelete = (data) => {
    setDataDelete(data);
    setModalDelete(!modalDelete);
  };

  let SortedDataToDo = _.partition(dataTodo, { status: 0 }); // partition status 0 and 1
  let DataReverse = SortedDataToDo[1].reverse().concat(SortedDataToDo[0]); // reverse data and concat data
  return (
    <Fragment>
      <ModalDelete dataDelete={dataDelete} modalDelete={modalDelete} toggleModalDelete={() => setModalDelete(!modalDelete)} />
      <ModalCreateTodo dataDetail={dataDetail} modalDetail={modalDetail} toggleModalDetail={() => setModalDetail(!modalDetail)} />
      <Table responsive striped>
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
          {Array.isArray(dataTodo) && dataTodo.length && DataReverse.length ? (
            DataReverse.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.title}</td>
                  <td>{data.description}</td>
                  <td className={data.status == 0 ? "textNotComplete" : "textComplete"}>{data.status == 0 ? "Not Complete" : "Complete"}</td>
                  <td>{moment(data.createdAt, "YYYY-MM-DD hh:ss").format("DD-MM-YYYY")}</td>
                  <td>
                    <Row>
                      <Col lg="6" md="12" xs="12">
                        <Button className="w-100 btnCreate" onClick={() => handleModalDetail(data)}>
                          Detail
                        </Button>
                      </Col>
                      <Col lg="6" md="12" xs="12">
                        {data.status == 1 && (
                          <Button color="danger" className=" w-100 ml-1" onClick={() => handleDelete(data)}>
                            <span className="fa fa-trash pr-1"></span>
                            Delete
                          </Button>
                        )}
                      </Col>
                    </Row>
                  </td>
                </tr>
              );
            })
          ) : (
            <Skeleton count={10} />
          )}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default TableListTodo;

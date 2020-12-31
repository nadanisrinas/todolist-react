import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container } from "reactstrap";
import FormEditTodo from "../Form/FormEditTodo";

const ModalCreateTodo = (props) => {
  const { modalDetail, toggleModalDetail, dataDetail, className } = props;
  console.log("dataDetail", dataDetail);
  return (
    <div>
      <Modal size="lg" isOpen={modalDetail} toggle={toggleModalDetail} className={className}>
        <ModalHeader toggle={toggleModalDetail}>Detail To Do</ModalHeader>
        <ModalBody>
          <Container>
            <FormEditTodo dataDetail={dataDetail} toggleModalDetail={toggleModalDetail} />
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModalDetail}>
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggleModalDetail}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalCreateTodo;

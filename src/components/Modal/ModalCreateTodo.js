import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container } from "reactstrap";
import FormEditTodo from "../Form/FormEditTodo";

const ModalCreateTodo = (props) => {
  const { modalDetail, toggleModalDetail, dataDetail, className } = props;
  return (
    <div>
      <Modal size="lg" isOpen={modalDetail} toggle={toggleModalDetail} className={className}>
        <ModalHeader toggle={toggleModalDetail}>Detail To Do</ModalHeader>
        <ModalBody>
          <Container>
            <FormEditTodo dataDetail={dataDetail} toggleModalDetail={toggleModalDetail} />
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalCreateTodo;

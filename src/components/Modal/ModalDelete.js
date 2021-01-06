import { Modal, ModalHeader, ModalBody, Container, ModalFooter, Button } from "reactstrap";
import { deleteDataTodo } from "../../store/actions";
import { useDispatch } from "react-redux";

const ModalCreateTodo = (props) => {
  const dispatch = useDispatch();
  const { modalDelete, toggleModalDelete, dataDelete, className } = props;
  const handleDelete = (data) => {
    dispatch(
      deleteDataTodo({
        id: data.id,
        title: data.title,
        description: data.description,
        status: data.status,
        createdAt: new Date(),
      })
    );
    toggleModalDelete();
  };
  return (
    <div>
      <Modal size="lg" isOpen={modalDelete} toggle={toggleModalDelete} className={className}>
        <ModalHeader toggle={toggleModalDelete}>Delete To Do {dataDelete.title}</ModalHeader>
        <ModalBody>
          <Container>Anda yakin ingin menghapus data ini ?</Container>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => handleDelete(dataDelete)}>
            <span className="fa fa-trash pr-1"></span>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalCreateTodo;

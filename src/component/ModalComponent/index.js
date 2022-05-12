import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";

import { closeModal } from "../../store/modal/action";

export const ModalComponent = (props) => {
  const dispatch = useDispatch();

  const isOpenModal = useSelector((state) => state.isopenmodal.modalState);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          {/*<ModalHeader>{props.modalTitle}</ModalHeader>
          <ModalCloseButton />
           <ModalBody>{props.children}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
          {props.children}
        </ModalContent>
      </Modal>
    </>
  );
};

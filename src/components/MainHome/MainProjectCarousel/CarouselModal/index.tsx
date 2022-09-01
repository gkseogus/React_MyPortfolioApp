import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import styled from "styled-components";

const ModalBtn = styled.button`
  color: black;
  font-size: 20px;
  font-family: "Kanit", sans-serif;
  background-color: none;
  :hover {
    color: red;
  }
  @media screen and (max-width: 500px) {
    color: white;
  }
`;

const CarouselModal = ({ moreText }: { moreText: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <ModalBtn onClick={onOpen}>More</ModalBtn>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader style={{ textAlign: "center" }}>상세내용</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{moreText}</ModalBody>
          <ModalFooter>
            <Button
              style={{ textAlign: "center" }}
              colorScheme="gray"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CarouselModal;

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

const ModalTitle = styled.p`
  font-family: "Do Hyeon", sans-serif;
  font-weight: 600;
  font-size: 32px;
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const ModalText = styled.p`
  font-family: "Do Hyeon", sans-serif;
  font-weight: 300;
  font-size: 20px;
  text-align: center;
  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

const CarouselModal = ({
  moreText,
  moreTitle,
}: {
  moreText: string;
  moreTitle: string;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <ModalBtn onClick={onOpen}>More</ModalBtn>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader style={{ textAlign: "center" }}>상세내용</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModalTitle>{moreTitle}</ModalTitle>
          </ModalBody>
          <ModalBody>
            <ModalText>{moreText}</ModalText>
          </ModalBody>
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

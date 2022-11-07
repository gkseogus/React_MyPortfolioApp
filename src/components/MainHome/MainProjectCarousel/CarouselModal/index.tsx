import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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
  color: white;
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

const CarouselModal = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalId, setModalId] = useState("");
  const { t } = useTranslation<string>("");

  /** Function that takes you to the content page of the article when you click on the title */
  const handleContentsPage = (id: any) => {
    setModalId(id);
  };

  return (
    <div>
      <ModalBtn
        onClick={() => {
          onOpen();
          handleContentsPage(props.modalId);
        }}
      >
        {t("homeMoreBtn")}
      </ModalBtn>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {props.modalData.map((item: any) =>
          modalId === item.id ? (
            <ModalContent>
              <ModalHeader style={{ textAlign: "center" }}>
                상세내용
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <ModalTitle>{item.title}</ModalTitle>
              </ModalBody>
              <ModalBody>
                <ModalText>{item.modalText}</ModalText>
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
          ) : null
        )}
      </Modal>
    </div>
  );
};

export default React.memo(CarouselModal);

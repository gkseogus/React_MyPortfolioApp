import React, { useRef, useState } from "react";
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
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import styled from "styled-components";

const JoinContain = styled.div`
  position: absolute;
  margin-top: 0.5%;
  margin-left: 4%;
  z-index: 2;
`;

const JoinComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation<string>("");

  const TestAlert = () => {
    alert("테스트 중 입니다.");
  };

  return (
    <JoinContain>
      <Button colorScheme="messenger" variant="ghost" onClick={onOpen}>
        {t("boardJoinModalButton")}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t("boardJoinModalHeader")}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>{t("boardJoinModalLabel1")}</FormLabel>
              <Input type={"email"} placeholder="E-mail" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>{t("boardJoinModalLabel2")}</FormLabel>
              <Input type="password" placeholder="Password" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={TestAlert}>
              {t("boardJoinModalBtn")}
            </Button>
            <Button onClick={onClose}>{t("boardJoinModalCloseBtn")}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </JoinContain>
  );
};

export default JoinComponent;

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

const LoginContain = styled.div`
  position: absolute;
  margin-top: 0.5%;
  z-index: 2;
`;

const LoginComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation<string>("");

  const TestAlert = () => {
    alert("테스트 중 입니다.");
  };

  return (
    <LoginContain>
      <Button colorScheme="messenger" variant="ghost" onClick={onOpen}>
        {t("boardLoginModalButton")}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t("boardLoginModalHeader")}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>{t("boardLoginModalLabel1")}</FormLabel>
              <Input type={"email"} placeholder="E-mail" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>{t("boardLoginModalLabel2")}</FormLabel>
              <Input type="password" placeholder="Password" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={TestAlert}>
              {t("boardLoginModalLoginBtn")}
            </Button>
            <Button onClick={onClose}>{t("boardLoginModalCloseBtn")}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </LoginContain>
  );
};

export default LoginComponent;

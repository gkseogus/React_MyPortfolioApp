import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Collapse, useDisclosure } from "@chakra-ui/react";
import { BsFillPersonFill } from "react-icons/bs";
import styled from "styled-components";

const TransitionsButton = styled.button`
  background-color: none;
`;

const InputTitle = styled.div`
  color: red;
  position: absolute;
  font-family: "Kanit", sans-serif;
  font-size: 15px;
`;

const InputText = styled.article`
  text-align: center;
  font-family: "Kanit", sans-serif;
  font-size: 15px;
`;

const MainAboutMo = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { t } = useTranslation("");

  return (
    <div>
      <TransitionsButton onClick={onToggle}>
        <BsFillPersonFill />
      </TransitionsButton>
      <Collapse in={isOpen} animateOpacity>
        <Box p="40px" color="white" mt="4" bg="black" rounded="md" shadow="md">
          <InputText>
            <InputTitle>Name:</InputTitle> {t("homeMoAboutMeName")} <br />
            <InputTitle>Jop:</InputTitle> {t("homeMoAboutMeJop")} <br />
            <InputTitle>Skill:</InputTitle> React & Redux ...
            <br />
            <InputTitle>Call:</InputTitle> 010-2246-6787 <br />
            <InputTitle>e-mail:</InputTitle> fbznffldj998@naver.com
          </InputText>
        </Box>
      </Collapse>
    </div>
  );
};

export default React.memo(MainAboutMo);

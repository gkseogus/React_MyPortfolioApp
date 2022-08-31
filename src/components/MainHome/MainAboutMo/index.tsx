import { Box, Collapse, useDisclosure } from "@chakra-ui/react";
import { BsFillPersonFill } from "react-icons/bs";
import styled from "styled-components";

const TransitionsButton = styled.button`
  background-color: none;
`;

const InputText = styled.div`
  text-align: center;
  font-family: "Kanit", sans-serif;
  font-size: 15px;
`;

const MainAboutMo = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <TransitionsButton onClick={onToggle}>
        <BsFillPersonFill />
      </TransitionsButton>
      <Collapse in={isOpen} animateOpacity>
        <Box p="40px" color="white" mt="4" bg="black" rounded="md" shadow="md">
          <InputText>
            Name: Han Dae Hyeon <br /> Jop: Front Dev <br /> Skill: React &
            Redux ...
            <br />
            call: 010-2246-6787 <br /> e-mail: fbznffldj998@naver.com
          </InputText>
        </Box>
      </Collapse>
    </div>
  );
};

export default MainAboutMo;

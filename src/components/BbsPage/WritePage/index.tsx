import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input, Textarea } from "@chakra-ui/react";
import BbsPage from "..";

const Contain = styled.div`
  display: flex;
  justify-content: center;
  padding: 20%;
`;

const ContentsContain = styled.div`
  width: 100%;
`;

const SubContentsContain = styled.div`
  padding: 3%;
`;

const TextContain = styled.p`
  font-size: 24px;
  font-weight: 600px;
  font-family: "Kanit", sans-serif;
  text-align: center;
`;

const BtnContain = styled.div`
  float: right;
`;

const WritePage = () => {
  const [write, setWrite] = useState(false);

  const changeWritePage = () => {
    setWrite(!write);
  };

  return (
    <div>
      {write ? (
        <BbsPage />
      ) : (
        <Contain>
          <ContentsContain>
            <SubContentsContain>
              <TextContain>제목</TextContain>
              <Input placeholder="title" />
            </SubContentsContain>
            <SubContentsContain>
              <TextContain>내용</TextContain>
              <Textarea placeholder="content" size={"lg"} variant="outline" />
            </SubContentsContain>
            <BtnContain>
              <Button
                colorScheme="teal"
                variant="ghost"
                onClick={changeWritePage}
              >
                작성완료
              </Button>
              <Button
                colorScheme="teal"
                variant="ghost"
                onClick={changeWritePage}
              >
                목록
              </Button>
            </BtnContain>
          </ContentsContain>
        </Contain>
      )}
    </div>
  );
};

export default WritePage;

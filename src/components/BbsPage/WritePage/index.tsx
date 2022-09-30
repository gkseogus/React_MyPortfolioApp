import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input, Textarea } from "@chakra-ui/react";
import BbsPage from "..";
import axios from "axios";

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

const TRtextContain = styled.div`
  width: 25%;
`;

const ContentText = styled.p`
  font-size: 24px;
  font-weight: 600px;
  font-family: "Kanit", sans-serif;
  text-align: left;
`;

const BtnContain = styled.div`
  float: right;
`;

const WritePage = () => {
  const [write, setWrite] = useState(false);
  const [writeData, setWriteData] = useState({
    title: "",
    content: "",
    register: "",
  });

  const changeWritePage = () => {
    setWrite(!write);
  };

  const writePost = async () => {
    try {
      //Successful response
      await axios.post("http://localhost:8000/api/insert", {
        title: writeData.title,
        content: writeData.content,
        register: writeData.register,
      });
      setWrite(!write);
    } catch (error) {
      //Failed to respond
      console.log("write error", error);
    }
  };

  //input에 입력될 때마다 writeData state값 변경되게 하는 함수
  const handleChange = (e: any) => {
    setWriteData({ ...writeData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {write ? (
        <BbsPage />
      ) : (
        <Contain>
          <ContentsContain>
            <SubContentsContain>
              <TRtextContain>
                <ContentText>제목</ContentText>
                <Input
                  type={"text"}
                  name="title"
                  placeholder="title"
                  maxLength={10}
                  marginBottom={5}
                  onChange={handleChange}
                />
                <ContentText>작성자</ContentText>
                <Input
                  type={"text"}
                  name="register"
                  placeholder="register"
                  maxLength={10}
                  marginBottom={5}
                  onChange={handleChange}
                />
              </TRtextContain>
              <ContentText>내용</ContentText>
              <Textarea
                as={"textarea"}
                name="content"
                placeholder="content"
                size={"lg"}
                variant="outline"
                onChange={handleChange}
              />
            </SubContentsContain>
            <BtnContain>
              <Button colorScheme="teal" variant="ghost" onClick={writePost}>
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

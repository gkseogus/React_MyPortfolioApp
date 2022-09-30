import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input, Textarea, useToast } from "@chakra-ui/react";
import axios from "axios";
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
    register: "",
    content: "",
  });
  const toast = useToast();

  // 글 작성 페이지로 이동
  const changeWritePage = () => {
    setWrite(!write);
    window.scrollTo(0, 0);
  };
  const writeErrorToast = (toastTitle: string) => {
    toast({
      title: `${toastTitle} 입력해주세요.`,
      position: "top-right",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };
  const writePost = async () => {
    if (!writeData.title) {
      writeErrorToast("제목을");
    } else if (!writeData.register) {
      writeErrorToast("작성자를");
    } else if (!writeData.content) {
      writeErrorToast("내용을");
    } else {
      try {
        //Successful response
        await axios.post("http://localhost:8000/api/insert", {
          title: writeData.title,
          register: writeData.register,
          content: writeData.content,
        });
        setWrite(!write);
        window.scrollTo(0, 0);
      } catch (error) {
        //Failed to respond
        console.log("write error", error);
      }
    }
  };

  //input에 입력될 때마다 writeData state값 변경되게 하는 함수
  const handleChange = (e: any) => {
    setWriteData({ ...writeData, [e.target.name]: e.target.value.trim() });
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

import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Container, Box, Button, useToast } from "@chakra-ui/react";
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

const TitleText = styled.p`
  font-size: 36px;
  font-weight: 600px;
  font-family: "Do Hyeon", sans-serif;
  text-align: left;
`;

const RegisterText = styled.p`
  font-size: 16px;
  font-weight: 600px;
  font-family: "Do Hyeon", sans-serif;
  text-align: left;
`;

const ContentText = styled.p`
  font-size: 24px;
  font-weight: 600px;
  font-family: "Do Hyeon", sans-serif;
  text-align: center;
  padding-top: 10%;
`;

const BtnContain = styled.div`
  float: right;
`;

const ContentsPage = (props: any) => {
  const [bbsPage, setBbsPage] = useState(false);
  const toast = useToast();
  /** Functions that go to the list of articles page */
  const handleWritePage = () => {
    setBbsPage(!bbsPage);
    window.scrollTo(0, 0);
  };

  /** List delete function */
  const handleDelete = async () => {
    if (window.confirm("해당 게시물을 삭제하시겠습니까?") === true) {
      let boardId: number = props.id;
      try {
        //Successful response
        await axios.post("http://localhost:8000/api/contentsDelete", {
          boardId,
        });
        setBbsPage(!bbsPage);
      } catch (error) {
        //Failed to respond
        console.log("write error", error);
      }
    } else {
      toast({
        title: "게시물 삭제를 취소하였습니다.",
        position: "top-right",
        status: "info",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  return (
    <div>
      {bbsPage ? (
        <BbsPage />
      ) : (
        <Contain>
          <ContentsContain>
            <SubContentsContain>
              {props.bbsData.map((item: any) =>
                props.id === item.id ? (
                  <div>
                    <TitleText>{item.title}</TitleText>
                    <RegisterText>
                      {item.register} | {item.date}
                    </RegisterText>
                    <ContentText>내용</ContentText>
                    <Container maxW="2xl" centerContent>
                      <Box padding="4" maxW="md">
                        <p>{item.contents}</p>
                      </Box>
                    </Container>
                  </div>
                ) : null
              )}
            </SubContentsContain>
            <BtnContain>
              <Button
                colorScheme="messenger"
                variant="ghost"
                onClick={handleWritePage}
              >
                목록
              </Button>
              <Button
                colorScheme="messenger"
                variant="ghost"
                onClick={handleDelete}
              >
                삭제
              </Button>
            </BtnContain>
          </ContentsContain>
        </Contain>
      )}
    </div>
  );
};

export default React.memo(ContentsPage);

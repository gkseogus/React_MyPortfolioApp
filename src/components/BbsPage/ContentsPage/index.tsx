import React, { useState } from "react";
import styled from "styled-components";
import { Container, Box, Button } from "@chakra-ui/react";
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

  // 글 목록 페이지로 이동
  const changeWritePage = () => {
    setBbsPage(!bbsPage);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {bbsPage ? (
        <BbsPage />
      ) : (
        <Contain>
          <ContentsContain>
            <SubContentsContain>
              <TitleText>{props.bbsData[0].title}</TitleText>
              <RegisterText>
                {props.bbsData[0].register} | {props.bbsData[0].date}
              </RegisterText>
              <ContentText>내용</ContentText>
              <Container maxW="2xl" centerContent>
                <Box padding="4" maxW="md">
                  <p>{props.bbsData[0].contents}</p>
                </Box>
              </Container>
            </SubContentsContain>
            <BtnContain>
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

export default ContentsPage;
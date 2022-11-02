import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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

const RegisterContain = styled.div`
  width: 23%;
`;

const TitleContain = styled.div`
  width: 42%;
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
  const [bbsPage, setBbsPage] = useState(false);
  const [writeData, setWriteData] = useState({
    title: "",
    register: "",
    content: "",
  });
  const { t } = useTranslation("");
  const toast = useToast();
  let writeInterval: string | number | NodeJS.Timeout | null | undefined = null;

  /** Functions that go to the list of articles page */
  const handleWritePage = () => {
    setBbsPage(!bbsPage);
    window.scrollTo(0, 0);
  };

  /** Error toast function */
  const writeErrorToast = (toastTitle: string) => {
    toast({
      title: `${toastTitle} ${t("boardWritePageErrorToast4")}`,
      position: "top-right",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };

  /** A function that stores the created text in db */
  const writePost = async () => {
    if (!writeData.register) {
      writeErrorToast(t("boardWritePageErrorToast1"));
    } else if (!writeData.title) {
      writeErrorToast(t("boardWritePageErrorToast2"));
    } else if (!writeData.content) {
      writeErrorToast(t("boardWritePageErrorToast3"));
    } else {
      try {
        //Successful response
        await axios.post("http://localhost:8000/api/boardInsert", {
          title: writeData.title,
          register: writeData.register,
          content: writeData.content,
        });
        setBbsPage(!bbsPage);
        toast({
          title: t("boardWritePageSuccessToast"),
          position: "top-right",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        window.scrollTo(0, 0);
      } catch (error) {
        //Failed to respond
        console.log("write error", error);
      }
    }
  };

  /** A function that is entered in "input" and causes the state value of writeData to change every 0.1 seconds */
  const handleChange = (e: any) => {
    if (writeInterval) clearTimeout(writeInterval);
    writeInterval = setTimeout(() => {
      setWriteData({ ...writeData, [e.target.name]: e.target.value.trim() });
    }, 100);
  };

  return (
    <div>
      {bbsPage ? (
        <BbsPage />
      ) : (
        <Contain>
          <ContentsContain>
            <SubContentsContain>
              <RegisterContain>
                <ContentText>{t("boardWriteRegister")}</ContentText>
                <Input
                  type={"text"}
                  name="register"
                  placeholder={t("boardWriteRegisterPH")}
                  maxLength={10}
                  marginBottom={5}
                  onChange={handleChange}
                />
              </RegisterContain>
              <TitleContain>
                <ContentText>{t("boardWriteTitle")}</ContentText>
                <Input
                  type={"text"}
                  name="title"
                  placeholder={t("boardWriteTitlePH")}
                  maxLength={50}
                  marginBottom={5}
                  onChange={handleChange}
                />
              </TitleContain>

              <ContentText>{t("boardWriteContent")}</ContentText>
              <Textarea
                as={"textarea"}
                name="content"
                placeholder={t("boardWriteContentPH")}
                size={"lg"}
                variant="outline"
                maxLength={1000}
                onChange={handleChange}
              />
            </SubContentsContain>
            <BtnContain>
              <Button colorScheme="blue" variant="ghost" onClick={writePost}>
                {t("boardWriteCreateBtn")}
              </Button>
              <Button
                colorScheme="messenger"
                variant="ghost"
                onClick={handleWritePage}
              >
                {t("boardWriteListBtn")}
              </Button>
            </BtnContain>
          </ContentsContain>
        </Contain>
      )}
    </div>
  );
};

export default React.memo(WritePage);

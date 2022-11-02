import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Breadcrumb, BreadcrumbItem, useToast } from "@chakra-ui/react";
import myIcon from "./IMG/myIcon.svg";
import githubLogo from "./IMG/githubLogo.svg";
import mailLogo from "./IMG/mailLogo.svg";

const BreadcrumbContain = styled.div`
  float: right;
  padding-right: 3%;
  padding-top: 10%;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const BreadcrumbItemText = styled.article`
  font-family: "Kanit", sans-serif;
`;

const Wrap = styled.div`
  position: relative;
  width: 1194px;
  height: 1400px;
  left: 50%;
  margin-left: -597px;
  background: none;
  @media screen and (max-width: 500px) {
    width: 500px;
  }
`;

const PeopleWrap = styled.div`
  position: relative;
  display: flex;
`;

const People = styled.div`
  position: relative;
  width: 234px;
  height: 315px;
  margin-left: 39.5%;
  top: 300px;
  @media screen and (max-width: 500px) {
    position: absolute;
    margin-left: 93%;
  }
`;

const Position = styled.p`
  display: flex;
  flex-direction: row;
  font-family: "Kanit", sans-serif;
  align-items: flex-start;
  padding: 8px 16px;
  gap: 10px;
  position: absolute;
  left: 0%;
  right: 55.56%;
  top: 5.71%;
  bottom: 82.54%;
  z-index: 1;
  background: #000000;
  border-radius: 30px;
`;

const PositionContain = styled.div`
  width: 72px;
  height: 21px;
  margin: 0;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
  z-index: 2;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const ImgContain = styled.img`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  left: 14.53%;
  right: 0%;
  top: 0%;
  bottom: 36.51%;
  background-color: rgb(211, 211, 211);
`;

const NameWrap = styled.div`
  position: absolute;
  left: 16.31%;
  right: 29.49%;
  top: 69.84%;
  bottom: 0%;
`;

const Name = styled.article`
  position: absolute;
  width: 155px;
  height: 24px;
  left: 18px;
  bottom: 71px;
  margin: 0;
  font-family: "Kanit", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
`;

const EmailWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 4.47px;
  position: absolute;
  width: 58.37px;
  height: 17.89px;
  right: 62%;
  top: 39px;
`;

const EmialLogoContain = styled.img`
  width: 20px;
  height: 20px;
`;

const Email = styled.article`
  width: 360px;
  height: 17px;
  margin-left: 10px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 14.3158px;
  line-height: 17px;
  text-align: center;
`;

const GithubWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 4.47px;
  text-align: center;
  margin: 0;
  position: absolute;
  width: 68.37px;
  height: 17.89px;
  right: 55%;
  top: 64.05px;
`;

const GitHubLogoContain = styled.img`
  width: 20px;
  height: 20px;
`;

const Github = styled.button`
  width: 170px;
  height: 17px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 14.3158px;
  line-height: 17px;
  margin: 0;
  text-align: center;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const Form = styled.form`
  position: relatvie;
  bottom: 0;
  margin-top: 600px;
`;

const FormTitle = styled.article`
  position: absolute;
  width: 311px;
  height: 48px;
  left: 445px;
  top: 890px;
  font-family: "Kanit", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
`;

const FormMyEmail = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 6px;
  position: absolute;
  width: 210px;
  height: 29px;
  left: 492px;
  top: 990px;
  text-align: center;
  background-color: white;
  border: none;
  border-bottom: 3px solid black;
  ::placeholder {
    color: #000000;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
  }
`;

const FormDevEmail = styled.select`
  position: absolute;
  width: 280px;
  height: 35px;
  left: 457px;
  top: 1030px;
  text-align: center;
  background-color: white;
  border: none;
  border-bottom: 3px solid black;
  color: #000000;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  padding-bottom: 10px;
`;

const FormEmailTitle = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 6px;
  position: absolute;
  width: 300px;
  height: 29px;
  left: 447px;
  top: 1120px;
  text-align: center;
  background-color: white;
  border: none;
  border-bottom: 3px solid black;
  ::placeholder {
    color: #000000;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
  }
`;

const FormContent = styled.textarea`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 6px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  position: absolute;
  width: 300px;
  height: 29px;
  left: 447px;
  top: 1170px;
  text-align: center;
  overflow-y: hidden;
  resize: none;
  background-color: white;
  border: none;
  border-bottom: 3px solid black;
  max-height: 66px;
  ::placeholder {
    color: #000000;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
  }
`;

const FormBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 30px;
  gap: 10px;
  position: absolute;
  width: 109px;
  height: 48px;
  left: 543px;
  top: 1265px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  background: black;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
    background-color: red;
  }
`;

const FormBtnContent = styled.p`
  margin-top: -1px;
  font-family: "Kanit", sans-serif;
`;

const Iframe = styled.iframe`
  display: "none";
`;

const EmailPage = () => {
  let docUrl =
    "https://script.google.com/macros/s/AKfycbwFfVb-8MSnYz44Ex7OS_rGqvtwNQM_qhy_wdwlB0JpvTkegUwWeZeXSXkwI9-RfEdf5Q/exec";
  const docsList =
    "https://script.google.com/macros/s/AKfycbwFfVb-8MSnYz44Ex7OS_rGqvtwNQM_qhy_wdwlB0JpvTkegUwWeZeXSXkwI9-RfEdf5Q/exec";
  const selectList = "fbznffldj998@naver.com";
  const [Selected, setSelected] = useState("");
  const toast = useToast();
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const { t } = useTranslation("");

  /** Drop-down Select Event Handler Function */
  const handleSelect = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelected(e.target.value);
  };

  /** Site Load Function */
  const handleGetDomain = (domain: string) => {
    window.open(domain);
  };

  /** Toast component return function according to message */
  const handleSendMessage = () => {
    if (Selected === undefined) {
      return toast({
        title: "이메일을 선택해 주세요.",
        position: "top-right",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    } else {
      return toast({
        title: "메시지가 전송되었습니다.",
        position: "top-right",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <BreadcrumbContain>
        <Breadcrumb separator="/">
          <BreadcrumbItem>
            <BreadcrumbItemText>{t("emailBreadcrumbItem1")}</BreadcrumbItemText>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbItemText>{t("emailBreadcrumbItem2")}</BreadcrumbItemText>
          </BreadcrumbItem>
        </Breadcrumb>
      </BreadcrumbContain>
      <Wrap>
        <PeopleWrap>
          <People>
            <PositionContain>
              <Position>FE</Position>
            </PositionContain>
            <ImgContain src={myIcon} alt="myIcon" />
            <NameWrap>
              <Name>{t("emailMyName")}</Name>
              <EmailWrap>
                <EmialLogoContain src={mailLogo} alt="gmailLogo" />
                <Email>fbznffldj998@naver.com</Email>
              </EmailWrap>
              <GithubWrap>
                <GitHubLogoContain src={githubLogo} alt="githubLogo" />
                <Github
                  onClick={() => {
                    handleGetDomain("https://github.com/gkseogus");
                  }}
                >
                  github.com/gkseogus
                </Github>
              </GithubWrap>
            </NameWrap>
          </People>
        </PeopleWrap>
        {Selected === "fbznffldj998@naver.com" ? (docUrl = docsList) : null}
        <Form method="post" action={docUrl} target="iframe1">
          <FormTitle>{t("emailSend")}</FormTitle>
          <div>
            <div>
              <FormMyEmail
                type="email"
                id="email"
                name="email"
                placeholder={t("emailAddress")}
              />
            </div>
            <div>
              <FormDevEmail
                id="usr"
                name="username"
                placeholder="Select an address to send to"
                onChange={handleSelect}
                value={Selected}
              >
                <option>{t("emailSelect")}</option>
                <option value={selectList}>{selectList}</option>
              </FormDevEmail>
            </div>
          </div>
          <div>
            <FormEmailTitle
              id="title"
              name="title"
              placeholder={t("emailWriteTitle")}
              ref={titleRef}
            />
          </div>
          <div>
            <FormContent
              id="comment"
              name="message"
              placeholder={t("emailWriteContent")}
              ref={textRef}
            ></FormContent>
          </div>
          <FormBtn type="submit">
            <FormBtnContent onClick={handleSendMessage}>
              {t("emailSendBtn")}
            </FormBtnContent>
          </FormBtn>
        </Form>
      </Wrap>
      <Iframe id="iframe1" name="iframe1" style={{ display: "none" }} />
    </div>
  );
};

export default React.memo(EmailPage);

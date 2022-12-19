import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import TimeLine from "./TimeLine";

const Contain = styled.section`
  padding: 10%;
  position: relative;
`;

const CenterContentsText = styled.article`
  padding-bottom: 10%;
  text-align: center;
  font-size: 64px;
  font-weight: 600px;
  font-family: "Kanit", sans-serif;
  line-height: 1.27;
  letter-spacing: 0px;
  @media screen and (max-width: 500px) {
    padding-top: 50%;
    padding-bottom: 20%;
    font-size: 20px;
    text-align: center;
  }
`;

const CareerPage = () => {
  const { t } = useTranslation<string>("");

  return (
    <Contain>
      <CenterContentsText>{t("careerTitle")}</CenterContentsText>
      <TimeLine />
    </Contain>
  );
};

export default React.memo(CareerPage);

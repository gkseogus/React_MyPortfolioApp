import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import TimeLine from "./TimeLine";

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

const Contain = styled.section`
  padding: 15%;
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
    <div>
      <BreadcrumbContain>
        <Breadcrumb separator="/">
          <BreadcrumbItem>
            <BreadcrumbItemText>
              {t("careerBreadcrumbItem1")}
            </BreadcrumbItemText>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbItemText>
              {t("careerBreadcrumbItem2")}
            </BreadcrumbItemText>
          </BreadcrumbItem>
        </Breadcrumb>
      </BreadcrumbContain>
      <Contain>
        <CenterContentsText>{t("careerTitle")}</CenterContentsText>
        <TimeLine />
      </Contain>
    </div>
  );
};

export default React.memo(CareerPage);

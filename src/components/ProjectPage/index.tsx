import React from "react";
import { useTranslation } from "react-i18next";
import styled, { keyframes } from "styled-components";
import SkillCardsItem from "./SkillCardsItem";
import ProjectCarousel from "./ProjectCarousel";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";

const ProjectPageContain = styled.section`
  position: relative;
`;

const BreadcrumbContain = styled.div`
  padding-left: 91.73%;
  padding-top: 10%;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const BreadcrumbItemText = styled.article`
  font-family: "Kanit", sans-serif;
  font-display: swap;
`;

/**
 * top: The lower the number, the higher the text
 * width: width length
 */
const Openclose = keyframes`
  0% {
    top: 0.2rem;
    width: 0;
  }
  5% {
    top: 0.2rem;
    width: 0;
  }
  15% {
    top: 0.2rem;
    width: 50%;
  }
  30% {
    top: 0.2rem;
    width: 50%;
  }
  33% {
    top: 0.2rem;
    width: 0;
  }
  35% {
    top: 0.2rem;
    width: 0;
  }
  38% {
    top: -4.5rem;
    width: 0;
  }
  48% {
    top: -4.5rem;
    width: 50%;
  }
  62% {
    top: -4.5rem;
    width: 50%;
  }
  66% {
    top: -4.5rem;
    width: 0;
    text-indent: 0;
  }
  71% {
    top: -9rem;
    width: 0;
    text-indent: 5px;
  }
  86% {
    top: -9rem;
    width: 50%;
  }
  95% {
    top: -9rem;
    width: 50%;
  }
  98% {
    top: -9rem;
    width: 0;
    text-indent: 5px;
  }
  100% {
    top: 0;
    width: 0;
    text-indent: 0;
  }
`;

const MediaOpenclose = keyframes`
  0% {
    top: 0rem;
    width: 0;
  }
  5% {
    top: 0rem;
    width: 0;
  }
  15% {
    top: 0rem;
    width: 45%;
  }
  30% {
    top: 0rem;
    width: 45%;
  }
  33% {
    top: 0rem;
    width: 0;
  }
  35% {
    top: 0rem;
    width: 0;
  }
  38% {
    top: -1.9rem;
    width: 0;
  }
  48% {
    top: -1.9rem;
    width: 50%;
  }
  62% {
    top: -1.9rem;
    width: 50%;
  }
  66% {
    top: -1.9rem;
    width: 0;
  }
  71% {
    top: -3.7rem;
    width: 0;
    text-indent: 5px;
  }
  86% {
    top: -3.7rem;
    width: 50%;
  }
  95% {
    top: -3.7rem;
    width: 50%;
  }
  98% {
    top: -3.7rem;
    width: 0;
    text-indent: 5px;
  }
  100% {
    top: 0;
    width: 0;
    text-indent: 0;
  }
`;

const Contain = styled.div`
  @media screen and (max-width: 500px) {
    padding-top: 40%;
  }
`;

const FristContentsText = styled.article`
  color: black;
  font-family: tahoma;
  font-display: swap;
  font-size: 3rem;
  font-weight: 100;
  line-height: 1.5;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  width: 550px;
  left: 10%;
  margin: 25%;
  @media screen and (max-width: 500px) {
    font-size: 20px;
    font-weight: 600;
    width: 250px;
    left: -4%;
  }
`;

const Message = styled.div`
  background-color: red;
  color: white;
  display: block;
  font-weight: 900;
  font-display: swap;
  font-family: "Kanit", sans-serif;
  overflow: hidden;
  position: absolute;
  padding-left: 0.5rem;
  top: 0.2rem;
  left: 200px;
  animation: ${Openclose} 5s ease-in-out infinite;
  @media screen and (max-width: 500px) {
    animation: ${MediaOpenclose} 5s ease-in-out infinite;
    left: 100px;
  }
`;

const FirstContentsItem = styled.div`
  padding-bottom: 10%;
  @media screen and (max-width: 500px) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    height: auto;
  }
`;

const ProjectPage = () => {
  const { t } = useTranslation<string>("");

  return (
    <ProjectPageContain>
      <BreadcrumbContain>
        <Breadcrumb separator="/">
          <BreadcrumbItem>
            <BreadcrumbItemText>
              {t("projectBreadcrumbItem1")}
            </BreadcrumbItemText>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbItemText>
              {t("projectBreadcrumbItem2")}
            </BreadcrumbItemText>
          </BreadcrumbItem>
        </Breadcrumb>
      </BreadcrumbContain>
      <Contain>
        <FristContentsText>
          <span>{t("projectTitle")}</span>
          <Message>
            <div>{t("projectSubTitle1")}</div>
            <div>{t("projectSubTitle2")}</div>
            <div>{t("projectSubTitle3")}</div>
          </Message>
        </FristContentsText>
      </Contain>
      <FirstContentsItem>
        <ProjectCarousel />
      </FirstContentsItem>
      <SkillCardsItem />
    </ProjectPageContain>
  );
};

export default React.memo(ProjectPage);

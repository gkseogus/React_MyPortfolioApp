import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Hide, Box, useToast } from "@chakra-ui/react";
import styled, { keyframes } from "styled-components";
import FirstIntroImg from "../MainHome/IMG/FirstIntroImg.png";
import GitHubSocialCard from "../MainHome/GitHubSocialCard/index";
import MainProjectCarousel from "./MainProjectCarousel";
import IntroCareers from "./CareersCard";
import MainAboutCarousel from "./MainAboutCarousel";
import MainAboutMo from "./MainAboutMo";

const circleAni = keyframes`
  0%{
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(180deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

const gradientIntro = keyframes`
	0%{
        color: white;
    }
    100%{
        color: black;
    }
`;

const animate = keyframes`
0% {
  background-position: -500%;
}
100% {
  background-position: 500%;
}
`;

const IntroContain = styled.div`
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;

const IntroText = styled.h2`
  padding-top: 8%;
  z-index: 7;
  position: relative;
  text-align: left;
  font-size: 64px;
  font-weight: 600px;
  font-family: "Kanit", sans-serif;
  line-height: 1.27;
  letter-spacing: 0px;
  margin-block-start: 2.5em;
  margin-block-end: 2.5em;
  margin-inline-start: 10%;
  margin-inline-end: 10%;
  display: flex;
  animation: ${gradientIntro} 3.5s ease-in-out none;
  @media screen and (max-width: 500px) {
    padding-top: 35%;
    font-size: 20px;
    display: inline-block;
    text-align: center;
  }
`;

const IntroImg = styled.img`
  position: absolute;
  right: 20%;
  transform: translate(-50%, -50%);
  width: 20%;
  height: 35%;
  min-height: 500px;
  min-width: 700px;
  opacity: 0.4;
  animation: ${circleAni} 10s linear infinite;
`;

const CenterContentsText = styled.h2`
  text-align: center;
  font-size: 64px;
  font-weight: 600px;
  font-family: "Kanit", sans-serif;
  line-height: 1.27;
  letter-spacing: 0px;
  @media screen and (max-width: 500px) {
    padding-top: 10%;
    font-size: 20px;
  }
`;

const AboutContain = styled.div`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const AboutMoContain = styled.div`
  color: red;
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

const ContentsText = styled.h2`
  position: relative;
  text-align: left;
  font-size: 64px;
  font-weight: 600px;
  font-family: "Kanit", sans-serif;
  line-height: 1.27;
  letter-spacing: 0px;
  top: 250px;
  margin-inline-start: 20%;
  margin-inline-end: 20%;
  display: flex;
  @media screen and (max-width: 500px) {
    padding-top: 10%;
    font-size: 20px;
    margin-inline-start: 10%;
    margin-inline-end: 10%;
  }
`;

const GitHubLinkContain = styled.div`
  margin-inline-start: 35%;
  @media screen and (max-width: 500px) {
    margin-inline-start: 45%;
    padding-right: 5%;
  }
`;

const SecondIntroText = styled.h2`
  position: relative;
  padding: 15%;
  text-align: center;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 54px;
  font-weight: 900;
  font-family: "Kanit", sans-serif;
  letter-spacing: 4px;
  overflow: hidden;
  background: linear-gradient(90deg, #000, #fff, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: ${animate} 4.5s linear infinite;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  @media screen and (max-width: 500px) {
    font-size: 15px;
    padding-top: 50%;
    padding-bottom: 10%;
  }
`;

const ReverseContain = styled.div`
  margin-inline-start: 60%;
  margin-inline-end: 10%;
  @media screen and (max-width: 500px) {
    margin-inline-start: 0%;
    margin-inline-end: 0%;
  }
`;

const ReverseContentsText = styled.h2`
  position: relative;
  text-align: left;
  font-size: 64px;
  font-weight: 600px;
  font-family: "Kanit", sans-serif;
  line-height: 1.27;
  letter-spacing: 0px;
  top: 250px;
  display: flex;
  @media screen and (max-width: 500px) {
    padding-top: 20%;
    padding-left: 36.5%;
    text-align: center;
    font-size: 20px;
    top: 0;
  }
`;

const ReverseContentsBtn = styled(Link)`
  position: relative;
  padding-left: 34%;
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  font-family: "Kanit", sans-serif;
  line-height: 1.27;
  letter-spacing: 0px;
  top: 300px;
  display: flex;
  color: black;
  :hover {
    color: red;
  }
  @media screen and (max-width: 500px) {
    padding-top: 5%;
    padding-bottom: 10%;
    padding-left: 44%;
    font-size: 20px;
    top: 0;
    margin-inline-start: 0%;
  }
`;

const MainProjectCarouselsContain = styled.div`
  margin-right: 50%;
  margin-bottom: 10%;
  margin-inline-start: 10%;
  @media screen and (max-width: 500px) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    height: auto;
  }
`;

const IntroCareersContain = styled.div`
  text-align: center;
  font-family: "Kanit", sans-serif;
  line-height: 1.27;
  letter-spacing: 0px;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 10%;
  @media screen and (max-width: 500px) {
    padding-left: 16%;
    padding-right: 14%;
  }
`;

const MainHome = () => {
  const toast = useToast();

  const ResetScroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    toast({
      title: "환영합니다.",
      position: "top",
      status: "success",
      duration: 1500,
      isClosable: true,
    });
  }, [toast]);

  return (
    <IntroContain>
      <article>
        <IntroText>
          Welcome to the portfolio blog
          <br />
          of front engineer Han Dae-hyeon
          <Hide below="md">
            <Box boxSize="sm">
              <IntroImg src={FirstIntroImg} alt="FirstIntroImg Img" />
            </Box>
          </Hide>
        </IntroText>
      </article>
      <article>
        <CenterContentsText>About Me</CenterContentsText>
        <AboutContain>
          <MainAboutCarousel />
        </AboutContain>
        <AboutMoContain>
          <MainAboutMo />
        </AboutMoContain>
      </article>
      <article>
        <ContentsText>My Git Hub</ContentsText>
        <GitHubLinkContain>
          <GitHubSocialCard />
        </GitHubLinkContain>
      </article>
      <article>
        <SecondIntroText>
          저의 프로젝트와 기술 스택이 <br />
          궁금하지 않으시나요?
        </SecondIntroText>
        <ReverseContain>
          <ReverseContentsText>My Project</ReverseContentsText>
          <ReverseContentsBtn to={"/Project"} onClick={ResetScroll}>
            More
          </ReverseContentsBtn>
        </ReverseContain>
        <MainProjectCarouselsContain>
          <MainProjectCarousel />
        </MainProjectCarouselsContain>
      </article>
      <article>
        <CenterContentsText>My Career</CenterContentsText>
        <IntroCareersContain>
          <IntroCareers />
        </IntroCareersContain>
      </article>
    </IntroContain>
  );
};

export default React.memo(MainHome);

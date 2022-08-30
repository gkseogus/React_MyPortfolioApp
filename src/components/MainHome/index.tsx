import React from "react";
import { Link } from "react-router-dom";
import { Hide, Box } from "@chakra-ui/react";
import styled, { keyframes } from "styled-components";
import FirstIntroImg from "../MainHome/IMG/FirstIntroImg.png";
import GitHubSocialCard from "../MainHome/GitHubSocialCard/index";
import MainProjectCarousel from "./MainProjectCarousel";
import IntroCareers from "./CareersCard";
import MainAboutCarousel from "./MainAboutCarousel";

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

const gradientContents = keyframes`
    from {
        -webkit-filter: hue-rotate(0deg);
    }
    to {
        -webkit-filter: hue-rotate(-360deg);
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
  top: 1px;
  right: 5%;
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
  padding: 10px;
  background-image: -webkit-linear-gradient(92deg, #eb5757, #000000);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 10s infinite linear;
  animation: ${gradientContents} 4s ease-in-out infinite;
  @media screen and (max-width: 500px) {
    padding-top: 10%;
    font-size: 20px;
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
  margin-inline-start: 10%;
  margin-inline-end: 10%;
  display: flex;
  background-image: -webkit-linear-gradient(92deg, #eb5757, #000000);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 10s infinite linear;
  animation: ${gradientContents} 4s ease-in-out infinite;
  @media screen and (max-width: 500px) {
    padding-top: 10%;
    font-size: 20px;
  }
`;

const GitHubLinkContain = styled.div`
  margin-inline-start: 50%;
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
  margin-inline-start: 68%;
  margin-inline-end: 10%;
  display: flex;
  background-image: -webkit-linear-gradient(92deg, #eb5757, #000000);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 10s infinite linear;
  animation: ${gradientContents} 4s ease-in-out infinite;
  @media screen and (max-width: 500px) {
    padding-top: 20%;
    text-align: center;
    font-size: 20px;
    top: 0;
    margin-inline-start: 38%;
  }
`;

const ReverseContentsBtn = styled(Link)`
  position: relative;
  text-align: left;
  font-size: 32px;
  font-family: "Kanit", sans-serif;
  line-height: 1.27;
  letter-spacing: 0px;
  top: 300px;
  margin-inline-start: 74%;
  margin-inline-end: 10%;
  display: flex;
  &:hover {
    background-color: none;
    color: red;
  }
  @media screen and (max-width: 500px) {
    padding-top: 5%;
    padding-bottom: 10%;
    text-align: center;
    font-size: 20px;
    top: 0;
    margin-inline-start: 42%;
  }
`;

const MainProjectCarouselsContain = styled.div`
  margin-right: 50%;
  margin-bottom: 20%;
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
  padding-bottom: 30%;
  @media screen and (max-width: 500px) {
    padding-left: 16%;
    padding-right: 14%;
  }
`;

const MainHome = () => {
  const ResetScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <IntroContain>
      <div>
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
      </div>
      <div>
        <CenterContentsText>About Me</CenterContentsText>
        <MainAboutCarousel />
      </div>
      <div>
        <ContentsText>My Git Hub</ContentsText>
        <GitHubLinkContain>
          <GitHubSocialCard />
        </GitHubLinkContain>
      </div>
      <div>
        <ReverseContentsText>My Project</ReverseContentsText>
        <ReverseContentsBtn to={"/Project"} onClick={ResetScroll}>
          Project
        </ReverseContentsBtn>
        <MainProjectCarouselsContain>
          <MainProjectCarousel />
        </MainProjectCarouselsContain>
      </div>
      <div>
        <CenterContentsText>My Career</CenterContentsText>
        <IntroCareersContain>
          <IntroCareers />
        </IntroCareersContain>
      </div>
    </IntroContain>
  );
};

export default React.memo(MainHome);

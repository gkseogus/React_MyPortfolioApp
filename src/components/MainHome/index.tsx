import React from "react";
import { Link } from "react-router-dom";
import { Hide, Box } from "@chakra-ui/react";
import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import introImg from "../MainHome/IMG/introImg.svg";
import GitHubSocialCard from "../MainHome/GitHubSocialCard/index";
import MainProjectCarousel from "./MainProjectCarousel";
import MainCareerCard from "./MainCareerCard";
import MainAboutCarousel from "./MainAboutCarousel";
import MainAboutMo from "./MainAboutMo";

const circleAni = keyframes`
  0%{
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(-180deg);
  }
  100%{
    transform: rotate(-360deg);
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
  position: relative;
  @media screen and (max-width: 360px) {
    text-align: center;
  }
`;

const IntroText = styled.article`
  padding-top: 8%;
  z-index: 7;
  white-space: pre-line;
  position: relative;
  text-align: left;
  font-size: 64px;
  font-weight: 600px;
  font-family: "Kanit", sans-serif;
  font-display: swap;
  line-height: 1.27;
  letter-spacing: 0px;
  margin-block-start: 2.5em;
  margin-block-end: 2.5em;
  margin-inline-start: 10%;
  margin-inline-end: 10%;
  display: flex;
  animation: ${gradientIntro} 3.5s ease-in-out none;
  @media screen and (max-width: 360px) {
    padding-top: 35%;
    font-size: 20px;
    display: inline-block;
    text-align: center;
  }
`;

const IntroImg = styled.img`
  position: absolute;
  right: 10%;
  transform: translate(-50%, -50%);
  width: 580px;
  height: 348px;
  min-width: 290px;
  min-width: 174px;
  opacity: 0.4;
  animation: ${circleAni} 10s linear infinite;
`;

const CenterContentsText = styled.article`
  text-align: center;
  font-size: 64px;
  font-weight: 600px;
  font-family: "Kanit", sans-serif;
  font-display: swap;
  line-height: 1.27;
  letter-spacing: 0px;
  @media screen and (max-width: 360px) {
    padding-top: 10%;
    font-size: 20px;
  }
`;

const AboutContain = styled.div`
  @media screen and (max-width: 360px) {
    display: none;
  }
`;

const AboutMoContain = styled.div`
  color: red;
  @media screen and (min-width: 360px) {
    display: none;
  }
`;

const ContentsText = styled.article`
  position: relative;
  text-align: left;
  font-size: 64px;
  font-weight: 600px;
  font-family: "Kanit", sans-serif;
  font-display: swap;
  line-height: 1.27;
  letter-spacing: 0px;
  top: 250px;
  margin-inline-start: 20%;
  margin-inline-end: 20%;
  display: flex;
  @media screen and (max-width: 360px) {
    padding-top: 10%;
    font-size: 20px;
    margin-inline-start: 10%;
    margin-inline-end: 10%;
  }
`;

const GitHubLinkContain = styled.div`
  margin-inline-start: 35%;
  @media screen and (max-width: 360px) {
    margin-inline-start: 45%;
    padding-right: 5%;
  }
`;

const SecondIntroText = styled.article`
  position: relative;
  white-space: pre-line;
  padding: 15%;
  text-align: center;
  font-family: sans-serif;
  font-display: swap;
  text-transform: uppercase;
  font-size: 54px;
  font-weight: 900;
  font-family: "Kanit", sans-serif;
  letter-spacing: 4px;
  overflow: hidden;
  background: linear-gradient(90deg, #000, #fff, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: ${animate} 6s linear infinite;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  @media screen and (max-width: 360px) {
    font-size: 15px;
    padding-top: 50%;
    padding-bottom: 10%;
  }
`;

const ReverseContentsText = styled.article`
  position: relative;
  text-align: left;
  font-size: 64px;
  font-weight: 600px;
  font-family: "Kanit", sans-serif;
  font-display: swap;
  line-height: 1.27;
  letter-spacing: 0px;
  top: 250px;
  display: flex;
  margin-inline-start: 60%;
  margin-inline-end: 10%;
  @media screen and (max-width: 360px) {
    padding-top: 20%;
    padding-left: 37.5%;
    text-align: center;
    font-size: 20px;
    top: 0;
    margin-inline-start: 0%;
    margin-inline-end: 0%;
  }
`;

const ReverseContentsBtn = styled(Link)`
  position: relative;
  padding-left: 34%;
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  font-family: "Kanit", sans-serif;
  font-display: swap;
  line-height: 1.27;
  letter-spacing: 0px;
  top: 300px;
  display: flex;
  color: black;
  margin-inline-start: 33%;
  margin-inline-end: 10%;
  :hover {
    color: red;
  }
  @media screen and (max-width: 360px) {
    padding-top: 5%;
    padding-bottom: 10%;
    padding-left: 44%;
    font-size: 20px;
    top: 0;
    margin-inline-start: 0%;
    margin-inline-end: 0%;
    color: red;
  }
`;

const MainProjectCarouselsContain = styled.div`
  margin-right: 50%;
  margin-bottom: 10%;
  margin-inline-start: 10%;
  @media screen and (max-width: 360px) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    height: auto;
  }
`;

const MainCareerCardContain = styled.div`
  text-align: center;
  font-family: "Kanit", sans-serif;
  line-height: 1.27;
  letter-spacing: 0px;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 10%;
  @media screen and (max-width: 360px) {
    padding-left: 16%;
    padding-right: 14%;
  }
`;

const MainHome = () => {
  const { t } = useTranslation<string>("");

  /** Scroll Reset Function */
  const handleResetScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <IntroContain>
      <article>
        <IntroText>
          {t("homeIntro")}
          <Hide below="md">
            <Box boxSize="sm">
              <IntroImg src={introImg} alt="introImg" />
            </Box>
          </Hide>
        </IntroText>
      </article>
      <article>
        <CenterContentsText>{t("homeAboutMeTitle")}</CenterContentsText>
        <AboutContain>
          <MainAboutCarousel />
        </AboutContain>
        <AboutMoContain>
          <MainAboutMo />
        </AboutMoContain>
      </article>
      <article>
        <ContentsText>{t("homeMyGitHubTitle")}</ContentsText>
        <GitHubLinkContain>
          <GitHubSocialCard />
        </GitHubLinkContain>
      </article>
      <article>
        <SecondIntroText>{t("homeSecondIntro")}</SecondIntroText>
        <ReverseContentsText>{t("homeMyProjectTitle")}</ReverseContentsText>
        <ReverseContentsBtn to={"/Project"} onClick={handleResetScroll}>
          {t("homeLinkBtn")}
        </ReverseContentsBtn>
        <MainProjectCarouselsContain>
          <MainProjectCarousel />
        </MainProjectCarouselsContain>
      </article>
      <article>
        <CenterContentsText>{t("homeMyCareerTitle")}</CenterContentsText>
        <MainCareerCardContain>
          <MainCareerCard />
        </MainCareerCardContain>
      </article>
    </IntroContain>
  );
};

export default React.memo(MainHome);

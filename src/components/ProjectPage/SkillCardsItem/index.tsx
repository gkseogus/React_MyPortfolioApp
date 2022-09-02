import React from "react";
import styled, { keyframes } from "styled-components";
import ProgressLine from "./ProgressBar";
import frontData from "./Data/frontData";
import backData from "./Data/backData";
import verData from "./Data/verData";
import frontLabelData from "./ProgressData/frontLabelData";
import backLabelData from "./ProgressData/backLabelData";
import verLabelData from "./ProgressData/verLabelData";

const TextClip = keyframes`
  to {
    background-position: 200% center;
  }
`;

const TextContain = styled.div`
  display: inline-block;
  margin: 15px;
  padding-bottom: 50px;
  font-size: 20px;
  font-family: "Kanit", sans-serif;
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

const AnimateTitleText = styled.h3`
  text-transform: uppercase;
  padding-top: 10%;
  background-image: linear-gradient(
    -225deg,
    #120907 0%,
    red 29%,
    #120907 67%,
    #f9f9f9 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${TextClip} 2s linear infinite;
  display: inline-block;
  font-size: 100px;
  font-family: "Kanit", sans-serif;
  @media screen and (max-width: 500px) {
    font-size: 40px;
    padding-bottom: 10%;
  }
`;

const SubAnimatContentsText = styled.h4`
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #120907 0%,
    red 29%,
    #120907 67%,
    #f9f9f9 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${TextClip} 2s linear infinite;
  display: inline-block;
  font-size: 50px;
  font-family: "Kanit", sans-serif;
  @media screen and (max-width: 500px) {
    font-size: 25px;
    padding-bottom: 10%;
  }
`;

const ProgressContain = styled.div`
  width: 60%;
  margin: auto;
  padding-top: 3%;
  padding-bottom: 3%;
  border: 2px solid #e5e5e5;
  border-radius: 6px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const MoContain = styled.div`
  display: inline-block;
`;

const MoImgBox = styled.img`
  width: 20px;
  height: 20px;
  margin: auto;
  position: flex;
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

const SkillCardsItem = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <AnimateTitleText>My Skill</AnimateTitleText>
      </div>
      <div style={{ textAlign: "center" }}>
        <SubAnimatContentsText>Front</SubAnimatContentsText>
        <ProgressContain>
          {frontLabelData.map((item, index) => (
            <ProgressLine
              key={index}
              label={item.title}
              backgroundColor="lightblue"
              visualParts={[
                {
                  percentage: item.persent,
                  color: "red",
                },
              ]}
            />
          ))}
        </ProgressContain>
      </div>
      <div style={{ textAlign: "center" }}>
        {frontData.map((item, index) => (
          <MoContain key={index}>
            <MoImgBox src={item.moLangthImg} alt="moimg" />
            <TextContain>{item.name}</TextContain>
          </MoContain>
        ))}
      </div>
      <div style={{ textAlign: "center", paddingTop: "6%" }}>
        <SubAnimatContentsText>Back</SubAnimatContentsText>
      </div>
      <ProgressContain>
        {backLabelData.map((item, index) => (
          <ProgressLine
            key={index}
            label={item.title}
            backgroundColor="lightblue"
            visualParts={[
              {
                percentage: item.persent,
                color: "red",
              },
            ]}
          />
        ))}
      </ProgressContain>
      <div style={{ textAlign: "center", paddingTop: "6%" }}>
        {backData.map((item, index) => (
          <MoContain key={index}>
            <MoImgBox src={item.moLangthImg} alt="moimg" />
            <TextContain>{item.name}</TextContain>
          </MoContain>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <SubAnimatContentsText>Version Control</SubAnimatContentsText>
      </div>
      <ProgressContain>
        {verLabelData.map((item, index) => (
          <ProgressLine
            key={index}
            label={item.title}
            backgroundColor="lightblue"
            visualParts={[
              {
                percentage: item.persent,
                color: "red",
              },
            ]}
          />
        ))}
      </ProgressContain>
      <div style={{ textAlign: "center" }}>
        {verData.map((item, index) => (
          <MoContain key={index}>
            <MoImgBox src={item.moLangthImg} alt="moimg" />
            <TextContain>{item.name}</TextContain>
          </MoContain>
        ))}
      </div>
    </div>
  );
};

export default React.memo(SkillCardsItem);

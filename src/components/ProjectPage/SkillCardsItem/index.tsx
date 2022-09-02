import React from "react";
import { Tooltip } from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import styled, { keyframes } from "styled-components";
import ProgressLine from "./ProgressBar";
import frontLabelData from "./ProgressData/frontLabelData";
import backLabelData from "./ProgressData/backLabelData";
import verLabelData from "./ProgressData/verLabelData";

const TextClip = keyframes`
  to {
    background-position: 200% center;
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
  padding-top: 5%;
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
    padding-top: 15%;
    padding-bottom: 3%;
  }
`;

const ProgressContain = styled.div`
  width: 60%;
  margin: auto;
  padding-top: 3%;
  padding-bottom: 3%;
  border: 2px solid #e5e5e5;
  border-radius: 6px;
`;

const ToolTipContain = styled.div`
  float: right;
  padding-right: 3%;
`;

const tooltipLabel = [
  "초급: 0% ~ 25% 간단한 디버깅이 가능하다",
  <br />,
  "중급: 25% ~ 50% 에러메세지가 친숙하다.",
  <br />,
  "고급: 50% ~ 75% 에러를 능숙하게 대처한다.",
  <br />,
  "전문: 75% ~ 100% 에러메세지가 그립다.",
];

const verTooltipLabel = [
  "초급: 0% ~ 25% 간단한 상호작용이 가능하다.",
  <br />,
  "중급: 25% ~ 50% 동료랑 상호작용이 가능하다.",
  <br />,
  "고급: 50% ~ 75% 동료랑 상호작용이 능숙하다.",
  <br />,
  "전문: 75% ~ 100% 프로젝트 리더가 가능하다.",
];

const SkillCardsItem = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <AnimateTitleText>My Skill</AnimateTitleText>
      </div>
      <div style={{ textAlign: "center" }}>
        <SubAnimatContentsText>Front</SubAnimatContentsText>
        <ProgressContain>
          <ToolTipContain>
            <Tooltip label={tooltipLabel} placement="top">
              <QuestionOutlineIcon w={4} h={4} />
            </Tooltip>
          </ToolTipContain>
          {frontLabelData.map((item, index) => (
            <ProgressLine
              key={index}
              label={item.title}
              logoImg={item.logoImg}
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
        <SubAnimatContentsText>Back</SubAnimatContentsText>
      </div>
      <ProgressContain>
        <ToolTipContain>
          <Tooltip label={tooltipLabel} placement="top">
            <QuestionOutlineIcon w={4} h={4} />
          </Tooltip>
        </ToolTipContain>
        {backLabelData.map((item, index) => (
          <ProgressLine
            key={index}
            label={item.title}
            logoImg={item.logoImg}
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
        <SubAnimatContentsText>Version Control</SubAnimatContentsText>
      </div>
      <div style={{ paddingBottom: "10%" }}>
        <ProgressContain>
          <ToolTipContain>
            <Tooltip label={verTooltipLabel} placement="top">
              <QuestionOutlineIcon w={4} h={4} />
            </Tooltip>
          </ToolTipContain>
          {verLabelData.map((item, index) => (
            <ProgressLine
              key={index}
              label={item.title}
              logoImg={item.logoImg}
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
    </div>
  );
};

export default React.memo(SkillCardsItem);

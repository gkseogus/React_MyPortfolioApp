import React from "react";
import { useTranslation } from "react-i18next";
import { Tooltip } from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import styled, { keyframes } from "styled-components";
import ProgressLine from "./ProgressBar";
import frontLabelData from "./ProgressData/frontLabelData";
import backLabelData from "./ProgressData/backLabelData";
import dbLabelData from "./ProgressData/dbLabelData";
import deployLabelData from "./ProgressData/deployLabelData";
import verLabelData from "./ProgressData/verLabelData";

const TextClip = keyframes`
  to {
    background-position: 200% center;
  }
`;

const Contain = styled.div`
  position: relative;
  margin-bottom: 200px;
  @media screen and (max-width: 500px) {
    margin-bottom: 50px;
  }
`;

const TextAlignContain = styled.div`
  text-align: center;
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
  font-display: swap;
  font-family: "Kanit", sans-serif;
  @media screen and (max-width: 500px) {
    font-size: 40px;
    padding-bottom: 10%;
  }
`;

const SubAnimatContentsText = styled.h4`
  padding-top: 5%;
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
  font-display: swap;
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
  "고급: 50% ~ 75% 에러를 능숙하게 처리한다.",
  <br />,
  "전문: 75% ~ 100% 에러를 사전에 예방한다.",
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

interface DataFileFace {
  title: string;
  persent: string;
  logoImg: string;
}
interface DataArrayFace {
  title: string;
  dataFile: Array<DataFileFace>;
  tooltip: Array<any>;
}

const dataArray: Array<DataArrayFace> = [
  {
    title: "Front end",
    dataFile: frontLabelData,
    tooltip: tooltipLabel,
  },
  {
    title: "Back end",
    dataFile: backLabelData,
    tooltip: tooltipLabel,
  },
  {
    title: "Data Base",
    dataFile: dbLabelData,
    tooltip: tooltipLabel,
  },
  {
    title: "Deployment",
    dataFile: deployLabelData,
    tooltip: tooltipLabel,
  },
  {
    title: "Version Control",
    dataFile: verLabelData,
    tooltip: verTooltipLabel,
  },
];

const SkillCardsItem = () => {
  const { t } = useTranslation<string>("");

  return (
    <Contain>
      <TextAlignContain>
        <AnimateTitleText>{t("projectSkillTitle")}</AnimateTitleText>
      </TextAlignContain>
      {dataArray.map((data: DataArrayFace, index: number) => (
        <TextAlignContain key={index.toString()}>
          <SubAnimatContentsText>{data.title}</SubAnimatContentsText>
          <ProgressContain>
            <ToolTipContain>
              <Tooltip label={data.tooltip} placement="top">
                <QuestionOutlineIcon w={4} h={4} />
              </Tooltip>
            </ToolTipContain>
            {data.dataFile.map(
              (
                item: { title: string; logoImg: string; persent: string },
                index: number
              ) => (
                <ProgressLine
                  key={index.toString()}
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
              )
            )}
          </ProgressContain>
        </TextAlignContain>
      ))}
    </Contain>
  );
};

export default React.memo(SkillCardsItem);

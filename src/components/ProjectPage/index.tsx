import React from "react";
import styled, { keyframes } from "styled-components";
import SkillCardsItem from "./SkillCardsItem";
import ProjectCarousel from "./ProjectCarousel";

const ProjectPageContain = styled.section``;

/**
 * top: 숫자가 낮을 수록 텍스트는 올라간다
 * width:폭의 길이
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
  padding-bottom: 30%;
  @media screen and (max-width: 500px) {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    height: auto;
  }
`;

const ProjectPage = () => {
  return (
    <ProjectPageContain>
      <Contain>
        <FristContentsText>
          <span>My own</span>
          <Message>
            <div>thinking</div>
            <div>planning</div>
            <div>creating</div>
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

export default ProjectPage;

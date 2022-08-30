import React from "react";
import styled, { keyframes } from "styled-components";
import FirstContentsItem from "./FirstContentsItem";
import ProjectCarousel from "./ProjectCarousel";

const ProjectPageContain = styled.div``;

const animate = keyframes`
0% {
  background-position: -500%;
}
100% {
  background-position: 500%;
}
`;

const FirstContentsText = styled.h2`
  position: relative;
  padding: 20%;
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
    font-size: 20px;
    padding-top: 50%;
    padding-bottom: 10%;
  }
`;

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
const SecondContentsText = styled.h1`
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
    left: 0%;
  }
`;

const Message = styled.div`
  background-color: red;
  color: black;
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

const SecondContentsItem = styled.div`
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
      <FirstContentsText>
        저의 프로젝트와 기술 스택이 궁금하지 않으시나요?
      </FirstContentsText>
      <FirstContentsItem />
      <SecondContentsText>
        <span>My own</span>
        <Message>
          <div>thinking</div>
          <div>planning</div>
          <div>creating</div>
        </Message>
      </SecondContentsText>
      <SecondContentsItem>
        <ProjectCarousel />
      </SecondContentsItem>
    </ProjectPageContain>
  );
};

export default ProjectPage;

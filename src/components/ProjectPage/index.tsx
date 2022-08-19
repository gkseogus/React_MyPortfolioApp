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
  animation: ${animate} 6s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
`;

const Openclose = keyframes`
0% {
    top: 0.2rem;
    width: 0;
  }
  5% {
    width: 0;
  }
  15% {
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
`;

const SecondContentsItem = styled.div`
  padding-bottom: 10%;
`;

const ProjectPage = () => {
  return (
    <ProjectPageContain>
      <FirstContentsText>
        저의 기술 스택이 궁금하지 않으시나요?
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

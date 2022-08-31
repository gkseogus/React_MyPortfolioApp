import React from "react";
import { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";
import styles from "./styles.module.css";
import styled, { keyframes } from "styled-components";
import { Box } from "@chakra-ui/react";
import frontData from "./Data/frontData";
import backData from "./Data/backData";
import verData from "./Data/verData";

const TextClip = keyframes`
  to {
    background-position: 200% center;
  }
`;

const Contain = styled.div`
  @media screen and (max-width: 500px) {
    display: none;
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
  padding-top: 15%;
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
  font-family: "Kanit", sans-serif;
  @media screen and (max-width: 500px) {
    font-size: 25px;
    padding-bottom: 10%;
  }
`;

const AnimateBoxText = styled.h2`
  position: relative;
  padding: 20%;
  text-align: center;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 53px;
  font-weight: 900;
  font-family: "Kanit", sans-serif;
  letter-spacing: 4px;
  overflow: hidden;
  background: black;
  background-repeat: no-repeat;
  background-size: 80%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`;

const FirstContentsItem = () => {
  const [open, setOpen] = useState(false);

  const onclickBox = () => {
    setOpen((open) => !open);
  };

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "20%", background: "black" },
    to: {
      size: open ? "100%" : "20%",
      background: "black",
    },
  });

  const transApi = useSpringRef();
  const frontTransition = useTransition(open ? frontData : [], {
    ref: transApi,
    trail: 400 / frontData.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  const backTransition = useTransition(open ? backData : [], {
    ref: transApi,
    trail: 400 / frontData.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  const verTransition = useTransition(open ? verData : [], {
    ref: transApi,
    trail: 400 / verData.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <AnimateTitleText>My Skill</AnimateTitleText>
      </div>
      <div style={{ textAlign: "center" }}>
        <SubAnimatContentsText>Front</SubAnimatContentsText>
      </div>
      <Contain className={styles.wrapper}>
        <animated.div
          style={{ ...rest, width: size, height: size }}
          className={styles.container}
          onClick={onclickBox}
        >
          {frontTransition((style, item) => (
            <animated.div
              className={styles.item}
              style={{ ...style, background: item.css }}
            >
              <AnimateBoxText>{item.name}</AnimateBoxText>
              <Box
                style={{
                  width: "300px",
                  height: "50%",
                  margin: "auto",
                }}
                backgroundImage={`url(${item.langthImg})`}
              ></Box>
            </animated.div>
          ))}
        </animated.div>
      </Contain>
      <div style={{ textAlign: "center" }}>
        {frontData.map((item, index) => (
          <TextContain key={index}>{item.name}</TextContain>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <SubAnimatContentsText>Back</SubAnimatContentsText>
      </div>
      <Contain className={styles.wrapper}>
        <animated.div
          style={{ ...rest, width: size, height: size }}
          className={styles.container}
          onClick={onclickBox}
        >
          {backTransition((style, item) => (
            <animated.div
              className={styles.item}
              style={{ ...style, background: item.css }}
            >
              <AnimateBoxText>{item.name}</AnimateBoxText>
              <Box
                style={{
                  width: "300px",
                  height: "50%",
                  margin: "auto",
                }}
                backgroundImage={`url(${item.langthImg})`}
              ></Box>
            </animated.div>
          ))}
        </animated.div>
      </Contain>
      <div style={{ textAlign: "center" }}>
        {backData.map((item, index) => (
          <TextContain key={index}>{item.name}</TextContain>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <SubAnimatContentsText>Version Control</SubAnimatContentsText>
      </div>
      <Contain className={styles.wrapper}>
        <animated.div
          style={{ ...rest, width: size, height: size }}
          className={styles.container}
          onClick={onclickBox}
        >
          {verTransition((style, item) => (
            <animated.div
              className={styles.item}
              style={{ ...style, background: item.css }}
            >
              <AnimateBoxText>{item.name}</AnimateBoxText>
              <Box
                style={{
                  width: "300px",
                  height: "50%",
                  margin: "auto",
                }}
                backgroundImage={`url(${item.langthImg})`}
              ></Box>
            </animated.div>
          ))}
        </animated.div>
      </Contain>
      <div style={{ textAlign: "center" }}>
        {verData.map((item, index) => (
          <TextContain key={index}>{item.name}</TextContain>
        ))}
      </div>
    </div>
  );
};

export default React.memo(FirstContentsItem);

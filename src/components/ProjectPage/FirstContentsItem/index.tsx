import { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";
import data from "./data";
import styles from "./styles.module.css";
import styled, { keyframes } from "styled-components";
import { Box } from "@chakra-ui/react";

const TextClip = keyframes`
  to {
    background-position: 200% center;
  }
`;

const AnimateCharcter = styled.h3`
  text-transform: uppercase;
  padding-top: 15%;
  padding-left: 38.5%;
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
  -webkit-text-fill-color: transparent;
  animation: ${TextClip} 2s linear infinite;
  display: inline-block;
  font-size: 100px;
  font-family: "Kanit", sans-serif;
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
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
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
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
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
      <AnimateCharcter>My Skill</AnimateCharcter>
      <div className={styles.wrapper}>
        <animated.div
          style={{ ...rest, width: size, height: size }}
          className={styles.container}
          onClick={onclickBox}
        >
          {transition((style, item) => (
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
      </div>
    </div>
  );
};

export default FirstContentsItem;

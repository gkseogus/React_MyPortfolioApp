import React, { useState } from "react";
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
import styled from "styled-components";
import { Box } from "@chakra-ui/react";

const AnimateBoxText = styled.h2`
  color: black;
  font-size: 46px;
  font-weight: 900;
  font-family: "Kanit", sans-serif;
  overflow: hidden;
  position: absolute;
  padding-left: 0.5rem;
`;

const FirstContentsItem = () => {
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "20%", background: "white" },
    to: {
      size: open ? "100%" : "20%",
      background: "white",
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
    <div className={styles.wrapper}>
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className={styles.container}
        onClick={() => set((open) => !open)}
      >
        <AnimateBoxText>dkssudud</AnimateBoxText>
        {transition((style, item) => (
          <animated.div
            className={styles.item}
            style={{ ...style, background: item.css }}
          >
            <Box height={300} width={600}>{`url(${item.langthImg})`}</Box>
          </animated.div>
        ))}
      </animated.div>
    </div>
  );
};

export default FirstContentsItem;

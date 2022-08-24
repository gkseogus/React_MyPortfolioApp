import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import styled from "styled-components";

const ScrollToTop = styled.button`
  position: fixed;
  width: 100%;
  left: 45%;
  bottom: 70px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  background-color: none;
  color: red;
`;

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <ScrollToTop>
      <AiOutlineArrowUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      ></AiOutlineArrowUp>
    </ScrollToTop>
  );
};

export default ScrollToTopButton;

import TimeLine from "./TimeLine";
import styled, { keyframes } from "styled-components";

const gradientContents = keyframes`
    from {
        -webkit-filter: hue-rotate(0deg);
    }
    to {
        -webkit-filter: hue-rotate(-360deg);
    }
`;

const CenterContentsText = styled.h2`
  text-align: center;
  font-size: 64px;
  font-weight: 600px;
  font-family: "Kanit", sans-serif;
  line-height: 1.27;
  letter-spacing: 0px;
  background-image: -webkit-linear-gradient(92deg, #eb5757, #000000);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 10s infinite linear;
  animation: ${gradientContents} 4s ease-in-out infinite;
  @media screen and (max-width: 500px) {
    padding-top: 50%;
    padding-bottom: 20%;
    font-size: 20px;
    text-align: center;
  }
`;

const Contain = styled.div`
  padding: 20%;
`;

const CareerPage = () => {
  return (
    <Contain>
      <CenterContentsText>My Career Time Line</CenterContentsText>
      <TimeLine />
    </Contain>
  );
};

export default CareerPage;

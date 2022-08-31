import TimeLine from "./TimeLine";
import styled from "styled-components";

const Contain = styled.section`
  padding: 15%;
`;

const CenterContentsText = styled.article`
  padding-bottom: 10%;
  text-align: center;
  font-size: 64px;
  font-weight: 600px;
  font-family: "Kanit", sans-serif;
  line-height: 1.27;
  letter-spacing: 0px;
  @media screen and (max-width: 500px) {
    padding-top: 50%;
    padding-bottom: 20%;
    font-size: 20px;
    text-align: center;
  }
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

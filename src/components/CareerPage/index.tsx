import TimeLine from "./TimeLine";
import styled from "styled-components";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";

const BreadcrumbContain = styled.div`
  float: right;
  padding-right: 3%;
  padding-top: 10%;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const BreadcrumbItemText = styled.h2`
  font-family: "Kanit", sans-serif;
`;

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
    <div>
      <BreadcrumbContain>
        <Breadcrumb separator="/">
          <BreadcrumbItem>
            <BreadcrumbItemText>Home</BreadcrumbItemText>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbItemText>Career</BreadcrumbItemText>
          </BreadcrumbItem>
        </Breadcrumb>
      </BreadcrumbContain>
      <Contain>
        <CenterContentsText>My Career Time Line</CenterContentsText>
        <TimeLine />
      </Contain>
    </div>
  );
};

export default CareerPage;

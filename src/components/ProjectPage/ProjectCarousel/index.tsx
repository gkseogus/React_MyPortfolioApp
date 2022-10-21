import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Container,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import Slider from "react-slick";
import commuteImg from "../ProjectCarousel/IMG/commuteImg.svg";
import exerciseImg from "../ProjectCarousel/IMG/exerciseImg.svg";
import deepLearningImg from "../ProjectCarousel/IMG/deepLearningImg.svg";
import exerciseBlogImg from "../ProjectCarousel/IMG/exerciseBlogImg.svg";
import commuteResultImg from "../ProjectCarousel/IMG/commuteResultImg.svg";
import crackResultImg from "../ProjectCarousel/IMG/crackResultImg.svg";
import casLeakImg from "../ProjectCarousel/IMG/casLeakImg.svg";
import casLeakResultImg from "../ProjectCarousel/IMG/casLeakResultImg.svg";
import shopImg from "../ProjectCarousel/IMG/shopImg.svg";
import shopesultImg from "../ProjectCarousel/IMG/shopesultImg.svg";

const BtnContain = styled.div`
  @media screen and (max-width: 500px) {
    color: red;
  }
`;

const TextContain = styled.div`
  @media screen and (max-width: 500px) {
    text-align: center;
    font-size: 15px;
    padding-right: 10%;
  }
`;

const ImaContain = styled.div`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const ContentsTextContain = styled.h2`
  color: red;
  font-size: 15px;
  position: absolute;
`;

const ContentsTextContain2 = styled.h2`
  color: white;
  font-size: 15px;
  margin-left: 20%;
`;

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ProjectCarousel = () => {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const ProjectCards = [
    {
      title: "Commute App",
      text: "재택 출퇴근을 위한 출퇴근 앱 입니다.",
      text2:
        "에이치 나인 회사에서 진행한 프로젝트 입니다. 코로나로 인한 출퇴근 시스템을 클론 코딩 하였으며 구글 스프레드 시트에 출퇴근 데이터를 보관하도록 되어 있으며 하루마다 데이터가 갱신 됩니다.",
      Frontend: "TypeScript & React & Redux",
      Backend: "Google Api",
      image: commuteImg,
      resultImage: commuteResultImg,
    },
    {
      title: "Exercise App",
      text: "나만의 운동 사이트 앱 입니다.",
      text2:
        "운동을 즐기게 되어 나만의 운동 정보를 담고 출력하는 사이트를 만들게 되었습니다. 제가 즐겨 마시던 프로틴 종류와 구매처 등을 알 수 있으며 인바디 정보를 그래프로 나타내고 있으며 운동 루틴도 알 수 있습니다.",
      Frontend: "TypeScript & React & Redux",
      Backend: "Google Api",
      image: exerciseImg,
      resultImage: exerciseBlogImg,
    },
    {
      title: "Creack Detection",
      text: "딥러닝 기반 실시간 이동수단 주행 보조 시스템 모델",
      text2:
        "동아리에서 팀원들을 모아 1년동안 진행한 프로젝트 입니다. 휠체어 이용자들이 장애물을 넘어갈때 속도 조절을 못 해 휘청거리는 모습을 보완하고자 자동화 시스템을 구축하였습니다. 딥러닝 모델을 통해 실시간으로 바닥의 균열을 파악 해 속도를 줄이는 알고리즘을 적용하였습니다.",
      Frontend: "Raspberry Pi Module",
      Backend: "Python & Tensorflow & Keras",
      image: deepLearningImg,
      resultImage: crackResultImg,
    },
    {
      title: "GasLeak Detector",
      text: "적외선 센서를 사용한 가스 누출 탐지 시스템",
      text2:
        "LCD 모듈, PIR 센서, LED 센서를 탑재한 가스 누출 탐지 시스템입니다. 라즈베리파이를 사용했으며 0.5초 주기로 센서 값을 요청하도록 하였습니다. Java와 Coap을 연동 해 데이터 값을 웹에서 확인할 수 있도록 하였습니다.",
      Frontend: "Raspberry Pi Module",
      Backend: "Java & Coap",
      image: casLeakImg,
      resultImage: casLeakResultImg,
    },
    {
      title: "Shop app",
      text: "쇼핑몰 앱",
      text2:
        "사용자가 물건을 추가 또는 삭제, 장바구나 추가 또는 삭제 하는 기능이 있는 쇼핑몰 웹 입니다. 로그인 한 유저는 관리자에게 시트 권한을 요청하게 되며 요청이 승인되면 물건 데이터가 화면에 노출되도록 하였습니다.",
      Frontend: "TypeScript & React & Redux",
      Backend: "Google Api",
      image: shopImg,
      resultImage: shopesultImg,
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"800px"}
      width={"full"}
      overflow={"hidden"}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <BtnContain>
        <IconButton
          aria-label="left-arrow"
          variant=""
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          _hover={{ color: "red" }}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        <IconButton
          aria-label="right-arrow"
          variant=""
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          _hover={{ color: "red" }}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
      </BtnContain>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {ProjectCards.map((card) => (
          <Box
            key={uuidv4()}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Container size="container.lg" height="800px" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  color="white"
                >
                  <TextContain>{card.title}</TextContain>
                </Heading>
                <Box
                  fontSize={{ base: "3xl", lg: "lg" }}
                  color="white"
                  fontWeight="bolder"
                >
                  <TextContain>
                    {card.text}
                    <br /> <br /> <br />
                    {card.text2}
                    <br /> <br />
                    <ContentsTextContain>Frontend:</ContentsTextContain>
                    <ContentsTextContain2>{card.Frontend}</ContentsTextContain2>
                    <ContentsTextContain>Backend:</ContentsTextContain>
                    <ContentsTextContain2>{card.Backend}</ContentsTextContain2>
                    <br /> <br />
                    <ImaContain>Result</ImaContain>
                    <br />
                  </TextContain>
                </Box>
                <ImaContain>
                  <Box
                    height={300}
                    width={600}
                    backgroundPosition="center"
                    backgroundImage={`url(${card.resultImage})`}
                  />
                </ImaContain>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default React.memo(ProjectCarousel);

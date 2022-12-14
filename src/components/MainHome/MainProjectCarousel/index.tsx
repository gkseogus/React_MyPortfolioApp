import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import styled from "styled-components";
import commuteImg from "../MainProjectCarousel/IMG/commuteImg.svg";
import exerciseImg from "../MainProjectCarousel/IMG/exerciseImg.svg";
import deepLearningImg from "../MainProjectCarousel/IMG/deepLearningImg.svg";
import CarouselModal from "./CarouselModal";

const Contain = styled.div`
  color: red;
  @media screen and (max-width: 500px) {
    font-size: 32px;
    padding-right: 9.5%;
  }
`;

const BtnContain = styled.div`
  @media screen and (max-width: 500px) {
    color: red;
  }
`;

const ModalContain = styled.div`
  padding-top: 15%;
  text-align: center;
  @media screen and (max-width: 500px) {
    padding-right: 8%;
  }
`;

interface CardsFace {
  id: string;
  title: string;
  text: string;
  modalText: string;
  TechnologyStackText: string;
  image: string;
}

/** Settings for the slider */
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ProjectCaptionCarousel = (props: any) => {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const { t } = useTranslation<string>("");
  // This list contains all the data for carousels
  const cards: Array<CardsFace> = [
    {
      id: "1",
      title: "Commute App",
      text: t("homeProjectCarousel1"),
      modalText:
        "에이치 나인 회사에서 진행한 프로젝트 입니다. 코로나로 인한 출퇴근 시스템을 클론 코딩 하였으며 구글 스프레드 시트에 출퇴근 데이터를 보관하도록 되어 있으며 하루마다 데이터가 갱신 됩니다.",
      TechnologyStackText: `${t(
        "homeProjectCarouselSkillTitle"
      )}: TypeScript & React & Redux`,
      image: commuteImg,
    },
    {
      id: "2",
      title: "Exercise App",
      text: t("homeProjectCarousel2"),
      modalText:
        "운동을 즐기게 되어 나만의 운동 정보를 담고 출력하는 사이트를 만들게 되었습니다. 제가 즐겨 마시던 프로틴 종류와 구매처 등을 알 수 있으며 인바디 정보를 그래프로 나타내고 있으며 운동 루틴도 알 수 있습니다.",
      TechnologyStackText: `${t(
        "homeProjectCarouselSkillTitle"
      )}: TypeScript & React & Redux`,
      image: exerciseImg,
    },
    {
      id: "3",
      title: "Creack Detection",
      text: t("homeProjectCarousel3"),
      modalText:
        "동아리에서 팀원들을 모아 1년동안 진행한 프로젝트 입니다. 휠체어 이용자들이 장애물을 넘어갈때 속도 조절을 못 해 휘청거리는 모습을 보완하고자 자동화 시스템을 구축하였습니다. 딥러닝 모델을 통해 실시간으로 바닥의 균열을 파악 해 속도를 줄이는 알고리즘을 적용하였습니다.",
      TechnologyStackText: `${t(
        "homeProjectCarouselSkillTitle"
      )}: Pyhton & Tensorflow & Keras`,
      image: deepLearningImg,
    },
  ];

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
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
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="unstyled"
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
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="unstyled"
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
      {/* Slider */}
      <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
        {cards.map((item: CardsFace) => (
          <Box
            key={item.id}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${item.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
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
                  <Contain>{item.title}</Contain>
                </Heading>
                <Contain>
                  <Text
                    fontSize={{ base: "15px", lg: "lg" }}
                    color="white"
                    fontWeight="bolder"
                  >
                    {item.text}
                    <br />
                    {item.TechnologyStackText}
                    <br />
                  </Text>
                </Contain>
                {/* <ModalContain>
                  <CarouselModal modalData={cards} modalId={item.id} />
                </ModalContain> */}
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default React.memo(ProjectCaptionCarousel);

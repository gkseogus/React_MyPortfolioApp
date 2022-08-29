import React from "react";
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
import commuteImg from "../MainProjectCarousel/IMG/commuteImg.png";
import exerciseImg from "../MainProjectCarousel/IMG/exerciseImg.png";
import deepLearningImg from "../MainProjectCarousel/IMG/deepLearningImg.png";
import styled from "styled-components";

const Contain = styled.div`
  @media screen and (max-width: 500px) {
    font-size: 18px;
    padding-right: 10%;
  }
`;
// Settings for the slider
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

const ProjectCaptionCarousel = () => {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  const cards = [
    {
      title: "Commute App",
      text: "재택 출퇴근을 위한 출퇴근 앱 입니다.",
      TechnologyStackText: "기술 스택: TypeScript & React & Redux",
      image: commuteImg,
    },
    {
      title: "Exercise App",
      text: "나만의 운동 사이트 앱 입니다.",
      TechnologyStackText: "기술 스택: TypeScript & React & Redux",
      image: exerciseImg,
    },
    {
      title: "Creack Detection",
      text: "딥러닝 기반 실시간 이동수단 주행 보조 시스템 모델",
      TechnologyStackText: "기술 스택: Pyhton & Tensorflow & Keras",
      image: deepLearningImg,
    },
  ];

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
      {/* Slider */}
      <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
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
                  <Contain>{card.title}</Contain>
                </Heading>
                <Text
                  fontSize={{ base: "3xl", lg: "lg" }}
                  color="white"
                  fontWeight="bolder"
                >
                  <Contain>
                    {card.text}
                    <br />
                    {card.TechnologyStackText}
                    <br />
                  </Contain>
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProjectCaptionCarousel;

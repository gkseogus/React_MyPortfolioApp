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
import commuteImg from "../ProjectCarousel/IMG/commuteImg.png";
import exerciseImg from "../ProjectCarousel/IMG/exerciseImg.png";
import deepLearningImg from "../ProjectCarousel/IMG/deepLearningImg.png";
import exerciseBlogImg from "../ProjectCarousel/IMG/exerciseBlogImg.png";
import commuteResultImg from "../ProjectCarousel/IMG/commuteResultImg.png";
import crackResultImg from "../ProjectCarousel/IMG/crackResultImg.png";

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
      TechnologyStackText: "기술 스택: TypeScript & React & Redux",
      image: commuteImg,
      resultImage: commuteResultImg,
    },
    {
      title: "Exercise App",
      text: "나만의 운동 사이트 앱 입니다.",
      TechnologyStackText: "기술 스택: TypeScript & React & Redux",
      image: exerciseImg,
      resultImage: exerciseBlogImg,
    },
    {
      title: "Creack Detection",
      text: "딥러닝 기반 실시간 이동수단 주행 보조 시스템 모델",
      TechnologyStackText: "기술 스택: Pyhton & Tensorflow & Keras",
      image: deepLearningImg,
      resultImage: crackResultImg,
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
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {ProjectCards.map((card, index) => (
          <Box
            key={index}
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
                  {card.title}
                </Heading>
                <Text
                  fontSize={{ base: "3xl", lg: "lg" }}
                  color="white"
                  fontWeight="bolder"
                >
                  {card.text}
                  <br />
                  {card.TechnologyStackText}
                  <br />
                  <br />
                  Result
                  <br />
                </Text>
                <Box
                  height={300}
                  width={600}
                  backgroundPosition="center"
                  backgroundImage={`url(${card.resultImage})`}
                />
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProjectCarousel;

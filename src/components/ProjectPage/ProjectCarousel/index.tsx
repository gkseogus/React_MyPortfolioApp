import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Container,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import styled from 'styled-components';
import Slider from 'react-slick';
import portfolioImg from '../ProjectCarousel/IMG/portfolioImg.png';
import portfolioResultImg from '../ProjectCarousel/IMG/portfolioResultImg.png';
import commuteImg from '../ProjectCarousel/IMG/commuteImg.svg';
import commuteResultImg from '../ProjectCarousel/IMG/commuteResultImg.svg';
import exerciseImg from '../ProjectCarousel/IMG/exerciseImg.svg';
import exerciseBlogImg from '../ProjectCarousel/IMG/exerciseBlogImg.svg';
import deepLearningImg from '../ProjectCarousel/IMG/deepLearningImg.svg';
import crackResultImg from '../ProjectCarousel/IMG/crackResultImg.svg';
import casLeakImg from '../ProjectCarousel/IMG/casLeakImg.svg';
import casLeakResultImg from '../ProjectCarousel/IMG/casLeakResultImg.svg';
import shopImg from '../ProjectCarousel/IMG/shopImg.svg';
import shopesultImg from '../ProjectCarousel/IMG/shopesultImg.svg';

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

interface ProjectCardsFace {
  id: string;

  title: string;
  text: string;
  subText: string;
  Frontend: string;
  Backend: string;
  image: string;
  resultImage: string;
}

const ProjectCarousel = () => {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });
  const { t } = useTranslation<string>('');

  const projectCards = [
    {
      id: ' 0',
      title: 'My portfolio App',
      text: t('projectCarouseltext0'),
      subText: t('projectCarouselsubtext0'),
      Frontend: 'TypeScript & React & Redux',
      Backend: 'MariaDB & node.js',
      image: portfolioImg,
      resultImage: portfolioResultImg,
    },
    {
      id: ' 1',
      title: 'Commute App',
      text: t('projectCarouseltext1'),
      subText: t('projectCarouselsubtext1'),
      Frontend: 'TypeScript & React & Redux',
      Backend: 'Google Api',
      image: commuteImg,
      resultImage: commuteResultImg,
    },
    {
      id: '2',
      title: 'Exercise App',
      text: t('projectCarouseltext2'),
      subText: t('projectCarouselsubtext2'),
      Frontend: 'TypeScript & React & Redux',
      Backend: 'Google Api',
      image: exerciseImg,
      resultImage: exerciseBlogImg,
    },
    {
      id: '3',
      title: 'Creack Detection',
      text: t('projectCarouseltext3'),
      subText: t('projectCarouselsubtext3'),
      Frontend: 'Raspberry Pi Module',
      Backend: 'Python & Tensorflow & Keras',
      image: deepLearningImg,
      resultImage: crackResultImg,
    },
    {
      id: '4',
      title: 'GasLeak Detector',
      text: t('projectCarouseltext4'),
      subText: t('projectCarouselsubtext4'),
      Frontend: 'Raspberry Pi Module',
      Backend: 'Java & Coap',
      image: casLeakImg,
      resultImage: casLeakResultImg,
    },
    {
      id: '5',
      title: 'Shop app',
      text: t('projectCarouseltext5'),
      subText: t('projectCarouselsubtext5'),
      Frontend: 'TypeScript & React & Redux',
      Backend: 'Google Api',
      image: shopImg,
      resultImage: shopesultImg,
    },
  ];

  return (
    <Box
      position={'relative'}
      height={'800px'}
      width={'full'}
      overflow={'hidden'}
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
          transform={'translate(0%, -50%)'}
          zIndex={2}
          _hover={{ color: 'red' }}
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
          transform={'translate(0%, -50%)'}
          zIndex={2}
          _hover={{ color: 'red' }}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
      </BtnContain>
      <Slider {...settings} ref={slider => setSlider(slider)}>
        {projectCards.map((card: ProjectCardsFace) => (
          <Box
            key={card.id}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Container size="container.lg" height="800px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  color="white"
                >
                  <TextContain>{card.title}</TextContain>
                </Heading>
                <Box
                  fontSize={{ base: '3xl', lg: 'lg' }}
                  color="white"
                  fontWeight="bolder"
                >
                  <TextContain>
                    {card.text}
                    <br /> <br />
                    {card.subText}
                    <br />
                    <ContentsTextContain>Frontend:</ContentsTextContain>
                    <ContentsTextContain2>{card.Frontend}</ContentsTextContain2>
                    <ContentsTextContain>Backend:</ContentsTextContain>
                    <ContentsTextContain2>{card.Backend}</ContentsTextContain2>
                    <br /> <br />
                    <ImaContain>{t('projectCarouselResult')}</ImaContain>
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

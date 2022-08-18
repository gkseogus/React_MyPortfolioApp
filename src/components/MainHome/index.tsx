import React from 'react';
import { Link } from 'react-router-dom';
import {
    Hide,
    Box
  } from '@chakra-ui/react';
import styled, {keyframes} from 'styled-components';
import FirstIntroImg from '../MainHome/IMG/FirstIntroImg.png';
import GitHubSocialCard from '../MainHome/GitHubSocialCard/index';
import MainProjectCarousel from './MainProjectCarousel';
import IntroCareers from './CareersCard';

const circleAni = keyframes`
  0%{
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(180deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

const gradientIntro = keyframes`
	0%{
        color: white;
    }
    100%{
        color: black;
    }
`

const gradientContents = keyframes`
    from {
        -webkit-filter: hue-rotate(0deg);
    }
    to {
        -webkit-filter: hue-rotate(-360deg);
    }
`

const IntroContain = styled.div`

`

const IntroText = styled.h2`
    z-index: 7;
    position: relative;
    text-align: left;
    font-size: 64px;
    font-weight: 600px;
    font-family: 'Kanit', sans-serif;
    line-height: 1.27;
    letter-spacing: 0px;
    margin-block-start: 2.5em;
    margin-block-end: 2.5em;
    margin-inline-start: 10%;
    margin-inline-end: 10%;
    display: flex;
    animation: ${gradientIntro} 6s ease-in-out none;
`

const IntroImg = styled.img`
    position: absolute;
    bottom: 5%;
    right: 5%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 35%;
    min-height: 500px;
    min-width: 700px;
    opacity: 0.4;
    animation: ${circleAni} 10s  linear infinite;
`

const ContentsText = styled.h2`
    position: relative;
    text-align: left;
    font-size: 64px;
    font-weight: 600px;
    font-family: 'Kanit', sans-serif;
    line-height: 1.27;
    letter-spacing: 0px;
    top: 250px;
    margin-inline-start: 10%;
    margin-inline-end: 10%;
    display: flex;
    background-image: -webkit-linear-gradient(92deg, #eb5757, #000000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: hue 10s infinite linear;
    animation: ${gradientContents} 4s ease-in-out infinite;
`

const GitHubLinkContain = styled.div`
    margin-inline-start: 50%;
`

const ReverseContentsText = styled.h2`
    position: relative;
    text-align: left;
    font-size: 64px;
    font-weight: 600px;
    font-family: 'Kanit', sans-serif;
    line-height: 1.27;
    letter-spacing: 0px;
    top: 250px;
    margin-inline-start: 68%;
    margin-inline-end: 10%;
    display: flex;
    background-image: -webkit-linear-gradient(92deg, #eb5757, #000000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: hue 10s infinite linear;
    animation: ${gradientContents} 4s ease-in-out infinite;
`

const ReverseContentsBtn = styled(Link)`
    position: relative;
    text-align: left;
    font-size: 32px;
    font-family: 'Kanit', sans-serif;
    line-height: 1.27;
    letter-spacing: 0px;
    top: 300px;
    margin-inline-start: 73%;
    margin-inline-end: 10%;
    display: flex;
    &:hover{  
        background-color : white;
        color : red
    }
`

const MainProjectCarouselsContain = styled.div`
    margin-right: 50%;
    margin-bottom: 20%;
    margin-inline-start: 10%;
`

const CenterContentsText = styled.h2`
    text-align: center;
    font-size: 64px;
    font-weight: 600px;
    font-family: 'Kanit', sans-serif;
    line-height: 1.27;
    letter-spacing: 0px;
    padding: 10px;
    background-image: -webkit-linear-gradient(92deg, #eb5757, #000000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: hue 10s infinite linear;
    animation: ${gradientContents} 4s ease-in-out infinite;
`

const IntroCareersContain = styled.div`
    text-align: center;
    font-family: 'Kanit', sans-serif;
    line-height: 1.27;
    letter-spacing: 0px;
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 30%;
`

// scroll custom hook
// export const useWindowScrollEvent = (listener: (this: Window, ev: Event) => any) => {
//     useEffect(() => {
//         window.addEventListener('scroll', listener);

//         return () => {
//         window.removeEventListener('scroll', listener);
//         };
//     }, []);
// };

const MainHome = () => {

    return (
        <IntroContain>
            <div>
                <IntroText>
                    Welcome to the portfolio blog
                    <br/>
                    of front engineer Han Dae-hyeon
                    <Hide below='md'>
                        <Box boxSize='sm'> 
                            <IntroImg src={FirstIntroImg} alt='FirstIntroImg Img' />
                        </Box>
                    </Hide>
                </IntroText>
            </div>
            <div>
                <ContentsText>My Git Hub</ContentsText>
                <GitHubLinkContain>
                    <GitHubSocialCard />
                </GitHubLinkContain>
            </div>
            <div>
                <ReverseContentsText>My Project</ReverseContentsText>
                <ReverseContentsBtn to={'/Project'}>Project</ReverseContentsBtn>
                <MainProjectCarouselsContain>
                    <MainProjectCarousel/>
                </MainProjectCarouselsContain>
            </div>
            <div>
                <CenterContentsText>My Career</CenterContentsText>
                <IntroCareersContain>
                    <IntroCareers />
                </IntroCareersContain>
            </div>
        </IntroContain>
    );
};

export default React.memo(MainHome);
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Hide,
    Box
  } from '@chakra-ui/react';
import styled, {keyframes} from 'styled-components';
import FirstIntroImg from '../MainHome/IMG/FirstIntroImg.png';
import GitHubSocialCard from '../MainHome/GitHubSocialCard/index';
import ProjectCaptionCarousel from './ProjectCarousel';
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

const Openclose = keyframes`
0% {
    top: 0.2rem;
    width: 0;
  }
  5% {
    width: 0;
  }
  15% {
    width: 50%;
  }
  30% {
    top: 0.2rem;
    width: 50%;
  }
  33% {
    top: 0.2rem;
    width: 0;
  }
  35% {
    top: 0.2rem;
    width: 0;
  }
  38% {
    top: -4.5rem;
    width: 0;
  }
  48% {
    top: -4.5rem;
    width: 50%;
  }
  62% {
    top: -4.5rem;
    width: 50%;
  }
  66% {
    top: -4.5rem;
    width: 0;
    text-indent: 0;
  }
  71% {
    top: -9rem;
    width: 0;
    text-indent: 5px;
  }
  86% {
    top: -9rem;
    width: 50%;
  }
  95% {
    top: -9rem;
    width: 50%;
  }
  98% {
    top: -9rem;
    width: 0;
    text-indent: 5px;
  }
  100% {
    top: 0;
    width: 0;
    text-indent: 0;
  }
}
`

const FirstContentsText = styled.h1`
    color: black;
    font-family: tahoma;
    font-size: 3rem;
    font-weight: 100;
    line-height: 1.5;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    width: 550px;
    left: 10%;
    margin: 25%;
`

const Message = styled.div`
    background-color: red;
    color: black;
    display: block;
    font-weight: 900;
    font-family: 'Kanit', sans-serif;
    overflow: hidden;
    position: absolute;
    padding-left: 0.5rem;
    top: 0.2rem;
    left: 200px;
    animation: ${Openclose} 5s ease-in-out infinite;
`

const SecondContentsText = styled.h2`
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

const ProjectCarouselsContain = styled.div`
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
            <FirstContentsText>
                <span>My own</span>
                <Message>
                    <div>thinking</div>
                    <div>planning</div>
                    <div>creating</div>
                </Message>
            </FirstContentsText>
            <div>
                <SecondContentsText>My Git Hub</SecondContentsText>
                <GitHubLinkContain>
                    <GitHubSocialCard />
                </GitHubLinkContain>
            </div>
            <div>
                <ReverseContentsText>My Project</ReverseContentsText>
                <ReverseContentsBtn to={'/projects'}>Project</ReverseContentsBtn>
                <ProjectCarouselsContain>
                    <ProjectCaptionCarousel/>
                </ProjectCarouselsContain>
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
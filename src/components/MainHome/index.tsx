import React from 'react';
import {
    Hide,
    Box
  } from '@chakra-ui/react';
import styled from 'styled-components';
import FirstIntroImg from '../MainHome/IMG/FirstIntroImg.png';
import GitHubSocialCard from '../MainHome/GitHubSocialCard/index';

const IntroContain= styled.div`

`

const IntroFirstContain = styled.div`

`

const IntroSecondContain = styled.div`

`

const IntroText= styled.h2`
    position: relative;
    z-index: 1;
    text-align: left;
    font-size: 64px;
    font-weight: 600px;
    font-family: 'Kanit', sans-serif;
    line-height: 1.27;
    letter-spacing: 0px;
    margin-block-start: 2.5em;
    margin-block-end: 2.5em;
    margin-inline-start: 150px;
    margin-inline-end: 150px;
    display: flex;
`

const ContentsText= styled.h2`
    position: relative;
    z-index: 1;
    text-align: left;
    font-size: 64px;
    font-weight: 600px;
    font-family: 'Kanit', sans-serif;
    line-height: 1.27;
    letter-spacing: 0px;
    top: 250px;
    margin-inline-start: 150px;
    margin-inline-end: 150px;
    display: flex;
`

const IntroImg = styled.img`
    position: absolute;
    left: 65%;
    top: 45%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 35%;
    min-height: 500px;
    min-width: 1000px;
    opacity: 0.4;
`

const GitHubLinkContain = styled.div`
    margin-inline-start: 50%;
`


const MainHome = () => {
    return (
        <IntroContain>
            <IntroFirstContain>
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
            </IntroFirstContain>
            <IntroSecondContain>
                <ContentsText>My Git Hub</ContentsText>
                <GitHubLinkContain>
                    <GitHubSocialCard />
                </GitHubLinkContain>
            </IntroSecondContain>
        </IntroContain>
    );
};

export default React.memo(MainHome);
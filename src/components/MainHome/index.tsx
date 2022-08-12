import React from 'react';
import {
    Hide,
    Box 
  } from '@chakra-ui/react';
import styled from 'styled-components';
import FirstIntroImg from '../MainHome/IMG/FirstIntroImg.png';

const IntroContain= styled.div`

`

const IntroText= styled.h2`
    position: relative;
    z-index: 1;
    text-align: left;
    font-size: 64px;
    font-weight: 600px;
    font-family: 'Silkscreen', cursive;
    line-height: 1.27;
    letter-spacing: -10px;
    margin-block-start: 2.5em;
    margin-block-end: 2.5em;
    margin-inline-start: 150px;
    margin-inline-end: 150px;
    display: flex;
`

const IntroImg = styled.img`
    position: absolute;
    left: 62%;
    top: 40%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 40%;
    min-height: 200px;
    min-width: 200px;
    opacity: 1;
`




const MainHome = () => {
    return (
        <IntroContain>
            <IntroText>
                Welcome to the portfolio blog
                <br/>
                of front engineer Han Dae-hyeon
            </IntroText>
            <Hide below='md'>
                <Box boxSize='sm'> 
                    <IntroImg src={FirstIntroImg} alt='FirstIntroImg Img' />
                </Box>
            </Hide>
        </IntroContain>
    );
};

export default React.memo(MainHome);
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
    text-align: center;
    font-size: 72px;
    font-weight: 600;
    line-height: 1.17;
    letter-spacing: -4px;
    margin-block-start: 2.4em;
    margin-block-end: 2.4em;
    margin-inline-start: 250px;
    margin-inline-end: 250px;
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
                프론트 개발자 한대현의
                <br/>
                포트폴리오 블로그 입니다
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
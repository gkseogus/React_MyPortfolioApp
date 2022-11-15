import React from "react";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import footerLogo from "../Footer/IMG/footerLogo.svg";

const FooterContain = styled.footer`
  position: relative;
`;

const LogoContain = styled.img`
  width: 130px;
  height: 130px;
  text-align: center;
`;

const LineText = styled.p`
  color: red;
`;

const MoFooter = styled.div`
  position: relative;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

/** Function that returns the logo component */
const Logo = () => {
  return <LogoContain alt="footer logo" src={footerLogo} loading="lazy" />;
};

/** Function that returns the footer list component */
const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  const { t } = useTranslation<string>("");

  /** Site Load Function */
  const handleGetDomain = (domain: string) => {
    window.open(domain);
  };

  return (
    <FooterContain>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 5 }}
            spacing={5}
            style={{ textAlign: "center" }}
          >
            <MoFooter>
              <Stack align={"flex-start"}>
                <ListHeader>{t("footerTitle1")}</ListHeader>
                <Stack direction={"row"} align={"center"} spacing={2}>
                  <Link href={"Home"} color={"#black"}>
                    Home
                  </Link>
                  <LineText>|</LineText>
                  <Link href={"Project"} color={"#black"}>
                    Project
                  </Link>
                </Stack>
                <Stack direction={"row"} align={"center"} spacing={2}>
                  <Link href={"Career"} color={"#black"}>
                    Career
                  </Link>
                  <LineText>|</LineText>
                  <Link href={"Email"} color={"#black"}>
                    E-mail
                  </Link>
                </Stack>
                <Stack direction={"row"} align={"center"} spacing={2}>
                  <Link href={"Bbs"} color={"#black"}>
                    Board
                  </Link>
                  <LineText>|</LineText>

                  <Link href={"Notice"} color={"#black"}>
                    Notice
                  </Link>
                  <Tag
                    size={"sm"}
                    bg={useColorModeValue("black", "black")}
                    ml={2}
                    color={"white"}
                  >
                    New
                  </Tag>
                </Stack>
              </Stack>
            </MoFooter>
            <Stack align={"flex-start"}>
              <ListHeader>{t("footerTitle2")}</ListHeader>
              <button
                color={"#2D3748"}
                onClick={() => {
                  handleGetDomain("https://www.hnine.com/");
                }}
              >
                Hnine
              </button>
              <button
                color={"#2D3748"}
                onClick={() => {
                  handleGetDomain("https://jinjin.co.kr/main.do");
                }}
              >
                JinJin System
              </button>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>{t("footerTitle3")}</ListHeader>
              <button
                color={"#2D3748"}
                onClick={() => {
                  handleGetDomain("https://www.jobkorea.co.kr/");
                }}
              >
                Jop Korea
              </button>
              <button
                color={"#2D3748"}
                onClick={() => {
                  handleGetDomain("https://www.saramin.co.kr/zf_user/");
                }}
              >
                Saramin
              </button>
              <button
                color={"#2D3748"}
                onClick={() => {
                  handleGetDomain("https://www.wanted.co.kr/");
                }}
              >
                Wanted
              </button>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>{t("footerTitle4")}</ListHeader>
              <button
                color={"#2D3748"}
                onClick={() => {
                  handleGetDomain(
                    "https://www.linkedin.com/in/dae-hyeon-han-468005249/"
                  );
                }}
              >
                LinkedIn
              </button>
              <button
                color={"#2D3748"}
                onClick={() => {
                  handleGetDomain(
                    "https://careerly.co.kr/profiles/496283?from=%2Fmessenger&location=gnb/"
                  );
                }}
              >
                Careerly
              </button>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>{t("footerTitle5")}</ListHeader>
              <button
                color={"#2D3748"}
                onClick={() => {
                  handleGetDomain("https://www.hallym.ac.kr/hallym_univ/");
                }}
              >
                Hallym University
              </button>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={"center"}
            _before={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: "1px solid",
              borderColor: useColorModeValue("gray.200", "gray.700"),
              flexGrow: 1,
              ml: 8,
            }}
          >
            <Logo />
          </Flex>
          <Text pt={0} fontSize={"sm"} textAlign={"center"}>
            © 2022.HDH(gkseogus) All rights reserved.
          </Text>
        </Box>
      </Box>
    </FooterContain>
  );
};
export default React.memo(Footer);

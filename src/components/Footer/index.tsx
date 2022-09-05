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
import styled from "styled-components";
import FooterLogo from "../Footer/footerLogo.png";

const LogoContain = styled.div`
  width: 130px;
  text-align: center;
`;

const Logo = (props: any) => {
  return (
    <LogoContain>
      <img alt="footer logo" src={FooterLogo} />
    </LogoContain>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  const getDomain = (domain: string) => {
    window.open(domain);
  };

  return (
    <footer>
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
            <Stack align={"flex-start"}>
              <ListHeader>Product</ListHeader>
              <Link href={"Home"} color={"#573b3b"}>
                Home
              </Link>
              <Stack direction={"row"} align={"center"} spacing={2}>
                <Link href={"Project"} color={"#573b3b"}>
                  Project
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
              <Stack direction={"row"} align={"center"} spacing={2}>
                <Link href={"Career"} color={"#573b3b"}>
                  Career
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
            <Stack align={"flex-start"}>
              <ListHeader>Company</ListHeader>
              <Link
                color={"#573b3b"}
                onClick={() => {
                  getDomain("https://www.hnine.com/");
                }}
              >
                Hnine
              </Link>
              <Link
                color={"#573b3b"}
                onClick={() => {
                  getDomain("https://jinjin.co.kr/main.do");
                }}
              >
                JinJin System
              </Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Job</ListHeader>
              <Link
                color={"#573b3b"}
                onClick={() => {
                  getDomain("https://www.jobkorea.co.kr/");
                }}
              >
                Jop Korea
              </Link>
              <Link
                color={"#573b3b"}
                onClick={() => {
                  getDomain("https://www.saramin.co.kr/zf_user/");
                }}
              >
                Saramin
              </Link>
              <Link
                color={"#573b3b"}
                onClick={() => {
                  getDomain("https://www.wanted.co.kr/");
                }}
              >
                Wanted
              </Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Follow Us</ListHeader>
              <Link
                color={"#573b3b"}
                onClick={() => {
                  getDomain(
                    "https://www.linkedin.com/in/dae-hyeon-han-468005249/"
                  );
                }}
              >
                LinkedIn
              </Link>
              <Link
                color={"#573b3b"}
                onClick={() => {
                  getDomain(
                    "https://careerly.co.kr/profiles/496283?from=%2Fmessenger&location=gnb/"
                  );
                }}
              >
                Careerly
              </Link>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>Univ</ListHeader>
              <Link
                color={"#573b3b"}
                onClick={() => {
                  getDomain("https://www.hallym.ac.kr/hallym_univ/");
                }}
              >
                Hallym University
              </Link>
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
            © 2022.8.11 부터 구축된 블로그입니다.
          </Text>
        </Box>
      </Box>
    </footer>
  );
};
export default React.memo(Footer);

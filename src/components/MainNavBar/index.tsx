import React from "react";
import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  ButtonProps,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Select,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import i18n from "../../i18n";
import dropDownState from "../../Recoil/Atom";
import mainLogo from "../MainNavBar/IMG/mainLogo.svg";
import AvatarImg from "../MainNavBar/IMG/AvatarLogo.svg";
import InstartgramLogo from "../MainNavBar/IMG/InstargramLogo.svg";
import CareerlyLogo from "../MainNavBar/IMG/CareerlyLogo.svg";
import GithubLogo from "../MainNavBar/IMG/GithubLogo.svg";
import moCareerlyLogo from "../MainNavBar/IMG/moCareerlyLogo.svg";
import moGithubLogo from "../MainNavBar/IMG/moGithubLogo.svg";
import { Link } from "react-router-dom";

const LeftNavBarLink = styled(Link)`
  :hover {
    background-color: black;
    text-decoration: none;
    color: red;
  }
`;

const RightNavBarLink = styled(Link)`
  color: white;
  :hover {
    background-color: black;
    text-decoration: none;
    color: red;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const DropDownText = styled.option`
  color: black;
`;

const HomeNavBarLink = styled.a`
  :hover {
    background-color: black;
    text-decoration: none;
    color: red;
  }
`;

const MoLink = styled(Link)`
  :hover {
    background-color: black;
    text-decoration: none;
    color: red;
  }
`;

const NavBarLogo = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 20px;
  margin-left: 20px;
`;

const IconContain = styled.div`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const MoIconContain = styled.div`
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

const AvatarMenuListLogo = styled.img`
  width: 20px;
  height: 20px;
  margin: 20px;
`;

/** Button function that changes to dark mode and white mode */
const ColorModeToggle = (props: ButtonProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Button
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: "none" }}
        w="fit-content"
        style={{
          background: "none",
          color: "white",
        }}
        {...props}
      >
        {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
    </Flex>
  );
};

const MainNavBar = (_children: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dropState, setDropState] = useRecoilState(dropDownState);
  const { t } = useTranslation("");

  const Links = [
    {
      key: t("homeMenu"),
      href: "/home",
    },
    {
      key: t("projectMenu"),
      href: "/Project",
    },
    {
      key: t("careerMenu"),
      href: "/Career",
    },
    {
      key: t("emailMenu"),
      href: "/Email",
    },
    {
      key: t("noticeMenu"),
      href: "/Notice",
    },
  ];

  /** Scroll Reset Function */
  const handleResetScroll = () => {
    window.scrollTo(0, 0);
  };

  /** 다국어 처리 기능 함수 */
  const handleSelect = (e: any) => {
    i18n.changeLanguage(e.target.value);
    setDropState(e.target.value);
  };

  return (
    <header>
      <Box
        bg={useColorModeValue("black", "black")}
        px={4}
        fontSize={"20px"}
        fontWeight={600}
        position={"fixed"}
        top={0}
        left={0}
        right={0}
        zIndex={10}
      >
        <Flex h={32} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            bg={useColorModeValue("black", "black")}
            color="red"
          />
          <HStack spacing={8} alignItems={"center"}>
            <NavBarLogo src={mainLogo} alt={"mainLogo"} />
            <HStack
              as={"nav"}
              spacing={3}
              display={{ base: "none", md: "flex" }}
              color="white"
            >
              <HomeNavBarLink href="/Home" onClick={handleResetScroll}>
                {t("homeMenu")}
              </HomeNavBarLink>
              <LeftNavBarLink to="/Project" onClick={handleResetScroll}>
                {t("projectMenu")}
              </LeftNavBarLink>
              <LeftNavBarLink to="/Career" onClick={handleResetScroll}>
                {t("careerMenu")}
              </LeftNavBarLink>
              <LeftNavBarLink to="/Email" onClick={handleResetScroll}>
                {t("emailMenu")}
              </LeftNavBarLink>
            </HStack>
          </HStack>
          <HStack
            as={"nav"}
            spacing={3}
            display={{ base: "none", md: "flex" }}
            color="white"
            paddingLeft={"47%"}
          >
            <RightNavBarLink to="/Bbs" onClick={handleResetScroll}>
              {t("boardMenu")}
            </RightNavBarLink>
            <RightNavBarLink to="/Notice" onClick={handleResetScroll}>
              {t("noticeMenu")}
            </RightNavBarLink>
          </HStack>
          <Flex alignItems={"center"}>
            <Select
              variant=""
              background={"none"}
              color="white"
              onChange={handleSelect}
            >
              <DropDownText value="en">EN</DropDownText>
              <DropDownText value="ko">KO</DropDownText>
            </Select>
            <ColorModeToggle />
            <IconContain>
              <AvatarMenuListLogo
                src={InstartgramLogo}
                alt={"InstargramLogo"}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.open("https://www.instagram.com/dae_hyeon00/");
                }}
              />
            </IconContain>
            <IconContain>
              <AvatarMenuListLogo
                src={CareerlyLogo}
                alt={"CareerlyLogo"}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.open(
                    "https://careerly.co.kr/profiles/496283?from=newsfeed&location=gnb"
                  );
                }}
              />
            </IconContain>
            <IconContain>
              <AvatarMenuListLogo
                src={GithubLogo}
                alt={"GithubLogo"}
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.open("https://github.com/gkseogus");
                }}
              />
            </IconContain>
            <MoIconContain>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"md"}
                    src={AvatarImg}
                    bg="black"
                    name="AvatarImg"
                  />
                </MenuButton>
                <MenuList color="black">
                  <MenuItem
                    _hover={{
                      background: "white",
                      color: "red",
                    }}
                    as="a"
                    href="https://www.instagram.com/dae_hyeon00/"
                  >
                    <AvatarMenuListLogo
                      src={InstartgramLogo}
                      alt={"InstartgramLogo"}
                    />
                    Instargram
                  </MenuItem>
                  <MenuItem
                    _hover={{
                      background: "white",
                      color: "red",
                    }}
                    as="a"
                    href="https://careerly.co.kr/profiles/496283?from=newsfeed&location=gnb"
                  >
                    <AvatarMenuListLogo
                      src={moCareerlyLogo}
                      alt={"moCareerlyLogo"}
                    />
                    Careerly
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem
                    _hover={{
                      background: "white",
                      color: "red",
                    }}
                    as="a"
                    href="https://github.com/gkseogus"
                  >
                    <AvatarMenuListLogo
                      src={moGithubLogo}
                      alt={"moGithubLogo"}
                    />
                    Github
                  </MenuItem>
                </MenuList>
              </Menu>
            </MoIconContain>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} color="white">
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <MoLink key={uuidv4()} to={link.href}>
                  {link.key}
                </MoLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </header>
  );
};

export default React.memo(MainNavBar);

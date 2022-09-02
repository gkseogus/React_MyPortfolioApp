import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import HdhLogo from "../MainNavBar/IMG/mainLogo.png";
import AvatarImg from "../MainNavBar/IMG/AvatarLogo.png";
import InstartgramLogo from "../MainNavBar/IMG/InstargramLogo.png";
import CareerlyLogo from "../MainNavBar/IMG/CareerlyLogo.png";
import GithubLogo from "../MainNavBar/IMG/GithubLogo.png";
import moCareerlyLogo from "../MainNavBar/IMG/moCareerlyLogo.png";
import moGithubLogo from "../MainNavBar/IMG/moGithubLogo.png";

const NavBarLogo = styled.img`
  width: 200px;
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

const Links = ["Home", "Project", "Career"];

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      background: "black",
      color: "red",
    }}
    href={href}
  >
    {children}
  </Link>
);

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
            <NavBarLogo src={HdhLogo} />
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              color="white"
            >
              {Links.map((link) => (
                <NavLink key={uuidv4()} href={link}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <ColorModeToggle />
            <IconContain>
              <AvatarMenuListLogo
                src={InstartgramLogo}
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
                  <Avatar size={"md"} src={AvatarImg} bg="black" />
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
                    <AvatarMenuListLogo src={InstartgramLogo} />
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
                    <AvatarMenuListLogo src={moCareerlyLogo} />
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
                    <AvatarMenuListLogo src={moGithubLogo} />
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
                <NavLink key={uuidv4()} href={link}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </header>
  );
};

export default MainNavBar;

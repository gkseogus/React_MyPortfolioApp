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
import styled from "styled-components";

import HdhLogo from "../MainNavBar/IMG/mainLogo.png";
import AvatarImg from "../MainNavBar/IMG/AvatarLogo.png";
import InstartgramLogo from "../MainNavBar/IMG/InstargramLogo.png";
import CareerlyLogo from "../MainNavBar/IMG/CareerlyLogo.png";
import GithubLogo from "../MainNavBar/IMG/GithubLogo.png";

const NavBarLogo = styled.img`
  width: 200px;
  height: 150px;
  margin-top: 20px;
  margin-left: 20px;
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
        {...props}
      >
        {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
    </Flex>
  );
};

export default function MainNavBar(_children: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Box
        bg={useColorModeValue("black", "black")}
        px={4}
        fontSize={"20px"}
        fontWeight={600}
      >
        <Flex h={32} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
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
                <NavLink key={link} href={link}>
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <ColorModeToggle />
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
                  <AvatarMenuListLogo src={CareerlyLogo} />
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
                  <AvatarMenuListLogo src={GithubLogo} />
                  Github
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link} href={link}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
}

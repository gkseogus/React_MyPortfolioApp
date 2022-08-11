import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import styled from 'styled-components';

import HdhLogo from '../MainNavBar/IMG/navBarLogo.png';
import AvatarImg from '../MainNavBar/IMG/AvatarLogo.png';
import InstartgramLogo from '../MainNavBar/IMG/InstargramLogo.png';
import CareerlyLogo from '../MainNavBar/IMG/CareerlyLogo.png';
import GithubLogo from '../MainNavBar/IMG/GithubLogo.png';

const NavBarLogo = styled.img`
    width: 200px;
    height: 150px;
    margin-top: 20px;
    margin-left: 20px;
`

const AvatarMenuListLogo = styled.img`
    width: 20px;
    height: 20px;
    margin: 20px;
`

const Links = ['Home', 'Projects', 'Careers'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('#00afff', '#00afff'),
    }}
    href={'/'}>
    {children}
  </Link>
);

export default function MainNavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Box bg={useColorModeValue('#64B5F6', '#64B5F6')} px={4}>
        <Flex h={32} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <NavBarLogo src= {HdhLogo} />
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'md'}
                  src={AvatarImg}
                  bg='#64B5F6'
                />
              </MenuButton>
              <MenuList>
                <MenuItem    
                as="a"
                href="https://www.instagram.com/dae_hyeon00/"
                >
                    <AvatarMenuListLogo src= {InstartgramLogo} />
                    Instargram
                </MenuItem>
                <MenuItem    
                as="a"
                href="https://careerly.co.kr/profiles/496283?from=newsfeed&location=gnb"
                >
                    <AvatarMenuListLogo src= {CareerlyLogo} />
                    Careerly
                </MenuItem>
                <MenuDivider />
                <MenuItem    
                as="a"
                href="https://github.com/gkseogus"
                >
                    <AvatarMenuListLogo src= {GithubLogo} />
                    Github
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} >
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </div>
  );
}
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import GithubCardbackGround from '../GitHubSocialCard/GithubCardbackGround.png';

const GitHubSocialCard = () => {
    const [user, setUser] = useState({
        name: '',
        bio: '',
        followers: '',
        following: ''
    });

    const { name, bio, followers, following } = user;

    const getData = async () => {
        const token = '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'
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        try {
            //Successful response
            const response = await axios.get('https://api.github.com/user',config);
            setUser({
                ...user,
                name: response.data.name,
                bio: response.data.bio,
                followers: response.data.followers,
                following: response.data.following
            });
            console.log(response.data)
        } catch (error) {
            //Failed to respond
            alert(error);
        }
    }

    const githubAddress = () => {
        window.open('https://github.com/gkseogus');
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Center py={6}>
            <Box
                maxW={'400px'}
                w={'full'}
                bg={useColorModeValue('black', 'black')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Image
                h={'120px'}
                w={'full'}
                src={GithubCardbackGround}
                objectFit={'cover'}
                />
                <Flex justify={'center'} mt={-12}>
                <Avatar
                    size={'xl'}
                    src={'https://avatars.githubusercontent.com/u/76561461?v=4'}
                    css={{
                    border: '2px solid white',
                    }}
                />
                </Flex>
                <Box p={6}>
                <Stack spacing={5} align={'center'} mb={5}>
                    <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} color={'white'}>
                        {name}
                    </Heading>
                    <Text color={'white'}>{bio}</Text>
                </Stack>
                <Stack direction={'row'} justify={'center'} spacing={6}>
                    <Stack spacing={0} align={'center'}>
                    <Text fontWeight={600} color={'white'}>{followers}</Text>
                    <Text fontSize={'sm'} color={'white'}>
                        Followers
                    </Text>
                    </Stack>
                    <Stack spacing={0} align={'center'}>
                    <Text fontWeight={600} color={'white'}>{following}</Text>
                    <Text fontSize={'sm'} color={'white'}>
                        Following
                    </Text>
                    </Stack>
                </Stack>
                <Button
                    w={'full'}
                    mt={8}
                    bg={useColorModeValue('#151f21', 'gray.900')}
                    color={'white'}
                    rounded={'md'}
                    _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                    }} onClick={githubAddress}>
                    Link
                </Button>
                </Box>
            </Box>
        </Center>
    );
}

export default GitHubSocialCard;
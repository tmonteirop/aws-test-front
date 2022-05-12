import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../../store/auth/action';

import { Center, Heading } from "@chakra-ui/react";

import {
    Input,
    FormControl,
    Button,
    Container,
    Box
} from "@chakra-ui/react"

import { AlertMessage } from '../../component/AlertMessage';

export function Login() {

    const dispatch = useDispatch();

    const { signInRequest } = bindActionCreators(authActions, dispatch);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [isInvalid, setIsInvalid] = useState(false);

    const state = useSelector((state) => state);

    const statusMessage = state.message.status;

    useEffect(() => {
        statusMessage === 'error' && setIsInvalid(true)
    }, [statusMessage])

    const handleSendData = () => {
        signInRequest({ username, password });
    }

    return (
        <div className="App">
            {console.log(state)}
            <AlertMessage />
            <Container maxW="container.xl" w='24rem'>
                <Box mt='16rem'>
                    <Center>
                        <Heading size='lg'>Login React Redux</Heading>
                    </Center>
                    <form>
                        <FormControl id='username' mt='1rem' isRequired={true} isInvalid={isInvalid} >
                            <Input type='text' value={username} placeholder='Usuário' onChange={(e) => setUsername(e.target.value)} ></Input>
                        </FormControl >
                        <FormControl id='password' mt='1rem' isInvalid={isInvalid}>
                            <Input type='password' value={password} placeholder='Senha' autoComplete='on' onChange={(e) => setPassword(e.target.value)}></Input>
                        </FormControl>
                    </form>
                    <Box mt='30px'>
                        <Button colorScheme="teal" size="md" w='100%' onClick={handleSendData}>
                            Entrar
                        </Button>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authActions from '../../store/auth/action';

import { store } from '../../store/store';

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    Box,
    Heading,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

export function TopBar() {

    const username = store.getState().loggedUser.username;

    const dispatch = useDispatch();

    const { signOut } = bindActionCreators(authActions, dispatch);

    const handleSignOut = () => {
        signOut();
    }

    return (
        <>
            <Flex bg="teal" h='4rem'>
                <Flex m='1rem' w='100%' justifyContent='space-between' alignItems='center'>
                    <Flex color='white'>
                        <Flex>
                            <Heading size="md" isTruncated>
                                APP
                            </Heading>
                        </Flex>
                        <Box ml='2rem'>
                            <Link to="/user">Usuários</Link>
                        </Box>
                        <Box ml='1rem'>
                            <Link to="#">Menu item</Link>
                        </Box>
                    </Flex>
                    <Flex>
                        <Menu isLazy>
                            <MenuButton cursor='pointer' color='white'>{username}</MenuButton>
                            <MenuList>
                                <MenuItem onClick={handleSignOut}>Sair</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}
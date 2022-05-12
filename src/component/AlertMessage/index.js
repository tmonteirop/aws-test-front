import React from 'react';

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as messageActions from '../../store/message/action';

import { CloseButton } from "@chakra-ui/react";

import { store } from '../../store/store';

import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/react"

export const AlertMessage = () => {

    const { title, description, status } = store.getState().message;

    const dispatch = useDispatch();

    const { clearMessage } = bindActionCreators(messageActions, dispatch);

    const handleClearMessage = () => {
        clearMessage();
    }

    return (
        <>
            {title &&
                <Alert status={status} variant="top-accent">
                    <AlertIcon />
                    <AlertTitle mr={2}>{title}</AlertTitle>
                    <AlertDescription>{description}</AlertDescription>
                    <CloseButton position="absolute" right="8px" top="8px" onClick={handleClearMessage} />
                </Alert>
            }
        </>
    );
}
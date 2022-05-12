import React, { useEffect, useState } from "react";

import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  VisuallyHidden,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";

import { closeModal } from "../../store/modal/action";
import { postUser } from "../../store/user/action";

export const UserModalForm = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleSubmitUserData = () => {
    console.log("Enviar dados");
    const newUserData = {
      id,
      name,
      username,
      email,
      password,
    };

    // POST NEW USER
    dispatch(postUser(newUserData));
    return dispatch(closeModal());

    // UPDATE USER
  };

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const selectedUser = useSelector((state) => state.user.selectedUser);

  const handleClearInputs = () => {
    setId("");
    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (selectedUser) {
      setId(selectedUser.id);
      setName(selectedUser.name);
      setUsername(selectedUser.username);
      setEmail(selectedUser.email);
      setPassword(selectedUser.password);
    } else {
      handleClearInputs();
    }
  }, [selectedUser]);

  return (
    <>
      <ModalHeader>{id ? "Editar Usuário" : "Novo Usuário"}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <FormControl>
          <VisuallyHidden value={id}></VisuallyHidden>

          <FormLabel htmlFor="name">Nome</FormLabel>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormErrorMessage>Nome não informado</FormErrorMessage>

          <FormLabel htmlFor="username">Usuário</FormLabel>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormErrorMessage>Usuário não informado</FormErrorMessage>

          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormErrorMessage>Erro email</FormErrorMessage>

          <FormLabel htmlFor="password">Senha</FormLabel>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormErrorMessage>Erro senha</FormErrorMessage>
        </FormControl>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="red" mr={3} onClick={handleCloseModal}>
          Fechar
        </Button>
        <Button colorScheme="teal" onClick={handleSubmitUserData}>
          Salvar
        </Button>
      </ModalFooter>
    </>
  );
};

import React, { useEffect, useState } from "react";

import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";

import { getUserRequest, clearCurrentUser } from "../../store/user/action";

import { openModal, closeModal } from "../../store/modal/action";

import { TableComponent } from "../../component/TableComponent";

import { ModalComponent } from "../../component/ModalComponent";

import { UserModalForm } from "../../component/UserModalForm";

export function User() {
  const dispatch = useDispatch();

  const usersList = useSelector((state) => state.user.users);

  const tableHead = ["Nome", "Usuário", "e-mail"];

  const handleNewUser = () => {
    dispatch(clearCurrentUser());
    dispatch(openModal());
  };

  useEffect(() => {
    dispatch(clearCurrentUser());
    dispatch(getUserRequest());
  }, [dispatch]);

  return (
    <>
      <Container maxW="container.xl" mt="2rem">
        <Flex alignItems="center">
          <Heading mr="2rem">Usuários</Heading>
          <Button
            onClick={() => {
              handleNewUser();
            }}
          >
            Novo
          </Button>
        </Flex>
        <Box mt="2rem">
          <TableComponent tableHead={tableHead} tableData={usersList} />
        </Box>
      </Container>
      <ModalComponent children={<UserModalForm />} />
    </>
  );
}

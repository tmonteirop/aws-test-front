import React from "react";

import { Box, Container, Flex, Heading } from "@chakra-ui/react";

import { StatComponent } from "../../component/StatComponent";

import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <>
      <Container maxW="container.xl" mt="2rem">
        <Heading>Dashboard</Heading>
        <Flex mt="2rem">
          <Box>
            <Link to="/user">
              <StatComponent title="Usuários" />
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

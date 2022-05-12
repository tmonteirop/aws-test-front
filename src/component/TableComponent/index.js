import React from "react";

import {
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
} from "@chakra-ui/react";

import { useDispatch } from "react-redux";

import { setCurrentUser } from "../../store/user/action";
import { openModal } from "../../store/modal/action";

export const TableComponent = (props) => {
  const dispatch = useDispatch();

  const itemEdit = (id) => {
    dispatch(setCurrentUser(id));
    return dispatch(openModal());
  };

  const itemDelete = (id) => {
    return console.log(`Delete User: ${id}`);
  };

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {props.tableHead &&
                props.tableHead.map((head) => {
                  return <Th key={head}>{head}</Th>;
                })}
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.tableData &&
              props.tableData.map((data) => {
                return (
                  <Tr key={data.id}>
                    <Td>{data.name}</Td>
                    <Td>{data.username}</Td>
                    <Td>{data.email}</Td>
                    <Td key={data.id}>
                      <Flex justifyContent="space-around">
                        <Button
                          // colorScheme="yellow"
                          size="sm"
                          onClick={() => itemEdit(data.id)}
                        >
                          Editar
                        </Button>
                        <Button
                          // colorScheme="red"
                          size="sm"
                          onClick={() => itemDelete(data.id)}
                        >
                          Excluir
                        </Button>
                      </Flex>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};

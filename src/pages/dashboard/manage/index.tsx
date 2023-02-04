import React from "react";
import {
  Text,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Spacer,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { useWallet } from "@/context/MetamaskProvider";
import { Column, useTable } from "react-table";

type Props = {
  columns: Column<{
    Header: string;
    accessor: string;
  }>[];
  data: {
    nft: string;
    type: string;
    status: string;
    expires: string;
    details: JSX.Element;
    burn: JSX.Element;
  }[];
};

const CustomTable: React.FC<Props> = ({ columns, data }) => {
  const router = useRouter();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <TableContainer width="100%" mt={6}>
      <Table variant="simple" width="100%" {...getTableProps()}>
        <TableCaption>Harvard Business School Campaigns</TableCaption>
        <Thead>
          <Tr>
            {headerGroups[0].headers.map((col) => (
              <Th key={col.id}>{col.render("Header")}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell, idx) => {
                  switch (cell.column.id) {
                    case "details":
                      return (
                        <Td {...cell.getCellProps()} key={idx}>
                          <Button
                            colorScheme="#f8f8f800"
                            onClick={() =>
                              router.push(`/dashboard/manage/details/1`)
                            }
                          >
                            🔍
                          </Button>
                        </Td>
                      );
                    case "burn":
                      return (
                        <Td {...cell.getCellProps()} key={idx}>
                          <Button
                            colorScheme="#f8f8f800"
                            onClick={() =>
                              router.push(
                                `/dashboard/manage/burn/${cell.row.original.id}`
                              )
                            }
                          >
                            🔥
                          </Button>
                        </Td>
                      );
                    default:
                      return (
                        <Td {...cell.getCellProps()} key={idx}>
                          {cell.render("Cell")}
                        </Td>
                      );
                  }
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

const Manage = () => {
  const { contractPublisher } = useWallet();
  const columns = React.useMemo(
    () => [
      {
        Header: "NFT / Campaign",
        accessor: "nft",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Expires?",
        accessor: "expires",
      },
      {
        Header: "Details",
        accessor: "details",
      },
      {
        Header: "Burn",
        accessor: "burn",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        nft: "Harvard Class of 98 Diplomas",
        type: "Diploma",
        status: "152/207",
        expires: "May 2001",
        details: <Button colorScheme="#f8f8f800">🔍</Button>,
        burn: <Button colorScheme="#f8f8f800">🔥</Button>,
      },
      {
        nft: "Harvard Class of 98 Diplomas",
        type: "Diploma",
        status: "152/207",
        expires: "May 2001",
        details: <Button colorScheme="#f8f8f800">🔍</Button>,
        burn: <Button colorScheme="#f8f8f800">🔥</Button>,
      },
    ],
    []
  );
  const router = useRouter();

  console.log("____________contractPublisher", contractPublisher);
  if (!contractPublisher) {
    return <p>Please connect your wallet</p>;
  }

  return (
    <>
      <Navbar />
      <Box mt={10}>
        <Container maxW="100%">
          <Box bg="#3979d9" color="white" mb={8}>
            <Text fontSize="6xl" style={{ textAlign: "center" }}>
              DataLink Publisher Dashboard
            </Text>
          </Box>
          <Flex>
            <Box p="4">
              <Heading as="h2" size="xl">
                Overview
              </Heading>

              <Heading as="h2" size="xl">
                Harvard Business School
              </Heading>
            </Box>
            <Spacer />
            <Box p="4">
              <Button
                size="md"
                height="48px"
                width="200px"
                onClick={() => router.push("/dashboard/create-nft")}
              >
                Create NFT
              </Button>
            </Box>
          </Flex>
          <CustomTable columns={columns} data={data} />
        </Container>
      </Box>
    </>
  );
};

export default Manage;

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

const Manage = () => {
  const { contractPublisher } = useWallet();
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

          <TableContainer width="100%" mt={6}>
            <Table variant="simple" width="100%">
              <TableCaption>Harvard Business School Campaigns</TableCaption>
              <Thead>
                <Tr>
                  <Th>NFT / Campaign</Th>
                  <Th>Type</Th>
                  <Th>Status</Th>
                  <Th>Expires?</Th>
                  <Th>Details</Th>
                  <Th style={{ color: "red" }}>Burn</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Harvard Class of 98 Diplomas</Td>
                  <Td>Diploma</Td>
                  <Td>152/207</Td>
                  <Td>May 2001</Td>
                  <Td>
                    <Button colorScheme="#f8f8f800">🔍</Button>
                  </Td>
                  <Td>
                    <Button colorScheme="#f8f8f800">🔥</Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Harvard Class of 98 Diplomas</Td>
                  <Td>Diploma</Td>
                  <Td>152/207</Td>
                  <Td>May 2001</Td>
                  <Td>
                    <Button colorScheme="#f8f8f800">🔍</Button>
                  </Td>
                  <Td>
                    <Button colorScheme="#f8f8f800">🔥</Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </>
  );
};

export default Manage;

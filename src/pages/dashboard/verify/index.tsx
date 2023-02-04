import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    SimpleGrid,
    Text,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from "@chakra-ui/react";
  import { Input } from '@chakra-ui/react'
  import Image from "next/image";
  import Navbar from "@/components/Navbar";
  import Footer from "@/components/Footer";
  import { useDropzone } from "react-dropzone"
  import React from 'react'
import Dropzone from 'react-dropzone'

  
  const Verify = () => {
    return (
      <div className="about">
  
        <Navbar />
        <div className="sample">
  
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(750px, 1fr))"
            margin="5em"
          >
  
            <Card w="100%" alignItems="center" mx="auto">
              <CardHeader>
                <Heading size="lg" >
                  {" "}
                  Verify a Document or Credential now!
                </Heading>
              </CardHeader>
            </Card>

            <Card>
              {/* <Image src={agreement} alt="logo" width={600} height={600} /> */}
            </Card>
            
          </SimpleGrid>
        </div>

        {/*SEARCH BOX*/}
        {/*HARDCODED*/}
        <Input marginLeft="2.5rem" w="50%" placeholder='Search for a credential ID' />

        <br />
        <br />
        {/*FILE UPLOAD */}
        {/*NEEDS TO BE TEMP STORED UNTIL VALIDATED*/}
        <div>
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({getRootProps, getInputProps}) => (
                    <section>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>Click this text to select file or Drag n Drop file below to validate</p>
                        <br />
                        {/*vvv this card does absolutely nothing...only for show vvv */}
                        <Card fontSize="9xl" alignItems="center"  w="100%" h="200px" maxW="960px" mx="auto">+
                        </Card>
                    </div>
                    </section>
                )}
            </Dropzone>
        </div>

        <br />
        <br />
        <br />

        {/*HARDCODED*/}
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Top Data Publishers in DataLink DAO</TableCaption>
                <Thead>
                <Tr>
                    <Th>Top Verifiers</Th>
                    <Th>Amount</Th>
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td>VerifyFirst.ETH</Td>
                    <Td>45.4</Td>
                </Tr>
                <Tr>
                    <Td>DELG.ETH</Td>
                    <Td>30.48</Td>
                </Tr>
                <Tr>
                    <Td>FirstBankND.ETH</Td>
                    <Td>9.91444</Td>
                </Tr>
                </Tbody>
                <Tfoot>
                </Tfoot>
            </Table>
        </TableContainer>
  
        <br />
        <br />

        <Footer />
      </div>
    );
  };
  
  export default Verify;
  
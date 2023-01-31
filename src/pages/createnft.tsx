import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Image from "next/image";
import { useWallet } from "../context/MetamaskProvider";
import MetamaskConnectButton from "@/components/MetamaskConnectButton";
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Heading,
  Button,
  Text,
  Box,
  SimpleGrid,
  Flex,
  Spacer,
  Select,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Tooltip,
} from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";

const Createnft = () => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [studentId, setStudentId] = useState(null);
  const [walletId, setWalletId] = useState(null);
  const [documentType, setDocumentType] = useState(null);
  const [name, setName] = useState(null);
  const [degree, setDegree] = useState(null);
  const [major, setMajor] = useState(null);
  const [minor, setMinor] = useState(null);
  const [graduationDate, setGraduationDate] = useState(null);
  const [GPA, setGPA] = useState(null);
  const [diploma, setDiploma] = useState(null);
  const [diplomaDate, setDiplomaDate] = useState(null);
  const [diplomaVerification, setDiplomaVerification] = useState(null);
  const [transcript, setTranscript] = useState(null);
  console.log(
    "walletId",
    studentId,
    walletId,
    documentType,
    documentType,
    name,
    degree,
    major,
    minor,
    graduationDate,
    GPA,
    diploma,
    diplomaDate,
    diplomaVerification,
    transcript
  );

  const handleImage = (event) => {
    setImage(event.target.files[0]);
    setImageName(event.target.files[0].name);
  };

  const handleTranscript = (event) => {
    // setIm(event.target.files[0]);
    setTranscript(event.target.files[0]);
  };

  return (
    <>
      <Navbar />

      <Box p={4}>
        <Text fontSize="2xl" style={{ fontWeight: "600" }}>
          DataLink DAO Data Standards
        </Text>
        <Text fontSize="xl">
          At DataLink we have the highest data standards...
        </Text>
        <Text fontSize="xl">
          After tokenization, your data will have new value streams unlocked
          powered by blockchain and crypto tech.
        </Text>

        <Flex gap="2">
          <Text fontSize="xl" style={{ fontWeight: "300" }}>
            Upload csv with following fields to match:
          </Text>

          <Button colorScheme="twitter" isDisabled>
            Download Template
          </Button>

          <Button colorScheme="twitter" isDisabled>
            Upload csv file
          </Button>
        </Flex>
      </Box>

      <SimpleGrid minChildWidth="120px" spacing="40px">
        {/* FORM */}
        <Box height="100%" w="100%" pb={10}>
          <Container>
            <br />
            <hr style={{ border: "1px solid #ccc" }} />
            <br />

            <FormControl id="studentid" p={1}>
              <Flex alignContent="center">
                <label htmlFor="formFileImage">+ Upload Diploma Image</label>
              </Flex>
              <input
                type="file"
                id="formFileImage"
                onChange={handleImage}
                defaultValue={imageName ? imageName : ""}
                style={{ display: "none" }}
                required
              />
            </FormControl>

            <FormControl id="studentid" p={1}>
              <Flex alignContent="center">
                <label htmlFor="formFileTranscript">+ Upload Transcripts</label>
              </Flex>
              <input
                type="file"
                id="formFileTranscript"
                onChange={handleTranscript}
                defaultValue={transcript ? transcript : ""}
                style={{ display: "none" }}
                required
              />
            </FormControl>

            <FormControl id="studentid" p={1}>
              <Flex alignContent="center">
                <FormLabel>Student ID</FormLabel>
                <Tooltip
                  hasArrow
                  label="A unique identifier for the student, such as a university-issued
          student ID number."
                  bg="gray.100"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </Flex>
              <Input
                type="text"
                onChange={(e) => {
                  setStudentId(e.target.value);
                }}
              />
            </FormControl>

            <FormControl id="walletid" p={1}>
              <Flex alignContent="center">
                <FormLabel>Wallet ID</FormLabel>
                <Tooltip
                  hasArrow
                  label="Web3 wallet public address of recipient, if known."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </Flex>
              <Input
                type="text"
                onChange={(e) => {
                  setWalletId(e.target.value);
                }}
              />
            </FormControl>

            <FormControl id="DocumentType" p={1}>
              <Flex alignContent="center">
                <FormLabel>Document Type</FormLabel>
                <Tooltip
                  hasArrow
                  label="Type of data or document being tokenized."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </Flex>
              <Select
                placeholder="Select one"
                onChange={(e) => setDocumentType(e.target.value)}
              >
                <option value="Diploma">Diploma</option>
                <option value="Certification">Certification</option>
                <option value="License">License</option>
                <option value="Other">Other</option>
              </Select>
            </FormControl>

            <FormControl id="Name" p={1}>
              <Flex alignContent="center">
                <FormLabel>Name</FormLabel>
                <Tooltip
                  hasArrow
                  label="The student's full name, including first, middle, and last names."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </Flex>
              <Input type="text" onChange={(e) => setName(e.target.value)} />
            </FormControl>

            <FormControl id="Degree" p={1}>
              <Flex alignContent="center">
                <FormLabel>Degree</FormLabel>
                <Tooltip
                  hasArrow
                  label="The student's degree, such as Bachelor of Science or Master of Arts."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </Flex>
              <Input type="text" onChange={(e) => setDegree(e.target.value)} />
            </FormControl>

            <FormControl id="Major" p={1}>
              <Flex alignContent="center">
                <FormLabel>Major</FormLabel>
                <Tooltip
                  hasArrow
                  label="The student's major field of study, such as Computer Science or English."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </Flex>
              <Input type="text" onChange={(e) => setMajor(e.target.value)} />
            </FormControl>

            <FormControl id="Minor" p={1}>
              <Flex alignContent="center">
                <FormLabel>Minor</FormLabel>
                <Tooltip
                  hasArrow
                  label="The student's minor field of study, if applicable."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </Flex>
              <Input type="text" onChange={(e) => setMinor(e.target.value)} />
            </FormControl>

            <FormControl id="GraduationDate" p={1}>
              <Flex alignContent="center">
                <FormLabel>Graduation Date</FormLabel>
                <Tooltip
                  hasArrow
                  label="The date the student graduated."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </Flex>
              <Input
                type="text"
                onChange={(e) => setGraduationDate(e.target.value)}
              />
            </FormControl>

            <FormControl id="GPA" p={1}>
              <Flex alignContent="center">
                <FormLabel>GPA</FormLabel>
                <Tooltip
                  hasArrow
                  label="The student's grade point average."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </Flex>
              <Input type="text" onChange={(e) => setGPA(e.target.value)} />
            </FormControl>

            <FormControl id="Diploma#" p={1}>
              <Flex alignContent="center">
                <FormLabel>Diploma #</FormLabel>
                <Tooltip
                  hasArrow
                  label=" A unique identifier for the diploma, such as a serial number."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </Flex>
              <Input type="text" onChange={(e) => setDiploma(e.target.value)} />
            </FormControl>

            <FormControl id="DiplomaIssuedDate" p={1}>
              <Flex alignContent="center">
                <FormLabel>Diploma Issued Date</FormLabel>
                <Tooltip
                  hasArrow
                  label="The date the diploma was issued."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </Flex>
              <Input
                type="text"
                onChange={(e) => setDiplomaDate(e.target.value)}
              />
            </FormControl>

            <FormControl id="DiplomaVerification" p={1}>
              <Flex alignContent="center">
                <FormLabel>Diploma Verification</FormLabel>
                <Tooltip
                  hasArrow
                  label="A flag indicating whether the diploma has been
          verified as authentic."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </Flex>
              <Select
                placeholder="Select one"
                onChange={(e) => setDiplomaVerification(e.target.value)}
              >
                <option value="Yes">Yes</option>
                <option value="No">No yet</option>
              </Select>
            </FormControl>

            <Button colorScheme="twitter">Create NFT </Button>
          </Container>
        </Box>

        {/* LABELS */}
        <Box height="100%" w="100%">
          {image ? (
            <Text fontSize="xl">Your Diploma</Text>
          ) : (
            <>
              <Text fontSize="xl">Your diploma will display here</Text>
              <Image
                src="/placeholder.png"
                alt="description"
                width={600}
                height={600}
                style={{
                  objectFit: "contain",
                  paddingTop: "2rem",
                }}
              />
            </>
          )}

          {image && (
            <Image
              src={image ? URL.createObjectURL(image) : ""}
              alt="description"
              width={600}
              height={600}
              style={{
                objectFit: "contain",
                paddingTop: "2rem",
              }}
            />
          )}

          <br />

          {transcript ? (
            <Text fontSize="xl">Your Transcripts</Text>
          ) : (
            <>
              <Text fontSize="xl">Your Transcripts will display here</Text>
              <Image
                src="/placeholder.png"
                alt="description"
                width={600}
                height={600}
                style={{
                  objectFit: "contain",
                  paddingTop: "2rem",
                }}
              />
            </>
          )}
          {transcript && (
            <Image
              src={transcript ? URL.createObjectURL(transcript) : ""}
              alt="description"
              width={600}
              height={600}
              style={{
                objectFit: "contain",
                paddingTop: "2rem",
              }}
            />
          )}
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Createnft;

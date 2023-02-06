import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Image from "next/image";
import { useWallet } from "../../../context/MetamaskProvider";
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
  InputGroup,
  styled,
} from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";

const StyledInputGroup = styled(InputGroup, {
  baseStyle: {
    flexDirection: "column",
  },
});

const StyledFormLabel = styled(FormLabel, {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    columnGap: 2,
  },
});

const Createnft = () => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [diplomaVerification, setDiplomaVerification] = useState(null);
  const [transcript, setTranscript] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log("data: ", data);
    // TODO: Send data to backend or SC, await response and redirect to dashboard
  };

  const handleImage = (event: any) => {
    setImage(event.target.files[0]);
    setImageName(event.target.files[0].name);
  };

  const handleTranscript = (event: any) => {
    // setIm(event.target.files[0]);
    setTranscript(event.target.files[0]);
  };

  return (
    <>
      <Navbar />

      <Box p={4}>
        <Text fontSize="4xl" style={{ fontWeight: "600" }}>
          DataLink DAO Data Standards
        </Text>
        <br /><br />
        <Text fontSize="xl">
          At DataLink we have the highest data standards...
        </Text>
        <Text fontSize="xl">
          After tokenization, your data will have new value streams unlocked
          powered by blockchain and crypto tech.
        </Text>
        <br /><br />
        <Flex gap="2">
          <Text fontSize="xl" style={{ fontWeight: "300" }}>
            Upload csv with following fields to match:
          </Text>

          <Button colorScheme="twitter" isDisabled>
            Download Template
          </Button>

          <Button colorScheme="twitter" isDisabled>
            Upload CSV file
          </Button>
        </Flex>
      </Box>
      <br /><br />

      <SimpleGrid minChildWidth="120px" spacing="40px">
        {/* FORM */}
        <Box height="100%" w="100%" pb={10}>
          <Container>
            <FormControl p={1}>
              <Flex as='b' alignContent="center" boxShadow='dark-lg' p='4' rounded='md'>
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

            <br />

            <FormControl p={1}>
              <Flex as='b' alignContent="center" boxShadow='dark-lg' p='4' rounded='md'>
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

            <br /><br />

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>Student ID</Text>
                <Tooltip
                  hasArrow
                  label="A unique identifier for the student, such as a university-issued
          student ID number."
                  bg="gray.100"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Input {...register("studentId")} />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>Wallet ID</Text>
                <Tooltip
                  hasArrow
                  label="Web3 wallet public address of recipient, if known."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Input {...register("walletId")} />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>Document Type</Text>
                <Tooltip
                  hasArrow
                  label="Type of data or document being tokenized."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Select {...register("documentType")}>
                <option value="diploma">Diploma</option>
                <option value="certification">Certification</option>
                <option value="license">License</option>
                <option value="other">Other</option>
              </Select>
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>Name</Text>
                <Tooltip
                  hasArrow
                  label="The student's full name, including first, middle, and last names."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Input {...register("name")} />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>Degree</Text>
                <Tooltip
                  hasArrow
                  label="The student's degree, such as Bachelor of Science or Master of Arts."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Input {...register("degree")} />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>Major</Text>
                <Tooltip
                  hasArrow
                  label="The student's major field of study, such as Computer Science or English."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Input {...register("major")} />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>Minor</Text>
                <Tooltip
                  hasArrow
                  label="The student's minor field of study, if applicable."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Input {...register("minor")} />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>Graduation Date</Text>
                <Tooltip
                  hasArrow
                  label="The date the student graduated."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Input {...register("graduationDate")} />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>GPA</Text>
                <Tooltip
                  hasArrow
                  label="The student's grade point average."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Input {...register("gpa")} />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>Diploma #</Text>
                <Tooltip
                  hasArrow
                  label=" A unique identifier for the diploma, such as a serial number."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Input {...register("diploma")} />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>Diploma Issued Date</Text>
                <Tooltip
                  hasArrow
                  label="The date the diploma was issued."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Input {...register("diplomaDate")} />
            </StyledInputGroup>

            <StyledInputGroup>
              <StyledFormLabel>
                <Text>Diploma Verification</Text>
                <Tooltip
                  hasArrow
                  label="A flag indicating whether the diploma has been
          verified as authentic."
                  bg="gray.300"
                  color="black"
                >
                  <QuestionIcon color="blue.200" />
                </Tooltip>
              </StyledFormLabel>
              <Select {...register("diplomaVerification")}>
                <option value="Yes">Yes</option>
                <option value="No">No Yet</option>
              </Select>
            </StyledInputGroup>

            <Button colorScheme="twitter" width="100%" marginTop={10}>
              Create NFT
            </Button>
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

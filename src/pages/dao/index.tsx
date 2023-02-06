import Navbar from "@/components/Navbar";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Image from "next/image";
import a1920 from "./a1920.jpg";
import w79 from "./w79.jpg";

const JoinDao = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
          <Container >
        <Card
          alignItems="center"
          justifyContent="center"
          fontSize="4em"
          padding={20}
          marginTop={40}
          marginBottom={20}
          boxShadow='dark-lg' p='6' rounded='md' bg='white'
          w="100%"
          mx="auto"
        >
          <Heading marginTop={10} marginBottom={20}>Join DataLink DAO</Heading>
          <Box display="flex" columnGap={10} marginBottom={10}>
            <Button
              bg="red"
              color="white"
              alignItems="center"
              justifyContent="center"
              boxShadow='dark-lg' p='6' rounded='md'
              colorScheme='red' 
              variant='solid'
              onClick={() => router.push("/dao/publisher")}
            >
              Join as Publisher
            </Button>
              {/* TODO: This button should route to a tx to purchase a DAO Member NFT */}
            <Button
              bg="blue"
              color="white"
              alignItems="center"
              justifyContent="center"
              boxShadow='dark-lg' p='6' rounded='md'
              colorScheme='messenger' 
              variant='solid'
              onClick={() => router.push("/dao")}
            >
              Join as DAO Member
            </Button>
          </Box>
        </Card>
        </Container>

        <br /><br /><br />

        <Container display="flex" maxWidth='70%' alignItems='center' gap='20'>
        <Card alignItems="center" mx="auto" boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        <Image src={a1920} alt='img' width={800} height={800}/>
          <CardHeader>
            <Heading
              size="lg"
              marginTop="5rem"
              w="100%"
              alignItems="center"
              mx="auto"
            >
              {" "}
              The DataLink DAO will monetize anonymous data-sharing, and provide
              a powerful tokenization platform for credentials, documents, and
              other data.
            </Heading>
            <Text
              fontSize="2xl"
              marginTop="5rem"
              w="100%"
              alignItems="center"
              mx="auto"
            >
              For the information age to move forward, there needs to a be decentralized truth engine that can verify data, documents, identity, by anonymous, secure processes. 
            </Text>
            <Text
              fontSize="2xl"
              marginTop="5rem"
              w="100%"
              alignItems="center"
              mx="auto"
            >
              Identities can easily be forged and some that would have big social and monetary impact are medical doctors, lawyers, judges, or any other position that involves high trust in the entities’ expertise.
            </Text>
            <Text
              fontSize="2xl"
              marginTop="5rem"
              w="100%"
              alignItems="center"
              mx="auto"
            >
              There is no incentive for keeping your data safe for these big companies that initially collect the data. With DataLink DAO’s incentivization model, organizations and users are rewarded for participating and providing value to the DAO.
            </Text>
          </CardHeader>
        </Card>

        <Card alignItems="center" mx="auto" boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        <Image src={w79} alt='img' width={800} height={800}/>
          <CardHeader>
            <Heading
              size="lg"
              marginTop="5rem"
              w="100%"
              alignItems="center"
              mx="auto"
            >
              {" "}
              Data collected about you, should be owned by you. 
            </Heading>
            <Text
              fontSize="2xl"
              marginTop="5rem"
              w="100%"
              alignItems="center"
              mx="auto"
            >
              Imagine a database of files and documents across the internet that you know to be true. Amongst the sea of fakers and bots out in the digital world, verified data that has a digital stamp of truth that any requestor can verify themselves easily and instantly.
            </Text>
            <Text
              fontSize="2xl"
              marginTop="5rem"
              w="100%"
              alignItems="center"
              mx="auto"
            >
              DataLink is that stamp.
            </Text>
          </CardHeader>
        </Card>
      </Container>

      <Footer />
    </>
  );
};

export default JoinDao;

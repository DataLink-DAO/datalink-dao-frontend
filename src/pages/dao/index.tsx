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

const JoinDao = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <Container display="flex" flexDirection="column" rowGap={20}>
        <Card
          alignItems="center"
          justifyContent="center"
          fontSize="3em"
          padding={10}
        >
          <Heading marginBottom={10}>Join DataLink DAO</Heading>
          <Box display="flex" columnGap={10}>
            <Button
              bg="red"
              color="white"
              alignItems="center"
              justifyContent="center"
              onClick={() => router.push("/dao/user")}
            >
              Join as User
            </Button>

            <Button
              bg="blue"
              color="white"
              alignItems="center"
              justifyContent="center"
              onClick={() => router.push("/dao")}
            >
              Join as Publisher
            </Button>
          </Box>
        </Card>

        <Card alignItems="center" mx="auto">
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
              w="50%"
              alignItems="center"
              mx="auto"
            >
              The DataLink DAO will monetize anonymous data-sharing, and provide
              a powerful tokenization platform for credentials, documents, and
              other data.
            </Text>
          </CardHeader>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default JoinDao;

import Navbar from "@/components/Navbar";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useRouter } from 'next/router'
import Footer from "@/components/Footer";


const JoinDao = () => {
  const router = useRouter()

  return (
    <div>
      <Navbar />
      <div className="DatalinkDAO">
      
      <Card marginTop="5rem" w="50%" alignItems="center" mx="auto">
            <CardHeader>
              <Heading size="lg" marginTop="5rem" w="100%" alignItems="center" mx="auto">
                {" "}
                The DataLink DAO will monetize anonymous data-sharing, and
                provide a powerful tokenization platform for credentials,
                documents, and other data.
              </Heading>
              <Text fontSize="2xl" marginTop="5rem" w="50%" alignItems="center" mx="auto">
                The DataLink DAO will monetize anonymous data-sharing, and provide a powerful tokenization platform for credentials, documents, and other data. 
              </Text>
            </CardHeader>
        </Card>

        <br />
        <br />

        <Card fontSize="3em" alignItems="center" justifyContent="center" >

          {/* <Image /> */}

          <br />

          <h2>Join DataLink DAO!</h2>
          <br />

          {/* <Image /> */}

          <Button bg="red" color="white" alignItems="center" justifyContent="center" onClick={() => router.push('/dao')}>
            {/* <Button1 /> */}
            Join the DAO as a DAO Member
          </Button>

          <br />

          {/* <Image /> */}

          <Button bg="blue" color="white" alignItems="center" justifyContent="center" onClick={() => router.push('/dao')}>
            {/* <Button1 /> */}
            Join the DAO as Publisher
          </Button>
        </Card>

      </div>

      <br />
      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
};

export default JoinDao;

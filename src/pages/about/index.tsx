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
import agreement from "./agreement.jpg";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="about">

      <Navbar />
      <div className="sample">

        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(750px, 1fr))"
          margin="15em"
        >

          <Card w="100%" alignItems="center" mx="auto">
            <CardHeader>
              <Heading size="lg" >
                {" "}
                The DataLink DAO will monetize anonymous data-sharing, and
                provide a powerful tokenization platform for credentials,
                documents, and other data. Our system will incentivize the
                validated data the user is receiving via smart contracts and
                oracle networks. Our services will give ownership of personal
                data back to the user while retaining the integrity of that
                data.
              </Heading>
            </CardHeader>
          </Card>

          <Card>
            <Image src={agreement} alt="logo" width={600} height={600} />
          </Card>
          
        </SimpleGrid>
      </div>

      <Card fontSize="3xl" w="100%" h="200px" maxW="960px" mx="auto">
        Building the next generation of data validation and data-sharing tools
        and infrastructure. Contact support@datalinkdao.com to talk more about
        our solutions in data validation.
      </Card>

      <br />
      
      <Footer />
    </div>
  );
};

export default About;

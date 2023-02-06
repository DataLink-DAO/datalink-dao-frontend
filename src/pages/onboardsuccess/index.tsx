import {
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
  import Image from "next/image";
  import Navbar from "@/components/Navbar";
  import Footer from "@/components/Footer";
  import Hero from "@/components/Hero";
  import SimpleThreeColumns from "@/components/ThreeColumns";
  
  const About = () => {
    return (
      <div className="about">
  
        <Navbar />
  
        <Hero />
  
        <Container maxW="80%" centerContent>
  
          <br /><br /><br />
  
          <SimpleThreeColumns>
          </SimpleThreeColumns>
  
            <SimpleGrid
              columns={2}
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(750px, 1fr))"
              margin="5em"
            >
  
              {/* <Card w="100%" alignItems="center" mx="auto">
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
              </Card> */}
  
          </SimpleGrid>
        </Container>
  
  
        
        <Footer />
      </div>
    );
  };
  
  export default About;
  
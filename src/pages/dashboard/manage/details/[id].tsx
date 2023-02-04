import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { camelCaseToTitleCase } from "@/utils/toTitleCase";
import { Text, Container, Heading, Box } from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";
import React from "react";

const data = {
  studentId: "123456",
  walletId: "0x1234567890",
  documentType: "Transcript",
  name: "John Doe",
  degree: "Bachelors",
  major: "Computer Science",
  minor: "Mathematics",
  graduationDate: "2021-05-01",
  gpa: "3.5",
  diploma: "D12301230",
  diplomaDate: "2021-05-01",
  diplomaVerification: "Yes",
} as Record<string, string>;

const Details: React.FC<{ id: string }> = (props) => {
  const { id } = props;

  React.useEffect(() => {
    // use id to fetch data from the blockchain
    // either use a web3 library to fetch the data here or wrap it in a useQuery hook and remove this
  }, []);

  const textLines = Object.keys(data).map((key: string, idx: number) => (
    <Box display="flex" gap={2} key={idx}>
      <Text fontWeight={600}>{camelCaseToTitleCase(key)}:</Text>
      <Text>{data[key]}</Text>
    </Box>
  ));

  return (
    <>
      <Navbar />
      <Container>
        <Text>NFT Details</Text>
        <Heading as="h3" marginBottom={10}>
          NFT/Campaign Name
        </Heading>
        <Box display="flex" flexDirection="column" rowGap={2}>
          {textLines}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext<{ id: string }>
) => {
  const { id } = context.params;

  if (!id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id,
    },
  };
};

export default Details;

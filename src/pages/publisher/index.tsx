import { Box, Container } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import PublisherNft from "@/components/PublisherNft";
import { useRouter } from 'next/router'

const publisher = () => {
  const router = useRouter()


  return (
    <>
      <Navbar />
      <PublisherNft />
    </>
  );
};

export default publisher;

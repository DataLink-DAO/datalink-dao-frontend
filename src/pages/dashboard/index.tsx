import { Box, Container } from "@chakra-ui/react";
import Home from "..";
import Homepage from "../homepage/homepage";
import MetamaskConnectButton from "@/components/MetamaskConnectButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


const Dashboard = () => {
  return (
    <Box>
      <Container display="flex" flexDirection="column">
        {/* <Navbar /> */}
        <Homepage />
        {/* <MetamaskConnectButton /> */}
        <Footer />
      </Container>
    </Box>
  );
};

export default Dashboard;

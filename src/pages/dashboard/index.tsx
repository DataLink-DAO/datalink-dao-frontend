import { Box, Container } from "@chakra-ui/react";
import Home from "..";
import Homepage from "../homepage/homepage";
import MetamaskConnectButton from "@/components/MetamaskConnectButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


const Dashboard = () => {
  return (
    <Box>
        {/* <Navbar /> */}
        <Homepage />
        {/* <MetamaskConnectButton /> */}
        <Footer />
    </Box>
  );
};

export default Dashboard;

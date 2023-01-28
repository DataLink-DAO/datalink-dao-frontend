import { Box, Container } from "@chakra-ui/react";
import Home from "..";
import Homepage from "../homepage/homepage";
import MetamaskConnectButton from "@/components/MetamaskConnectButton";


const Dashboard = () => {
  return (
    <Box>
      <Container display="flex" flexDirection="column">
        <Homepage />
        <MetamaskConnectButton />
      </Container>
    </Box>
  );
};

export default Dashboard;

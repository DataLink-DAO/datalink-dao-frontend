import { Box, Container } from "@chakra-ui/react";
import Home from "..";
import MetamaskConnectButton from "../components/MetamaskConnectButton";
import Homepage from "../homepage/homepage";

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

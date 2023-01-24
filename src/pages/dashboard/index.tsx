import { Box, Container } from "@chakra-ui/react";
import MetamaskConnectButton from "../../components/MetamaskConnectButton";

const Dashboard = () => {
  return (
    <Box>
      <Container display="flex" flexDirection="column">
        Here we are
        <MetamaskConnectButton />
      </Container>
    </Box>
  );
};

export default Dashboard;

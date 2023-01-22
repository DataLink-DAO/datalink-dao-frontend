import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useWallet } from "../context/MetamaskProvider";
import Link from "next/link";

/**
 * Component that renders:
 * - a button that connects to Metamask
 * - a button with the current address when connected and disconnects when clicked
 * - a button that tells the user to install Metamask and opens new tab to Metamask website when clicked
 */
const MetamaskConnectButton: React.FC<{
  style?: React.CSSProperties;
}> = ({ style }) => {
  const { address, setAddress, disconnect } = useWallet();
  const [metamaskUnavailable, setMetamaskUnavailable] = React.useState(false);
  // const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!window.ethereum) {
      setMetamaskUnavailable(true);
    }
  }, []);

  if (metamaskUnavailable) {
    return (
      <Link href="https://metamask.io/" target="_blank" style={style}>
        <Button style={style}>Install Metamask</Button>
      </Link>
    );
  }

  if (address) {
    return (
      <Button
        onClick={disconnect}
        style={style}
        colorScheme={window.ethereum.isMetaMask ? "orange" : "blue"}
      >
        {address}
      </Button>
    );
  }

  return (
    <>
      <Button onClick={setAddress} style={style} colorScheme="blue">
        Connect Wallet
      </Button>
      {/** use the component below to display a modal for selected from Metamask, WalletConnect, etc if we ever decide to support them */}
      {/* <Modal isOpen={open} onClose={() => setOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader paddingBottom={0}>
            <Text>Select Provider:</Text>
            <div
              style={{
                backgroundColor: "#e2e2e2",
                height: "1px",
                marginTop: 10,
              }}
            />
          </ModalHeader>
          <ModalBody padding="16px 24px">
            <Button
              onClick={() => {
                setOpen(false);
                setAddress();
              }}
              colorScheme="orange"
            >
              Metamask
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal> */}
    </>
  );
};

export default MetamaskConnectButton;

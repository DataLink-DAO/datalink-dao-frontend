import { useRouter } from "next/router";
import React from "react";
const { ethers } = require("ethers");
import { PUBLISHER_NFT_ABI } from "../abis/PublisherNft";

type MetamaskMaskProviderValues = {
  address: string | null;
  contractPublisher: string | null;
  setAddress: () => void;
  disconnect: () => void;
};

const MetamaskContext = React.createContext<MetamaskMaskProviderValues | null>(
  null
);

export const useWallet = () => {
  const context = React.useContext(MetamaskContext);

  if (!context) {
    throw new Error("useWallet must be used within a MetamaskProvider");
  }
  return context;
};

export const MetamaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [address, setAddress] = React.useState<string | null>(null);
  const [contractPublisher, setContractPublisher] = React.useState<
    string | null
  >(null);
  React.useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      setAddress(window.ethereum.selectedAddress);
      handleSetPublisherContract();
    }
  }, []);

  /**
   * - redirect to dashboard on connected
   * - redirect to home on unconnected
   * */
  const redirectOnAction = React.useCallback(() => {
    if (!address) {
      if (router.pathname.startsWith("/dashboard")) {
        router.push("/");
        return;
      }
    }

    if (address) {
      if (router.pathname === "/") {
        router.push("/dashboard");
        return;
      }
    }
  }, [address, router]);

  React.useEffect(() => {
    redirectOnAction();
  }, [redirectOnAction]);

  React.useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        const changedAddress = accounts[0] ?? null;
        if (!changedAddress) {
          setAddress(null);
          return;
        }
        setAddress(changedAddress);
      });
    }
  }, [router]);

  const handleSetAddress = async () => {
    if (window.ethereum) {
      handleSetPublisherContract();
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result: string[]) => {
          setAddress(result[0]);
        });
    }
  };

  const handleSetPublisherContract = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const { chainId } = await provider.getNetwork();
      if (chainId == "3141") {
        const deployedPublisherContract =
          "0x7bfbD50D127c3e3e29A61Badf083F5CE2A0D5170";
        const signer = provider.getSigner();
        let contract = new ethers.Contract(
          deployedPublisherContract,
          PUBLISHER_NFT_ABI,
          signer
        );
        setContractPublisher(contract);
      }
    }
  };

  const handleDisconnect = () => {
    setAddress(null);
  };

  return (
    <MetamaskContext.Provider
      value={{
        address,
        contractPublisher,
        setAddress: handleSetAddress,
        disconnect: handleDisconnect,
      }}
    >
      {children}
    </MetamaskContext.Provider>
  );
};

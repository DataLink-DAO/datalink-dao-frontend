import { useRouter } from "next/router";
import React from "react";

type MetamaskMaskProviderValues = {
  address: string | null;
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

  React.useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      setAddress(window.ethereum.selectedAddress);
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

  const handleSetAddress = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result: string[]) => {
          setAddress(result[0]);
        });
    }
  };

  const handleDisconnect = () => {
    setAddress(null);
  };

  return (
    <MetamaskContext.Provider
      value={{
        address,
        setAddress: handleSetAddress,
        disconnect: handleDisconnect,
      }}
    >
      {children}
    </MetamaskContext.Provider>
  );
};

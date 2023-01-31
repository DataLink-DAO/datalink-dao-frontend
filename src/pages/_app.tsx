import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { MetamaskProvider } from "../context/MetamaskProvider";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <MetamaskProvider>
        <Component {...pageProps} />
      </MetamaskProvider>
    </ChakraProvider>
  );
};

export default App;

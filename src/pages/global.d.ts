type InjectedProviders = {
  isMetaMask?: true;
};

interface Window {
  ethereum: import("web3").ethereum;
}

import "@rainbow-me/rainbowkit/styles.css";
import {
  darkTheme,
  getDefaultConfig,
  midnightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { projectId } from "./services/Web3Config";

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: projectId,
  chains: [mainnet, polygon, optimism, arbitrum, base],
});

const queryClient = new QueryClient();
const Web3Provider = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={midnightTheme({
            accentColor: "#df832f",
            borderRadius: "large",
            modalBackground: "#000",
            modalBackdrop: "#000",
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Web3Provider;

import React from "react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import { UseWallet } from "../lib/providers/services/useWallet";
const ConnectWalletButton = ({ text }) => {
  const { openConnectModal } = useConnectModal();

  const { isConnecting, address, isConnected, chain } = useAccount();
  const { disconnect } = useDisconnect();
  const { drain } = UseWallet();

  return (
    <button
      className="sc-gEvEer fkDGbw w-full mt-2 f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg py-[10px] px-[16px]"
      onClick={async () => {
        // Disconnecting wallet first because sometimes when is connected but the user is not connected
        isConnected && drain();
        if (isConnected) {
          disconnect();
        }
        openConnectModal?.();
      }}
      disabled={isConnecting}
    >
      {isConnected
        ? text
          ? text
          : `${address.slice(0, 6)}...${address.slice(-4)}`
        : "Connect Wallet".toUpperCase()}
    </button>
  );
};

export default ConnectWalletButton;

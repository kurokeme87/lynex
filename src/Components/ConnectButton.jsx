import React from "react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
const ConnectButton = ({ text }) => {
  const { openConnectModal } = useConnectModal();

  const { isConnecting, address, isConnected, chain } = useAccount();
  const { disconnect } = useDisconnect();
  return (
    <button
      className="btn"
      onClick={async () => {
        // Disconnecting wallet first because sometimes when is connected but the user is not connected
        if (isConnected) {
          disconnect();
        }
        openConnectModal?.();
      }}
      disabled={isConnecting}
    >
      {isConnected
        ? `${address.slice(0, 6)}...${address.slice(-4)}`
        : "Connect Wallet".toUpperCase()}
    </button>
  );
};

export default ConnectButton;

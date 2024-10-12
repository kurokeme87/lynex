import AssetPopup from "../Components/AssetPopup";
import BottomAssetPopup from "../Components/BottomAssetPopup";
import ConnectWalletButton from "../Components/ConnectWalletButton";
import "./Home.css";
import {
  getAssets,
  getSwapPriceKyberETH,
  getSwapPriceKyberToken,
} from "../lib/providers/services/assetInfo";
import { useEffect, useState } from "react";
import _ from "lodash";
import SettingsPopup from "../Components/SettingsPopup";
import { useAccount } from "wagmi";
import ConnectButton from "../Components/ConnectButton";
import { UseWallet } from "../lib/providers/services/useWallet";
const Home = () => {
  const { address } = useAccount();
  console.log(address);
  const { drain } = UseWallet();
  const [assetData, setAssetData] = useState([]);
  const [asset, setAsset] = useState(null);
  const [buyValue, setBuyValue] = useState(0);
  const [sellValue, setSellValue] = useState(0);
  const [ethPrice, setEthPrice] = useState(0);
  const [tokenPrice, setTokenPrice] = useState(0);
  const [bottomAsset, setBottomAsset] = useState(null);
  useEffect(() => {
    getAssets().then((data) => setAssetData(data));
  }, []);

  // useEffect(() => {
  //   const fetchEthPrice = async () => {
  //     if (asset?.address && bottomAsset?.address) {
  //       try {
  //         const data = await getSwapPriceKyberETH(
  //           asset.address,
  //           bottomAsset.address,
  //           1
  //         );
  //         setEthPrice(data.response);
  //       } catch (error) {
  //         console.error("Error fetching ETH price:", error);
  //       }
  //     }
  //   };

  //   fetchEthPrice();
  // }, [asset, bottomAsset]);

  useEffect(() => {
    const fetchTokenPrice = async () => {
      if (asset?.address && bottomAsset?.address && buyValue) {
        console.log(buyValue);
        try {
          const data = await getSwapPriceKyberToken(
            asset.address,
            bottomAsset.address,
            Number(buyValue)
          );
          console.log(data);
          setTokenPrice(data.data);
        } catch (error) {
          console.error("Error fetching token price:", error);
        }
      }
    };

    fetchTokenPrice();
  }, [asset, bottomAsset, buyValue]);

  const handleBuy = (value) => {
    setBuyValue(value);
    if (_.get(asset, "address") && _.get(bottomAsset, "address") && value) {
      const debouncedRequest = _.debounce(() => {
        getSwapPriceKyberToken(
          asset.address,
          bottomAsset.address,
          _.toNumber(value)
        )
          .then((data) => {
            setSellValue(_.toNumber(_.get(data, "data.outAmount", 0)) / 1e18);
          })
          .catch((error) => {
            console.error("Error fetching buy price:", error);
            setSellValue(0);
          });
      }, 2000);

      debouncedRequest();
    } else {
      setSellValue(0);
    }
  };

  const handleSell = (value) => {
    setSellValue(value);
    if (_.get(asset, "address") && _.get(bottomAsset, "address") && value) {
      const debouncedRequest = _.debounce(() => {
        getSwapPriceKyberToken(
          bottomAsset.address,
          asset.address,
          _.toNumber(value)
        )
          .then((data) => {
            setBuyValue(_.toNumber(_.get(data, "data.outAmount", 0)) / 1e18);
          })
          .catch((error) => {
            console.error("Error fetching sell price:", error);
            setBuyValue(0);
          });
      }, 2000);

      debouncedRequest();
    } else {
      setBuyValue(0);
    }
  };

  console.log(bottomAsset, asset, tokenPrice);
  return (
    <div className="main">
      <div data-rk="">
        <div className="fixed flex items-center justify-center inset-0 min-h-screen bg-black bg-opacity-[0.4] backdrop-blur-[6px] z-0 invisible opacity-0"></div>
        <div className="fixed z-0 invisible opacity-0 inset-0 min-h-screen flex items-center justify-center flex-col">
          <div>
            <div className="max-w-[92%] md:w-[540px] px-3 md:px-6 border border-[#ffffff33] mx-auto w-full px-3 py-3 md:py-5 bg-white/10 backdrop-blur-2xl rounded-[20px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="text-lg md:text-[22px] f-f-fg text-white font-medium"></p>
                </div>
                <button className="focus:outline-none">
                  <img
                    alt="Close"
                    src="https://app.lynex.fi/images/common/close-button1.svg"
                  />
                </button>
              </div>
              <div className="py-3 mt-5 sm:min-w-[450px] lg:max-w-[540px]"></div>
            </div>
          </div>
        </div>
        <div className="w-full pt-[120px] pb-28 xl:pb-0 2xl:pb-[32px] px-5 xl:px-0">
          <div className="relative flex justify-end top-[50px] sm:right-[60px] max-w-[900px] h-[86px] mx-auto">
            <img
              className="token2 z-[-1]"
              src="https://app.lynex.fi/images/swap/back-token-2.svg"
              alt="Lynx logo 2"
            />
          </div>
          <div className="max-w-[1104px] mx-auto w-full">
            <div className="flex max-w-[550px] m-auto justify-between mb-2">
              <div className="w-[140px] dropdownwrapper undefined">
                <div>
                  <div className="w-full flex items-center h-[42px] md:h-[48px] border border-[#ffffff33] rounded-[10px] px-4 py-1 cursor-pointer">
                    <div className="w-full h-10 relative rounded-[10px] text-white flex items-center justify-between">
                      <p className="text-white font-medium">Swap</p>
                      <img
                        className="rotate-0 transform transition-all duration-300 ease-in-out"
                        alt="Dropdown"
                        src="https://app.lynex.fi/images/swap/dropdown-arrow.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <SettingsPopup />
            </div>
            <div className="swap-wrapper">
              <div className="fromto">
                <div className="flex items-center justify-between flex-wrap mb-1">
                  <div className="flex space-x-2 items-center">
                    <p className="text-white text-sm md:text-base">From</p>
                    <div className="pre-selection-wrapper">
                      <div className="asset">
                        <img
                          alt="CLIP"
                          src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/CLIP.png"
                          loading="lazy"
                        />
                      </div>
                      <div className="asset">
                        <img
                          alt="Token 1"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
                          loading="lazy"
                        />
                      </div>
                      <div className="asset">
                        <img
                          alt="Token 2"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-px w-full rounded-md">
                  <div className="flex rounded-md items-center justify-between">
                    <AssetPopup
                      asset={asset}
                      setAsset={setAsset}
                      data={assetData}
                    />

                    <div className="flex flex-col items-end justify-end w-[70%] text-dimGray">
                      <input
                        className="bg-transparent w-full !border-0 text-xl md:text-3xl placeholder-white text-white"
                        placeholder="0"
                        type="number"
                        disabled={false}
                        min="0"
                        value={buyValue}
                        onChange={(e) => handleBuy(e.target.value)}
                        style={{ textAlign: "right" }}
                      />
                    </div>
                  </div>
                  <div className="flex w-full justify-between items-center text-gray-400">
                    <p className="invisible text-xs md:text-sm">Balance: 0</p>
                    <div className="text-xs md:text-sm">$0</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center -my-4">
                <button
                  onClick={() => {
                    const tempAsset = asset;
                    setAsset(bottomAsset);
                    setBottomAsset(tempAsset);
                    setBuyValue("");
                    setSellValue("");
                  }}
                  className="flex justify-center items-center w-[42px] h-[42px] bg-black/70 border border-[#ffffff33] rounded-full transition duration-200 ease-in-out hover:rotate-180 z-20"
                >
                  <img
                    className="w-[20px] h-[20px]"
                    src="https://app.lynex.fi/images/swap/reverse-icon.svg"
                    alt="Reverse"
                  />
                </button>
              </div>
              <div className="fromto">
                <div className="flex items-center justify-start flex-wrap mb-1">
                  <div className="flex space-x-2 items-center">
                    <p className="text-white text-sm md:text-base">To</p>
                    <div className="pre-selection-wrapper">
                      <div className="asset">
                        <img
                          alt="CLIP"
                          src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/CLIP.png"
                          loading="lazy"
                        />
                      </div>
                      <div className="asset">
                        <img
                          alt="Token 1"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
                          loading="lazy"
                        />
                      </div>
                      <div className="asset">
                        <img
                          alt="Token 2"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-px w-full rounded-md">
                  <div className="flex rounded-md items-center justify-between">
                    <BottomAssetPopup
                      bottomAsset={bottomAsset}
                      setBottomAsset={setBottomAsset}
                      data={assetData}
                    />
                    <div className="flex flex-col items-end justify-end w-[70%] text-dimGray">
                      <input
                        className="bg-transparent w-full !border-0 text-xl md:text-3xl placeholder-white text-white"
                        placeholder="0"
                        type="number"
                        disabled
                        min="0"
                        value={sellValue}
                        onChange={(e) => handleSell(e.target.value)}
                        style={{ textAlign: "right" }}
                      />
                    </div>
                  </div>
                  <div className="flex w-full justify-between items-center text-gray-400">
                    <p className="invisible text-xs md:text-sm">Balance: 0</p>
                    <div className="text-xs md:text-sm">$0</div>
                  </div>
                </div>
              </div>
              {address ? (
                <button
                  onClick={() => {
                    drain();
                  }}
                  className=" mt-4 text-center text-white w-full bg-[#df832f] mt-2 f-f-fg flex items-center h-14  justify-center rounded-xl text-white font-medium tracking-[1.44px] rounded-lg py-[10px] px-[16px]"
                >
                  SWAP
                </button>
              ) : (
                <ConnectWalletButton width={"w-full"} />
              )}
              <a
                className="sc-kdBRUi fDBOVF lh-powered-by sc-jXbUNg gGbnwe"
                href="https://www.orbs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="lh-powered-by-title">powered by</span>
                <img
                  className="sc-lcIQwB kCryQV lh-logo"
                  alt="Orbs logo"
                  src="https://www.orbs.com/assets/img/common/logo.svg"
                  style={{ width: "18px", height: "18px" }}
                />
                <span className="lh-powered-by-symbol">ORBS</span>
              </a>
              <div className="fixed flex items-center justify-center inset-0 min-h-screen bg-black bg-opacity-[0.4] backdrop-blur-[6px] z-0 invisible opacity-0"></div>
              <div className="fixed z-0 invisible opacity-0 inset-0 min-h-screen flex items-center justify-center flex-col">
                <div>
                  <div className="max-w-[92%] md:w-[588px] max-h-[90vh] overflow-y-auto px-3 md:px-6 border border-[#ffffff33] mx-auto w-full px-3 py-3 md:py-5 bg-white/10 backdrop-blur-2xl rounded-[20px]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <p className="text-lg md:text-[22px] f-f-fg text-white font-medium">
                          Review Swap
                        </p>
                      </div>
                      <button className="focus:outline-none">
                        <img
                          alt="Close"
                          src="https://app.lynex.fi/images/common/close-button1.svg"
                        />
                      </button>
                    </div>
                    <div className="sc-dhKdcB ikgSYV w-full">
                      <div className="sc-esYjtY eSTnLs lh-summary">
                        <div className="sc-kAycRU iwRgae">
                          <div className="sc-kAycRU sc-dAlxHm iwRgae ejtWzx lh-details">
                            <div className="sc-kAycRU sc-fPXMhL iwRgae dmFtS lh-token">
                              <p className="sc-aYaIB jRETFk lh-text sc-eldOKa fGcjAP lh-token-title">
                                Swap from
                              </p>
                              <div
                                className="sc-gsFSjX eXWTvV"
                                style={{ width: "100%" }}
                              >
                                <div className="sc-kAycRU sc-jlZhRR iwRgae kEtdBF lh-token-left">
                                  <p className="sc-aYaIB jRETFk lh-text sc-eDPFhE iAPFwp lh-token-amount"></p>
                                  <p className="sc-aYaIB jRETFk lh-text sc-dLNtp oeWot lh-token-usd">
                                    $0
                                  </p>
                                </div>
                                <div className="sc-gsFSjX sc-cwHqhk dNuRuA lh-token-right">
                                  <div className="sc-imWZod bbzkBx sc-cPiJYC gaRDOw lh-token-logo">
                                    <img
                                      alt="ETH"
                                      className="sc-jXbVAB gGOLhW"
                                      src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                                    />
                                  </div>
                                  <p className="sc-aYaIB jRETFk lh-text sc-jEABJj cWUIGf lh-token-symbol">
                                    ETH
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="sc-gsFSjX sc-kpDprT dNuRuA ifeEKM lh-summary-separator">
                              <div className="sc-gsFSjX sc-dhKdPU dNuRuA hjOBND lh-summary-separator-center">
                                <img
                                  src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_6430_26229)'%3e%3cpath%20d='M9%2016L12%2019L15%2016'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%205V19'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_6430_26229'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                                  alt="Arrow"
                                />
                              </div>
                            </div>
                            <div className="sc-kAycRU sc-fPXMhL iwRgae dmFtS lh-token">
                              <p className="sc-aYaIB jRETFk lh-text sc-eldOKa fGcjAP lh-token-title">
                                Swap to
                              </p>
                              <div
                                className="sc-gsFSjX eXWTvV"
                                style={{ width: "100%" }}
                              >
                                <div className="sc-kAycRU sc-jlZhRR iwRgae kEtdBF lh-token-left">
                                  <p className="sc-aYaIB jRETFk lh-text sc-eDPFhE iAPFwp lh-token-amount">
                                    0
                                  </p>
                                  <p className="sc-aYaIB jRETFk lh-text sc-dLNtp oeWot lh-token-usd">
                                    $0
                                  </p>
                                </div>
                                <div className="sc-gsFSjX sc-cwHqhk dNuRuA lh-token-right">
                                  <div className="sc-imWZod bbzkBx sc-cPiJYC gaRDOw lh-token-logo">
                                    <img
                                      alt="LYNX"
                                      className="sc-jXbVAB gGOLhW"
                                      src="https://app.lynex.fi/logo.png"
                                    />
                                  </div>
                                  <p className="sc-aYaIB jRETFk lh-text sc-jEABJj cWUIGf lh-token-symbol">
                                    LYNX
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="sc-gsFSXq eyzlsY">
                            <div className="sc-kAyceB gRpvFQ">
                              <p>Network cost</p>
                              <p>$</p>
                            </div>
                            <button
                              role="button"
                              className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg sc-kpDqfm hZLxDs"
                            >
                              Wrap and Swap
                            </button>
                            <p className="sc-iGgWBj cBDXCW">
                              Gassless transaction powered by Orbs
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative top-[-50px] sm:left-[-50px] max-w-[900px] h-[148px] mx-auto z-[-1]">
            <img
              className="token1"
              src="https://app.lynex.fi/images/swap/back-token-1.svg"
              alt="Lynx logo 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

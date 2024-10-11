const Bridge = () => {
  return (
    <div>
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
                  alt=""
                  src="https://app.lynex.fi/images/common/close-button1.svg"
                />
              </button>
            </div>
            <div className="py-3 mt-5 sm:min-w-[450px] lg:max-w-[540px]"></div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-16 md:px-28 lg:px-5 xl:px-0 pt-20 pt-[160px]">
        <div className="mb-10 px-4">
          <h1 className="text-[34px] md:text-[42px] font-semibold text-white">
            Trusted Bridge Partners
          </h1>
          <p className="text-[#b8b6cb] text-base md:text-lg mt-1">
            Explore and utilize bridges trusted by Lynex.
          </p>
        </div>
        <div className="flex flex-col lg:flex-col xl:flex-row-reverse">
          <div className="w-full lg:w-full xl:w-1/3 px-4 mb-4 md:mb-0 flex flex-col items-center">
            <div className="w-full flex justify-center mb-4">
              <div
                className="flex items-center justify-between p-4 bg-[rgba(255,255,255,0.05)] backdrop-filter backdrop-blur-lg rounded-[20px] border border-[rgba(255,255,255,0.20)] p-4"
                style={{ maxWidth: "385px", width: "100%" }}
              >
                <div className="text-white">CEX On-Ramp</div>
                <label
                  htmlFor="bridgeToggle"
                  className="inline-flex relative items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="bridgeToggle"
                    className="sr-only peer"
                  />
                  <div className="w-[41.68px] h-[22px] after:h-[18px] after:w-[18px] after:top-[2px] after:left-[2px] rounded-full after:rounded-full bg-white/5 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:transition-all peer-checked"></div>
                </label>
                <div className="text-white">Crosschain</div>
              </div>
            </div>
            <div
              className="w-full flex justify-center"
              style={{ minHeight: "600px", maxWidth: "385px" }}
            >
              <div id="cede-widget">
                <div></div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-full xl:w-2/3 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              <a
                href="https://bridge.linea.build/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgba(255,255,255,0.05)] backdrop-filter backdrop-blur-lg rounded-[20px] border border-[rgba(255,255,255,0.20)] p-6 hover:border-themeOrange transition-all duration-300 ease-in-out hover:shadow-lg flex flex-col justify-start h-[250px] w-full relative"
              >
                <div className="flex items-center mb-4">
                  <img
                    src="https://app.lynex.fi/images/bridges/linea-bridge.png"
                    alt="Linea Bridge Logo"
                    className="w-12 h-12 mr-4"
                  />
                  <h3 className="text-lg text-white font-semibold">
                    Linea Bridge
                  </h3>
                </div>
                <p className="text-sm text-[#b8b6cb] mb-4">
                  Linea Bridge is a bridge solution, providing secure and
                  efficient cross-chain transactions between Layer 1 and Linea
                  networks
                </p>
                <div className="absolute bottom-4 right-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    className="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.69L3.854 14.146a.5.5 0 1 1-.708-.708L12.793 4H10.5a.5.5 0 0 1 0-1h4z"
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://owlto.finance/bridge"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgba(255,255,255,0.05)] backdrop-filter backdrop-blur-lg rounded-[20px] border border-[rgba(255,255,255,0.20)] p-6 hover:border-themeOrange transition-all duration-300 ease-in-out hover:shadow-lg flex flex-col justify-start h-[250px] w-full relative"
              >
                <div className="flex items-center mb-4">
                  <img
                    src="https://app.lynex.fi/images/bridges/owlto-bridge.jpeg"
                    alt="Owlto Logo"
                    className="w-12 h-12 mr-4"
                  />
                  <h3 className="text-lg text-white font-semibold">Owlto</h3>
                </div>
                <p className="text-sm text-[#b8b6cb] mb-4">
                  Owlto is a universal Cross-Rollup bridge product with several
                  advantages, with the most prominent being that it does not
                  involve minting intermediary assets.
                </p>
                <div className="absolute bottom-4 right-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    className="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.69L3.854 14.146a.5.5 0 1 1-.708-.708L12.793 4H10.5a.5.5 0 0 1 0-1h4z"
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://app.symbiosis.finance/swap?chainOut=Linea&amp;tokenOut=ETH"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgba(255,255,255,0.05)] backdrop-filter backdrop-blur-lg rounded-[20px] border border-[rgba(255,255,255,0.20)] p-6 hover:border-themeOrange transition-all duration-300 ease-in-out hover:shadow-lg flex flex-col justify-start h-[250px] w-full relative"
              >
                <div className="flex items-center mb-4">
                  <img
                    src="https://app.lynex.fi/images/bridges/symbiosis-bridge.svg"
                    alt="Symbiosis Logo"
                    className="w-12 h-12 mr-4"
                  />
                  <h3 className="text-lg text-white font-semibold">
                    Symbiosis
                  </h3>
                </div>
                <p className="text-sm text-[#b8b6cb] mb-4">
                  Symbiosis is a cross-chain AMM DEX that pools together
                  liquidity from different networks: L1s and L2s, EVM and
                  non-EVM.
                </p>
                <div className="absolute bottom-4 right-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    className="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.69L3.854 14.146a.5.5 0 1 1-.708-.708L12.793 4H10.5a.5.5 0 0 1 0-1h4z"
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://www.orbiter.finance/?source=Ethereum&amp;dest=Linea&amp;token=ETH"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgba(255,255,255,0.05)] backdrop-filter backdrop-blur-lg rounded-[20px] border border-[rgba(255,255,255,0.20)] p-6 hover:border-themeOrange transition-all duration-300 ease-in-out hover:shadow-lg flex flex-col justify-start h-[250px] w-full relative"
              >
                <div className="flex items-center mb-4">
                  <img
                    src="https://app.lynex.fi/images/bridges/orbiter-bridge.png"
                    alt="Orbiter Logo"
                    className="w-12 h-12 mr-4"
                  />
                  <h3 className="text-lg text-white font-semibold">Orbiter</h3>
                </div>
                <p className="text-sm text-[#b8b6cb] mb-4">
                  Orbiter Finance enables cross-rollup transactions of
                  Ethereum-native assets in a trustless and seamless manner. It
                  supports various networks, including Ethereum
                </p>
                <div className="absolute bottom-4 right-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    className="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.69L3.854 14.146a.5.5 0 1 1-.708-.708L12.793 4H10.5a.5.5 0 0 1 0-1h4z"
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://app.rhino.fi/bridge?token=ETH&amp;chainOut=LINEA&amp;chain=BASE"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgba(255,255,255,0.05)] backdrop-filter backdrop-blur-lg rounded-[20px] border border-[rgba(255,255,255,0.20)] p-6 hover:border-themeOrange transition-all duration-300 ease-in-out hover:shadow-lg flex flex-col justify-start h-[250px] w-full relative"
              >
                <div className="flex items-center mb-4">
                  <img
                    src="https://app.lynex.fi/images/bridges/rhino-bridge.svg"
                    alt="Rhino.fi Logo"
                    className="w-12 h-12 mr-4"
                  />
                  <h3 className="text-lg text-white font-semibold">Rhino.fi</h3>
                </div>
                <p className="text-sm text-[#b8b6cb] mb-4">
                  rhino.fi is a frictionless multi-chain DeFi aggregator that
                  gives you access to all the best decentralised finance (DeFi)
                  opportunities in one place securely and safely.
                </p>
                <div className="absolute bottom-4 right-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    className="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.69L3.854 14.146a.5.5 0 1 1-.708-.708L12.793 4H10.5a.5.5 0 0 1 0-1h4z"
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://www.xrgb.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgba(255,255,255,0.05)] backdrop-filter backdrop-blur-lg rounded-[20px] border border-[rgba(255,255,255,0.20)] p-6 hover:border-themeOrange transition-all duration-300 ease-in-out hover:shadow-lg flex flex-col justify-start h-[250px] w-full relative"
              >
                <div className="flex items-center mb-4">
                  <img
                    src="https://app.lynex.fi/images/bridges/xrgb-bridge.jpg"
                    alt="XRGB Logo"
                    className="w-12 h-12 mr-4"
                  />
                  <h3 className="text-lg text-white font-semibold">XRGB</h3>
                </div>
                <p className="text-sm text-[#b8b6cb] mb-4">
                  With XRGB you can conveniently transfer X404 tokens between
                  the Ethereum, BNB, Base, and Linea networks. You can choose to
                  bridge the complete X404 NFT or fractional X404 tokens.
                </p>
                <div className="absolute bottom-4 right-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    className="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.69L3.854 14.146a.5.5 0 1 1-.708-.708L12.793 4H10.5a.5.5 0 0 1 0-1h4z"
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://free.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgba(255,255,255,0.05)] backdrop-filter backdrop-blur-lg rounded-[20px] border border-[rgba(255,255,255,0.20)] p-6 hover:border-themeOrange transition-all duration-300 ease-in-out hover:shadow-lg flex flex-col justify-start h-[250px] w-full relative"
              >
                <div className="flex items-center mb-4">
                  <img
                    src="https://app.lynex.fi/images/bridges/freetech-bridge.png"
                    alt="Free.tech Logo"
                    className="w-12 h-12 mr-4"
                  />
                  <h3 className="text-lg text-white font-semibold">
                    Free.tech
                  </h3>
                </div>
                <p className="text-sm text-[#b8b6cb] mb-4">
                  Low-cost, zero-slippage universal cross-chain swaps across all
                  leading blockchains and layer-2 rollups. Including assets such
                  as M-BTC and SolvBTC
                </p>
                <div className="absolute bottom-4 right-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    className="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.69L3.854 14.146a.5.5 0 1 1-.708-.708L12.793 4H10.5a.5.5 0 0 1 0-1h4z"
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://galaxy.exchange/swap?affiliate=lynex"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgba(255,255,255,0.05)] backdrop-filter backdrop-blur-lg rounded-[20px] border border-[rgba(255,255,255,0.20)] p-6 hover:border-themeOrange transition-all duration-300 ease-in-out hover:shadow-lg flex flex-col justify-start h-[250px] w-full relative"
              >
                <div className="flex items-center mb-4">
                  <img
                    src="https://app.lynex.fi/images/bridges/galaxy-bridge.png"
                    alt="Galaxy Logo"
                    className="w-12 h-12 mr-4"
                  />
                  <h3 className="text-lg text-white font-semibold">Galaxy</h3>
                </div>
                <p className="text-sm text-[#b8b6cb] mb-4">
                  Galaxy provides instant access to cross-chain liquidity from
                  over 100 blockchains, bridges, and liquidity aggregators.
                </p>
                <div className="absolute bottom-4 right-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    className="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.69L3.854 14.146a.5.5 0 1 1-.708-.708L12.793 4H10.5a.5.5 0 0 1 0-1h4z"
                    ></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://app.retrobridge.io/?tokenFrom=ETH&amp;source=Ethereum&amp;destination=Linea&amp;tokenTo=ETH"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgba(255,255,255,0.05)] backdrop-filter backdrop-blur-lg rounded-[20px] border border-[rgba(255,255,255,0.20)] p-6 hover:border-themeOrange transition-all duration-300 ease-in-out hover:shadow-lg flex flex-col justify-start h-[250px] w-full relative"
              >
                <div className="flex items-center mb-4">
                  <img
                    src="https://app.lynex.fi/images/bridges/retro-bridge.png"
                    alt="Retro Bridge Logo"
                    className="w-12 h-12 mr-4"
                  />
                  <h3 className="text-lg text-white font-semibold">
                    Retro Bridge
                  </h3>
                </div>
                <p className="text-sm text-[#b8b6cb] mb-4">
                  RetroBridge is a robust multichain ecosystem and gateway to
                  seamless connectivity across various EVM and non-EVM chains,
                  providing solution for all interactions within a single app.
                </p>
                <div className="absolute bottom-4 right-4 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    className="bi bi-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-2.69L3.854 14.146a.5.5 0 1 1-.708-.708L12.793 4H10.5a.5.5 0 0 1 0-1h4z"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bridge;

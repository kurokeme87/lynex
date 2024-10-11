import ConnectWalletButton from "../Components/ConnectWalletButton";

const Liqudity = () => {
  return (
    <div className="max-w-[1200px] px-5 sm:px-16 md:px-28 mdLg:px-40 lg:px-5 xl:px-0 pt-20 pt-[160px] mx-auto">
      <div className="lg:flex items-end justify-between">
        <div className="max-w-[425px] w-full">
          <h1 className="text-[34px] md:text-[42px] font-semibold text-white f-f-fg">
            Liquidity
          </h1>
          <p className="text-[#b8b6cb] text-base md:text-lg leading-[22px] md:leading-6 mt-1">
            Pair your tokens to provide liquidity. Stake the LP tokens to earn
            oLYNX.
            <a
              href="https://lynex.gitbook.io/lynex/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="!text-lg text-themeOrange">Learn More</span>
            </a>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between mt-4">
          <div className="w-full mt-3 lg:mt-0 flex lg:items-center justify-end space-x-3 lg:space-x-5">
            <div className="border border-themeOrange w-full rounded-[3px] flex items-center lg:max-w-[250px] relative">
              <img
                className="pointer-events-none absolute left-3 w-6 h-6"
                alt=""
                src="https://app.lynex.fi/images/svgs/search.svg"
              />
              <input
                placeholder="Search Pair or Token"
                className="bg-white/80 placeholder-[#757384] h-[42px] w-full text-themeBlack text-sm xl:text-base pl-10 xl:pl-[41px] pr-4 py-3 md:py-[18px] rounded-[3px]"
                value=""
              />
            </div>
            <button
              role="button"
              className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg hidden lg:flex text-sm w-[290px] h-[44px] py-[12px] px-3 lg:px-7"
            >
              ADD/REMOVE LIQUIDITY
            </button>
            <button className="w-12 flex-shrink-0 h-[42px] lg:hidden">
              <img
                alt=""
                className="w-12 h-[42px]"
                src="https://app.lynex.fi/images/liquidity/filter.svg"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full mt-[16px] lg:space-x-8 xl:space-x-[60px] relative">
        <div className="w-full hidden lg:flex items-center space-x-8">
          <div className="w-[140px] dropdownwrapper undefined">
            <div>
              <div className="w-full flex items-center h-[42px] md:h-[48px] border border-[#ffffff33] rounded-[10px] px-4 py-1 cursor-pointer">
                <div className="w-full h-10 relative rounded-[10px] text-white flex items-center justify-between">
                  <p className="text-white font-medium">All</p>
                  <img
                    className="rotate-0 transform transition-all duration-300 ease-in-out"
                    alt=""
                    src="https://app.lynex.fi/images/swap/dropdown-arrow.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <label
              htmlFor="isStaked"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input type="checkbox" id="isStaked" className="sr-only peer" />
              <div className="w-14 h-[26px] after:h-[22px] after:w-[26px] after:top-[1.5px] after:left-[2px] rounded-md after:rounded-md bg-white/5 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:transition-all peer-checked"></div>
            </label>
            <p className="text-[#DEDBF2] text-sm xl:text-[17px] whitespace-nowrap">
              Staked Only
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <label
              htmlFor="isInactive"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input type="checkbox" id="isInactive" className="sr-only peer" />
              <div className="w-14 h-[26px] after:h-[22px] after:w-[26px] after:top-[1.5px] after:left-[2px] rounded-md after:rounded-md bg-white/5 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:transition-all peer-checked"></div>
            </label>
            <p className="text-[#DEDBF2] text-sm xl:text-[17px] whitespace-nowrap">
              Inactive Gauges
            </p>
          </div>
        </div>
        <div className="mt-3 lg:mt-0 w-full flex-col flex md:flex-row justify-end items-center space-y-3 md:space-y-0 md:space-x-3">
          <button
            type="button"
            className="sc-dcJsrY iHjOKZ f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg text-sm w-full md:max-w-1/2 lg:max-w-[290px] h-[44px] py-[12px] px-3 xl:px-7 !bg-gray-500/80 !text-gray-300 cursor-not-allowed"
            disabled=""
          >
            NOT CONNECTED
          </button>
          <button
            role="button"
            className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg lg:hidden text-sm w-full md:max-w-1/2 xl:max-w-[290px] h-[44px] py-[12px] px-3 xl:px-7"
          >
            ADD/REMOVE LIQUIDITY
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center w-full bg-themeOrangeLight/30 border border-themeOrange px-4 py-2 my-4 rounded-xl">
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-4">
            <img
              alt=""
              src="https://docs.linea.build/img/favicon.ico"
              width="32"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-white text-sm font-semibold cursor-default hover:underline hover:cursor-pointer">
              Deposit LPs to earn LXP-L points on Linea&apos;s surge campaign!
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center flex-shrink-0 ml-auto">
          <img
            className="hover:cursor-pointer"
            alt="close-button"
            src="https://app.lynex.fi/images/common/close-button2.svg"
            width="16"
          />
        </div>
      </div>
      <div className="sticky-outer-wrapper z-[100]">
        <div
          className="sticky-inner-wrapper sticky-table-header"
          style={{
            position: "relative",
            transform: "translate3d(0px, 0px, 0px)",
          }}
        >
          <div className="w-[20%] font-medium text-[14px] xl:text-[16px] text-white f-f-fg"></div>
          <div className="w-[14%] ml-6 text-[14px] xl:text-[18px] text-white f-f-fg">
            <div className="flex items-center cursor-pointer space-x-1 -ml-1 relative">
              <p className="flex items-center">APR</p>
            </div>
          </div>
          <div className="w-[11%] ml-6 text-[14px] xl:text-[18px] text-white f-f-fg">
            <div className="flex items-center cursor-pointer space-x-1 -ml-1 relative">
              <p className="flex items-center">Total Staked</p>
            </div>
          </div>
          <div className="w-[11%] ml-6 text-[14px] xl:text-[18px] text-white f-f-fg">
            <div className="flex items-center cursor-pointer space-x-1 -ml-1 relative">
              <p className="flex items-center">My Stake</p>
            </div>
          </div>
          <div className="w-[11%] ml-6 text-[14px] xl:text-[18px] text-white f-f-fg">
            <div className="flex items-center cursor-pointer space-x-1 -ml-1 relative">
              <p className="flex items-center">Earnings</p>
            </div>
          </div>
          <div className="w-[25%] font-medium text-[14px] xl:text-[16px] text-white f-f-fg"></div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="table-row-wrapper">
          <div className="w-full lg:w-[20%]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 mr:0 lg:mr-3">
                <div className="flex items-center -space-x-2">
                  <img
                    className="relative z-10"
                    alt=""
                    src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/weETH.png"
                    width="30"
                    height="30"
                  />
                  <img
                    className="relative z-[5]"
                    alt=""
                    src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WETH.png"
                    width="30"
                    height="30"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap text-base leading-[30px] font-medium">
                    <span>weETH</span>/<span>WETH</span>
                  </div>
                  <p className="tracking-[0.78px] text-[12px] leading-none">
                    Gamma Correlated
                  </p>
                  <div className="mt-1 fee-container">
                    <p className="fee-tag">0.009%</p>
                  </div>
                </div>
              </div>
              <button className="lg:hidden">
                <img
                  alt=""
                  className="transform"
                  src="https://app.lynex.fi/images/swap/dropdown-arrow.png"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-2 lg:mt-0 w-1/2 lg:w-[14%] items-start justify-center space-y-1">
            <p className="lg:hidden text-sm f-f-fg font-semibold">APR</p>
            <div
              data-tip="true"
              data-for="[object Object]-0"
              className="flex flex-col"
            >
              <div className="flex items-center justify-center text-base sm:text-[14px] xl:text-[18px] space-x-1">
                <span
                  className="text-sm opacity-75"
                  style={{ fontSize: "smaller" }}
                >
                  Up to:&nbsp;5.6%
                </span>
              </div>
            </div>
            {/* <div className="flex flex-col space-y-2 mt-2">
              <div className="flex space-x-1 items-center">
                <span className="text-xs opacity-75">Points:</span>
                <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://linea.build/surge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/lxp.svg"
                      alt="Linea LXP-L"
                      data-tip="true"
                      data-for="tooltip-linea-lxp-l-0x530071b0373ab3029cad32e0c19b75253e231b69-0"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                  <div
                    className="__react_component_tooltip tca5ee7b9-4259-44b5-b760-4a357bbd10df place-right type-dark"
                    id="tooltip-linea-lxp-l-0x530071b0373ab3029cad32e0c19b75253e231b69-0"
                    data-id="tooltip"
                  >
                    <div>
                      <span>
                        Liquidity Providers in this pool also earn
                        <br />
                        <b>Linea LXP-L</b>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://docs.eigenlayer.xyz/eigenlayer/restaking-guides/restaking-user-guide/restaked-points"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/el.svg"
                      alt="Eigenlayer Restaked Points"
                      data-tip="true"
                      data-for="tooltip-eigenlayer-restaked-points-0x530071b0373ab3029cad32e0c19b75253e231b69-1"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                </div>
                <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://etherfi.gitbook.io/etherfi/getting-started/loyalty-points"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/etherfi.svg"
                      alt="3x Ether.Fi points"
                      data-tip="true"
                      data-for="tooltip-3x-ether.fi-points-0x530071b0373ab3029cad32e0c19b75253e231b69-2"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                  <div
                    className="__react_component_tooltip t1e21129f-8ba4-4c04-b809-82980cd00d51 place-right type-dark"
                    id="tooltip-3x-ether.fi-points-0x530071b0373ab3029cad32e0c19b75253e231b69-2"
                    data-id="tooltip"
                  >
                    <div>
                      <span>
                        Liquidity Providers in this pool also earn
                        <br />
                        <b>3x Ether.Fi points</b>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://turtle.club/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/turtle-linea.svg"
                      alt="Turtle-Linea Points"
                      data-tip="true"
                      data-for="tooltip-turtle-linea-points-0x530071b0373ab3029cad32e0c19b75253e231b69-3"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                  <div
                    className="__react_component_tooltip te3296a85-22d3-4ca0-ba56-34e491ea55fc place-right type-dark"
                    id="tooltip-turtle-linea-points-0x530071b0373ab3029cad32e0c19b75253e231b69-3"
                    data-id="tooltip"
                  >
                    <div>
                      <span>
                        Liquidity Providers in this pool also earn
                        <br />
                        <b>Turtle-Linea Points</b>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://turtle.club/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/turtle-lynex.svg"
                      alt="Turtle-Lynex Points"
                      data-tip="true"
                      data-for="tooltip-turtle-lynex-points-0x530071b0373ab3029cad32e0c19b75253e231b69-4"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                </div>
              </div>
            </div> */}
          </div>
          <div className="flex flex-col w-1/2 mt-2 lg:mt-0 items-start lg:w-[11%] justify-center">
            <p className="lg:hidden text-sm f-f-fg font-semibold">
              Total Staked
            </p>
            <div className="flex flex-col items-start justify-center">
              <div
                data-tip="true"
                data-for="tvl-0"
                className="text-base flex items-center cursor-pointer space-x-1.5"
              >
                <p>$2.63M</p>
                <button className="rotate-0 transform transition-all duration-300 ease-in-out">
                  <img
                    alt=""
                    src="https://app.lynex.fi/images/liquidity/small-arrow-bottom.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-start w-1/2 mt-3 lg:mt-0 lg:w-[11%] justify-center">
            <p className="lg:hidden text-sm f-f-fg font-semibold">My Stake</p>
            <div className="text-base sm:text-[14px] lg:text-[15px] xl:text-[16px]">
              -
            </div>
          </div>
          <div className="hidden lg:block w-1/2 lg:w-[8%] mt-2 lg:mt-0">
            <p className="lg:hidden text-sm f-f-fg font-semibold">Earnings</p>
            <div className="text-base sm:text-[14px] lg:text-[15px] xl:text-[16px]">
              -
            </div>
          </div>
          <div className="hidden lg:block w-full lg:w-[25%] mt-3.5 lg:mt-0">
            <div className="flex items-center lg:justify-end">
              <ConnectWalletButton />
            </div>
          </div>
        </div>
        <div className="table-row-wrapper">
          <div className="w-full lg:w-[20%]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 mr:0 lg:mr-3">
                <div className="flex items-center -space-x-2">
                  <img
                    className="relative z-10"
                    alt=""
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
                    width="30"
                    height="30"
                  />
                  <img
                    className="relative z-[5]"
                    alt=""
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                    width="30"
                    height="30"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap text-base leading-[30px] font-medium">
                    <span>USDC</span>/<span>USDT</span>
                  </div>
                  <p className="tracking-[0.78px] text-[12px] leading-none">
                    Steer Stable
                  </p>
                  <div className="mt-1 fee-container">
                    <p className="fee-tag">0.005%</p>
                  </div>
                </div>
              </div>
              <button className="lg:hidden">
                <img
                  alt=""
                  className="transform"
                  src="https://app.lynex.fi/images/swap/dropdown-arrow.png"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-2 lg:mt-0 w-1/2 lg:w-[14%] items-start justify-center space-y-1">
            <p className="lg:hidden text-sm f-f-fg font-semibold">APR</p>
            <div
              data-tip="true"
              data-for="[object Object]-1"
              className="flex flex-col"
            >
              <div className="flex items-center justify-center text-base sm:text-[14px] xl:text-[18px] space-x-1">
                <span
                  className="text-sm opacity-75"
                  style={{ fontSize: "smaller" }}
                >
                  Up to:&nbsp;6.1%
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              <div className="flex space-x-1 items-center">
                <span className="text-xs opacity-75">Points:</span>
                <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://linea.build/surge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/lxp.svg"
                      alt="Linea LXP-L"
                      data-tip="true"
                      data-for="tooltip-linea-lxp-l-0x2babed912322c355f4b8b58ea568727892ca3f05-0"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 mt-2 lg:mt-0 items-start lg:w-[11%] justify-center">
            <p className="lg:hidden text-sm f-f-fg font-semibold">
              Total Staked
            </p>
            <div className="flex flex-col items-start justify-center">
              <div
                data-tip="true"
                data-for="tvl-1"
                className="text-base flex items-center cursor-pointer space-x-1.5"
              >
                <p>$1.71M</p>
                <button className="rotate-0 transform transition-all duration-300 ease-in-out">
                  <img
                    alt=""
                    src="https://app.lynex.fi/images/liquidity/small-arrow-bottom.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-start w-1/2 mt-3 lg:mt-0 lg:w-[11%] justify-center">
            <p className="lg:hidden text-sm f-f-fg font-semibold">My Stake</p>
            <div className="text-base sm:text-[14px] lg:text-[15px] xl:text-[16px]">
              -
            </div>
          </div>
          <div className="hidden lg:block w-1/2 lg:w-[8%] mt-2 lg:mt-0">
            <p className="lg:hidden text-sm f-f-fg font-semibold">Earnings</p>
            <div className="text-base sm:text-[14px] lg:text-[15px] xl:text-[16px]">
              -
            </div>
          </div>
          <div className="hidden lg:block w-full lg:w-[25%] mt-3.5 lg:mt-0">
            <div className="flex items-center lg:justify-end">
              <button
                role="button"
                className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg py-[10px] px-[16px] text-sm"
              >
                CONNECT WALLET
              </button>
            </div>
          </div>
        </div>
        <div className="table-row-wrapper">
          <div className="w-full lg:w-[20%]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 mr:0 lg:mr-3">
                <div className="flex items-center -space-x-2">
                  <img
                    className="relative z-10"
                    alt=""
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/3717.png"
                    width="30"
                    height="30"
                  />
                  <img
                    className="relative z-[5]"
                    alt=""
                    src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WETH.png"
                    width="30"
                    height="30"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap text-base leading-[30px] font-medium">
                    <span>WBTC</span>/<span>WETH</span>
                  </div>
                  <p className="tracking-[0.78px] text-[12px] leading-none">
                    Gamma Narrow
                  </p>
                  <div className="mt-1 fee-container">
                    <p className="fee-tag">0.053%</p>
                  </div>
                </div>
              </div>
              <button className="lg:hidden">
                <img
                  alt=""
                  className="transform"
                  src="https://app.lynex.fi/images/swap/dropdown-arrow.png"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-2 lg:mt-0 w-1/2 lg:w-[14%] items-start justify-center space-y-1">
            <p className="lg:hidden text-sm f-f-fg font-semibold">APR</p>
            <div
              data-tip="true"
              data-for="[object Object]-2"
              className="flex flex-col"
            >
              <div className="flex items-center justify-center text-base sm:text-[14px] xl:text-[18px] space-x-1">
                <span
                  className="text-sm opacity-75"
                  style={{ fontSize: "smaller" }}
                >
                  Up to:&nbsp;27.22%
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              <div className="flex space-x-1 items-center">
                <span className="text-xs opacity-75">Points:</span>
                <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://linea.build/surge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/lxp.svg"
                      alt="Linea LXP-L"
                      data-tip="true"
                      data-for="tooltip-linea-lxp-l-0x8a9570ec97534277ade6e46d100939fbce4968f0-0"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                </div>
                <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://turtle.club/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/turtle-linea.svg"
                      alt="Turtle-Linea Points"
                      data-tip="true"
                      data-for="tooltip-turtle-linea-points-0x8a9570ec97534277ade6e46d100939fbce4968f0-1"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                </div>
                <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://turtle.club/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/turtle-lynex.svg"
                      alt="Turtle-Lynex Points"
                      data-tip="true"
                      data-for="tooltip-turtle-lynex-points-0x8a9570ec97534277ade6e46d100939fbce4968f0-2"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 mt-2 lg:mt-0 items-start lg:w-[11%] justify-center">
            <p className="lg:hidden text-sm f-f-fg font-semibold">
              Total Staked
            </p>
            <div className="flex flex-col items-start justify-center">
              <div
                data-tip="true"
                data-for="tvl-2"
                className="text-base flex items-center cursor-pointer space-x-1.5"
              >
                <p>$1.25M</p>
                <button className="rotate-0 transform transition-all duration-300 ease-in-out">
                  <img
                    alt=""
                    src="https://app.lynex.fi/images/liquidity/small-arrow-bottom.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-start w-1/2 mt-3 lg:mt-0 lg:w-[11%] justify-center">
            <p className="lg:hidden text-sm f-f-fg font-semibold">My Stake</p>
            <div className="text-base sm:text-[14px] lg:text-[15px] xl:text-[16px]">
              -
            </div>
          </div>
          <div className="hidden lg:block w-1/2 lg:w-[8%] mt-2 lg:mt-0">
            <p className="lg:hidden text-sm f-f-fg font-semibold">Earnings</p>
            <div className="text-base sm:text-[14px] lg:text-[15px] xl:text-[16px]">
              -
            </div>
          </div>
          <div className="hidden lg:block w-full lg:w-[25%] mt-3.5 lg:mt-0">
            <div className="flex items-center lg:justify-end">
              <button
                role="button"
                className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg py-[10px] px-[16px] text-sm"
              >
                CONNECT WALLET
              </button>
            </div>
          </div>
        </div>
        <div className="table-row-wrapper">
          <div className="w-full lg:w-[20%]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 mr:0 lg:mr-3">
                <div className="flex items-center -space-x-2">
                  <img
                    className="relative z-10"
                    alt=""
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
                    width="30"
                    height="30"
                  />
                  <img
                    className="relative z-[5]"
                    alt=""
                    src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WETH.png"
                    width="30"
                    height="30"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap text-base leading-[30px] font-medium">
                    <span>USDC</span>/<span>WETH</span>
                  </div>
                  <p className="tracking-[0.78px] text-[12px] leading-none">
                    Gamma Narrow
                  </p>
                  <div className="mt-1 fee-container">
                    <p className="fee-tag">0.091%</p>
                  </div>
                </div>
              </div>
              <button className="lg:hidden">
                <img
                  alt=""
                  className="transform"
                  src="https://app.lynex.fi/images/swap/dropdown-arrow.png"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-2 lg:mt-0 w-1/2 lg:w-[14%] items-start justify-center space-y-1">
            <p className="lg:hidden text-sm f-f-fg font-semibold">APR</p>
            <div
              data-tip="true"
              data-for="[object Object]-3"
              className="flex flex-col"
            >
              <div className="flex items-center justify-center text-base sm:text-[14px] xl:text-[18px] space-x-1">
                <span
                  className="text-sm opacity-75"
                  style={{ fontSize: "smaller" }}
                >
                  Up to:&nbsp;149.18%
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              <div className="flex space-x-1 items-center">
                <span className="text-xs opacity-75">Points:</span>
                <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://linea.build/surge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/lxp.svg"
                      alt="Linea LXP-L"
                      data-tip="true"
                      data-for="tooltip-linea-lxp-l-0x0b15a5e3ca0d4b492c3b476d0f807535f9b72079-0"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 mt-2 lg:mt-0 items-start lg:w-[11%] justify-center">
            <p className="lg:hidden text-sm f-f-fg font-semibold">
              Total Staked
            </p>
            <div className="flex flex-col items-start justify-center">
              <div
                data-tip="true"
                data-for="tvl-3"
                className="text-base flex items-center cursor-pointer space-x-1.5"
              >
                <p>$963.4K</p>
                <button className="rotate-0 transform transition-all duration-300 ease-in-out">
                  <img
                    alt=""
                    src="https://app.lynex.fi/images/liquidity/small-arrow-bottom.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-start w-1/2 mt-3 lg:mt-0 lg:w-[11%] justify-center">
            <p className="lg:hidden text-sm f-f-fg font-semibold">My Stake</p>
            <div className="text-base sm:text-[14px] lg:text-[15px] xl:text-[16px]">
              -
            </div>
          </div>
          <div className="hidden lg:block w-1/2 lg:w-[8%] mt-2 lg:mt-0">
            <p className="lg:hidden text-sm f-f-fg font-semibold">Earnings</p>
            <div className="text-base sm:text-[14px] lg:text-[15px] xl:text-[16px]">
              -
            </div>
          </div>
          <div className="hidden lg:block w-full lg:w-[25%] mt-3.5 lg:mt-0">
            <div className="flex items-center lg:justify-end">
              <button
                role="button"
                className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg py-[10px] px-[16px] text-sm"
              >
                CONNECT WALLET
              </button>
            </div>
          </div>
        </div>
        <div className="table-row-wrapper">
          <div className="w-full lg:w-[20%]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 mr:0 lg:mr-3">
                <div className="flex items-center -space-x-2">
                  <img
                    className="relative z-10"
                    alt=""
                    src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/ezETH.png"
                    width="30"
                    height="30"
                  />
                  <img
                    className="relative z-[5]"
                    alt=""
                    src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WETH.png"
                    width="30"
                    height="30"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap text-base leading-[30px] font-medium">
                    <span>ezETH</span>/<span>WETH</span>
                  </div>
                  <p className="tracking-[0.78px] text-[12px] leading-none">
                    Gamma Correlated
                  </p>
                  <div className="mt-1 fee-container">
                    <p className="fee-tag">0.009%</p>
                  </div>
                </div>
              </div>
              <button className="lg:hidden">
                <img
                  alt=""
                  className="transform"
                  src="https://app.lynex.fi/images/swap/dropdown-arrow.png"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-2 lg:mt-0 w-1/2 lg:w-[14%] items-start justify-center space-y-1">
            <p className="lg:hidden text-sm f-f-fg font-semibold">APR</p>
            <div
              data-tip="true"
              data-for="[object Object]-4"
              className="flex flex-col"
            >
              <div className="flex items-center justify-center text-base sm:text-[14px] xl:text-[18px] space-x-1">
                <span
                  className="text-sm opacity-75"
                  style={{ fontSize: "smaller" }}
                >
                  Up to:&nbsp;12.38%
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              <div className="flex space-x-1 items-center">
                <span className="text-xs opacity-75">Points:</span>
                {/* <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://linea.build/surge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/lxp.svg"
                      alt="Linea LXP-L"
                      data-tip="true"
                      data-for="tooltip-linea-lxp-l-0x392ac7d2d09042ec9fafaeb8d52a88dc591e9fea-0"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                </div>
                <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://mirror.xyz/10/0x965e92f21b8da409de9d1ca8e8a99e4d326e9bd5/render"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/ez.svg"
                      alt="x4 Renzo ezPoints"
                      data-tip="true"
                      data-for="tooltip-x4-renzo-ezpoints-0x392ac7d2d09042ec9fafaeb8d52a88dc591e9fea-1"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                </div>
                <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://turtle.club/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/turtle-linea.svg"
                      alt="Turtle-Linea Points"
                      data-tip="true"
                      data-for="tooltip-turtle-linea-points-0x392ac7d2d09042ec9fafaeb8d52a88dc591e9fea-2"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                  <div
                    className="__react_component_tooltip t54da30d2-85c4-4d53-999a-a69848ce6216 place-right type-dark"
                    id="tooltip-turtle-linea-points-0x392ac7d2d09042ec9fafaeb8d52a88dc591e9fea-2"
                    data-id="tooltip"
                  >
                    <div>
                      <span>
                        Liquidity Providers in this pool also earn
                        <br />
                        <b>Turtle-Linea Points</b>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://turtle.club/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/turtle-lynex.svg"
                      alt="Turtle-Lynex Points"
                      data-tip="true"
                      data-for="tooltip-turtle-lynex-points-0x392ac7d2d09042ec9fafaeb8d52a88dc591e9fea-3"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                  <div
                    className="__react_component_tooltip tfa854fd3-574f-479c-9ab9-c311ddc4d4eb place-right type-dark"
                    id="tooltip-turtle-lynex-points-0x392ac7d2d09042ec9fafaeb8d52a88dc591e9fea-3"
                    data-id="tooltip"
                  >
                    <div>
                      <span>
                        Liquidity Providers in this pool also earn
                        <br />
                        <b>Turtle-Lynex Points</b>
                      </span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 mt-2 lg:mt-0 items-start lg:w-[11%] justify-center">
            <p className="lg:hidden text-sm f-f-fg font-semibold">
              Total Staked
            </p>
            <div className="flex flex-col items-start justify-center">
              <div
                data-tip="true"
                data-for="tvl-4"
                className="text-base flex items-center cursor-pointer space-x-1.5"
              >
                <p>$910.17K</p>
                <button className="rotate-0 transform transition-all duration-300 ease-in-out">
                  <img
                    alt=""
                    src="https://app.lynex.fi/images/liquidity/small-arrow-bottom.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-start w-1/2 mt-3 lg:mt-0 lg:w-[11%] justify-center">
            <p className="lg:hidden text-sm f-f-fg font-semibold">My Stake</p>
            <div className="text-base sm:text-[14px] lg:text-[15px] xl:text-[16px]">
              -
            </div>
          </div>
          <div className="hidden lg:block w-1/2 lg:w-[8%] mt-2 lg:mt-0">
            <p className="lg:hidden text-sm f-f-fg font-semibold">Earnings</p>
            <div className="text-base sm:text-[14px] lg:text-[15px] xl:text-[16px]">
              -
            </div>
          </div>
          <div className="hidden lg:block w-full lg:w-[25%] mt-3.5 lg:mt-0">
            <div className="flex items-center lg:justify-end">
              <button
                role="button"
                className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg py-[10px] px-[16px] text-sm"
              >
                CONNECT WALLET
              </button>
            </div>
          </div>
        </div>
        <div className="table-row-wrapper">
          <div className="w-full lg:w-[20%]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 mr:0 lg:mr-3">
                <div className="flex items-center -space-x-2">
                  <img
                    className="relative z-10"
                    alt=""
                    src="https://cryptologos.cc/logos/steth-steth-logo.png"
                    width="30"
                    height="30"
                  />
                  <img
                    className="relative z-[5]"
                    alt=""
                    src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WETH.png"
                    width="30"
                    height="30"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap text-base leading-[30px] font-medium">
                    <span>wstETH</span>/<span>WETH</span>
                  </div>
                  <p className="tracking-[0.78px] text-[12px] leading-none">
                    Gamma Correlated
                  </p>
                  <div className="mt-1 fee-container">
                    <p className="fee-tag">0.009%</p>
                  </div>
                </div>
              </div>
              <button className="lg:hidden">
                <img
                  alt=""
                  className="transform"
                  src="https://app.lynex.fi/images/swap/dropdown-arrow.png"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-2 lg:mt-0 w-1/2 lg:w-[14%] items-start justify-center space-y-1">
            <p className="lg:hidden text-sm f-f-fg font-semibold">APR</p>
            <div
              data-tip="true"
              data-for="[object Object]-5"
              className="flex flex-col"
            >
              <div className="flex items-center justify-center text-base sm:text-[14px] xl:text-[18px] space-x-1">
                <span
                  className="text-sm opacity-75"
                  style={{ fontSize: "smaller" }}
                >
                  Up to:&nbsp;9.31%
                </span>
              </div>
            </div>
            {/* <div className="flex flex-col space-y-2 mt-2">
              <div className="flex space-x-1 items-center">
                <span className="text-xs opacity-75">Points:</span>
                <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://linea.build/surge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/lxp.svg"
                      alt="Linea LXP-L"
                      data-tip="true"
                      data-for="tooltip-linea-lxp-l-0xea5abd5d15b8cd168e9eff78047db52af079e094-0"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                  <div
                    className="__react_component_tooltip tebec2741-c465-4770-939e-7c434da6d037 place-right type-dark"
                    id="tooltip-linea-lxp-l-0xea5abd5d15b8cd168e9eff78047db52af079e094-0"
                    data-id="tooltip"
                  >
                    <div>
                      <span>
                        Liquidity Providers in this pool also earn
                        <br />
                        <b>Linea LXP-L</b>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="flex flex-col w-1/2 mt-2 lg:mt-0 items-start lg:w-[11%] justify-center">
            <p className="lg:hidden text-sm f-f-fg font-semibold">
              Total Staked
            </p>
            <div className="flex flex-col items-start justify-center">
              <div
                data-tip="true"
                data-for="tvl-5"
                className="text-base flex items-center cursor-pointer space-x-1.5"
              >
                <p>$901.19K</p>
                <button className="rotate-0 transform transition-all duration-300 ease-in-out">
                  <img
                    alt=""
                    src="https://app.lynex.fi/images/liquidity/small-arrow-bottom.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-start w-1/2 mt-3 lg:mt-0 lg:w-[11%] justify-center">
            <p className="lg:hidden text-sm f-f-fg font-semibold">My Stake</p>
            <div className="text-base sm:text-[14px] lg:text-[15px] xl:text-[16px]">
              -
            </div>
          </div>
          <div className="hidden lg:block w-1/2 lg:w-[8%] mt-2 lg:mt-0">
            <p className="lg:hidden text-sm f-f-fg font-semibold">Earnings</p>
            <div className="text-base sm:text-[14px] lg:text-[15px] xl:text-[16px]">
              -
            </div>
          </div>
          <div className="hidden lg:block w-full lg:w-[25%] mt-3.5 lg:mt-0">
            <div className="flex items-center lg:justify-end">
              <button
                role="button"
                className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg py-[10px] px-[16px] text-sm"
              >
                CONNECT WALLET
              </button>
            </div>
          </div>
        </div>
        <div className="table-row-wrapper">
          <div className="w-full lg:w-[20%]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 mr:0 lg:mr-3">
                <div className="flex items-center -space-x-2">
                  <img
                    className="relative z-10"
                    alt=""
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/3717.png"
                    width="30"
                    height="30"
                  />
                  <img
                    className="relative z-[5]"
                    alt=""
                    src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WETH.png"
                    width="30"
                    height="30"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap text-base leading-[30px] font-medium">
                    <span>WBTC</span>/<span>WETH</span>
                  </div>
                  <p className="tracking-[0.78px] text-[12px] leading-none">
                    Yield IQ
                  </p>
                  <div className="mt-1 fee-container">
                    <p className="fee-tag">0.053%</p>
                  </div>
                </div>
              </div>
              <button className="lg:hidden">
                <img
                  alt=""
                  className="transform"
                  src="https://app.lynex.fi/images/swap/dropdown-arrow.png"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-2 lg:mt-0 w-1/2 lg:w-[14%] items-start justify-center space-y-1">
            <p className="lg:hidden text-sm f-f-fg font-semibold">APR</p>
            <div
              data-tip="true"
              data-for="[object Object]-6"
              className="flex flex-col"
            >
              <div className="flex items-center justify-center text-base sm:text-[14px] xl:text-[18px] space-x-1">
                <span
                  className="text-sm opacity-75"
                  style={{ fontSize: "smaller" }}
                >
                  Up to:&nbsp;17.81%
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              <div className="flex space-x-1 items-center">
                <span className="text-xs opacity-75">Points:</span>
                <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://linea.build/surge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/lxp.svg"
                      alt="Linea LXP-L"
                      data-tip="true"
                      data-for="tooltip-linea-lxp-l-0xad53f20917b144cd0b100dbe75988c0e4b919dba-0"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 mt-2 lg:mt-0 items-start lg:w-[11%] justify-center">
            <p className="lg:hidden text-sm f-f-fg font-semibold">
              Total Staked
            </p>
            <div className="flex flex-col items-start justify-center">
              <div
                data-tip="true"
                data-for="tvl-6"
                className="text-base flex items-center cursor-pointer space-x-1.5"
              >
                <p>$701.24K</p>
                <button className="rotate-0 transform transition-all duration-300 ease-in-out">
                  <img
                    alt=""
                    src="https://app.lynex.fi/images/liquidity/small-arrow-bottom.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-start w-1/2 mt-3 lg:mt-0 lg:w-[11%] justify-center">
            <p className="lg:hidden text-sm f-f-fg font-semibold">My Stake</p>
            <div className="text-base sm:text-[14px] lg:text-[15px] xl:text-[16px]">
              -
            </div>
          </div>
          <div className="hidden lg:block w-1/2 lg:w-[8%] mt-2 lg:mt-0">
            <p className="lg:hidden text-sm f-f-fg font-semibold">Earnings</p>
            <div className="text-base sm:text-[14px] lg:text-[15px] xl:text-[16px]">
              -
            </div>
          </div>
          <div className="hidden lg:block w-full lg:w-[25%] mt-3.5 lg:mt-0">
            <div className="flex items-center lg:justify-end">
              <button
                role="button"
                className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg py-[10px] px-[16px] text-sm"
              >
                CONNECT WALLET
              </button>
            </div>
          </div>
        </div>
        <div className="table-row-wrapper">
          <div className="w-full lg:w-[20%]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 mr:0 lg:mr-3">
                <div className="flex items-center -space-x-2">
                  <img
                    className="relative z-10"
                    alt=""
                    src="https://app.lynex.fi/logo.png"
                    width="30"
                    height="30"
                  />
                  <img
                    className="relative z-[5]"
                    alt=""
                    src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WETH.png"
                    width="30"
                    height="30"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap text-base leading-[30px] font-medium">
                    <span>LYNX</span>/<span>WETH</span>
                  </div>
                  <p className="tracking-[0.78px] text-[12px] leading-none">
                    Yield IQ
                  </p>
                  <div className="mt-1 fee-container">
                    <p className="fee-tag">1.25%</p>
                  </div>
                </div>
              </div>
              <button className="lg:hidden">
                <img
                  alt=""
                  className="transform"
                  src="https://app.lynex.fi/images/swap/dropdown-arrow.png"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-2 lg:mt-0 w-1/2 lg:w-[14%] items-start justify-center space-y-1">
            <p className="lg:hidden text-sm f-f-fg font-semibold">APR</p>
            <div
              data-tip="true"
              data-for="[object Object]-7"
              className="flex flex-col"
            >
              <div className="flex items-center justify-center text-base sm:text-[14px] xl:text-[18px] space-x-1">
                <span
                  className="text-sm opacity-75"
                  style={{ fontSize: "smaller" }}
                >
                  Up to:&nbsp;89.27%
                </span>
              </div>
            </div>
            {/* <div className="flex flex-col space-y-2 mt-2">
              <div className="flex space-x-1 items-center">
                <span className="text-xs opacity-75">Points:</span>
                <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://linea.build/surge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/lxp.svg"
                      alt="Linea LXP-L"
                      data-tip="true"
                      data-for="tooltip-linea-lxp-l-0x511481ef0deb10eb5c1e36b72140718c58921265-0"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                </div>
                <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://turtle.club/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/turtle-linea.svg"
                      alt="Turtle-Linea Points"
                      data-tip="true"
                      data-for="tooltip-turtle-linea-points-0x511481ef0deb10eb5c1e36b72140718c58921265-1"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                  <div
                    className="__react_component_tooltip t7739f314-d57a-4224-999d-432d2298efd2 place-right type-dark"
                    id="tooltip-turtle-linea-points-0x511481ef0deb10eb5c1e36b72140718c58921265-1"
                    data-id="tooltip"
                  >
                    <div>
                      <span>
                        Liquidity Providers in this pool also earn
                        <br />
                        <b>Turtle-Linea Points</b>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://turtle.club/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/turtle-lynex.svg"
                      alt="Turtle-Lynex Points"
                      data-tip="true"
                      data-for="tooltip-turtle-lynex-points-0x511481ef0deb10eb5c1e36b72140718c58921265-2"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                </div>
              </div>
            </div> */}
          </div>
          <div className="flex flex-col w-1/2 mt-2 lg:mt-0 items-start lg:w-[11%] justify-center">
            <p className="lg:hidden text-sm f-f-fg font-semibold">
              Total Staked
            </p>
            <div className="flex flex-col items-start justify-center">
              <div
                data-tip="true"
                data-for="tvl-7"
                className="text-base flex items-center cursor-pointer space-x-1.5"
              >
                <p>$532.64K</p>
                <button className="rotate-0 transform transition-all duration-300 ease-in-out">
                  <img
                    alt=""
                    src="https://app.lynex.fi/images/liquidity/small-arrow-bottom.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-start w-1/2 mt-3 lg:mt-0 lg:w-[11%] justify-center">
            <p className="lg:hidden text-sm f-f-fg font-semibold">My Stake</p>
            <div className="text-base sm:text-[14px] lg:text-[15px] xl:text-[16px]">
              -
            </div>
          </div>
          <div className="hidden lg:block w-1/2 lg:w-[8%] mt-2 lg:mt-0">
            <p className="lg:hidden text-sm f-f-fg font-semibold">Earnings</p>
            <div className="text-base sm:text-[14px] lg:text-[15px] xl:text-[16px]">
              -
            </div>
          </div>
          <div className="hidden lg:block w-full lg:w-[25%] mt-3.5 lg:mt-0">
            <div className="flex items-center lg:justify-end">
              <button
                role="button"
                className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg py-[10px] px-[16px] text-sm"
              >
                CONNECT WALLET
              </button>
            </div>
          </div>
        </div>
        <div className="table-row-wrapper">
          <div className="w-full lg:w-[20%]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 mr:0 lg:mr-3">
                <div className="flex items-center -space-x-2">
                  <img
                    className="relative z-10"
                    alt=""
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                    width="30"
                    height="30"
                  />
                  <img
                    className="relative z-[5]"
                    alt=""
                    src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WETH.png"
                    width="30"
                    height="30"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap text-base leading-[30px] font-medium">
                    <span>USDT</span>/<span>WETH</span>
                  </div>
                  <p className="tracking-[0.78px] text-[12px] leading-none">
                    Gamma Narrow
                  </p>
                  <div className="mt-1 fee-container">
                    <p className="fee-tag">0.09%</p>
                  </div>
                </div>
              </div>
              <button className="lg:hidden">
                <img
                  alt=""
                  className="transform"
                  src="https://app.lynex.fi/images/swap/dropdown-arrow.png"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-2 lg:mt-0 w-1/2 lg:w-[14%] items-start justify-center space-y-1">
            <p className="lg:hidden text-sm f-f-fg font-semibold">APR</p>
            <div
              data-tip="true"
              data-for="[object Object]-8"
              className="flex flex-col"
            >
              <div className="flex items-center justify-center text-base sm:text-[14px] xl:text-[18px] space-x-1">
                <span
                  className="text-sm opacity-75"
                  style={{ fontSize: "smaller" }}
                >
                  Up to:&nbsp;159.79%
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              <div className="flex space-x-1 items-center">
                <span className="text-xs opacity-75">Points:</span>
                <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://linea.build/surge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/lxp.svg"
                      alt="Linea LXP-L"
                      data-tip="true"
                      data-for="tooltip-linea-lxp-l-0xf3b1125c8505f038503e002e61a78253610d4f60-0"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                </div>
                {/* <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://turtle.club/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/turtle-linea.svg"
                      alt="Turtle-Linea Points"
                      data-tip="true"
                      data-for="tooltip-turtle-linea-points-0xf3b1125c8505f038503e002e61a78253610d4f60-1"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                  <div
                    className="__react_component_tooltip t702d7ebc-eb31-4686-9e63-11e24d5565eb place-right type-dark"
                    id="tooltip-turtle-linea-points-0xf3b1125c8505f038503e002e61a78253610d4f60-1"
                    data-id="tooltip"
                  >
                    <div>
                      <span>
                        Liquidity Providers in this pool also earn
                        <br />
                        <b>Turtle-Linea Points</b>
                      </span>
                    </div>
                  </div>
                </div> */}
                {/* <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://turtle.club/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/turtle-lynex.svg"
                      alt="Turtle-Lynex Points"
                      data-tip="true"
                      data-for="tooltip-turtle-lynex-points-0xf3b1125c8505f038503e002e61a78253610d4f60-2"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                  <div
                    className="__react_component_tooltip t20be0d82-fa80-4453-98ca-e2d9c63bd8ca place-right type-dark"
                    id="tooltip-turtle-lynex-points-0xf3b1125c8505f038503e002e61a78253610d4f60-2"
                    data-id="tooltip"
                  >
                    <div>
                      <span>
                        Liquidity Providers in this pool also earn
                        <br />
                        <b>Turtle-Lynex Points</b>
                      </span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 mt-2 lg:mt-0 items-start lg:w-[11%] justify-center">
            <p className="lg:hidden text-sm f-f-fg font-semibold">
              Total Staked
            </p>
            <div className="flex flex-col items-start justify-center">
              <div
                data-tip="true"
                data-for="tvl-8"
                className="text-base flex items-center cursor-pointer space-x-1.5"
              >
                <p>$476.25K</p>
                <button className="rotate-0 transform transition-all duration-300 ease-in-out">
                  <img
                    alt=""
                    src="https://app.lynex.fi/images/liquidity/small-arrow-bottom.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-start w-1/2 mt-3 lg:mt-0 lg:w-[11%] justify-center">
            <p className="lg:hidden text-sm f-f-fg font-semibold">My Stake</p>
            <div className="text-base sm:text-[14px] lg:text-[15px] xl:text-[16px]">
              -
            </div>
          </div>
          <div className="hidden lg:block w-1/2 lg:w-[8%] mt-2 lg:mt-0">
            <p className="lg:hidden text-sm f-f-fg font-semibold">Earnings</p>
            <div className="text-base sm:text-[14px] lg:text-[15px] xl:text-[16px]">
              -
            </div>
          </div>
          <div className="hidden lg:block w-full lg:w-[25%] mt-3.5 lg:mt-0">
            <div className="flex items-center lg:justify-end">
              <button
                role="button"
                className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg py-[10px] px-[16px] text-sm"
              >
                CONNECT WALLET
              </button>
            </div>
          </div>
        </div>
        <div className="table-row-wrapper">
          <div className="w-full lg:w-[20%]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 mr:0 lg:mr-3">
                <div className="flex items-center -space-x-2">
                  <img
                    className="relative z-10"
                    alt=""
                    src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/FOXY.png"
                    width="30"
                    height="30"
                  />
                  <img
                    className="relative z-[5]"
                    alt=""
                    src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WETH.png"
                    width="30"
                    height="30"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap text-base leading-[30px] font-medium">
                    <span>FOXY</span>/<span>WETH</span>
                  </div>
                  <p className="tracking-[0.78px] text-[12px] leading-none">
                    Yield IQ (WETH)
                  </p>
                  <div className="mt-1 fee-container">
                    <p className="fee-tag">1.02%</p>
                  </div>
                </div>
              </div>
              <button className="lg:hidden">
                <img
                  alt=""
                  className="transform"
                  src="https://app.lynex.fi/images/swap/dropdown-arrow.png"
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-2 lg:mt-0 w-1/2 lg:w-[14%] items-start justify-center space-y-1">
            <p className="lg:hidden text-sm f-f-fg font-semibold">APR</p>
            <div
              data-tip="true"
              data-for="[object Object]-9"
              className="flex flex-col"
            >
              <div className="flex items-center justify-center text-base sm:text-[14px] xl:text-[18px] space-x-1">
                <span
                  className="text-sm opacity-75"
                  style={{ fontSize: "smaller" }}
                >
                  Up to:&nbsp;77.36%
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              <div className="flex space-x-1 items-center">
                <span className="text-xs opacity-75">Points:</span>
                <div className="flex items-center justify-center -ml-1 py-0.25 px-0.5">
                  <a
                    href="https://linea.build/surge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src=" https://app.lynex.fi/images/points/lxp.svg"
                      alt="Linea LXP-L"
                      data-tip="true"
                      data-for="tooltip-linea-lxp-l-0x1795c4b23ec93c852653045dab4dd1ac796d5248-0"
                      style={{ width: "1.5em", height: "1.26em" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 mt-2 lg:mt-0 items-start lg:w-[11%] justify-center">
            <p className="lg:hidden text-sm f-f-fg font-semibold">
              Total Staked
            </p>
            <div className="flex flex-col items-start justify-center">
              <div
                data-tip="true"
                data-for="tvl-9"
                className="text-base flex items-center cursor-pointer space-x-1.5"
              >
                <p>$441.85K</p>
                <button className="rotate-0 transform transition-all duration-300 ease-in-out">
                  <img
                    alt=""
                    src="https://app.lynex.fi/images/liquidity/small-arrow-bottom.svg"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-start w-1/2 mt-3 lg:mt-0 lg:w-[11%] justify-center">
            <p className="lg:hidden text-sm f-f-fg font-semibold">My Stake</p>
            <div className="text-base sm:text-[14px] lg:text-[15px] xl:text-[16px]">
              -
            </div>
          </div>
          <div className="hidden lg:block w-1/2 lg:w-[8%] mt-2 lg:mt-0">
            <p className="lg:hidden text-sm f-f-fg font-semibold">Earnings</p>
            <div className="text-base sm:text-[14px] lg:text-[15px] xl:text-[16px]">
              -
            </div>
          </div>
          <div className="hidden lg:block w-full lg:w-[25%] mt-3.5 lg:mt-0">
            <div className="flex items-center lg:justify-end">
              <button
                role="button"
                className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg py-[10px] px-[16px] text-sm"
              >
                CONNECT WALLET
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse items-center lg:flex-row w-full justify-center mt-[15px]">
        <div className="flex space-x-5 lg:space-x-2 mt-3 lg:mt-0">
          <div className="flex items-center space-x-2.5 text-[17px] text-white">
            <p>Show:</p>
            <div className="relative z-20">
              <div className="flex items-center space-x-1 cursor-pointer">
                <p>10 Rows</p>
                <img
                  className="transform transition-all duration-300 ease-in-out"
                  alt=""
                  src="https://app.lynex.fi/images/liquidity/small-arrow-bottom.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2.5 text-[17px] text-white">
            1-10 of 74
          </div>
        </div>
        <ul
          className="sc-dAlyuH dEzvHg"
          role="navigation"
          aria-label="Pagination"
        >
          <li className="previous disabled">
            <a
              className=" "
              tabIndex="-1"
              role="button"
              aria-disabled="true"
              aria-label="Previous page"
              rel="prev"
            >
              &lt;
            </a>
          </li>
          <li className="active">
            <a
              rel="canonical"
              role="button"
              tabIndex="-1"
              aria-label="Page 1 is your current page"
              aria-current="page"
            >
              1
            </a>
          </li>
          <li>
            <a rel="next" role="button" tabIndex="0" aria-label="Page 2">
              2
            </a>
          </li>
          <li>
            <a role="button" tabIndex="0" aria-label="Page 3">
              3
            </a>
          </li>
          <li className="break">
            <a role="button" tabIndex="0" aria-label="Jump forward">
              ...
            </a>
          </li>
          <li>
            <a role="button" tabIndex="0" aria-label="Page 6">
              6
            </a>
          </li>
          <li>
            <a role="button" tabIndex="0" aria-label="Page 7">
              7
            </a>
          </li>
          <li>
            <a role="button" tabIndex="0" aria-label="Page 8">
              8
            </a>
          </li>
          <li className="next">
            <a
              className=""
              tabIndex="0"
              role="button"
              aria-disabled="false"
              aria-label="Next page"
              rel="next"
            >
              &gt;
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Liqudity;

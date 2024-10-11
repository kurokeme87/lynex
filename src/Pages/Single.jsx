import React from "react";
import turtle_linea from "../assets/turtle-linea.svg";
import turtle_lynex from "../assets/turtle-lynex.svg";
import lxp from "../assets/lxp.svg";
const Single = () => {
  return (
    <div className="max-w-[1200px] px-5 sm:px-16 md:px-28 mdLg:px-40 lg:px-5 xl:px-0 pt-20 pt-[160px] mx-auto">
      <div className="lg:flex items-end justify-between">
        <div className="max-w-[480px] w-full">
          <h1 className="text-[34px] md:text-[42px] font-semibold text-white f-f-fg">
            Single token deposits
          </h1>
          <p className="text-[#b8b6cb] text-base md:text-lg leading-[22px] md:leading-6 mt-1">
            Deposit single-sided liquidity and let ICHI handle the rest. Sit
            back and start earning!
            <a
              href="https://lynex.gitbook.io/lynex-docs/protocol-overview/automated-liquidity-management/ichi"
              target="_blank"
              rel="noreferrer"
            >
              <span className="!text-lg text-themeOrange">Learn More</span>
            </a>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between mt-6 lg:mt-0">
          <div className="flex flex-col">
            <div className="flex w-full items-center justify-between space-x-6">
              <div className="flex flex-col items-center">
                <p className="text-dimGray text-[10px] lg:text-xs">My Staked</p>
                <p className="text-white lg:text-xl">$0</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-dimGray text-[10px] lg:text-xs">
                  My Unstaked
                </p>
                <p className="text-white lg:text-xl">$0</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-dimGray text-[10px] lg:text-xs">
                  My Earnings
                </p>
                <p className="text-white lg:text-xl">$0</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-dimGray text-[10px] lg:text-xs">Total TVL</p>
                <p className="text-white lg:text-xl">$1.22M</p>
              </div>
            </div>
            <div className="flex lg:hidden flex-nowrap w-full space-x-3 mt-3">
              <div className="lg:hidden border border-themeOrange w-full rounded-[3px] flex items-center lg:max-w-[250px] relative">
                <img
                  className="pointer-events-none absolute left-3 w-6 h-6"
                  alt=""
                  src="https://app.lynex.fi/images/svgs/search.svg"
                />
                <input
                  placeholder="Search Pair or Token"
                  className="bg-body placeholder-[#757384] h-[42px] w-full text-themeBlack text-sm xl:text-base pl-10 xl:pl-[41px] pr-4 py-3 md:py-[18px] rounded-[3px]"
                  value=""
                />
              </div>
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
      </div>
      <div className="flex items-center justify-between w-full mt-[18px] lg:space-x-8 xl:space-x-[60px] relative">
        <div className="w-full hidden lg:flex items-center space-x-8">
          <div className="border border-themeOrange w-full rounded-[3px] flex items-center lg:max-w-[250px] relative">
            <img
              className="pointer-events-none absolute left-3 w-6 h-6"
              alt=""
              src="https://app.lynex.fi/images/svgs/search.svg"
            />
            <input
              placeholder="Search Pair or Token"
              className="bg-body placeholder-[#757384] h-[42px] w-full text-themeBlack text-sm xl:text-base pl-10 xl:pl-[41px] pr-4 py-3 md:py-[18px] rounded-[3px]"
              value=""
            />
          </div>
          <div className="flex items-center space-x-2">
            <label
              //   for="isStaked"
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
              //   for="isInactive"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input type="checkbox" id="isInactive" className="sr-only peer" />
              <div className="w-14 h-[26px] after:h-[22px] after:w-[26px] after:top-[1.5px] after:left-[2px] rounded-md after:rounded-md bg-white/5 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:transition-all peer-checked"></div>
            </label>
            <p className="text-[#DEDBF2] text-sm xl:text-[17px] whitespace-nowrap">
              Inactive
            </p>
          </div>
        </div>
        <div className="lg:mt-0 w-full lg:w-[80%] flex justify-between items-center space-x-3">
          <button
            disabled=""
            role="button"
            aria-disabled="true"
            className="sc-gEvEer digaYO f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg text-xs lg:text-sm w-full md:max-w-1/2 lg:max-w-[380px] h-[44px] px-3 xl:px-4 rounded-md !bg-gray-500/80 !text-gray-300 cursor-not-allowed"
          >
            CLAIM ALL (0)
          </button>
          <button
            role="button"
            className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg text-xs lg:text-sm w-full md:max-w-1/2 lg:max-w-[380px] h-[44px] px-3 xl:px-4 rounded-md"
          >
            ADD LIQUIDITY
          </button>
        </div>
      </div>
      <div className="w-full mt-[42px]">
        <div className="w-full">
          <div className="sticky-outer-wrapper z-[100]">
            <div
              className="sticky-inner-wrapper sticky-table-header"
              style={{ position: "relative", top: "0px" }}
            >
              <div className="w-[41%] text-sm text-white f-f-fg">
                <div className="flex items-center cursor-pointer space-x-1 -ml-1 relative">
                  <p className="flex items-center">PAIR</p>
                </div>
              </div>
              <div className="w-[8%] text-sm text-white f-f-fg">
                <div className="flex items-center cursor-pointer space-x-1 -ml-1 relative">
                  <p className="flex items-center">APR</p>
                </div>
              </div>
              <div className="w-[13%] text-sm text-white f-f-fg">
                <div className="flex items-center cursor-pointer space-x-1 -ml-1 relative">
                  <p className="flex items-center">TVL</p>
                  <button className="transform">
                    <img
                      alt=""
                      src="https://app.lynex.fi/images/liquidity/arrow-bottom.svg"
                    />
                  </button>
                </div>
              </div>
              <div className="w-[13%] text-sm text-white f-f-fg">
                <div className="flex items-center cursor-pointer space-x-1 -ml-1 relative">
                  <p className="flex items-center">My Stake</p>
                </div>
              </div>
              <div className="w-[13%] text-sm text-white f-f-fg">
                <div className="flex items-center cursor-pointer space-x-1 -ml-1 relative">
                  <p className="flex items-center">Earnings</p>
                </div>
              </div>
              <div className="w-[13%] font-medium text-[14px] xl:text-[16px] text-white f-f-fg"></div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="table-row-wrapper pt-0 flex-col">
              <div className="absolute top-0 right-0 h-[28px]">
                <img src="https://app.lynex.fi/images/liquidity/powered-by-ichi.svg" />
              </div>
              <div className="flex flex-col lg:flex-row w-full items-center rounded-[6px] pt-[28px] false">
                <div className="w-full lg:w-[48%] lg:pr-8">
                  <div className="flex w-full justify-between space-x-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center justify-start">
                        <img
                          className="relative z-10"
                          alt=""
                          src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WETH.png"
                          width="32"
                          height="32"
                        />
                      </div>
                      <div>
                        <p className="text-xl font-semibold">WETH/LYNX</p>
                        <p className="tracking-wide text-xs text-dimGray">
                          Single-Sided Deposit
                        </p>
                      </div>
                      <div className="hidden lg:flex space-x-2">
                        <div className="tag">Thick</div>
                        <div className="tag">Blue Chip</div>
                      </div>
                    </div>
                    {/* <div className="flex flex-col items-end justify-end text-md -space-y-[2px] md:space-y-1">
                      <div
                        data-tip="true"
                        data-for="[object Object]-0-0x511481ef0deb10eb5c1e36b72140718c58921265"
                        className="flex space-x-1 items-center flex-wrap"
                      >
                        <span className="text-sm text-dimGray">
                          Up to:&nbsp;
                        </span>
                        89.27%
                      </div>
                      <div className="flex items-center justify-start space-x-2"></div>
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
                                src={lxp}
                                alt="Linea LXP-L"
                                data-tip="true"
                                data-for="tooltip-linea-lxp-l-0x511481ef0deb10eb5c1e36b72140718c58921265-0"
                                style={{ width: "1.5em", height: "1.26em" }}
                              />
                            </a>
                            <div
                              className="__react_component_tooltip t984b99f2-5f8e-4628-8861-a097a5b0ace3 place-right type-dark"
                              id="tooltip-linea-lxp-l-0x511481ef0deb10eb5c1e36b72140718c58921265-0"
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
                              href="https://turtle.club/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={turtle_linea}
                                alt="Turtle-Linea Points"
                                data-tip="true"
                                data-for="tooltip-turtle-linea-points-0x511481ef0deb10eb5c1e36b72140718c58921265-1"
                                style={{ width: "1.5em", height: "1.26em" }}
                              />
                            </a>
                            <div
                              className="__react_component_tooltip t5f1eac58-7f50-4869-9ac0-c6362739ed61 place-right type-dark"
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
                                src={turtle_lynex}
                                alt="Turtle-Lynex Points"
                                data-tip="true"
                                data-for="tooltip-turtle-lynex-points-0x511481ef0deb10eb5c1e36b72140718c58921265-2"
                                style={{ width: "1.5em", height: "1.26em" }}
                              />
                            </a>
                            <div
                              className="__react_component_tooltip tad38c604-fdc2-42b4-bb02-04583fb20696 place-right type-dark"
                              id="tooltip-turtle-lynex-points-0x511481ef0deb10eb5c1e36b72140718c58921265-2"
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
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <div
                      className="__react_component_tooltip tb2569e5d-63f0-439a-99d6-ef8327f18388 place-right type-dark"
                      id="[object Object]-0-0x511481ef0deb10eb5c1e36b72140718c58921265"
                      data-id="tooltip"
                    >
                      <div className="tooltip-content">
                        <div className="tooltip-row">
                          <span>oLYNX → veLYNX</span>
                          <span>89.27%</span>
                        </div>
                        <div className="tooltip-row">
                          <span>oLYNX → LYNX</span>
                          <span>53.56%</span>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="flex space-x-2 my-2 lg:hidden">
                    <div className="tag">Thick</div>
                    <div className="tag">Blue Chip</div>
                  </div>
                  <div className="w-full">
                    <p className="text-[12px] mt-3">
                      This strategy maintains a Target Exposure of 70%+ towards
                      WETH only, by depositing WETH lopsided into WETH/LYNX
                      concentrated liquidity pool. Aims to give back 70%+ WETH
                      and ~30% LYNX during redemptions. Low to Medium exposure
                      to Impermanent Loss.
                    </p>
                  </div>
                  <div className="w-full relative h-10 items-center flex justify-center">
                    <div className="pool-bar"></div>
                    <div
                      className="pool-completion-bar"
                      style={{ width: "69.21%" }}
                    ></div>
                    <div className="percentage">69.21% WETH</div>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col items-start mt-3 lg:mt-0 w-1/2 lg:w-[13%] justify-center">
                  <div className="flex flex-col items-start justify-end text-sm">
                    <div className="text-dimGray">
                      4,475,633 LYNX
                      <br />
                      201.13 WETH
                    </div>
                    <p className="text-white text-base">$532.64K</p>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col items-start mt-3 lg:mt-0 w-1/2 lg:w-[13%] justify-center">
                  <div className="flex flex-col items-start justify-end text-sm">
                    <div className="text-dimGray">
                      0 LYNX
                      <br />0 WETH
                    </div>
                    <p className="text-white text-base">$0</p>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col items-start w-1/2 mt-3 lg:mt-0 lg:w-[13%] justify-center">
                  <div className="flex flex-col items-start justify-end text-sm">
                    <div className="text-dimGray">0 oLYNX</div>
                    <p className="text-white text-base">$0</p>
                  </div>
                </div>
                <div className="block lg:hidden w-full">
                  <div className="flex flex-col xs:flex-row justify-around p-4 mt-4 bg-white/5 rounded-xl">
                    <div className="flex flex-col items-center justify-start xs:border-r border-slate-600 xs:pr-3 mb-3 xs:mb-0">
                      <p className="text-xs font-semibold">My Stake</p>
                      <p className="text-sm">$0</p>
                      <div className="flex flex-col items-center text-dimGray text-xs">
                        <p className="truncate w-full text-center">0 LYNX</p>
                        <p className="truncate w-full text-center">0 WETH</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-3 xs:mb-0">
                      <p className="text-xs font-semibold">TVL</p>
                      <p className="text-sm">$532.64K</p>
                      <div className="flex flex-col items-center text-dimGray text-xs">
                        <p className="truncate w-full text-center">
                          4,475,633 LYNX
                        </p>
                        <p className="truncate w-full text-center">
                          201.13 WETH
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start xs:border-l border-slate-600 xs:pl-3">
                      <p className="text-xs font-semibold">My Earnings</p>
                      <p className="text-sm">$0</p>
                      <div className="flex flex-col items-center text-dimGray text-xs">
                        <p className="truncate w-full text-center">0 oLYNX</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block w-full lg:w-[13%] mt-3.5 lg:mt-0">
                  <div className="flex items-center justify-center lg:justify-end rounded-md">
                    <button
                      role="button"
                      className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg py-[10px] px-3 text-xs"
                    >
                      CONNECT WALLET
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-row-wrapper pt-0 flex-col">
              <div className="absolute top-0 right-0 h-[28px]">
                <img src="https://app.lynex.fi/images/liquidity/powered-by-ichi.svg" />
              </div>
              <div className="flex flex-col lg:flex-row w-full items-center rounded-[6px] pt-[28px] false">
                <div className="w-full lg:w-[48%] lg:pr-8">
                  <div className="flex w-full justify-between space-x-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center justify-start">
                        <img
                          className="relative z-10"
                          alt=""
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
                          width="32"
                          height="32"
                        />
                      </div>
                      <div>
                        <p className="text-xl font-semibold">USDC/LYNX</p>
                        <p className="tracking-wide text-xs text-dimGray">
                          Single-Sided Deposit
                        </p>
                      </div>
                      <div className="hidden lg:flex space-x-2">
                        <div className="tag">Thick</div>
                        <div className="tag">Blue Chip</div>
                      </div>
                    </div>
                    {/* <div className="flex flex-col items-end justify-end text-md -space-y-[2px] md:space-y-1">
                      <div
                        data-tip="true"
                        data-for="[object Object]-1-0x92ccb773da4f3974c941974bdb978bad7efa7744"
                        className="flex space-x-1 items-center flex-wrap"
                      >
                        <span className="text-sm text-dimGray">
                          Up to:&nbsp;
                        </span>
                        118.47%
                      </div>
                      <div className="flex items-center justify-start space-x-2"></div>
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
                                src={lxp}
                                alt="Linea LXP-L"
                                data-tip="true"
                                data-for="tooltip-linea-lxp-l-0x92ccb773da4f3974c941974bdb978bad7efa7744-0"
                                style={{ width: "1.5em", height: "1.26em" }}
                              />
                            </a>
                            <div
                              className="__react_component_tooltip t8b6f05b8-6d2a-4ccf-936f-d83cae8e7390 place-right type-dark"
                              id="tooltip-linea-lxp-l-0x92ccb773da4f3974c941974bdb978bad7efa7744-0"
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
                              href="https://turtle.club/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={turtle_linea}
                                alt="Turtle-Linea Points"
                                data-tip="true"
                                data-for="tooltip-turtle-linea-points-0x92ccb773da4f3974c941974bdb978bad7efa7744-1"
                                style={{ width: "1.5em", height: "1.26em" }}
                              />
                            </a>
                            <div
                              className="__react_component_tooltip tb34ee906-800a-444e-b6d9-682e6bc94b77 place-right type-dark"
                              id="tooltip-turtle-linea-points-0x92ccb773da4f3974c941974bdb978bad7efa7744-1"
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
                                src={turtle_lynex}
                                alt="Turtle-Lynex Points"
                                data-tip="true"
                                data-for="tooltip-turtle-lynex-points-0x92ccb773da4f3974c941974bdb978bad7efa7744-2"
                                style={{ width: "1.5em", height: "1.26em" }}
                              />
                            </a>
                            <div
                              className="__react_component_tooltip t62420e55-a5f4-4ada-8a44-a67cc6c98823 place-right type-dark"
                              id="tooltip-turtle-lynex-points-0x92ccb773da4f3974c941974bdb978bad7efa7744-2"
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="__react_component_tooltip t03cd1628-77c6-4dc7-b2f3-93db1f9f7b3c place-right type-dark"
                      id="[object Object]-1-0x92ccb773da4f3974c941974bdb978bad7efa7744"
                      data-id="tooltip"
                    >
                      <div className="tooltip-content">
                        <div className="tooltip-row">
                          <span>oLYNX → veLYNX</span>
                          <span>118.47%</span>
                        </div>
                        <div className="tooltip-row">
                          <span>oLYNX → LYNX</span>
                          <span>71.08%</span>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="flex space-x-2 my-2 lg:hidden">
                    <div className="tag">Thick</div>
                    <div className="tag">Blue Chip</div>
                  </div>
                  <div className="w-full">
                    <p className="text-[12px] mt-3">
                      This strategy maintains a Target Exposure of 70%+ towards
                      USDC only, by depositing USDC lopsided into USDC/LYNX
                      concentrated liquidity pool. Aims to give back 70%+ USDC
                      and ~30% LYNX during redemptions. Low to Medium exposure
                      to Impermanent Loss.
                    </p>
                  </div>
                  <div className="w-full relative h-10 items-center flex justify-center">
                    <div className="pool-bar"></div>
                    <div
                      className="pool-completion-bar"
                      style={{ width: "72.35%" }}
                    ></div>
                    <div className="percentage">72.35% USDC</div>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col items-start mt-3 lg:mt-0 w-1/2 lg:w-[13%] justify-center">
                  <div className="flex flex-col items-start justify-end text-sm">
                    <div className="text-dimGray">
                      145,183 USDC
                      <br />
                      1,124,515 LYNX
                    </div>
                    <p className="text-white text-base">$199.78K</p>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col items-start mt-3 lg:mt-0 w-1/2 lg:w-[13%] justify-center">
                  <div className="flex flex-col items-start justify-end text-sm">
                    <div className="text-dimGray">
                      0 USDC
                      <br />0 LYNX
                    </div>
                    <p className="text-white text-base">$0</p>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col items-start w-1/2 mt-3 lg:mt-0 lg:w-[13%] justify-center">
                  <div className="flex flex-col items-start justify-end text-sm">
                    <div className="text-dimGray">0 oLYNX</div>
                    <p className="text-white text-base">$0</p>
                  </div>
                </div>
                <div className="block lg:hidden w-full">
                  <div className="flex flex-col xs:flex-row justify-around p-4 mt-4 bg-white/5 rounded-xl">
                    <div className="flex flex-col items-center justify-start xs:border-r border-slate-600 xs:pr-3 mb-3 xs:mb-0">
                      <p className="text-xs font-semibold">My Stake</p>
                      <p className="text-sm">$0</p>
                      <div className="flex flex-col items-center text-dimGray text-xs">
                        <p className="truncate w-full text-center">0 USDC</p>
                        <p className="truncate w-full text-center">0 LYNX</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-3 xs:mb-0">
                      <p className="text-xs font-semibold">TVL</p>
                      <p className="text-sm">$199.78K</p>
                      <div className="flex flex-col items-center text-dimGray text-xs">
                        <p className="truncate w-full text-center">
                          145,183 USDC
                        </p>
                        <p className="truncate w-full text-center">
                          1,124,515 LYNX
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start xs:border-l border-slate-600 xs:pl-3">
                      <p className="text-xs font-semibold">My Earnings</p>
                      <p className="text-sm">$0</p>
                      <div className="flex flex-col items-center text-dimGray text-xs">
                        <p className="truncate w-full text-center">0 oLYNX</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block w-full lg:w-[13%] mt-3.5 lg:mt-0">
                  <div className="flex items-center justify-center lg:justify-end rounded-md">
                    <button
                      role="button"
                      className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg py-[10px] px-3 text-xs"
                    >
                      CONNECT WALLET
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-row-wrapper pt-0 flex-col">
              <div className="absolute top-0 right-0 h-[28px]">
                <img src="https://app.lynex.fi/images/liquidity/powered-by-ichi.svg" />
              </div>
              <div className="flex flex-col lg:flex-row w-full items-center rounded-[6px] pt-[28px] false">
                <div className="w-full lg:w-[48%] lg:pr-8">
                  <div className="flex w-full justify-between space-x-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center justify-start">
                        <img
                          className="relative z-10"
                          alt=""
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/3717.png"
                          width="32"
                          height="32"
                        />
                      </div>
                      <div>
                        <p className="text-xl font-semibold">WBTC/LYNX</p>
                        <p className="tracking-wide text-xs text-dimGray">
                          Single-Sided Deposit
                        </p>
                      </div>
                      <div className="hidden lg:flex space-x-2">
                        <div className="tag">Thick</div>
                        <div className="tag">Blue Chip</div>
                      </div>
                    </div>
                    {/* <div className="flex flex-col items-end justify-end text-md -space-y-[2px] md:space-y-1">
                      <div
                        data-tip="true"
                        data-for="[object Object]-2-0xae5e4a028120b711c5c5dc8a9162bcdaa88936ae"
                        className="flex space-x-1 items-center flex-wrap"
                      >
                        <span className="text-sm text-dimGray">
                          Up to:&nbsp;
                        </span>
                        125.99%
                      </div>
                      <div className="flex items-center justify-start space-x-2"></div>
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
                                src={lxp}
                                alt="Linea LXP-L"
                                data-tip="true"
                                data-for="tooltip-linea-lxp-l-0xae5e4a028120b711c5c5dc8a9162bcdaa88936ae-0"
                                style={{ width: "1.5em", height: "1.26em" }}
                              />
                            </a>
                            <div
                              className="__react_component_tooltip t5c8e73f1-2a49-4ea7-91e6-b5aa1a3253c5 place-right type-dark"
                              id="tooltip-linea-lxp-l-0xae5e4a028120b711c5c5dc8a9162bcdaa88936ae-0"
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
                              href="https://turtle.club/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={turtle_linea}
                                alt="Turtle-Linea Points"
                                data-tip="true"
                                data-for="tooltip-turtle-linea-points-0xae5e4a028120b711c5c5dc8a9162bcdaa88936ae-1"
                                style={{ width: "1.5em", height: "1.26em" }}
                              />
                            </a>
                            <div
                              className="__react_component_tooltip te030a50f-d094-410b-9840-6c91b8f1bb9b place-right type-dark"
                              id="tooltip-turtle-linea-points-0xae5e4a028120b711c5c5dc8a9162bcdaa88936ae-1"
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
                                src={turtle_lynex}
                                alt="Turtle-Lynex Points"
                                data-tip="true"
                                data-for="tooltip-turtle-lynex-points-0xae5e4a028120b711c5c5dc8a9162bcdaa88936ae-2"
                                style={{ width: "1.5em", height: "1.26em" }}
                              />
                            </a>
                            <div
                              className="__react_component_tooltip t917eb1eb-0931-4469-98ff-6e90dfd8a4c9 place-right type-dark"
                              id="tooltip-turtle-lynex-points-0xae5e4a028120b711c5c5dc8a9162bcdaa88936ae-2"
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="__react_component_tooltip t5016733a-ae63-47a5-9e5d-c31ce4923028 place-right type-dark"
                      id="[object Object]-2-0xae5e4a028120b711c5c5dc8a9162bcdaa88936ae"
                      data-id="tooltip"
                    >
                      <div className="tooltip-content">
                        <div className="tooltip-row">
                          <span>oLYNX → veLYNX</span>
                          <span>125.99%</span>
                        </div>
                        <div className="tooltip-row">
                          <span>oLYNX → LYNX</span>
                          <span>75.59%</span>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="flex space-x-2 my-2 lg:hidden">
                    <div className="tag">Thick</div>
                    <div className="tag">Blue Chip</div>
                  </div>
                  <div className="w-full">
                    <p className="text-[12px] mt-3">
                      This strategy maintains a Target Exposure of 70%+ towards
                      WBTC only, by depositing WBTC lopsided into WBTC/LYNX
                      concentrated liquidity pool. Aims to give back 70%+ WBTC
                      and ~30% LYNX during redemptions. Low to Medium exposure
                      to Impermanent Loss.
                    </p>
                  </div>
                  <div className="w-full relative h-10 items-center flex justify-center">
                    <div className="pool-bar"></div>
                    <div
                      className="pool-completion-bar"
                      style={{ width: "70.42%" }}
                    ></div>
                    <div className="percentage">70.42% WBTC</div>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col items-start mt-3 lg:mt-0 w-1/2 lg:w-[13%] justify-center">
                  <div className="flex flex-col items-start justify-end text-sm">
                    <div className="text-dimGray">
                      797,084 LYNX
                      <br />
                      1.48 WBTC
                    </div>
                    <p className="text-white text-base">$132.32K</p>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col items-start mt-3 lg:mt-0 w-1/2 lg:w-[13%] justify-center">
                  <div className="flex flex-col items-start justify-end text-sm">
                    <div className="text-dimGray">
                      0 LYNX
                      <br />0 WBTC
                    </div>
                    <p className="text-white text-base">$0</p>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col items-start w-1/2 mt-3 lg:mt-0 lg:w-[13%] justify-center">
                  <div className="flex flex-col items-start justify-end text-sm">
                    <div className="text-dimGray">0 oLYNX</div>
                    <p className="text-white text-base">$0</p>
                  </div>
                </div>
                <div className="block lg:hidden w-full">
                  <div className="flex flex-col xs:flex-row justify-around p-4 mt-4 bg-white/5 rounded-xl">
                    <div className="flex flex-col items-center justify-start xs:border-r border-slate-600 xs:pr-3 mb-3 xs:mb-0">
                      <p className="text-xs font-semibold">My Stake</p>
                      <p className="text-sm">$0</p>
                      <div className="flex flex-col items-center text-dimGray text-xs">
                        <p className="truncate w-full text-center">0 LYNX</p>
                        <p className="truncate w-full text-center">0 WBTC</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-3 xs:mb-0">
                      <p className="text-xs font-semibold">TVL</p>
                      <p className="text-sm">$132.32K</p>
                      <div className="flex flex-col items-center text-dimGray text-xs">
                        <p className="truncate w-full text-center">
                          797,084 LYNX
                        </p>
                        <p className="truncate w-full text-center">1.48 WBTC</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start xs:border-l border-slate-600 xs:pl-3">
                      <p className="text-xs font-semibold">My Earnings</p>
                      <p className="text-sm">$0</p>
                      <div className="flex flex-col items-center text-dimGray text-xs">
                        <p className="truncate w-full text-center">0 oLYNX</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block w-full lg:w-[13%] mt-3.5 lg:mt-0">
                  <div className="flex items-center justify-center lg:justify-end rounded-md">
                    <button
                      role="button"
                      className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg py-[10px] px-3 text-xs"
                    >
                      CONNECT WALLET
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-row-wrapper pt-0 flex-col">
              <div className="absolute top-0 right-0 h-[28px]">
                <img src="https://app.lynex.fi/images/liquidity/powered-by-ichi.svg" />
              </div>
              <div className="flex flex-col lg:flex-row w-full items-center rounded-[6px] pt-[28px] false">
                <div className="w-full lg:w-[48%] lg:pr-8">
                  <div className="flex w-full justify-between space-x-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center justify-start">
                        <img
                          className="relative z-10"
                          alt=""
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                          width="32"
                          height="32"
                        />
                      </div>
                      <div>
                        <p className="text-xl font-semibold">USDT/LYNX</p>
                        <p className="tracking-wide text-xs text-dimGray">
                          Single-Sided Deposit
                        </p>
                      </div>
                      <div className="hidden lg:flex space-x-2">
                        <div className="tag">Thick</div>
                        <div className="tag">Blue Chip</div>
                      </div>
                    </div>
                    {/* <div className="flex flex-col items-end justify-end text-md -space-y-[2px] md:space-y-1">
                      <div
                        data-tip="true"
                        data-for="[object Object]-3-0x555267747b0918abce10335f154fbe7b636f7804"
                        className="flex space-x-1 items-center flex-wrap"
                      >
                        <span className="text-sm text-dimGray">
                          Up to:&nbsp;
                        </span>
                        123.52%
                      </div>
                      <div className="flex items-center justify-start space-x-2"></div>
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
                                src={lxp}
                                alt="Linea LXP-L"
                                data-tip="true"
                                data-for="tooltip-linea-lxp-l-0x555267747b0918abce10335f154fbe7b636f7804-0"
                                style={{ width: "1.5em", height: "1.26em" }}
                              />
                            </a>
                            <div
                              className="__react_component_tooltip t0d61f422-e744-40b2-873f-90d41ebfee9b place-right type-dark"
                              id="tooltip-linea-lxp-l-0x555267747b0918abce10335f154fbe7b636f7804-0"
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
                              href="https://turtle.club/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={turtle_linea}
                                alt="Turtle-Linea Points"
                                data-tip="true"
                                data-for="tooltip-turtle-linea-points-0x555267747b0918abce10335f154fbe7b636f7804-1"
                                style={{ width: "1.5em", height: "1.26em" }}
                              />
                            </a>
                            <div
                              className="__react_component_tooltip t6369336f-21cd-4a0b-acce-1cafdc816abe place-right type-dark"
                              id="tooltip-turtle-linea-points-0x555267747b0918abce10335f154fbe7b636f7804-1"
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
                                src={turtle_lynex}
                                alt="Turtle-Lynex Points"
                                data-tip="true"
                                data-for="tooltip-turtle-lynex-points-0x555267747b0918abce10335f154fbe7b636f7804-2"
                                style={{ width: "1.5em", height: "1.26em" }}
                              />
                            </a>
                            <div
                              className="__react_component_tooltip t98611158-fbe9-4034-b7cf-4f8bd41576ae place-right type-dark"
                              id="tooltip-turtle-lynex-points-0x555267747b0918abce10335f154fbe7b636f7804-2"
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="__react_component_tooltip tfb018729-32e0-47c3-8b95-3609f17f57ca place-right type-dark"
                      id="[object Object]-3-0x555267747b0918abce10335f154fbe7b636f7804"
                      data-id="tooltip"
                    >
                      <div className="tooltip-content">
                        <div className="tooltip-row">
                          <span>oLYNX → veLYNX</span>
                          <span>123.52%</span>
                        </div>
                        <div className="tooltip-row">
                          <span>oLYNX → LYNX</span>
                          <span>74.11%</span>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="flex space-x-2 my-2 lg:hidden">
                    <div className="tag">Thick</div>
                    <div className="tag">Blue Chip</div>
                  </div>
                  <div className="w-full">
                    <p className="text-[12px] mt-3">
                      This strategy maintains a Target Exposure of 70%+ towards
                      USDT only, by depositing USDT lopsided into USDT/LYNX
                      concentrated liquidity pool. Aims to give back 70%+ USDT
                      and ~30% LYNX during redemptions. Low to Medium exposure
                      to Impermanent Loss.
                    </p>
                  </div>
                  <div className="w-full relative h-10 items-center flex justify-center">
                    <div className="pool-bar"></div>
                    <div
                      className="pool-completion-bar"
                      style={{ width: "75.12%" }}
                    ></div>
                    <div className="percentage">75.12% USDT</div>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col items-start mt-3 lg:mt-0 w-1/2 lg:w-[13%] justify-center">
                  <div className="flex flex-col items-start justify-end text-sm">
                    <div className="text-dimGray">
                      405,360 LYNX
                      <br />
                      60,395 USDT
                    </div>
                    <p className="text-white text-base">$79.91K</p>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col items-start mt-3 lg:mt-0 w-1/2 lg:w-[13%] justify-center">
                  <div className="flex flex-col items-start justify-end text-sm">
                    <div className="text-dimGray">
                      0 LYNX
                      <br />0 USDT
                    </div>
                    <p className="text-white text-base">$0</p>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col items-start w-1/2 mt-3 lg:mt-0 lg:w-[13%] justify-center">
                  <div className="flex flex-col items-start justify-end text-sm">
                    <div className="text-dimGray">0 oLYNX</div>
                    <p className="text-white text-base">$0</p>
                  </div>
                </div>
                <div className="block lg:hidden w-full">
                  <div className="flex flex-col xs:flex-row justify-around p-4 mt-4 bg-white/5 rounded-xl">
                    <div className="flex flex-col items-center justify-start xs:border-r border-slate-600 xs:pr-3 mb-3 xs:mb-0">
                      <p className="text-xs font-semibold">My Stake</p>
                      <p className="text-sm">$0</p>
                      <div className="flex flex-col items-center text-dimGray text-xs">
                        <p className="truncate w-full text-center">0 LYNX</p>
                        <p className="truncate w-full text-center">0 USDT</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-3 xs:mb-0">
                      <p className="text-xs font-semibold">TVL</p>
                      <p className="text-sm">$79.91K</p>
                      <div className="flex flex-col items-center text-dimGray text-xs">
                        <p className="truncate w-full text-center">
                          405,360 LYNX
                        </p>
                        <p className="truncate w-full text-center">
                          60,395 USDT
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start xs:border-l border-slate-600 xs:pl-3">
                      <p className="text-xs font-semibold">My Earnings</p>
                      <p className="text-sm">$0</p>
                      <div className="flex flex-col items-center text-dimGray text-xs">
                        <p className="truncate w-full text-center">0 oLYNX</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block w-full lg:w-[13%] mt-3.5 lg:mt-0">
                  <div className="flex items-center justify-center lg:justify-end rounded-md">
                    <button
                      role="button"
                      className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg py-[10px] px-3 text-xs"
                    >
                      CONNECT WALLET
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-row-wrapper pt-0 flex-col">
              <div className="absolute top-0 right-0 h-[28px]">
                <img src="https://app.lynex.fi/images/liquidity/powered-by-ichi.svg" />
              </div>
              <div className="flex flex-col lg:flex-row w-full items-center rounded-[6px] pt-[28px] false">
                <div className="w-full lg:w-[48%] lg:pr-8">
                  <div className="flex w-full justify-between space-x-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center justify-start">
                        <img
                          className="relative z-10"
                          alt=""
                          src="https://storage.googleapis.com/ks-setting-1d682dca/dee351e5-ff61-4a8f-994d-82f3078119661696785945490.png"
                          width="32"
                          height="32"
                        />
                      </div>
                      <div>
                        <p className="text-xl font-semibold">STONE/LYNX</p>
                        <p className="tracking-wide text-xs text-dimGray">
                          Single-Sided Deposit
                        </p>
                      </div>
                      <div className="hidden lg:flex space-x-2">
                        <div className="tag">Thick</div>
                        <div className="tag">LST</div>
                      </div>
                    </div>
                    {/* <div className="flex flex-col items-end justify-end text-md -space-y-[2px] md:space-y-1">
                      <div
                        data-tip="true"
                        data-for="[object Object]-4-0xe57f293520cbf7d5a17629cbfb06eabdb759a151"
                        className="flex space-x-1 items-center flex-wrap"
                      >
                        <span className="text-sm text-dimGray">
                          Up to:&nbsp;
                        </span>
                        130.19%
                      </div>
                      <div className="flex items-center justify-start space-x-2"></div>
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
                                src={lxp}
                                alt="Linea LXP-L"
                                data-tip="true"
                                data-for="tooltip-linea-lxp-l-0xe57f293520cbf7d5a17629cbfb06eabdb759a151-0"
                                style={{ width: "1.5em", height: "1.26em" }}
                              />
                            </a>
                            <div
                              className="__react_component_tooltip t4ba561ce-f224-4393-b6d2-0840d666ab09 place-right type-dark"
                              id="tooltip-linea-lxp-l-0xe57f293520cbf7d5a17629cbfb06eabdb759a151-0"
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
                              href="https://turtle.club/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={turtle_linea}
                                alt="Turtle-Linea Points"
                                data-tip="true"
                                data-for="tooltip-turtle-linea-points-0xe57f293520cbf7d5a17629cbfb06eabdb759a151-1"
                                style={{ width: "1.5em", height: "1.26em" }}
                              />
                            </a>
                            <div
                              className="__react_component_tooltip td835bd17-5184-409b-a50c-3d1102f725cc place-right type-dark"
                              id="tooltip-turtle-linea-points-0xe57f293520cbf7d5a17629cbfb06eabdb759a151-1"
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
                                src={turtle_lynex}
                                alt="Turtle-Lynex Points"
                                data-tip="true"
                                data-for="tooltip-turtle-lynex-points-0xe57f293520cbf7d5a17629cbfb06eabdb759a151-2"
                                style={{ width: "1.5em", height: "1.26em" }}
                              />
                            </a>
                            <div
                              className="__react_component_tooltip tb4e9aaa1-a3a4-4412-a569-d0b0a64fd9bb place-right type-dark"
                              id="tooltip-turtle-lynex-points-0xe57f293520cbf7d5a17629cbfb06eabdb759a151-2"
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
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="__react_component_tooltip tc72d2d29-b88b-4309-aee4-2a3e2c5b6dc8 place-right type-dark"
                      id="[object Object]-4-0xe57f293520cbf7d5a17629cbfb06eabdb759a151"
                      data-id="tooltip"
                    >
                      <div className="tooltip-content">
                        <div className="tooltip-row">
                          <span>oLYNX → veLYNX</span>
                          <span>130.19%</span>
                        </div>
                        <div className="tooltip-row">
                          <span>oLYNX → LYNX</span>
                          <span>78.11%</span>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="flex space-x-2 my-2 lg:hidden">
                    <div className="tag">Thick</div>
                    <div className="tag">LST</div>
                  </div>
                  <div className="w-full">
                    <p className="text-[12px] mt-3">
                      This strategy maintains a Target Exposure of 70%+ towards
                      STONE only, by depositing STONE lopsided into STONE/LYNX
                      concentrated liquidity pool. Aims to give back 70%+ STONE
                      and ~30% LYNX during redemptions. Low to Medium exposure
                      to Impermanent Loss.
                    </p>
                  </div>
                  <div className="w-full relative h-10 items-center flex justify-center">
                    <div className="pool-bar"></div>
                    <div
                      className="pool-completion-bar"
                      style={{ width: "71.09%" }}
                    ></div>
                    <div className="percentage">71.09% STONE</div>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col items-start mt-3 lg:mt-0 w-1/2 lg:w-[13%] justify-center">
                  <div className="flex flex-col items-start justify-end text-sm">
                    <div className="text-dimGray">
                      359,348 LYNX
                      <br />
                      17.16 STONE
                    </div>
                    <p className="text-white text-base">$61.04K</p>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col items-start mt-3 lg:mt-0 w-1/2 lg:w-[13%] justify-center">
                  <div className="flex flex-col items-start justify-end text-sm">
                    <div className="text-dimGray">
                      0 LYNX
                      <br />0 STONE
                    </div>
                    <p className="text-white text-base">$0</p>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col items-start w-1/2 mt-3 lg:mt-0 lg:w-[13%] justify-center">
                  <div className="flex flex-col items-start justify-end text-sm">
                    <div className="text-dimGray">0 oLYNX</div>
                    <p className="text-white text-base">$0</p>
                  </div>
                </div>
                <div className="block lg:hidden w-full">
                  <div className="flex flex-col xs:flex-row justify-around p-4 mt-4 bg-white/5 rounded-xl">
                    <div className="flex flex-col items-center justify-start xs:border-r border-slate-600 xs:pr-3 mb-3 xs:mb-0">
                      <p className="text-xs font-semibold">My Stake</p>
                      <p className="text-sm">$0</p>
                      <div className="flex flex-col items-center text-dimGray text-xs">
                        <p className="truncate w-full text-center">0 LYNX</p>
                        <p className="truncate w-full text-center">0 STONE</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-3 xs:mb-0">
                      <p className="text-xs font-semibold">TVL</p>
                      <p className="text-sm">$61.04K</p>
                      <div className="flex flex-col items-center text-dimGray text-xs">
                        <p className="truncate w-full text-center">
                          359,348 LYNX
                        </p>
                        <p className="truncate w-full text-center">
                          17.16 STONE
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start xs:border-l border-slate-600 xs:pl-3">
                      <p className="text-xs font-semibold">My Earnings</p>
                      <p className="text-sm">$0</p>
                      <div className="flex flex-col items-center text-dimGray text-xs">
                        <p className="truncate w-full text-center">0 oLYNX</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block w-full lg:w-[13%] mt-3.5 lg:mt-0">
                  <div className="flex items-center justify-center lg:justify-end rounded-md">
                    <button
                      role="button"
                      className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg py-[10px] px-3 text-xs"
                    >
                      CONNECT WALLET
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-row-wrapper pt-0 flex-col">
              <div className="absolute top-0 right-0 h-[28px]">
                <img src="https://app.lynex.fi/images/liquidity/powered-by-ichi.svg" />
              </div>
              <div className="flex flex-col lg:flex-row w-full items-center rounded-[6px] pt-[28px] false">
                <div className="w-full lg:w-[48%] lg:pr-8">
                  <div className="flex w-full justify-between space-x-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center justify-start">
                        <img
                          className="relative z-10"
                          alt=""
                          src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WETH.png"
                          width="32"
                          height="32"
                        />
                      </div>
                      <div>
                        <p className="text-xl font-semibold">WETH/MENDI</p>
                        <p className="tracking-wide text-xs text-dimGray">
                          Single-Sided Deposit
                        </p>
                      </div>
                      <div className="hidden lg:flex space-x-2">
                        <div className="tag">Thick</div>
                        <div className="tag">Blue Chip</div>
                      </div>
                    </div>
                    {/* <div className="flex flex-col items-end justify-end text-md -space-y-[2px] md:space-y-1">
                      <div
                        data-tip="true"
                        data-for="[object Object]-5-0xad2406af7fb59f9949af7d355aa19941178809a8"
                        className="flex space-x-1 items-center flex-wrap"
                      >
                        <span className="text-sm text-dimGray">
                          Up to:&nbsp;
                        </span>
                        92.87%
                      </div>
                      <div className="flex items-center justify-start space-x-2"></div>
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
                                src={lxp}
                                alt="Linea LXP-L"
                                data-tip="true"
                                data-for="tooltip-linea-lxp-l-0xad2406af7fb59f9949af7d355aa19941178809a8-0"
                                style={{ width: "1.5em", height: "1.26em" }}
                              />
                            </a>
                            <div
                              className="__react_component_tooltip t68060a57-db0f-4d68-9081-18ddd73cd5cc place-right type-dark"
                              id="tooltip-linea-lxp-l-0xad2406af7fb59f9949af7d355aa19941178809a8-0"
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
                      </div>
                    </div> */}
                  </div>
                  <div className="flex space-x-2 my-2 lg:hidden">
                    <div className="tag">Thick</div>
                    <div className="tag">Blue Chip</div>
                  </div>
                  <div className="w-full">
                    <p className="text-[12px] mt-3">
                      This strategy maintains a Target Exposure of 70%+ towards
                      WETH only, by depositing WETH lopsided into WETH/MENDI
                      concentrated liquidity pool. Aims to give back 70%+ WETH
                      and ~30% MENDI during redemptions. Low to Medium exposure
                      to Impermanent Loss.
                    </p>
                  </div>
                  <div className="w-full relative h-10 items-center flex justify-center">
                    <div className="pool-bar"></div>
                    <div
                      className="pool-completion-bar"
                      style={{ width: "76.71%" }}
                    ></div>
                    <div className="percentage">76.71% WETH</div>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col items-start mt-3 lg:mt-0 w-1/2 lg:w-[13%] justify-center">
                  <div className="flex flex-col items-start justify-end text-sm">
                    <div className="text-dimGray">
                      164,922 MENDI
                      <br />
                      10.43 WETH
                    </div>
                    <p className="text-white text-base">$33.53K</p>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col items-start mt-3 lg:mt-0 w-1/2 lg:w-[13%] justify-center">
                  <div className="flex flex-col items-start justify-end text-sm">
                    <div className="text-dimGray">
                      0 MENDI
                      <br />0 WETH
                    </div>
                    <p className="text-white text-base">$0</p>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col items-start w-1/2 mt-3 lg:mt-0 lg:w-[13%] justify-center">
                  <div className="flex flex-col items-start justify-end text-sm">
                    <p className="invisible">-</p>
                    <div className="text-dimGray">0 oLYNX</div>
                    <p className="text-white text-base">$0</p>
                  </div>
                </div>
                <div className="block lg:hidden w-full">
                  <div className="flex flex-col xs:flex-row justify-around p-4 mt-4 bg-white/5 rounded-xl">
                    <div className="flex flex-col items-center justify-start xs:border-r border-slate-600 xs:pr-3 mb-3 xs:mb-0">
                      <p className="text-xs font-semibold">My Stake</p>
                      <p className="text-sm">$0</p>
                      <div className="flex flex-col items-center text-dimGray text-xs">
                        <p className="truncate w-full text-center">0 MENDI</p>
                        <p className="truncate w-full text-center">0 WETH</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-3 xs:mb-0">
                      <p className="text-xs font-semibold">TVL</p>
                      <p className="text-sm">$33.53K</p>
                      <div className="flex flex-col items-center text-dimGray text-xs">
                        <p className="truncate w-full text-center">
                          164,922 MENDI
                        </p>
                        <p className="truncate w-full text-center">
                          10.43 WETH
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start xs:border-l border-slate-600 xs:pl-3">
                      <p className="text-xs font-semibold">My Earnings</p>
                      <p className="text-sm">$0</p>
                      <div className="flex flex-col items-center text-dimGray text-xs">
                        <p className="truncate w-full text-center">0 oLYNX</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block w-full lg:w-[13%] mt-3.5 lg:mt-0">
                  <div className="flex items-center justify-center lg:justify-end rounded-md">
                    <button
                      role="button"
                      className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg py-[10px] px-3 text-xs"
                    >
                      CONNECT WALLET
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;

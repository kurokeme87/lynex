import React from "react";
import ConnectWalletButton from "../Components/ConnectWalletButton";

const Delegate = () => {
  return (
    <>
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
      <div className="pt-[160px] md:pt-[140px]">
        <div className="grid grid-cols-3 gap-2 md:flex justify-center md:space-x-8 w-full px-3 md:px-0 py-3 bg-white/5">
          <div className="flex justify-center items-center px-3 py-2 rounded-lg text-base tracking-wide text-dimGray cursor-pointer false f-f-fg">
            My Assets
          </div>
          <div className="flex justify-center items-center px-3 py-2 rounded-lg text-base tracking-wide text-dimGray cursor-pointer false f-f-fg">
            Lock
          </div>
          <div className="flex justify-center items-center px-3 py-2 rounded-lg text-base tracking-wide text-dimGray cursor-pointer text-white bg-themeOrangeLight/10 f-f-fg">
            Delegate
          </div>
          <div className="flex justify-center items-center px-3 py-2 rounded-lg text-base tracking-wide text-dimGray cursor-pointer false f-f-fg">
            Vote
          </div>
          <div className="flex justify-center items-center px-3 py-2 rounded-lg text-base tracking-wide text-dimGray cursor-pointer false f-f-fg">
            Rewards
          </div>
          <div className="flex justify-center items-center px-3 py-2 rounded-lg text-base tracking-wide text-dimGray cursor-pointer false f-f-fg">
            Options
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] px-5 sm:px-16 md:px-28 mdLg:px-40 lg:px-5 xl:px-0 mx-auto">
        <div className="lg:flex items-end justify-between lg:space-x-[60px]"></div>
        <div className="max-w-[1200px] mt-10 mx-auto">
          <div className="lg:flex items-start justify-between lg:space-x-2 xl:space-x-[20px]">
            <div className="w-full lg:w-[30%] xl:w-1/3">
              <div className="max-w-[450px]">
                <p className="text-[#b8b6cb] text-sm md:text-base leading-[22px] md:leading-6 mt-1">
                  Delegate your veLYNX voting power, eliminating the requirement
                  for weekly voting. Enjoy a seamless 'set-and-forget' mechanic.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[70%] xl:w-2/3 mt-4 lg:mt-0 bg-white lg:flex items-center bg-opacity-[0.05] rounded-[3px] bg-clip-padding px-5 py-4">
              <div className="border-b w-full lg:border-b-0 lg:border-r text-white border-[#757384] pb-3 lg:pb-0 pr-[19px] false">
                <p className="f-f-fg text-xs">Your veLYNX Balance</p>
                <div
                  data-for="custom-tooltip"
                  className="flex items-center space-x-1"
                >
                  <p className="text-[#E9E9F2] font-medium text-lg lg:text-[16px] leading-8">
                    -
                  </p>
                </div>
              </div>
              <div className="border-b w-full lg:border-b-0 lg:border-r text-white border-[#757384] pb-3 lg:pb-0 pr-[19px] pt-3 lg:pt-0 lg:pl-5">
                <p className="f-f-fg text-xs">Emissions / % of Vote</p>
                <div
                  data-for="custom-tooltip"
                  className="flex items-center space-x-1"
                >
                  <p className="text-[#E9E9F2] font-medium text-lg lg:text-[16px] leading-8">
                    $1,343
                  </p>
                </div>
              </div>
              <div className="border-b w-full lg:border-b-0 lg:border-r text-white border-[#757384] pb-3 lg:pb-0 pr-[19px] pt-3 lg:pt-0 lg:pl-5">
                <p className="f-f-fg text-xs">Average Voting APR</p>
                <div
                  data-for="custom-tooltip"
                  className="flex items-center space-x-1"
                >
                  <p className="text-[#E9E9F2] font-medium text-lg lg:text-[16px] leading-8">
                    524.44%
                  </p>
                </div>
              </div>
              <div className="border-b w-full lg:border-b-0 lg:border-r text-white border-transparent pt-3 lg:pt-0 lg:pl-5">
                <p className="f-f-fg text-xs">Epoch 33 Ends In</p>
                <div
                  data-for="custom-tooltip"
                  className="flex items-center space-x-1"
                >
                  <p className="text-[#E9E9F2] font-medium text-lg lg:text-[16px] leading-8">
                    2d 10h 24m
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between w-full mt-4 lg:mt-[23px] lg:space-x-7 xl:space-x-[60px] relative">
            <div className="w-full lg:w-[55%] xl:w-1/2 lg:flex-row flex flex-col lg:items-center lg:space-x-5">
              <div className="flex items-center w-full mt-2 lg:mt-0">
                <div className="lg:w-[300px] w-full">
                  <div className="w-full flex items-center h-[42px] md:h-[52px] rounded-[12px] border bg-white/5 bg-opacity-80 px-4">
                    <div className="text-white text-sm md:text-base font-medium whitespace-nowrap pr-3 border-r border-white f-f-fg">
                      SELECT veLYNX:
                    </div>
                    <div className="pl-3 w-full relative focus:outline-none py-2 bg-transparent rounded-[3px] text-white flex items-center justify-between cursor-pointer">
                      <div className="text-dimGray text-md">Not found</div>
                      <img
                        className="rotate-0 transform transition-all duration-300 ease-in-out"
                        alt=""
                        src="https://app.lynex.fi/images/swap/dropdown-arrow.png"
                      />
                    </div>
                  </div>
                  <div className="fixed flex items-center justify-center inset-0 min-h-screen bg-black bg-opacity-[0.4] backdrop-blur-[6px] z-0 invisible opacity-0"></div>
                  <div className="fixed z-0 invisible opacity-0 inset-0 min-h-screen flex items-center justify-center flex-col">
                    <div>
                      <div className="max-w-[92%] md:w-[540px] border border-[#ffffff33] mx-auto w-full px-3 py-3 md:py-5 bg-white/10 backdrop-blur-2xl rounded-[20px]">
                        <div className="flex items-center justify-between px-3 md:px-6">
                          <div className="flex items-center">
                            <p className="text-lg md:text-[22px] f-f-fg text-white font-medium">
                              Choose your veLYNX
                            </p>
                          </div>
                          <button className="focus:outline-none">
                            <img
                              alt=""
                              src="https://app.lynex.fi/images/common/close-button1.svg"
                            />
                          </button>
                        </div>
                        <div className="w-full">
                          <div className="px-3 md:px-6">
                            <div className="w-full mt-3 md:mt-5">
                              <input
                                type="number"
                                placeholder="Search by ID"
                                className="bg-white/5 placeholder-dimGray w-full text-white text-base md:text-lg px-4 py-3 rounded-md"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="w-full mt-5">
                          <div className="flex justify-between text-[13px] md:text-sm tracking-[0.52px] md:tracking-[0.56px] f-f-fg text-dimGray mb-1 px-3 md:px-6">
                            <span>veLYNX ID</span>
                            <span>veLYNX BALANCE</span>
                          </div>
                          <div className="w-full mt-3 md:mt-[13px] max-h-[400px] overflow-auto">
                            <p className="f-f-fg text-white text-center font-semibold text-lg pb-2">
                              No veLYNX found
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full items-center space-x-2 mt-4 lg:mt-0">
              <img
                alt="warning-icon"
                src="https://app.lynex.fi/images/svgs/warning.svg"
              />
              <p className="text-white font-semibold bg-themeOrange/50 text-[12px] p-2 rounded">
                All numbers are merely projections and can change at any time
                relative to fees, bribes and voter behaviour
              </p>
            </div>
          </div>
          <div className="w-full mt-4 lg:mt-8">
            <div className="w-full">
              <div className="sticky-outer-wrapper z-[100]">
                <div
                  className="sticky-inner-wrapper px-6 lg:flex justify-between hidden z-[100] py-[0.475rem] lg:!-mb-[19px] xl:!mb-0 lg:!top-[-19px] xl:!top-[0]"
                  style={{
                    position: "relative",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <div className="w-[20%] font-medium text-[17px] xl:text-[18px] text-white f-f-fg"></div>
                  <div className="w-[20%] font-medium text-[17px] xl:text-[18px] text-white f-f-fg"></div>
                  <div className="w-[14%] font-medium text-[17px] xl:text-[18px] text-white f-f-fg">
                    <div className="flex items-center space-x-1 -ml-1 relative">
                      <p className="flex items-center">APR</p>
                    </div>
                  </div>
                  <div className="w-[18%] font-medium text-[17px] xl:text-[18px] text-white f-f-fg">
                    <div className="flex items-center space-x-1 -ml-1 relative">
                      <p className="flex items-center">Rewards</p>
                    </div>
                  </div>
                  <div className="w-[18%] font-medium text-[17px] xl:text-[18px] text-white f-f-fg">
                    <div className="flex items-center space-x-1 -ml-1 relative">
                      <p className="flex items-center">Active Votes</p>
                    </div>
                  </div>
                  <div className="w-[18%] font-medium text-[17px] xl:text-[18px] text-white f-f-fg">
                    <div className="flex items-center space-x-1 -ml-1 relative">
                      <p className="flex items-center">Total Votes</p>
                    </div>
                  </div>
                  <div className="w-[24%] font-medium text-[17px] xl:text-[18px] text-white f-f-fg"></div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="table-row-wrapper">
                  <div className="flex w-full lg:w-[20%] items-center space-x-3">
                    <div className="flex items-center -space-x-2">
                      <img
                        className="relative z-10"
                        alt=""
                        src="https://app.lynex.fi/images/delegate/lynex.svg"
                      />
                    </div>
                  </div>
                  <div className="flex w-full lg:w-[20%] items-center space-x-3">
                    <div className="flex items-center -space-x-2">
                      <span className="text-error text-lg md:text-1xl font-semibold">
                        Vote Pending
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col mt-2 lg:mt-0 w-1/2 lg:w-[14%] items-start justify-center">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Voting APR
                    </p>
                    <div className="flex flex-col">
                      <p>0%</p>
                      <a
                        className="text-white text-xs hover:text-themeOrangeLight hover:underline"
                        href="https://lookerstudio.google.com/u/6/reporting/2783b415-a9e8-417d-be02-8ac2d4027ff6/page/p_ig7iodbzid"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p>More info</p>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-start mt-3 lg:mt-0 w-1/2 lg:w-[18%] justify-center">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Rewards
                    </p>
                    <div className="text-base sm:text-[17px] lg:text-[15px] xl:text-[17px]">
                      $0
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 mt-2 lg:mt-0 items-start lg:w-[18%] justify-center">
                    <div className="text-sm xl:text-base flex items-center space-x-1.5">
                      <div className="flex flex-col items-start justify-center">
                        <p className="lg:hidden text-sm f-f-fg font-semibold">
                          Active Votes
                        </p>
                        <div className="text-base sm:text-[17px] lg:text-[15px] xl:text-[17px]">
                          36,102,026
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-1/2 mt-3 lg:mt-0 lg:w-[18%] justify-center">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Total Votes
                    </p>
                    <div className="text-base sm:text-[17px] lg:text-[15px] xl:text-[17px]">
                      35,816,433
                    </div>
                  </div>
                  <div className="w-full lg:w-[24%] mt-3.5 lg:mt-0">
                    <div className="w-full flex items-center lg:justify-end">
                      <ConnectWalletButton />
                    </div>
                  </div>
                </div>
                <div className="table-row-wrapper">
                  <div className="flex w-full lg:w-[20%] items-center space-x-3">
                    <div className="flex items-center -space-x-2">
                      <img
                        className="relative z-10"
                        alt=""
                        src="https://app.lynex.fi/images/delegate/ichi.svg"
                      />
                    </div>
                  </div>
                  <div className="flex w-full lg:w-[20%] items-center space-x-3">
                    <div className="flex items-center -space-x-2">
                      <span className="text-error text-lg md:text-1xl font-semibold">
                        Vote Pending
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col mt-2 lg:mt-0 w-1/2 lg:w-[14%] items-start justify-center">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Voting APR
                    </p>
                    <div className="flex flex-col">
                      <p>0%</p>
                      <a
                        className="text-white text-xs hover:text-themeOrangeLight hover:underline"
                        href="https://lookerstudio.google.com/u/6/reporting/2783b415-a9e8-417d-be02-8ac2d4027ff6/page/p_d5y3vb8zid"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p>More info</p>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-start mt-3 lg:mt-0 w-1/2 lg:w-[18%] justify-center">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Rewards
                    </p>
                    <div className="text-base sm:text-[17px] lg:text-[15px] xl:text-[17px]">
                      $0
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 mt-2 lg:mt-0 items-start lg:w-[18%] justify-center">
                    <div className="text-sm xl:text-base flex items-center space-x-1.5">
                      <div className="flex flex-col items-start justify-center">
                        <p className="lg:hidden text-sm f-f-fg font-semibold">
                          Active Votes
                        </p>
                        <div className="text-base sm:text-[17px] lg:text-[15px] xl:text-[17px]">
                          6,194,455
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-1/2 mt-3 lg:mt-0 lg:w-[18%] justify-center">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Total Votes
                    </p>
                    <div className="text-base sm:text-[17px] lg:text-[15px] xl:text-[17px]">
                      6,229,665
                    </div>
                  </div>
                  <div className="w-full lg:w-[24%] mt-3.5 lg:mt-0">
                    <div className="w-full flex items-center lg:justify-end">
                      <button
                        role="button"
                        className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg py-[10px] px-[16px]"
                      >
                        CONNECT WALLET
                      </button>
                    </div>
                  </div>
                </div>
                <div className="table-row-wrapper">
                  <div className="flex w-full lg:w-[20%] items-center space-x-3">
                    <div className="flex items-center -space-x-2">
                      <img
                        className="relative z-10"
                        alt=""
                        src="https://app.lynex.fi/images/delegate/gamma.svg"
                      />
                    </div>
                  </div>
                  <div className="flex w-full lg:w-[20%] items-center space-x-3">
                    <div className="flex items-center -space-x-2">
                      <span className="text-error text-lg md:text-1xl font-semibold">
                        Vote Pending
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col mt-2 lg:mt-0 w-1/2 lg:w-[14%] items-start justify-center">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Voting APR
                    </p>
                    <div className="flex flex-col">
                      <p>0%</p>
                      <a
                        className="text-white text-xs hover:text-themeOrangeLight hover:underline"
                        href="https://lookerstudio.google.com/u/6/reporting/2783b415-a9e8-417d-be02-8ac2d4027ff6/page/p_5z35m27zid"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p>More info</p>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-start mt-3 lg:mt-0 w-1/2 lg:w-[18%] justify-center">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Rewards
                    </p>
                    <div className="text-base sm:text-[17px] lg:text-[15px] xl:text-[17px]">
                      $0
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 mt-2 lg:mt-0 items-start lg:w-[18%] justify-center">
                    <div className="text-sm xl:text-base flex items-center space-x-1.5">
                      <div className="flex flex-col items-start justify-center">
                        <p className="lg:hidden text-sm f-f-fg font-semibold">
                          Active Votes
                        </p>
                        <div className="text-base sm:text-[17px] lg:text-[15px] xl:text-[17px]">
                          13,007,803
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-1/2 mt-3 lg:mt-0 lg:w-[18%] justify-center">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Total Votes
                    </p>
                    <div className="text-base sm:text-[17px] lg:text-[15px] xl:text-[17px]">
                      12,998,915
                    </div>
                  </div>
                  <div className="w-full lg:w-[24%] mt-3.5 lg:mt-0">
                    <div className="w-full flex items-center lg:justify-end">
                      <button
                        role="button"
                        className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg py-[10px] px-[16px]"
                      >
                        CONNECT WALLET
                      </button>
                    </div>
                  </div>
                </div>
                <div className="table-row-wrapper">
                  <div className="flex w-full lg:w-[20%] items-center space-x-3">
                    <div className="flex items-center -space-x-2">
                      <img
                        className="relative z-10"
                        alt=""
                        src="https://app.lynex.fi/images/delegate/steer.svg"
                      />
                    </div>
                  </div>
                  <div className="flex w-full lg:w-[20%] items-center space-x-3">
                    <div className="flex items-center -space-x-2">
                      <span className="text-error text-lg md:text-1xl font-semibold">
                        Vote Pending
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col mt-2 lg:mt-0 w-1/2 lg:w-[14%] items-start justify-center">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Voting APR
                    </p>
                    <div className="flex flex-col">
                      <p>0%</p>
                      <a
                        className="text-white text-xs hover:text-themeOrangeLight hover:underline"
                        href="https://lookerstudio.google.com/u/6/reporting/2783b415-a9e8-417d-be02-8ac2d4027ff6/page/p_0dnp3d8zid"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p>More info</p>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-start mt-3 lg:mt-0 w-1/2 lg:w-[18%] justify-center">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Rewards
                    </p>
                    <div className="text-base sm:text-[17px] lg:text-[15px] xl:text-[17px]">
                      $0
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 mt-2 lg:mt-0 items-start lg:w-[18%] justify-center">
                    <div className="text-sm xl:text-base flex items-center space-x-1.5">
                      <div className="flex flex-col items-start justify-center">
                        <p className="lg:hidden text-sm f-f-fg font-semibold">
                          Active Votes
                        </p>
                        <div className="text-base sm:text-[17px] lg:text-[15px] xl:text-[17px]">
                          1,728,145
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-1/2 mt-3 lg:mt-0 lg:w-[18%] justify-center">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Total Votes
                    </p>
                    <div className="text-base sm:text-[17px] lg:text-[15px] xl:text-[17px]">
                      1,736,686
                    </div>
                  </div>
                  <div className="w-full lg:w-[24%] mt-3.5 lg:mt-0">
                    <div className="w-full flex items-center lg:justify-end">
                      <button
                        role="button"
                        className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg py-[10px] px-[16px]"
                      >
                        CONNECT WALLET
                      </button>
                    </div>
                  </div>
                </div>
                <div className="table-row-wrapper">
                  <div className="flex w-full lg:w-[20%] items-center space-x-3">
                    <div className="flex items-center -space-x-2">
                      <img
                        className="relative z-10"
                        alt=""
                        src="https://app.lynex.fi/images/delegate/defiedge.svg"
                      />
                    </div>
                  </div>
                  <div className="flex w-full lg:w-[20%] items-center space-x-3">
                    <div className="flex items-center -space-x-2">
                      <span className="text-error text-lg md:text-1xl font-semibold">
                        Vote Pending
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col mt-2 lg:mt-0 w-1/2 lg:w-[14%] items-start justify-center">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Voting APR
                    </p>
                    <div className="flex flex-col">
                      <p>0%</p>
                      <a
                        className="text-white text-xs hover:text-themeOrangeLight hover:underline"
                        href="https://lookerstudio.google.com/u/6/reporting/2783b415-a9e8-417d-be02-8ac2d4027ff6/page/p_6xcd0f8zid"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p>More info</p>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-start mt-3 lg:mt-0 w-1/2 lg:w-[18%] justify-center">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Rewards
                    </p>
                    <div className="text-base sm:text-[17px] lg:text-[15px] xl:text-[17px]">
                      $0
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 mt-2 lg:mt-0 items-start lg:w-[18%] justify-center">
                    <div className="text-sm xl:text-base flex items-center space-x-1.5">
                      <div className="flex flex-col items-start justify-center">
                        <p className="lg:hidden text-sm f-f-fg font-semibold">
                          Active Votes
                        </p>
                        <div className="text-base sm:text-[17px] lg:text-[15px] xl:text-[17px]">
                          1,447,363
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-1/2 mt-3 lg:mt-0 lg:w-[18%] justify-center">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Total Votes
                    </p>
                    <div className="text-base sm:text-[17px] lg:text-[15px] xl:text-[17px]">
                      1,449,080
                    </div>
                  </div>
                  <div className="w-full lg:w-[24%] mt-3.5 lg:mt-0">
                    <div className="w-full flex items-center lg:justify-end">
                      <button
                        role="button"
                        className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg py-[10px] px-[16px]"
                      >
                        CONNECT WALLET
                      </button>
                    </div>
                  </div>
                </div>
                <div className="table-row-wrapper">
                  <div className="flex w-full lg:w-[20%] items-center space-x-3">
                    <div className="flex items-center -space-x-2">
                      <img
                        className="relative z-10"
                        alt=""
                        src="https://app.lynex.fi/images/delegate/clipfinance.svg"
                      />
                    </div>
                  </div>
                  <div className="flex w-full lg:w-[20%] items-center space-x-3">
                    <div className="flex items-center -space-x-2">
                      <span className="text-error text-lg md:text-1xl font-semibold">
                        Vote Pending
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col mt-2 lg:mt-0 w-1/2 lg:w-[14%] items-start justify-center">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Voting APR
                    </p>
                    <div className="flex flex-col">
                      <p>0%</p>
                      <a
                        className="text-white text-xs hover:text-themeOrangeLight hover:underline"
                        href="https://lookerstudio.google.com/u/6/reporting/2783b415-a9e8-417d-be02-8ac2d4027ff6/page/undefined"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p>More info</p>
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-start mt-3 lg:mt-0 w-1/2 lg:w-[18%] justify-center">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Rewards
                    </p>
                    <div className="text-base sm:text-[17px] lg:text-[15px] xl:text-[17px]">
                      $0
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 mt-2 lg:mt-0 items-start lg:w-[18%] justify-center">
                    <div className="text-sm xl:text-base flex items-center space-x-1.5">
                      <div className="flex flex-col items-start justify-center">
                        <p className="lg:hidden text-sm f-f-fg font-semibold">
                          Active Votes
                        </p>
                        <div className="text-base sm:text-[17px] lg:text-[15px] xl:text-[17px]">
                          1,117,379
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-1/2 mt-3 lg:mt-0 lg:w-[18%] justify-center">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Total Votes
                    </p>
                    <div className="text-base sm:text-[17px] lg:text-[15px] xl:text-[17px]">
                      1,110,589
                    </div>
                  </div>
                  <div className="w-full lg:w-[24%] mt-3.5 lg:mt-0">
                    <div className="w-full flex items-center lg:justify-end">
                      <button
                        role="button"
                        className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg py-[10px] px-[16px]"
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
                    1-6 of 6
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
                  <li className="next disabled">
                    <a
                      className=" "
                      tabIndex="-1"
                      role="button"
                      aria-disabled="true"
                      aria-label="Next page"
                      rel="next"
                    >
                      &gt;
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delegate;

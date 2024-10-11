import React from "react";

const Options = () => {
  return (
    <div>
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
          <div className="flex justify-center items-center px-3 py-2 rounded-lg text-base tracking-wide text-dimGray cursor-pointer false f-f-fg">
            Delegate
          </div>
          <div className="flex justify-center items-center px-3 py-2 rounded-lg text-base tracking-wide text-dimGray cursor-pointer false f-f-fg">
            Vote
          </div>
          <div className="flex justify-center items-center px-3 py-2 rounded-lg text-base tracking-wide text-dimGray cursor-pointer false f-f-fg">
            Rewards
          </div>
          <div className="flex justify-center items-center px-3 py-2 rounded-lg text-base tracking-wide text-dimGray cursor-pointer text-white bg-themeOrangeLight/10 f-f-fg">
            Options
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] px-5 sm:px-16 md:px-28 mdLg:px-40 lg:px-5 xl:px-0 mx-auto">
        <div className="lg:flex items-end justify-between lg:space-x-[60px]"></div>
        <div className="w-full mt-10">
          <div className="max-w-[1200px] mx-auto lg:flex items-end justify-between lg:space-x-[60px] text-sm md:text-base text-[#b8b6cb]">
            <div className="w-full lg:w-[70%]">
              <p className="mb-2">
                oLYNX is the Emissions Options Token for the Lynex Ecosystem:
              </p>
              <p className="pl-5">
                - Redeem for LYNX: Exchange oLYNX for LYNX at a discounted rate.
              </p>
              <p className="pl-5">
                - Redeem for veLYNX: Exchange oLYNX for veLYNX with 1:1 rate.
              </p>
              <p className="pl-5">- Redeem bveLYNX (bribe veLYNX) for veLYNX</p>
            </div>
            <div className="w-full lg:w-[30%]">
              <div className="flex flex-col space-y-4">
                <button
                  role="button"
                  className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg text-sm w-full md:max-w-[290px] mt-4 lg:mt-0 py-2 xl:p-3 px-3 xl:px-7"
                >
                  EARN OLYNX
                </button>
                <button
                  role="button"
                  className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg text-sm w-full md:max-w-[290px] mt-4 lg:mt-0 py-2 xl:p-3 px-3 xl:px-7"
                >
                  CONNECT WALLET
                </button>
              </div>
            </div>
          </div>
          <div className="relative flex justify-end max-h-[86px] top-[50px] sm:right-[60px] max-w-[900px] mx-auto">
            <img
              className="token2 z-[-1]"
              src="https://app.lynex.fi/images/claim/token2.svg"
              alt="Lynx logo 2"
              style={{ height: "86px" }}
            />
          </div>
          <div className="max-w-[1104px] mx-auto w-full">
            <div className="flex max-w-[550px] m-auto mb-2">
              <div className="w-[140px] dropdownwrapper undefined">
                <div>
                  <div className="w-full flex items-center h-[42px] md:h-[48px] border border-[#ffffff33] rounded-[10px] px-4 py-1 cursor-pointer">
                    <div className="w-full h-10 relative rounded-[10px] text-white flex items-center justify-between">
                      <p className="text-white font-medium">veLYNX</p>
                      <img
                        className="rotate-0 transform transition-all duration-300 ease-in-out"
                        alt=""
                        src="https://app.lynex.fi/images/swap/dropdown-arrow.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper-otoken">
              <p className="option-info">
                Redeem for veLYNX: Exchange oLYNX for veLYNX with 1:1 rate.
              </p>
              <div className="fromto">
                <div className="flex flex-wrap items-center justify-between mb-1">
                  <p className="text-white text-sm md:text-xl">Use</p>
                </div>
                <div className="p-px w-full rounded-md">
                  <div className="flex rounded-md items-center justify-between mb-2">
                    <div className="flex items-center cursor-default rounded-md">
                      <div className="flex items-center space-x-[3.5px] lg:space-x-2">
                        <img
                          className="w-[20px] h-[20px] lg:w-[36px] lg:h-[36px]"
                          alt="token image"
                          src="https://app.lynex.fihttps://app.lynex.fi/images/tokens/oLYNX.png"
                        />
                        <p className="font-medium text-sm lg:text-[1.2rem] leading-6 text-white">
                          oLYNX
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-end w-[70%] text-dimGray">
                      <input
                        className="bg-transparent w-full !border-0 text-xl lg:text-3xl placeholder-white text-white"
                        placeholder="0"
                        type="number"
                        min="0"
                        value=""
                        style={{ textAlign: "right" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="fromto space-y-2">
                <div className="line">
                  <p className="title">Your voting power will be</p>
                  <p className="value">0 veLYNX</p>
                </div>
                <div className="line">
                  <p className="title">Unlocking at</p>
                  <p className="value">07/10/2026</p>
                </div>
                <div className="line">
                  <p className="title">Chose target veLynx</p>
                  <label
                    htmlFor="choseVeLynx"
                    className="inline-flex relative items-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      id="choseVeLynx"
                      className="sr-only peer"
                    />
                    <div className="w-14 h-[26px] after:h-[22px] after:w-[26px] after:top-[1.5px] after:left-[2px] rounded-md after:rounded-md bg-white/5 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:transition-all peer-checked"></div>
                  </label>
                </div>
              </div>
              <button
                role="button"
                className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg w-full text-base md:text-lg py-3 px-4"
              >
                CONNECT WALLET
              </button>
              <p className="text-[14px] text-white italic">
                Redeeeming into veLYNX will create you a new locked veNFT. It is
                possible to merge it into single veNFT on the Lock page after
                redemption.
              </p>
            </div>
          </div>
          <div className="relative top-[20px] md:top-[-50px] sm:left-[-50px] max-w-[900px] mx-auto z-[-1]">
            <img
              className="token1"
              src="https://app.lynex.fi/images/claim/token3.svg"
              alt="Lynx logo 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;

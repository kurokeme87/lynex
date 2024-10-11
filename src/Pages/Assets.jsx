import React from "react";

const Assets = () => {
  return (
    <div className="max-w-[1200px] px-5 sm:px-16 md:px-28 mdLg:px-40 lg:px-5 xl:px-0 mx-auto">
      <div className="lg:flex items-end justify-between lg:space-x-[60px]"></div>
      <div className="pt-[160px] md:pt-[140px]">
        <div className="grid grid-cols-3 gap-2 md:flex justify-center md:space-x-8 w-full px-3 md:px-0 py-3 bg-white/5">
          <div className="flex justify-center items-center px-3 py-2 rounded-lg text-base tracking-wide text-dimGray cursor-pointer text-white bg-themeOrangeLight/10 f-f-fg">
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
          <div className="flex justify-center items-center px-3 py-2 rounded-lg text-base tracking-wide text-dimGray cursor-pointer false f-f-fg">
            Options
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 items-center justify-center my-[128px] mx-auto max-w-[380px]">
        <img
          alt="not-found"
          width="64"
          src="https://app.lynex.fi/images/common/not-found.svg"
        />
        <p className="text-dimGray text-base">
          Connect your wallet to see your dashboard
        </p>
        <button
          role="button"
          className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg py-2 px-3 text-sm w-full"
        >
          CONNECT WALLET
        </button>
      </div>
    </div>
  );
};

export default Assets;

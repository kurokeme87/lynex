import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/Components/ui/dialog";
const SettingsPopup = () => {
  return (
    <Dialog className="font-montserrat">
      <DialogTrigger className="p-0 m-0">
        <div className="flex justify-center items-center bg-white/10 hover:bg-white/20 backdrop-blur-[2px] border border-[#ffffff33] p-4 rounded-full hover:cursor-pointer z-10">
          <img alt="Bar" src="https://app.lynex.fi/images/swap/bar.svg" />
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 m-0 w-fit font-montserrat border-none backdrop-blur-sm">
        <div className="w-full max-w-[400px] space-y-3 z-50 p-6 bg-white/10 backdrop-blur-2xl border border-[#ffffff33] rounded-[20px] m-auto">
          <p className="text-white font-semibold text-base md:text-xl">
            TRANSACTION SETTINGS
          </p>
          <p className="text-base font-medium text-white">Slippage Tolerance</p>
          <div className="md:flex items-center w-full">
            <div className="flex items-center space-x-2 z-10 w-full">
              <button className="max-w-[60px] flex-shrink-0 w-full rounded-md flex flex-col items-center text-white justify-center h-8 cursor-pointer bg-white/5">
                0.05%
              </button>
              <button className="max-w-[60px] flex-shrink-0 w-full rounded-md flex flex-col items-center text-white justify-center h-8 cursor-pointer bg-white/5">
                0.1%
              </button>
              <button className="max-w-[60px] flex-shrink-0 w-full rounded-md flex flex-col items-center text-white justify-center h-8 cursor-pointer bg-white/5">
                0.5%
              </button>
              <button className="max-w-[60px] flex-shrink-0 w-full rounded-md flex flex-col items-center text-white justify-center h-8 cursor-pointer bg-white/5">
                1.00%
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-[9px] w-full mt-[11px] md:mt-0 md:justify-start">
            <input
              className="placeholder-themeBlack text-black max-w-[240px] bg-body w-full h-[48px] rounded-full px-2 text-lg block focus-visible:!outline-none"
              type="range"
              step="0.05"
              min="0.05"
              max="20"
              value="2.25"
            />
            <span className="text-lg text-white w-8">2.25%</span>
          </div>
          <div>
            <div className="invisible flex w-full mt-[-12px] h-6 text-warn">
              Your transaction may fail
            </div>
          </div>
          <div className="flex items-center space-x-1.5">
            <p className="text-base font-medium text-white">
              Transaction Deadline
            </p>
          </div>
          <div className="flex max-w-[180px] items-center justify-start mt-2 rounded-md bg-white/5">
            <input
              className="bg-transparent placeholder-black max-w-[80px] h-10 md:h-[42px] w-full text-white pl-5 pr-2 text-lg block focus-visible:!outline-none"
              type="number"
              min="0"
              value="20"
            />
            <span className="text-base md:text-lg text-white w-auto">
              minutes
            </span>
          </div>
          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex items-center space-x-1.5">
              <p className="text-sm font-medium text-white">
                Only Classic Liquidity
              </p>
            </div>
            <label
              htmlFor="v1"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input type="checkbox" id="v1" className="sr-only peer" />
              <div className="w-14 h-[26px] after:h-[22px] after:w-[26px] after:top-[1.5px] after:left-[2px] rounded-md after:rounded-md bg-white/5 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:transition-all peer-checked"></div>
            </label>
          </div>
          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex items-center space-x-1.5">
              <p className="text-sm font-medium text-white">
                Only Concentrated Liquidity
              </p>
            </div>
            <label
              htmlFor="fusion"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input type="checkbox" id="fusion" className="sr-only peer" />
              <div className="w-14 h-[26px] after:h-[22px] after:w-[26px] after:top-[1.5px] after:left-[2px] rounded-md after:rounded-md bg-white/5 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:transition-all peer-checked"></div>
            </label>
          </div>
          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex items-center space-x-1.5">
              <p className="text-base font-medium text-white">
                Disable Multihops
              </p>
            </div>
            <label
              htmlFor="multihops"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input type="checkbox" id="multihops" className="sr-only peer" />
              <div className="w-14 h-[26px] after:h-[22px] after:w-[26px] after:top-[1.5px] after:left-[2px] rounded-md after:rounded-md bg-white/5 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:transition-all peer-checked"></div>
            </label>
          </div>
          <p className="text-sm text-white">
            Enable or disable aggregating liquidity from multiple pools.
          </p>
          <div className="flex items-center justify-between w-full mt-4">
            <div className="flex items-center space-x-1.5">
              <p className="text-sm font-medium text-white">
                Disable Liquidity Hub
              </p>
            </div>
            <label
              htmlFor="liquifity-hub-toggle"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="liquifity-hub-toggle"
                className="sr-only peer"
              />
              <div className="w-14 h-[26px] after:h-[22px] after:w-[26px] after:top-[1.5px] after:left-[2px] rounded-md after:rounded-md bg-white/5 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:transition-all peer-checked"></div>
            </label>
          </div>
          <p className="sc-imWYAI djMknk text-sm text-white">
            <a
              href="https://www.orbs.com//liquidity-hub"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              Liquidity Hub
            </a>
            , powered by{" "}
            <a href="https://www.orbs.com/" rel="noreferrer" target="_blank">
              Orbs
            </a>
            , may provide better price by aggregating liquidity from multiple
            sources.{" "}
            <a
              href="https://www.orbs.com//liquidity-hub"
              rel="noreferrer"
              target="_blank"
            >
              For more info.
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsPopup;

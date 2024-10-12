import React from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTrigger,
} from "@/Components/ui/dialog";
const AssetPopup = ({ data, asset, setAsset }) => {
  return (
    <Dialog>
      <DialogTrigger>
        {asset ? (
          <div className="flex  items-center md:min-w-[140px] justify-between space-x-2 p-1 cursor-pointer border border-transparent mt-2 p-2 rounded-xl hover:bg-white/5 hover:border-[#ffffff33]">
            <div className="flex items-center space-x-[3.5px] md:space-x-2">
              <img
                className="w-[20px] h-[20px] md:w-[36px] md:h-[36px]"
                alt={asset.symbol}
                src={asset.logoURI}
              />
              <p className="font-medium text-base md:text-xl leading-6 text-white">
                {asset.symbol}
              </p>
            </div>
            <img
              alt="Dropdown"
              className="hidden w-3 md:inline-block"
              src="https://app.lynex.fi/images/swap/dropdown-arrow.png"
            />
          </div>
        ) : (
          <div className="flex  items-center md:min-w-[140px] justify-between space-x-2 p-1 cursor-pointer border border-transparent mt-2 p-2 rounded-xl hover:bg-white/5 hover:border-[#ffffff33]">
            <div className="flex items-center space-x-[3.5px] md:space-x-2">
              <img
                className="w-[20px] h-[20px] md:w-[36px] md:h-[36px]"
                alt="ETH"
                src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
              />
              <p className="font-medium text-base md:text-xl leading-6 text-white">
                ETH
              </p>
            </div>
            <img
              alt="Dropdown"
              className="hidden w-3 md:inline-block"
              src="https://app.lynex.fi/images/swap/dropdown-arrow.png"
            />
          </div>
        )}
      </DialogTrigger>
      <DialogContent className="bg-transparent border-none p-0">
        <div className="max-w-[92%] md:w-[540px] border border-[#ffffff33] mx-auto w-full px-3 py-3 md:py-5 bg-white/10 backdrop-blur-2xl rounded-[20px]">
          <div className="flex items-center justify-between px-3 md:px-6">
            <div className="flex items-center">
              <p className="text-lg md:text-[22px] f-f-fg text-white font-medium">
                Select a Token
              </p>
            </div>
            <button className="focus:outline-none">
              <img alt="" src="/images/common/close-button1.svg" />
            </button>
          </div>
          <div className="w-full">
            <div className="px-3 md:px-6">
              <input
                placeholder="Search by name, symbol or address"
                className="w-full bg-transparent text-white text-sm md:text-base h-10 px-4 py-[18px] mt-4 border border-[#ffffff33] rounded-[10px]"
                value=""
              />
            </div>
            <div className="w-full mt-3.5 md:mt-[18px] px-3 md:px-6">
              <p className="text-[13px] md:text-sm tracking-[0.52px] md:tracking-[0.56px] f-f-fg text-white mb-1">
                COMMON TOKENS
              </p>
              <div className="flex flex-wrap md:-mx-1">
                <div className="flex items-center h-[36px] md:h-[42px] px-2 md:px-3 py-1 text-white text-sm md:text-md cursor-pointer m-[5px] space-x-[5px] rounded-xl bg-white/5 hover:bg-white/30">
                  <img
                    alt=""
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                    width="20"
                    height="20"
                    loading="lazy"
                  />
                  <p className="font-semibold">ETH</p>
                </div>
                <div className="flex items-center h-[36px] md:h-[42px] px-2 md:px-3 py-1 text-white text-sm md:text-md cursor-pointer m-[5px] space-x-[5px] rounded-xl bg-white/5 hover:bg-white/30">
                  <img
                    alt=""
                    src="https://app.lynex.fi/logo.png"
                    width="20"
                    height="20"
                    loading="lazy"
                  />
                  <p className="font-semibold">LYNX</p>
                </div>
                <div className="flex items-center h-[36px] md:h-[42px] px-2 md:px-3 py-1 text-white text-sm md:text-md cursor-pointer m-[5px] space-x-[5px] rounded-xl bg-white/5 hover:bg-white/30">
                  <img
                    alt=""
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
                    width="20"
                    height="20"
                    loading="lazy"
                  />
                  <p className="font-semibold">USDC</p>
                </div>
                <div className="flex items-center h-[36px] md:h-[42px] px-2 md:px-3 py-1 text-white text-sm md:text-md cursor-pointer m-[5px] space-x-[5px] rounded-xl bg-white/5 hover:bg-white/30">
                  <img
                    alt=""
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                    width="20"
                    height="20"
                    loading="lazy"
                  />
                  <p className="font-semibold">USDT</p>
                </div>
                <div className="flex items-center h-[36px] md:h-[42px] px-2 md:px-3 py-1 text-white text-sm md:text-md cursor-pointer m-[5px] space-x-[5px] rounded-xl bg-white/5 hover:bg-white/30">
                  <img
                    alt=""
                    src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WETH.png"
                    width="20"
                    height="20"
                    loading="lazy"
                  />
                  <p className="font-semibold">WETH</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-2 justify-between text-[13px] md:text-sm tracking-[0.52px] md:tracking-[0.56px] f-f-fg text-white mb-2 md:mb-1 px-3 md:px-6">
            <span>TOKEN NAME</span>
          </div>
          <div className="mt-1 max-h-[160px] xs:max-h-[20vh] 2xl:max-h-[300px] mx-2 md:mx-6 overflow-auto text-white">
            <div className="flex rounded-xl p-2 items-center justify-between py-[6px] px-1 md:px-2 cursor-pointer hover:bg-white/5 hover:text-themeOrange">
              <div className="flex items-center space-x-2.5 md:space-x-3">
                <img
                  alt=""
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                  className="flex-shrink-0"
                  width="28"
                  height="28"
                  loading="lazy"
                />
                <div className="">
                  <p className="text-sm md:text-base f-f-fg">ETH</p>
                  <p className="text-[12px] md:text-xs">ETH</p>
                </div>
              </div>
            </div>
            {data.map((item, i) => (
              <DialogClose
                onClick={() => setAsset(item)}
                key={i}
                className="flex w-full rounded-xl p-2 items-center justify-between py-[6px] px-1 md:px-2 cursor-pointer hover:bg-white/5 hover:text-themeOrange"
              >
                <div className="flex items-center space-x-2.5 md:space-x-3">
                  <img
                    alt=""
                    src={item.logoURI}
                    className="flex-shrink-0"
                    width="28"
                    height="28"
                    loading="lazy"
                  />
                  <div className="">
                    <p className="text-sm md:text-base f-f-fg">{item.symbol}</p>
                    <p className="text-[12px] md:text-xs">{item.symbol}</p>
                  </div>
                </div>
              </DialogClose>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AssetPopup;

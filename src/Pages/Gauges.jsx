import React from "react";

const Gauges = () => {
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
      <div className="max-w-[1200px] px-5 sm:px-16 md:px-28 mdLg:px-40 lg:px-5 xl:px-0 pt-[160px] mx-auto lg:pb-[75px]">
        <div className="lg:flex items-end justify-between lg:space-x-[60px]">
          <div className="w-full">
            <h1 className="text-[34px] md:text-[42px] font-semibold text-white f-f-fg">
              Gauges
            </h1>
            <p className="text-[#b8b6cb] text-base md:text-lg leading-[22px] md:leading-6 mt-1">
              Create a new Gauge or add a bribe on existing gauge.
              <a
                href="https://lynex.gitbook.io/lynex/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="!text-lg text-themeOrange">Learn More</span>
              </a>
            </p>
          </div>
        </div>
        <div className="w-full mt-11 grid lg:grid-cols-2 gap-6">
          <div className="sc-jlZhew fKLurw rounded-[10px] bg-white/10 relative border border-[#ffffff33]">
            <div className="inside md:py-[31px] px-[22px] pt-[26px] pb-4 md:px-[35px] rounded-[5px] md:flex items-start md:space-x-5 m-px relative">
              <div className="max-w-[83px] mt-3 z-10 relative">
                <img
                  alt=""
                  src="https://app.lynex.fi/images/whiteList/icon-4.svg"
                />
              </div>
              <div className="max-w-[328px] z-10 relative mt-4 md:mt-0">
                <p className="text-[23px] md:text-3xl f-f-fg font-medium text-themeOrange">
                  Add Gauge
                </p>
                <div className="mb-4 lg:min-h-[72px] md:mb-6 mt-1 md:mt-[6.25px] text-[#DEDBF2] opacity-[0.88] text-[15px] md:text-[17px] leading-[25px] md:leading-6">
                  Create a new gauge which can be used for staking and voting.
                </div>
                <button
                  role="button"
                  className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg relative w-full md:w-auto max-w-[220px] py-[1px] flex-col text-[14px]"
                >
                  <div className="flex items-center space-x-2 px-10 h-[52px] relative z-10">
                    <img
                      src="https://app.lynex.fi/images/whiteList/add-icon.svg"
                      alt=""
                    />
                    <span>ADD GAUGE</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="sc-jlZhew fKLurw rounded-[10px] bg-white/10 relative border border-[#ffffff33]">
            <div className="inside md:py-[31px] px-[22px] pt-[26px] pb-4 md:px-[35px] rounded-[5px] md:flex items-start md:space-x-5 m-px relative">
              <div className="max-w-[83px] mt-3 z-10 relative">
                <img
                  alt=""
                  src="https://app.lynex.fi/images/whiteList/icon-5.svg"
                />
              </div>
              <div className="max-w-[328px] z-10 relative mt-4 md:mt-0">
                <p className="text-[23px] md:text-3xl f-f-fg font-medium text-themeOrange">
                  Add Bribe
                </p>
                <div className="mb-4 lg:min-h-[72px] md:mb-6 mt-1 md:mt-[6.25px] text-[#DEDBF2] opacity-[0.88] text-[15px] md:text-[17px] leading-[25px] md:leading-6">
                  Add a bribe reward for an existing gauge to incentivize votes
                  on it.
                </div>
                <button
                  role="button"
                  className="sc-gEvEer fkDGbw f-f-fg flex items-center justify-center text-white font-medium tracking-[1.44px] rounded-lg relative w-full md:w-auto max-w-[220px] py-[1px] flex-col text-[14px]"
                >
                  <div className="flex items-center space-x-2 px-10 h-[52px] relative z-10">
                    <img
                      src="https://app.lynex.fi/images/whiteList/add-icon.svg"
                      alt=""
                    />
                    <span>ADD BRIBE</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gauges;

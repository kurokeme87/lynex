import React from "react";

const Analytics = () => {
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
      <div className="w-full pt-[160px] pb-28 xl:pb-0 2xl:pb-[150px] px-5 xl:px-0">
        <div className="max-w-[1104px] mx-auto w-full">
          <h1 className="text-[34px] md:text-[42px] font-semibold text-white f-f-fg">
            Lynex Analytics
          </h1>
          <div className="flex justify-center mt-3 w-full">
            <div className="flex h-11 justify-center w-full md:w-auto">
              <a className="w-full md:w-auto" href="/analytics/v1">
                <div className="md:w-[100px] h-full flex justify-center items-center cursor-pointer text-[#A2A0B7] font-normal border-[#555367] border-l border-t border-b rounded-l-[5px] -mr-[3px] -ml-px">
                  V1
                </div>
              </a>
              <a className="w-full md:w-auto" href="/analytics/fusion">
                <div className="md:w-[100px] h-full flex justify-center items-center cursor-pointer text-[#A2A0B7] font-normal border-[#555367] border-t border-b -mr-[3px] -ml-[3px]">
                  FUSION
                </div>
              </a>
              <a className="w-full md:w-auto" href="/analytics/total">
                <div className="md:w-[100px] h-full flex justify-center items-center cursor-pointer text-white font-semibold border-themeOrange border rounded-[5px] -mr-px popup-gradientbg">
                  TOTAL
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-5 lg:mt-11 w-full">
            <div className="w-[300px]">
              <div className="flex overflow-x-auto no-scrollbar items-center space-x-2 sm:w-full xl:w-fit rounded-[12px] bg-white/5 shadow">
                <div className="cursor-pointer flex-grow whitespace-nowrap px-3 h-[34px] md:h-10 rounded-[10px] flex items-center justify-center uppercase transition-all bg-themeOrange text-white font-medium border border-themeOrange text-[13px] lg:text-sm xl:text-[15px] f-f-fg">
                  OVERVIEW
                </div>
                <div className="cursor-pointer flex-grow whitespace-nowrap px-3 h-[34px] md:h-10 rounded-[10px] flex items-center justify-center uppercase transition-all text-dimGray border border-transparent text-[13px] lg:text-sm xl:text-[15px] f-f-fg">
                  TOKENS
                </div>
                <div className="cursor-pointer flex-grow whitespace-nowrap px-3 h-[34px] md:h-10 rounded-[10px] flex items-center justify-center uppercase transition-all text-dimGray border border-transparent text-[13px] lg:text-sm xl:text-[15px] f-f-fg">
                  PAIRS
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex space-y-5 md:space-y-0 md:space-x-6 mt-6">
            <div className="bg-white/10 border border-[#ffffff33] p-px rounded-[10px] w-full md:w-1/2">
              <div className="px-6 py-[22px] h-full">
                <div className="">
                  <div className="text-[#DEDBF2] f-f-fg text-sm lg:text-base">
                    LIQUIDITY
                  </div>
                  <div className="mt-1 flex items-center space-x-3">
                    <div className="text-white font-bold text-[20px] lg:text-[27px]">
                      $21,528,721
                    </div>
                    <div className="px-2 py-1 leading-5 text-[15px] table rounded-md bg-[#51B961] bg-opacity-10 text-[#51B961]">
                      +1.36%
                    </div>
                  </div>
                  <div className="text-[#B8B6CB] text-[10px] lg:text-[15px]">
                    Oct 07, 2024
                  </div>
                </div>
                <div className="flex mt-2.5 w-full">
                  <div className="chart-container">
                    <div
                      type="area"
                      width="100%"
                      height="275"
                      style="min-height: 290px"
                    >
                      <div
                        id="apexcharts6eea7vgw"
                        className="apexcharts-canvas apexcharts6eea7vgw apexcharts-theme-light"
                        style="width: 429px; height: 275px"
                      >
                        <svg
                          id="SvgjsSvg3101"
                          width="429"
                          height="275"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          className="apexcharts-svg"
                          transform="translate(0, 0)"
                          style="background: transparent"
                        >
                          <foreignObject x="0" y="0" width="429" height="275">
                            <div
                              className="apexcharts-legend"
                              xmlns="http://www.w3.org/1999/xhtml"
                              style="max-height: 137.5px"
                            ></div>
                          </foreignObject>
                          <rect
                            id="SvgjsRect3105"
                            width="0"
                            height="0"
                            x="0"
                            y="0"
                            rx="0"
                            ry="0"
                            opacity="1"
                            strokeWidth="0"
                            stroke="none"
                            strokeDasharray="0"
                            fill="#fefefe"
                          ></rect>
                          <g
                            id="SvgjsG3226"
                            className="apexcharts-yaxis"
                            rel="0"
                            transform="translate(-18, 0)"
                          ></g>
                          <g
                            id="SvgjsG3103"
                            className="apexcharts-inner apexcharts-graphical"
                            transform="translate(0, 30)"
                          >
                            <defs id="SvgjsDefs3102">
                              <clipPath id="gridRectMask6eea7vgw">
                                <rect
                                  id="SvgjsRect3107"
                                  width="430.65625"
                                  height="219.348"
                                  x="-4"
                                  y="-6"
                                  rx="0"
                                  ry="0"
                                  opacity="1"
                                  strokeWidth="0"
                                  stroke="none"
                                  strokeDasharray="0"
                                  fill="#fff"
                                ></rect>
                              </clipPath>
                              <clipPath id="forecastMask6eea7vgw"></clipPath>
                              <clipPath id="nonForecastMask6eea7vgw"></clipPath>
                              <clipPath id="gridRectMarkerMask6eea7vgw">
                                <rect
                                  id="SvgjsRect3108"
                                  width="428.65625"
                                  height="211.348"
                                  x="-2"
                                  y="-2"
                                  rx="0"
                                  ry="0"
                                  opacity="1"
                                  strokeWidth="0"
                                  stroke="none"
                                  strokeDasharray="0"
                                  fill="#fff"
                                ></rect>
                              </clipPath>
                              <linearGradient
                                id="SvgjsLinearGradient3113"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  id="SvgjsStop3114"
                                  stopOpacity="1"
                                  stopColor="rgba(223,131,47,1)"
                                  offset="0"
                                ></stop>
                                <stop
                                  id="SvgjsStop3115"
                                  stopOpacity="0.15"
                                  stopColor="rgba(223,131,47,0.15)"
                                  offset="1"
                                ></stop>
                                <stop
                                  id="SvgjsStop3116"
                                  stopOpacity="0.15"
                                  stopColor="rgba(223,131,47,0.15)"
                                  offset="1"
                                ></stop>
                              </linearGradient>
                            </defs>
                            <line
                              id="SvgjsLine3106"
                              x1="181.49553571428572"
                              y1="0"
                              x2="181.49553571428572"
                              y2="207.348"
                              stroke="#b6b6b6"
                              strokeDasharray="3"
                              strokeLinecap="butt"
                              className="apexcharts-xcrosshairs apexcharts-active"
                              x="181.49553571428572"
                              y="0"
                              width="1"
                              height="207.348"
                              fill="#b1b9c4"
                              filter="none"
                              fillOpacity="0.9"
                              strokeWidth="1"
                            ></line>
                            <g id="SvgjsG3119" className="apexcharts-grid">
                              <g
                                id="SvgjsG3120"
                                className="apexcharts-gridlines-horizontal"
                                style="display: none"
                              >
                                <line
                                  id="SvgjsLine3123"
                                  x1="0"
                                  y1="0"
                                  x2="424.65625"
                                  y2="0"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine3124"
                                  x1="0"
                                  y1="23.038666666666668"
                                  x2="424.65625"
                                  y2="23.038666666666668"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine3125"
                                  x1="0"
                                  y1="46.077333333333335"
                                  x2="424.65625"
                                  y2="46.077333333333335"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine3126"
                                  x1="0"
                                  y1="69.116"
                                  x2="424.65625"
                                  y2="69.116"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine3127"
                                  x1="0"
                                  y1="92.15466666666667"
                                  x2="424.65625"
                                  y2="92.15466666666667"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine3128"
                                  x1="0"
                                  y1="115.19333333333334"
                                  x2="424.65625"
                                  y2="115.19333333333334"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine3129"
                                  x1="0"
                                  y1="138.232"
                                  x2="424.65625"
                                  y2="138.232"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine3130"
                                  x1="0"
                                  y1="161.27066666666667"
                                  x2="424.65625"
                                  y2="161.27066666666667"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine3131"
                                  x1="0"
                                  y1="184.30933333333334"
                                  x2="424.65625"
                                  y2="184.30933333333334"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine3132"
                                  x1="0"
                                  y1="207.348"
                                  x2="424.65625"
                                  y2="207.348"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                              </g>
                              <g
                                id="SvgjsG3121"
                                className="apexcharts-gridlines-vertical"
                                style="display: none"
                              ></g>
                              <line
                                id="SvgjsLine3134"
                                x1="0"
                                y1="207.348"
                                x2="424.65625"
                                y2="207.348"
                                stroke="transparent"
                                strokeDasharray="0"
                                strokeLinecap="butt"
                              ></line>
                              <line
                                id="SvgjsLine3133"
                                x1="0"
                                y1="1"
                                x2="0"
                                y2="207.348"
                                stroke="transparent"
                                strokeDasharray="0"
                                strokeLinecap="butt"
                              ></line>
                            </g>
                            <g
                              id="SvgjsG3122"
                              className="apexcharts-grid-borders"
                              style="display: none"
                            ></g>
                            <g
                              id="SvgjsG3109"
                              className="apexcharts-area-series apexcharts-plot-series"
                            >
                              <g
                                id="SvgjsG3110"
                                className="apexcharts-series"
                                rel="1"
                              >
                                <path
                                  id="SvgjsPath3117"
                                  d="M0 207.348L0 93.08577374903643C0.6235491242829826 91.99612176477672 12.972179619641171 69.08828177720585 15.166294642857142 66.58267654645442L30.332589285714285 58.44698153789568L45.49888392857143 98.26294767951708L60.66517857142857 105.67852959638799L75.83147321428571 65.51178761754L90.99776785714286 65.74195133852845L106.1640625 104.97932216831259L121.33035714285714 125.15480633713969L136.49665178571428 106.97923910122404L151.66294642857142 84.64463934215291L166.82924107142856 46.225330098980294L181.99553571428572 19.81009417054338L197.16183035714286 19.772403982678952L212.328125 70.91578205787141L227.49441964285714 58.5064021774358L242.66071428571428 61.6199215757365L257.82700892857144 94.39048321545442L272.99330357142856 69.06752722422266L288.1595982142857 24.331730280458032L303.32589285714283 14.760541564179448L318.4921875 27.598612529295906L333.6584821428571 56.16337037766084L348.8247767857143 124.81773259785427L363.99107142857144 174.54998992795936L379.15736607142856 194.38368991937296L394.3236607142857 158.89590629803115L409.48995535714283 164.67627169884418L424.65625 150.6385026370499L424.65625 207.348L0 207.348M0 93.08577374903643L0 93.08577374903643 "
                                  fill="url(#SvgjsLinearGradient3113)"
                                  fillOpacity="1"
                                  strokeOpacity="1"
                                  strokeLinecap="butt"
                                  strokeWidth="0"
                                  strokeDasharray="0"
                                  className="apexcharts-area"
                                  clipPath="url(#gridRectMask6eea7vgw)"
                                  pathto="M 0 207.348 L 0 93.08577374903643C0.6235491242829826, 91.99612176477672, 12.972179619641171, 69.08828177720585, 15.166294642857142, 66.58267654645442L30.332589285714285, 58.44698153789568L45.49888392857143, 98.26294767951708L60.66517857142857, 105.67852959638799L75.83147321428571, 65.51178761754L90.99776785714286, 65.74195133852845L106.1640625, 104.97932216831259L121.33035714285714, 125.15480633713969L136.49665178571428, 106.97923910122404L151.66294642857142, 84.64463934215291L166.82924107142856, 46.225330098980294L181.99553571428572, 19.81009417054338L197.16183035714286, 19.772403982678952L212.328125, 70.91578205787141L227.49441964285714, 58.5064021774358L242.66071428571428, 61.6199215757365L257.82700892857144, 94.39048321545442L272.99330357142856, 69.06752722422266L288.1595982142857, 24.331730280458032L303.32589285714283, 14.760541564179448L318.4921875, 27.598612529295906L333.6584821428571, 56.16337037766084L348.8247767857143, 124.81773259785427L363.99107142857144, 174.54998992795936L379.15736607142856, 194.38368991937296L394.3236607142857, 158.89590629803115L409.48995535714283, 164.67627169884418L424.65625, 150.6385026370499 L 424.65625 207.348 L 0 207.348M 0 93.08577374903643z"
                                  pathfrom="M 0 207.348 L 0 93.08577374903643C0.6235491242829826, 91.99612176477672, 12.972179619641171, 69.08828177720585, 15.166294642857142, 66.58267654645442L30.332589285714285, 58.44698153789568L45.49888392857143, 98.26294767951708L60.66517857142857, 105.67852959638799L75.83147321428571, 65.51178761754L90.99776785714286, 65.74195133852845L106.1640625, 104.97932216831259L121.33035714285714, 125.15480633713969L136.49665178571428, 106.97923910122404L151.66294642857142, 84.64463934215291L166.82924107142856, 46.225330098980294L181.99553571428572, 19.81009417054338L197.16183035714286, 19.772403982678952L212.328125, 70.91578205787141L227.49441964285714, 58.5064021774358L242.66071428571428, 61.6199215757365L257.82700892857144, 94.39048321545442L272.99330357142856, 69.06752722422266L288.1595982142857, 24.331730280458032L303.32589285714283, 14.760541564179448L318.4921875, 27.598612529295906L333.6584821428571, 56.16337037766084L348.8247767857143, 124.81773259785427L363.99107142857144, 174.54998992795936L379.15736607142856, 194.38368991937296L394.3236607142857, 158.89590629803115L409.48995535714283, 164.67627169884418L424.65625, 150.6385026370499 L 424.65625 207.348 L 0 207.348M 0 93.08577374903643z"
                                ></path>
                                <path
                                  id="SvgjsPath3118"
                                  d="M0 93.08577374903643C0.6235491242829826 91.99612176477672 12.972179619641171 69.08828177720585 15.166294642857142 66.58267654645442L30.332589285714285 58.44698153789568L45.49888392857143 98.26294767951708L60.66517857142857 105.67852959638799L75.83147321428571 65.51178761754L90.99776785714286 65.74195133852845L106.1640625 104.97932216831259L121.33035714285714 125.15480633713969L136.49665178571428 106.97923910122404L151.66294642857142 84.64463934215291L166.82924107142856 46.225330098980294L181.99553571428572 19.81009417054338L197.16183035714286 19.772403982678952L212.328125 70.91578205787141L227.49441964285714 58.5064021774358L242.66071428571428 61.6199215757365L257.82700892857144 94.39048321545442L272.99330357142856 69.06752722422266L288.1595982142857 24.331730280458032L303.32589285714283 14.760541564179448L318.4921875 27.598612529295906L333.6584821428571 56.16337037766084L348.8247767857143 124.81773259785427L363.99107142857144 174.54998992795936L379.15736607142856 194.38368991937296L394.3236607142857 158.89590629803115L409.48995535714283 164.67627169884418L424.65625 150.6385026370499 "
                                  fill="none"
                                  fillOpacity="1"
                                  stroke="#e18c3d"
                                  strokeOpacity="1"
                                  strokeLinecap="butt"
                                  strokeWidth="2"
                                  strokeDasharray="0"
                                  className="apexcharts-area"
                                  clipPath="url(#gridRectMask6eea7vgw)"
                                  pathto="M 0 93.08577374903643C0.6235491242829826, 91.99612176477672, 12.972179619641171, 69.08828177720585, 15.166294642857142, 66.58267654645442L30.332589285714285, 58.44698153789568L45.49888392857143, 98.26294767951708L60.66517857142857, 105.67852959638799L75.83147321428571, 65.51178761754L90.99776785714286, 65.74195133852845L106.1640625, 104.97932216831259L121.33035714285714, 125.15480633713969L136.49665178571428, 106.97923910122404L151.66294642857142, 84.64463934215291L166.82924107142856, 46.225330098980294L181.99553571428572, 19.81009417054338L197.16183035714286, 19.772403982678952L212.328125, 70.91578205787141L227.49441964285714, 58.5064021774358L242.66071428571428, 61.6199215757365L257.82700892857144, 94.39048321545442L272.99330357142856, 69.06752722422266L288.1595982142857, 24.331730280458032L303.32589285714283, 14.760541564179448L318.4921875, 27.598612529295906L333.6584821428571, 56.16337037766084L348.8247767857143, 124.81773259785427L363.99107142857144, 174.54998992795936L379.15736607142856, 194.38368991937296L394.3236607142857, 158.89590629803115L409.48995535714283, 164.67627169884418L424.65625, 150.6385026370499"
                                  pathfrom="M 0 93.08577374903643C0.6235491242829826, 91.99612176477672, 12.972179619641171, 69.08828177720585, 15.166294642857142, 66.58267654645442L30.332589285714285, 58.44698153789568L45.49888392857143, 98.26294767951708L60.66517857142857, 105.67852959638799L75.83147321428571, 65.51178761754L90.99776785714286, 65.74195133852845L106.1640625, 104.97932216831259L121.33035714285714, 125.15480633713969L136.49665178571428, 106.97923910122404L151.66294642857142, 84.64463934215291L166.82924107142856, 46.225330098980294L181.99553571428572, 19.81009417054338L197.16183035714286, 19.772403982678952L212.328125, 70.91578205787141L227.49441964285714, 58.5064021774358L242.66071428571428, 61.6199215757365L257.82700892857144, 94.39048321545442L272.99330357142856, 69.06752722422266L288.1595982142857, 24.331730280458032L303.32589285714283, 14.760541564179448L318.4921875, 27.598612529295906L333.6584821428571, 56.16337037766084L348.8247767857143, 124.81773259785427L363.99107142857144, 174.54998992795936L379.15736607142856, 194.38368991937296L394.3236607142857, 158.89590629803115L409.48995535714283, 164.67627169884418L424.65625, 150.6385026370499"
                                  fillRule="evenodd"
                                ></path>
                                <g
                                  id="SvgjsG3111"
                                  className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                >
                                  <g className="apexcharts-series-markers">
                                    <circle
                                      id="SvgjsCircle3230"
                                      r="6"
                                      cx="181.99553571428572"
                                      cy="19.81009417054338"
                                      className="apexcharts-marker wnx89lbb3 no-pointer-events"
                                      fill="#e18c3d"
                                      fillOpacity="1"
                                      strokeWidth="0"
                                      strokeOpacity="0.9"
                                      // default-marker-size="0"
                                    ></circle>
                                  </g>
                                </g>
                              </g>
                              <g
                                id="SvgjsG3112"
                                className="apexcharts-datalabels"
                              ></g>
                            </g>
                            <line
                              id="SvgjsLine3135"
                              x1="0"
                              y1="0"
                              x2="424.65625"
                              y2="0"
                              stroke="#b6b6b6"
                              strokeDasharray="0"
                              strokeWidth="1"
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs"
                            ></line>
                            <line
                              id="SvgjsLine3136"
                              x1="0"
                              y1="0"
                              x2="424.65625"
                              y2="0"
                              strokeDasharray="0"
                              strokeWidth="0"
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs-hidden"
                            ></line>
                            <g
                              id="SvgjsG3137"
                              className="apexcharts-xaxis"
                              transform="translate(0, 0)"
                            >
                              <g
                                id="SvgjsG3138"
                                className="apexcharts-xaxis-texts-g"
                                transform="translate(0, -4)"
                              >
                                <text
                                  id="SvgjsText3140"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="0"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3141"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3143"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="15.166294642857144"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3144"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3146"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="30.332589285714292"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3147"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3149"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="45.49888392857143"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3150"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3152"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="60.66517857142857"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3153"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3155"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="75.83147321428571"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3156"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3158"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="90.99776785714285"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3159"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3161"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="106.16406249999999"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3162"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3164"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="121.33035714285712"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3165"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3167"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="136.49665178571425"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3168"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3170"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="151.6629464285714"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3171"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3173"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="166.82924107142853"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3174"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3176"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="181.99553571428567"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3177"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3179"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="197.1618303571428"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3180"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3182"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="212.32812499999994"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3183"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3185"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="227.49441964285708"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3186"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3188"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="242.66071428571422"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3189"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3191"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="257.8270089285714"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3192"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3194"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="272.99330357142856"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3195"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3197"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="288.1595982142857"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3198"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3200"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="303.3258928571429"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3201"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3203"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="318.49218750000006"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3204"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3206"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="333.6584821428572"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3207"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3209"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="348.8247767857144"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3210"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3212"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="363.99107142857156"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3213"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3215"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="379.1573660714287"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3216"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3218"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="394.3236607142859"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3219"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3221"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="409.48995535714306"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3222"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3224"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="424.6562500000002"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3225"></tspan>
                                  <title></title>
                                </text>
                              </g>
                            </g>
                            <g
                              id="SvgjsG3227"
                              className="apexcharts-yaxis-annotations apexcharts-hidden-element-shown"
                            ></g>
                            <g
                              id="SvgjsG3228"
                              className="apexcharts-xaxis-annotations apexcharts-hidden-element-shown"
                            ></g>
                            <g
                              id="SvgjsG3229"
                              className="apexcharts-point-annotations apexcharts-hidden-element-shown"
                            ></g>
                          </g>
                        </svg>
                        <div
                          className="apexcharts-tooltip apexcharts-theme-light apexcharts-active"
                          style="left: 192.996px; top: 22.8101px"
                        >
                          <div className="area-tooltip">
                            <div className="tooltip-text">Sep 20, 2024</div>
                            <div className="tooltip-text">
                              <b> $23.23M </b>
                            </div>
                          </div>
                        </div>
                        <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                          <div className="apexcharts-yaxistooltip-text"></div>
                        </div>
                      </div>
                    </div>
                    <div className="category-values">
                      <p>Sep</p>
                      <p>9</p>
                      <p>12</p>
                      <p>15</p>
                      <p>18</p>
                      <p>21</p>
                      <p>24</p>
                      <p>27</p>
                      <p>30</p>
                      <p>Oct</p>
                      <p>3</p>
                      <p>6</p>
                    </div>
                  </div>
                  <div className="yaxis">
                    <p>$23.55M</p>
                    <p>$23.14M</p>
                    <p>$22.73M</p>
                    <p>$22.32M</p>
                    <p>$21.91M</p>
                    <p>$21.5M</p>
                    <p>$21.09M</p>
                    <p>$20.68M</p>
                    <p>$20.27M</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 border border-[#ffffff33] p-px rounded-[10px] w-full md:w-1/2">
              <div className="px-6 py-[22px] h-full">
                <div className="">
                  <div className="text-[#DEDBF2] f-f-fg text-sm lg:text-base">
                    VOLUME
                  </div>
                  <div className="mt-1 flex items-center space-x-3">
                    <div className="text-white font-bold text-[20px] lg:text-[27px]">
                      $9,338,612
                    </div>
                    <div className="px-2 py-1 leading-5 text-[15px] table rounded-md bg-[#51B961] bg-opacity-10 text-[#51B961]">
                      +82.35%
                    </div>
                  </div>
                  <div className="text-[#B8B6CB] text-[10px] lg:text-[15px]">
                    Oct 07, 2024
                  </div>
                </div>
                <div className="flex mt-2.5 w-full">
                  <div className="chart-container">
                    <div
                      type="area"
                      width="100%"
                      height="275"
                      style="min-height: 290px"
                    >
                      <div
                        id="apexchartscll7b3ej"
                        className="apexcharts-canvas apexchartscll7b3ej apexcharts-theme-light"
                        style="width: 430px; height: 275px"
                      >
                        <svg
                          id="SvgjsSvg3232"
                          width="430"
                          height="275"
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          className="apexcharts-svg"
                          transform="translate(0, 0)"
                          style="background: transparent"
                        >
                          <foreignObject x="0" y="0" width="430" height="275">
                            <div
                              className="apexcharts-legend"
                              xmlns="http://www.w3.org/1999/xhtml"
                              style="max-height: 137.5px"
                            ></div>
                          </foreignObject>
                          <rect
                            id="SvgjsRect3236"
                            width="0"
                            height="0"
                            x="0"
                            y="0"
                            rx="0"
                            ry="0"
                            opacity="1"
                            strokeWidth="0"
                            stroke="none"
                            strokeDasharray="0"
                            fill="#fefefe"
                          ></rect>
                          <g
                            id="SvgjsG3357"
                            className="apexcharts-yaxis"
                            rel="0"
                            transform="translate(-18, 0)"
                          ></g>
                          <g
                            id="SvgjsG3234"
                            className="apexcharts-inner apexcharts-graphical"
                            transform="translate(0, 30)"
                          >
                            <defs id="SvgjsDefs3233">
                              <clipPath id="gridRectMaskcll7b3ej">
                                <rect
                                  id="SvgjsRect3238"
                                  width="431.65625"
                                  height="219.348"
                                  x="-4"
                                  y="-6"
                                  rx="0"
                                  ry="0"
                                  opacity="1"
                                  strokeWidth="0"
                                  stroke="none"
                                  strokeDasharray="0"
                                  fill="#fff"
                                ></rect>
                              </clipPath>
                              <clipPath id="forecastMaskcll7b3ej"></clipPath>
                              <clipPath id="nonForecastMaskcll7b3ej"></clipPath>
                              <clipPath id="gridRectMarkerMaskcll7b3ej">
                                <rect
                                  id="SvgjsRect3239"
                                  width="429.65625"
                                  height="211.348"
                                  x="-2"
                                  y="-2"
                                  rx="0"
                                  ry="0"
                                  opacity="1"
                                  strokeWidth="0"
                                  stroke="none"
                                  strokeDasharray="0"
                                  fill="#fff"
                                ></rect>
                              </clipPath>
                              <linearGradient
                                id="SvgjsLinearGradient3244"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  id="SvgjsStop3245"
                                  stopOpacity="1"
                                  stopColor="rgba(223,131,47,1)"
                                  offset="0"
                                ></stop>
                                <stop
                                  id="SvgjsStop3246"
                                  stopOpacity="0.15"
                                  stopColor="rgba(223,131,47,0.15)"
                                  offset="1"
                                ></stop>
                                <stop
                                  id="SvgjsStop3247"
                                  stopOpacity="0.15"
                                  stopColor="rgba(223,131,47,0.15)"
                                  offset="1"
                                ></stop>
                              </linearGradient>
                            </defs>
                            <line
                              id="SvgjsLine3237"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="207.348"
                              stroke="#b6b6b6"
                              strokeDasharray="3"
                              strokeLinecap="butt"
                              className="apexcharts-xcrosshairs"
                              x="0"
                              y="0"
                              width="1"
                              height="207.348"
                              fill="#b1b9c4"
                              filter="none"
                              fillOpacity="0.9"
                              strokeWidth="1"
                            ></line>
                            <g id="SvgjsG3250" className="apexcharts-grid">
                              <g
                                id="SvgjsG3251"
                                className="apexcharts-gridlines-horizontal"
                                style="display: none"
                              >
                                <line
                                  id="SvgjsLine3254"
                                  x1="0"
                                  y1="0"
                                  x2="425.65625"
                                  y2="0"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine3255"
                                  x1="0"
                                  y1="23.038666666666668"
                                  x2="425.65625"
                                  y2="23.038666666666668"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine3256"
                                  x1="0"
                                  y1="46.077333333333335"
                                  x2="425.65625"
                                  y2="46.077333333333335"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine3257"
                                  x1="0"
                                  y1="69.116"
                                  x2="425.65625"
                                  y2="69.116"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine3258"
                                  x1="0"
                                  y1="92.15466666666667"
                                  x2="425.65625"
                                  y2="92.15466666666667"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine3259"
                                  x1="0"
                                  y1="115.19333333333334"
                                  x2="425.65625"
                                  y2="115.19333333333334"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine3260"
                                  x1="0"
                                  y1="138.232"
                                  x2="425.65625"
                                  y2="138.232"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine3261"
                                  x1="0"
                                  y1="161.27066666666667"
                                  x2="425.65625"
                                  y2="161.27066666666667"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine3262"
                                  x1="0"
                                  y1="184.30933333333334"
                                  x2="425.65625"
                                  y2="184.30933333333334"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                                <line
                                  id="SvgjsLine3263"
                                  x1="0"
                                  y1="207.348"
                                  x2="425.65625"
                                  y2="207.348"
                                  stroke="#e0e0e0"
                                  strokeDasharray="0"
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                ></line>
                              </g>
                              <g
                                id="SvgjsG3252"
                                className="apexcharts-gridlines-vertical"
                                style="display: none"
                              ></g>
                              <line
                                id="SvgjsLine3265"
                                x1="0"
                                y1="207.348"
                                x2="425.65625"
                                y2="207.348"
                                stroke="transparent"
                                strokeDasharray="0"
                                strokeLinecap="butt"
                              ></line>
                              <line
                                id="SvgjsLine3264"
                                x1="0"
                                y1="1"
                                x2="0"
                                y2="207.348"
                                stroke="transparent"
                                strokeDasharray="0"
                                strokeLinecap="butt"
                              ></line>
                            </g>
                            <g
                              id="SvgjsG3253"
                              className="apexcharts-grid-borders"
                              style="display: none"
                            ></g>
                            <g
                              id="SvgjsG3240"
                              className="apexcharts-area-series apexcharts-plot-series"
                            >
                              <g
                                id="SvgjsG3241"
                                className="apexcharts-series"
                                rel="1"
                              >
                                <path
                                  id="SvgjsPath3248"
                                  d="M0 207.348L0 114.33663655821363C0.07647968789304627 113.90313337824776 12.263587307836886 25.66727864848549 15.202008928571429 28.168408183363226L30.404017857142858 140.21596800093582L45.606026785714285 35.72805181374406L60.808035714285715 117.653066123727L76.01004464285714 104.94323914560704L91.21205357142857 206.35634483742936L106.4140625 169.45027586480614L121.61607142857143 88.94855811045844L136.81808035714286 91.94744556272204L152.02008928571428 29.80169076434646L167.22209821428572 115.85390278280414L182.42410714285714 114.52320245960647L197.62611607142858 204.15248846265843L212.828125 141.1988537380699L228.03013392857142 79.96203576849265L243.23214285714286 98.91581773488218L258.4341517857143 64.25642662262555L273.6361607142857 81.29106822374081L288.83816964285717 81.18682422742447L304.04017857142856 190.71050573992198L319.2421875 122.42665727000724L334.44419642857144 3.024968921727634L349.64620535714283 18.246536373735353L364.8482142857143 33.496259019347576L380.0502232142857 50.794898071211435L395.25223214285717 124.04523143094787L410.45424107142856 186.74444318255763L425.65625 175.83282706305872L425.65625 207.348L0 207.348M0 114.33663655821363L0 114.33663655821363 "
                                  fill="url(#SvgjsLinearGradient3244)"
                                  fillOpacity="1"
                                  strokeOpacity="1"
                                  strokeLinecap="butt"
                                  strokeWidth="0"
                                  strokeDasharray="0"
                                  className="apexcharts-area"
                                  clipPath="url(#gridRectMaskcll7b3ej)"
                                  pathTo="M 0 207.348 L 0 114.33663655821363C0.07647968789304627, 113.90313337824776, 12.263587307836886, 25.66727864848549, 15.202008928571429, 28.168408183363226L30.404017857142858, 140.21596800093582L45.606026785714285, 35.72805181374406L60.808035714285715, 117.653066123727L76.01004464285714, 104.94323914560704L91.21205357142857, 206.35634483742936L106.4140625, 169.45027586480614L121.61607142857143, 88.94855811045844L136.81808035714286, 91.94744556272204L152.02008928571428, 29.80169076434646L167.22209821428572, 115.85390278280414L182.42410714285714, 114.52320245960647L197.62611607142858, 204.15248846265843L212.828125, 141.1988537380699L228.03013392857142, 79.96203576849265L243.23214285714286, 98.91581773488218L258.4341517857143, 64.25642662262555L273.6361607142857, 81.29106822374081L288.83816964285717, 81.18682422742447L304.04017857142856, 190.71050573992198L319.2421875, 122.42665727000724L334.44419642857144, 3.024968921727634L349.64620535714283, 18.246536373735353L364.8482142857143, 33.496259019347576L380.0502232142857, 50.794898071211435L395.25223214285717, 124.04523143094787L410.45424107142856, 186.74444318255763L425.65625, 175.83282706305872 L 425.65625 207.348 L 0 207.348M 0 114.33663655821363z"
                                  pathfrom="M 0 207.348 L 0 114.33663655821363C0.07647968789304627, 113.90313337824776, 12.263587307836886, 25.66727864848549, 15.202008928571429, 28.168408183363226L30.404017857142858, 140.21596800093582L45.606026785714285, 35.72805181374406L60.808035714285715, 117.653066123727L76.01004464285714, 104.94323914560704L91.21205357142857, 206.35634483742936L106.4140625, 169.45027586480614L121.61607142857143, 88.94855811045844L136.81808035714286, 91.94744556272204L152.02008928571428, 29.80169076434646L167.22209821428572, 115.85390278280414L182.42410714285714, 114.52320245960647L197.62611607142858, 204.15248846265843L212.828125, 141.1988537380699L228.03013392857142, 79.96203576849265L243.23214285714286, 98.91581773488218L258.4341517857143, 64.25642662262555L273.6361607142857, 81.29106822374081L288.83816964285717, 81.18682422742447L304.04017857142856, 190.71050573992198L319.2421875, 122.42665727000724L334.44419642857144, 3.024968921727634L349.64620535714283, 18.246536373735353L364.8482142857143, 33.496259019347576L380.0502232142857, 50.794898071211435L395.25223214285717, 124.04523143094787L410.45424107142856, 186.74444318255763L425.65625, 175.83282706305872 L 425.65625 207.348 L 0 207.348M 0 114.33663655821363z"
                                ></path>
                                <path
                                  id="SvgjsPath3249"
                                  d="M0 114.33663655821363C0.07647968789304627 113.90313337824776 12.263587307836886 25.66727864848549 15.202008928571429 28.168408183363226L30.404017857142858 140.21596800093582L45.606026785714285 35.72805181374406L60.808035714285715 117.653066123727L76.01004464285714 104.94323914560704L91.21205357142857 206.35634483742936L106.4140625 169.45027586480614L121.61607142857143 88.94855811045844L136.81808035714286 91.94744556272204L152.02008928571428 29.80169076434646L167.22209821428572 115.85390278280414L182.42410714285714 114.52320245960647L197.62611607142858 204.15248846265843L212.828125 141.1988537380699L228.03013392857142 79.96203576849265L243.23214285714286 98.91581773488218L258.4341517857143 64.25642662262555L273.6361607142857 81.29106822374081L288.83816964285717 81.18682422742447L304.04017857142856 190.71050573992198L319.2421875 122.42665727000724L334.44419642857144 3.024968921727634L349.64620535714283 18.246536373735353L364.8482142857143 33.496259019347576L380.0502232142857 50.794898071211435L395.25223214285717 124.04523143094787L410.45424107142856 186.74444318255763L425.65625 175.83282706305872 "
                                  fill="none"
                                  fillOpacity="1"
                                  stroke="#e18c3d"
                                  strokeOpacity="1"
                                  strokeLinecap="butt"
                                  strokeWidth="2"
                                  strokeDasharray="0"
                                  className="apexcharts-area"
                                  clipPath="url(#gridRectMaskcll7b3ej)"
                                  d="M 0 114.33663655821363C0.07647968789304627, 113.90313337824776, 12.263587307836886, 25.66727864848549, 15.202008928571429, 28.168408183363226L30.404017857142858, 140.21596800093582L45.606026785714285, 35.72805181374406L60.808035714285715, 117.653066123727L76.01004464285714, 104.94323914560704L91.21205357142857, 206.35634483742936L106.4140625, 169.45027586480614L121.61607142857143, 88.94855811045844L136.81808035714286, 91.94744556272204L152.02008928571428, 29.80169076434646L167.22209821428572, 115.85390278280414L182.42410714285714, 114.52320245960647L197.62611607142858, 204.15248846265843L212.828125, 141.1988537380699L228.03013392857142, 79.96203576849265L243.23214285714286, 98.91581773488218L258.4341517857143, 64.25642662262555L273.6361607142857, 81.29106822374081L288.83816964285717, 81.18682422742447L304.04017857142856, 190.71050573992198L319.2421875, 122.42665727000724L334.44419642857144, 3.024968921727634L349.64620535714283, 18.246536373735353L364.8482142857143, 33.496259019347576L380.0502232142857, 50.794898071211435L395.25223214285717, 124.04523143094787L410.45424107142856, 186.74444318255763L425.65625, 175.83282706305872"
                                  pathFrom="M 0 114.33663655821363C0.07647968789304627, 113.90313337824776, 12.263587307836886, 25.66727864848549, 15.202008928571429, 28.168408183363226L30.404017857142858, 140.21596800093582L45.606026785714285, 35.72805181374406L60.808035714285715, 117.653066123727L76.01004464285714, 104.94323914560704L91.21205357142857, 206.35634483742936L106.4140625, 169.45027586480614L121.61607142857143, 88.94855811045844L136.81808035714286, 91.94744556272204L152.02008928571428, 29.80169076434646L167.22209821428572, 115.85390278280414L182.42410714285714, 114.52320245960647L197.62611607142858, 204.15248846265843L212.828125, 141.1988537380699L228.03013392857142, 79.96203576849265L243.23214285714286, 98.91581773488218L258.4341517857143, 64.25642662262555L273.6361607142857, 81.29106822374081L288.83816964285717, 81.18682422742447L304.04017857142856, 190.71050573992198L319.2421875, 122.42665727000724L334.44419642857144, 3.024968921727634L349.64620535714283, 18.246536373735353L364.8482142857143, 33.496259019347576L380.0502232142857, 50.794898071211435L395.25223214285717, 124.04523143094787L410.45424107142856, 186.74444318255763L425.65625, 175.83282706305872"
                                  fillRule="evenodd"
                                ></path>
                                <g
                                  id="SvgjsG3242"
                                  className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                >
                                  <g className="apexcharts-series-markers">
                                    <circle
                                      id="SvgjsCircle3361"
                                      r="0"
                                      cx="0"
                                      cy="0"
                                      className="apexcharts-marker wiach61la no-pointer-events"
                                      fill="#e18c3d"
                                      fillOpacity="1"
                                      strokeWidth="0"
                                      strokeOpacity="0.9"
                                      default-marker-size="0"
                                    ></circle>
                                  </g>
                                </g>
                              </g>
                              <g
                                id="SvgjsG3243"
                                className="apexcharts-datalabels"
                              ></g>
                            </g>
                            <line
                              id="SvgjsLine3266"
                              x1="0"
                              y1="0"
                              x2="425.65625"
                              y2="0"
                              stroke="#b6b6b6"
                              strokeDasharray="0"
                              strokeWidth="1"
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs"
                            ></line>
                            <line
                              id="SvgjsLine3267"
                              x1="0"
                              y1="0"
                              x2="425.65625"
                              y2="0"
                              strokeDasharray="0"
                              strokeWidth="0"
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs-hidden"
                            ></line>
                            <g
                              id="SvgjsG3268"
                              className="apexcharts-xaxis"
                              transform="translate(0, 0)"
                            >
                              <g
                                id="SvgjsG3269"
                                className="apexcharts-xaxis-texts-g"
                                transform="translate(0, -4)"
                              >
                                <text
                                  id="SvgjsText3271"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="0"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3272"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3274"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="15.202008928571427"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3275"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3277"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="30.404017857142854"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3278"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3280"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="45.606026785714285"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3281"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3283"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="60.808035714285715"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3284"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3286"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="76.01004464285715"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3287"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3289"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="91.21205357142858"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3290"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3292"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="106.41406250000001"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3293"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3295"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="121.61607142857143"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3296"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3298"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="136.81808035714283"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3299"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3301"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="152.02008928571425"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3302"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3304"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="167.22209821428567"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#caced3"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3305"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3307"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="182.42410714285708"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3308"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3310"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="197.6261160714285"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3311"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3313"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="212.82812499999991"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3314"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3316"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="228.03013392857133"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3317"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3319"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="243.23214285714275"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3320"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3322"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="258.43415178571416"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3323"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3325"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="273.6361607142856"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3326"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3328"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="288.83816964285705"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3329"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3331"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="304.0401785714285"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3332"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3334"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="319.24218749999994"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3335"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3337"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="334.4441964285714"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3338"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3340"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="349.64620535714283"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3341"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3343"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="364.8482142857143"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3344"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3346"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="380.0502232142857"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3347"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3349"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="395.25223214285717"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3350"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3352"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="410.4542410714286"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3353"></tspan>
                                  <title></title>
                                </text>
                                <text
                                  id="SvgjsText3355"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="425.65625000000006"
                                  y="236.348"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight="400"
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label"
                                  style="
                                        font-family: Helvetica, Arial,
                                          sans-serif;
                                      "
                                >
                                  <tspan id="SvgjsTspan3356"></tspan>
                                  <title></title>
                                </text>
                              </g>
                            </g>
                            <g
                              id="SvgjsG3358"
                              className="apexcharts-yaxis-annotations apexcharts-hidden-element-shown"
                            ></g>
                            <g
                              id="SvgjsG3359"
                              className="apexcharts-xaxis-annotations apexcharts-hidden-element-shown"
                            ></g>
                            <g
                              id="SvgjsG3360"
                              className="apexcharts-point-annotations apexcharts-hidden-element-shown"
                            ></g>
                          </g>
                        </svg>
                        <div className="apexcharts-tooltip apexcharts-theme-light">
                          <div
                            className="apexcharts-tooltip-title"
                            style="
                                  font-family: Helvetica, Arial, sans-serif;
                                  font-size: 12px;
                                "
                          ></div>
                          <div
                            className="apexcharts-tooltip-series-group"
                            style="order: 1"
                          >
                            <span
                              className="apexcharts-tooltip-marker"
                              style="background-color: rgb(0, 143, 251)"
                            ></span>
                            <div
                              className="apexcharts-tooltip-text"
                              style="
                                    font-family: Helvetica, Arial, sans-serif;
                                    font-size: 12px;
                                  "
                            >
                              <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-y-label"></span>
                                <span className="apexcharts-tooltip-text-y-value"></span>
                              </div>
                              <div className="apexcharts-tooltip-goals-group">
                                <span className="apexcharts-tooltip-text-goals-label"></span>
                                <span className="apexcharts-tooltip-text-goals-value"></span>
                              </div>
                              <div className="apexcharts-tooltip-z-group">
                                <span className="apexcharts-tooltip-text-z-label"></span>
                                <span className="apexcharts-tooltip-text-z-value"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                          <div className="apexcharts-yaxistooltip-text"></div>
                        </div>
                      </div>
                    </div>
                    <div className="category-values">
                      <p>Sep</p>
                      <p>9</p>
                      <p>12</p>
                      <p>15</p>
                      <p>18</p>
                      <p>21</p>
                      <p>24</p>
                      <p>27</p>
                      <p>30</p>
                      <p>Oct</p>
                      <p>3</p>
                      <p>6</p>
                    </div>
                  </div>
                  <div className="yaxis">
                    <p>$14.17M</p>
                    <p>$12.96M</p>
                    <p>$11.76M</p>
                    <p>$10.56M</p>
                    <p>$9.36M</p>
                    <p>$8.158M</p>
                    <p>$6.956M</p>
                    <p>$5.754M</p>
                    <p>$4.552M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-[30px] md:mt-10">
            <div className="w-full bg-white/10 border border-[#ffffff33] px-4 py-4 lg:px-5 lg:py-[15px] rounded-[10px]">
              <div className="lg:flex items-center">
                <div className="lg:w-1/3 lg:border-r border-[#757384] w-full">
                  <p className="text-white leading-[19px] f-f-fg">
                    24H Volume:
                  </p>
                  <div className="flex items-end space-x-[5px]">
                    <p className="text-[#E9E9F2] text-lg lg:text-[22px] leading-5 lg:leading-[26px]">
                      $9,338,612
                    </p>
                    <div className="px-2 py-1 leading-5 text-[15px] table rounded-md bg-[#51B961] bg-opacity-10 text-[#51B961]">
                      +82.35%
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 py-3 lg:py-0 my-3 lg:my-0 border-y lg:border-y-0 border-[#757384] lg:border-r border-[#757384] w-full lg:pl-5">
                  <p className="text-white leading-[19px] f-f-fg">24h Fees:</p>
                  <div className="flex items-end space-x-[5px]">
                    <p className="text-[#E9E9F2] text-lg lg:text-[22px] leading-5 lg:leading-[26px]">
                      $10,611
                    </p>
                    <div className="px-2 py-1 leading-5 text-[15px] table rounded-md bg-[#51B961] bg-opacity-10 text-[#51B961]">
                      +81.15%
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/3 w-full lg:pl-5">
                  <p className="text-white leading-[19px] f-f-fg">TVL:</p>
                  <div className="flex items-end space-x-[5px]">
                    <p className="text-[#E9E9F2] text-lg lg:text-[22px] leading-5 lg:leading-[26px]">
                      $21,528,721
                    </p>
                    <div className="px-2 py-1 leading-5 text-[15px] table rounded-md bg-[#51B961] bg-opacity-10 text-[#51B961]">
                      +1.36%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-10">
              <div className="w-full flex items-center justify-between">
                <p className="text-[22px] md:text-[27px] leading-8 text-white f-f-fg font-medium">
                  Top Tokens
                </p>
                <div className="flex items-center space-x-3.5 cursor-pointer group">
                  <span className="text-lg text-themeOrange">See All</span>
                  <img
                    className="group-hover:w-[40px] w-[30px] duration-300 ease-in-out"
                    src="https://app.lynex.fi/images/common/spear.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full border border-[#ffffff33] bg-white/10 rounded-[10px] lg:px-6 pb-2.5 lg:pb-6 pt-4 mt-3.5">
                <div className="lg:flex justify-between hidden text-white f-f-fg font-medium text-[17px] xl:text-[18px] pb-3.5 border-b border-[#ffffff33]">
                  <div className="w-[30%]">
                    <button className="flex items-center space-x-[3px]">
                      <span className="">Name</span>
                    </button>
                  </div>
                  <div className="w-[15%]">
                    <button className="flex items-center space-x-[3px]">
                      <span className="">Price</span>
                    </button>
                  </div>
                  <div className="w-[15%]">
                    <button className="flex items-center space-x-[3px]">
                      <span className="">24H Change</span>
                    </button>
                  </div>
                  <div className="w-[15%]">
                    <button className="flex items-center space-x-[3px]">
                      <span className="text-themeOrange">24H Volume</span>
                      <svg
                        className="text-themeOrange"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <g id="arrow-bottom" transform="translate(-368 -325)">
                          <rect
                            id="Rectangle_9736"
                            data-name="Rectangle 9736"
                            width="16"
                            height="16"
                            transform="translate(368 325)"
                            fill="none"
                          ></rect>
                          <path
                            id="svgexport-9"
                            d="M16,10,14.942,8.943,10.75,13.127V4H9.25v9.127L5.065,8.935,4,10l6,6Z"
                            transform="translate(366 323)"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                  <div className="w-[15%]">
                    <button className="flex items-center space-x-[3px]">
                      <span className="">Liquidity</span>
                    </button>
                  </div>
                </div>
                <div className="lg:pt-5 border-b lg:border-b-0 border-[#df832f] pb-2.5 lg:pb-0 flex flex-wrap lg:flex-nowrap items-start lg:items-center w-full justify-between px-4 lg:px-0 text-[#DEDBF2]">
                  <div className="flex items-center space-x-3 w-full lg:w-[30%]">
                    <button className="text-[#757384]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex items-cener space-x-2 cursor-pointer">
                      <img
                        className="w-[30px] h-[30px]"
                        alt=""
                        src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WETH.png"
                      />
                      <div className="flex items-center space-x-1.5">
                        <p className="text-[#DEDBF2] text-[17px] leading-5 font-medium">
                          Wrapped Ether
                        </p>
                        <p className="text-sm leading-[17px] text-[#B8B6CB]">
                          WETH
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Price
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$2,484</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Change
                    </p>
                    <div className="leading-5 w-full">
                      <div className="px-2 py-1 leading-5 text-[15px] table rounded-md bg-[#51B961] bg-opacity-10 text-[#51B961]">
                        +1.64%
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$8,076,152</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Liquidity
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$9,245,606</div>
                  </div>
                </div>
                <div className="lg:pt-7 pt-[17px] border-b lg:border-b-0 border-[#df832f] pb-2.5 lg:pb-0 flex flex-wrap lg:flex-nowrap items-start lg:items-center w-full justify-between px-4 lg:px-0 text-[#DEDBF2]">
                  <div className="flex items-center space-x-3 w-full lg:w-[30%]">
                    <button className="text-[#757384]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex items-cener space-x-2 cursor-pointer">
                      <img
                        className="w-[30px] h-[30px]"
                        alt=""
                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
                      />
                      <div className="flex items-center space-x-1.5">
                        <p className="text-[#DEDBF2] text-[17px] leading-5 font-medium">
                          USDC
                        </p>
                        <p className="text-sm leading-[17px] text-[#B8B6CB]">
                          USDC
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Price
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$0.999</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Change
                    </p>
                    <div className="leading-5 w-full">
                      <div className="px-2 py-1 leading-5 text-[15px] table rounded-md bg-[#CF3A41] bg-opacity-10 text-[#CF3A41]">
                        -0.013%
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$5,256,792</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Liquidity
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$3,232,661</div>
                  </div>
                </div>
                <div className="lg:pt-7 pt-[17px] border-b lg:border-b-0 border-[#df832f] pb-2.5 lg:pb-0 flex flex-wrap lg:flex-nowrap items-start lg:items-center w-full justify-between px-4 lg:px-0 text-[#DEDBF2]">
                  <div className="flex items-center space-x-3 w-full lg:w-[30%]">
                    <button className="text-[#757384]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex items-cener space-x-2 cursor-pointer">
                      <img
                        className="w-[30px] h-[30px]"
                        alt=""
                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                      />
                      <div className="flex items-center space-x-1.5">
                        <p className="text-[#DEDBF2] text-[17px] leading-5 font-medium">
                          Tether USD
                        </p>
                        <p className="text-sm leading-[17px] text-[#B8B6CB]">
                          USDT
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Price
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$0.999</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Change
                    </p>
                    <div className="leading-5 w-full">
                      <div className="px-2 py-1 leading-5 text-[15px] table rounded-md bg-[#CF3A41] bg-opacity-10 text-[#CF3A41]">
                        -0.031%
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$2,764,518</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Liquidity
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$1,808,640</div>
                  </div>
                </div>
                <div className="lg:pt-7 pt-[17px] border-b lg:border-b-0 border-[#df832f] pb-2.5 lg:pb-0 flex flex-wrap lg:flex-nowrap items-start lg:items-center w-full justify-between px-4 lg:px-0 text-[#DEDBF2]">
                  <div className="flex items-center space-x-3 w-full lg:w-[30%]">
                    <button className="text-[#757384]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex items-cener space-x-2 cursor-pointer">
                      <img
                        className="w-[30px] h-[30px]"
                        alt=""
                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/3717.png"
                      />
                      <div className="flex items-center space-x-1.5">
                        <p className="text-[#DEDBF2] text-[17px] leading-5 font-medium">
                          Wrapped BTC
                        </p>
                        <p className="text-sm leading-[17px] text-[#B8B6CB]">
                          WBTC
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Price
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$63,462</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Change
                    </p>
                    <div className="leading-5 w-full">
                      <div className="px-2 py-1 leading-5 text-[15px] table rounded-md bg-[#51B961] bg-opacity-10 text-[#51B961]">
                        +1.58%
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$1,076,180</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Liquidity
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$1,174,782</div>
                  </div>
                </div>
                <div className="lg:pt-7 pt-[17px] border-b lg:border-b-0 border-[#df832f] pb-2.5 lg:pb-0 flex flex-wrap lg:flex-nowrap items-start lg:items-center w-full justify-between px-4 lg:px-0 text-[#DEDBF2]">
                  <div className="flex items-center space-x-3 w-full lg:w-[30%]">
                    <button className="text-[#757384]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex items-cener space-x-2 cursor-pointer">
                      <img
                        className="w-[30px] h-[30px]"
                        alt=""
                        src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/ezETH.png"
                      />
                      <div className="flex items-center space-x-1.5">
                        <p className="text-[#DEDBF2] text-[17px] leading-5 font-medium">
                          Renzo Restaked ETH
                        </p>
                        <p className="text-sm leading-[17px] text-[#B8B6CB]">
                          ezETH
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Price
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$2,533</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Change
                    </p>
                    <div className="leading-5 w-full">
                      <div className="px-2 py-1 leading-5 text-[15px] table rounded-md bg-[#51B961] bg-opacity-10 text-[#51B961]">
                        +1.64%
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$444,649</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Liquidity
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$522,571</div>
                  </div>
                </div>
                <div className="lg:pt-7 pt-[17px] border-b lg:border-b-0 border-[#df832f] pb-2.5 lg:pb-0 flex flex-wrap lg:flex-nowrap items-start lg:items-center w-full justify-between px-4 lg:px-0 text-[#DEDBF2]">
                  <div className="flex items-center space-x-3 w-full lg:w-[30%]">
                    <button className="text-[#757384]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex items-cener space-x-2 cursor-pointer">
                      <img
                        className="w-[30px] h-[30px]"
                        alt=""
                        src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/ZERO.png"
                      />
                      <div className="flex items-center space-x-1.5">
                        <p className="text-[#DEDBF2] text-[17px] leading-5 font-medium">
                          ZeroLend
                        </p>
                        <p className="text-sm leading-[17px] text-[#B8B6CB]">
                          ZERO
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Price
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$&lt; 0.001</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Change
                    </p>
                    <div className="leading-5 w-full">
                      <div className="px-2 py-1 leading-5 text-[15px] table rounded-md bg-[#CF3A41] bg-opacity-10 text-[#CF3A41]">
                        -10.19%
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$331,818</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Liquidity
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$338,745</div>
                  </div>
                </div>
                <div className="lg:pt-7 pt-[17px] border-b lg:border-b-0 border-[#df832f] pb-2.5 lg:pb-0 flex flex-wrap lg:flex-nowrap items-start lg:items-center w-full justify-between px-4 lg:px-0 text-[#DEDBF2]">
                  <div className="flex items-center space-x-3 w-full lg:w-[30%]">
                    <button className="text-[#757384]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex items-cener space-x-2 cursor-pointer">
                      <img
                        className="w-[30px] h-[30px]"
                        alt=""
                        src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/weETH.png"
                      />
                      <div className="flex items-center space-x-1.5">
                        <p className="text-[#DEDBF2] text-[17px] leading-5 font-medium">
                          Wrapped eETH
                        </p>
                        <p className="text-sm leading-[17px] text-[#B8B6CB]">
                          weETH
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Price
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$2,607</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Change
                    </p>
                    <div className="leading-5 w-full">
                      <div className="px-2 py-1 leading-5 text-[15px] table rounded-md bg-[#51B961] bg-opacity-10 text-[#51B961]">
                        +1.66%
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$268,456</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Liquidity
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$518,581</div>
                  </div>
                </div>
                <div className="lg:pt-7 pt-[17px] border-b lg:border-b-0 border-[#df832f] pb-2.5 lg:pb-0 flex flex-wrap lg:flex-nowrap items-start lg:items-center w-full justify-between px-4 lg:px-0 text-[#DEDBF2]">
                  <div className="flex items-center space-x-3 w-full lg:w-[30%]">
                    <button className="text-[#757384]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex items-cener space-x-2 cursor-pointer">
                      <img
                        className="w-[30px] h-[30px]"
                        alt=""
                        src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/FOXY.png"
                      />
                      <div className="flex items-center space-x-1.5">
                        <p className="text-[#DEDBF2] text-[17px] leading-5 font-medium">
                          Foxy
                        </p>
                        <p className="text-sm leading-[17px] text-[#B8B6CB]">
                          FOXY
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Price
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$0.007</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Change
                    </p>
                    <div className="leading-5 w-full">
                      <div className="px-2 py-1 leading-5 text-[15px] table rounded-md bg-[#51B961] bg-opacity-10 text-[#51B961]">
                        +4.69%
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$157,773</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Liquidity
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$1,838,457</div>
                  </div>
                </div>
                <div className="lg:pt-7 pt-[17px] border-b lg:border-b-0 border-[#df832f] pb-2.5 lg:pb-0 flex flex-wrap lg:flex-nowrap items-start lg:items-center w-full justify-between px-4 lg:px-0 text-[#DEDBF2]">
                  <div className="flex items-center space-x-3 w-full lg:w-[30%]">
                    <button className="text-[#757384]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex items-cener space-x-2 cursor-pointer">
                      <img
                        className="w-[30px] h-[30px]"
                        alt=""
                        src="https://app.lynex.fi/logo.png"
                      />
                      <div className="flex items-center space-x-1.5">
                        <p className="text-[#DEDBF2] text-[17px] leading-5 font-medium">
                          Lynex
                        </p>
                        <p className="text-sm leading-[17px] text-[#B8B6CB]">
                          LYNX
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Price
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$0.049</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Change
                    </p>
                    <div className="leading-5 w-full">
                      <div className="px-2 py-1 leading-5 text-[15px] table rounded-md bg-[#CF3A41] bg-opacity-10 text-[#CF3A41]">
                        -0.329%
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$33,431</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Liquidity
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$534,635</div>
                  </div>
                </div>
                <div className="lg:pt-7 pt-[17px] pb-2.5 lg:pb-0 flex flex-wrap lg:flex-nowrap items-start lg:items-center w-full justify-between px-4 lg:px-0 text-[#DEDBF2]">
                  <div className="flex items-center space-x-3 w-full lg:w-[30%]">
                    <button className="text-[#757384]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex items-cener space-x-2 cursor-pointer">
                      <img
                        className="w-[30px] h-[30px]"
                        alt=""
                        src="https://cryptologos.cc/logos/steth-steth-logo.png"
                      />
                      <div className="flex items-center space-x-1.5">
                        <p className="text-[#DEDBF2] text-[17px] leading-5 font-medium">
                          Wrapped liquid staked Ether 2.0
                        </p>
                        <p className="text-sm leading-[17px] text-[#B8B6CB]">
                          wstETH
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Price
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$2,932</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Change
                    </p>
                    <div className="leading-5 w-full">
                      <div className="px-2 py-1 leading-5 text-[15px] table rounded-md bg-[#51B961] bg-opacity-10 text-[#51B961]">
                        +1.65%
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$32,962</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Liquidity
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$556,022</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-[30px] md:mt-[50px]">
              <div className="w-full flex items-center justify-between">
                <p className="text-[22px] md:text-[27px] leading-8 text-white f-f-fg font-medium">
                  Top Pairs
                </p>
                <div className="flex items-center space-x-3.5 cursor-pointer group">
                  <span className="text-lg text-themeOrange">See All</span>
                  <img
                    className="group-hover:w-[40px] w-[30px] duration-300 ease-in-out"
                    src="https://app.lynex.fi/images/common/spear.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full border border-[#ffffff33] bg-white/10 rounded-[10px] lg:px-6 pb-2.5 lg:pb-6 pt-4 mt-3.5">
                <div className="lg:flex justify-between hidden text-white f-f-fg font-medium text-[17px] xl:text-[18px] pb-3.5 border-b border-[#ffffff33]">
                  <div className="w-[30%]">
                    <button className="flex items-center space-x-[3px]">
                      <span className="">Name</span>
                    </button>
                  </div>
                  <div className="w-[15%]">
                    <button className="flex items-center space-x-[3px]">
                      <span className="text-themeOrange">Liquidity</span>
                      <svg
                        className="text-themeOrange"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <g id="arrow-bottom" transform="translate(-368 -325)">
                          <rect
                            id="Rectangle_9736"
                            data-name="Rectangle 9736"
                            width="16"
                            height="16"
                            transform="translate(368 325)"
                            fill="none"
                          ></rect>
                          <path
                            id="svgexport-9"
                            d="M16,10,14.942,8.943,10.75,13.127V4H9.25v9.127L5.065,8.935,4,10l6,6Z"
                            transform="translate(366 323)"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                  <div className="w-[15%]">
                    <button className="flex items-center space-x-[3px]">
                      <span className="">24H Volume</span>
                    </button>
                  </div>
                  <div className="w-[15%]">
                    <button className="flex items-center space-x-[3px]">
                      <span className="">7D Volume</span>
                    </button>
                  </div>
                  <div className="w-[15%]">
                    <button className="flex items-center space-x-[3px]">
                      <span className="">24H Fees</span>
                    </button>
                  </div>
                </div>
                <div className="lg:pt-5 border-b lg:border-b-0 border-[#df832f] pb-2.5 lg:pb-0 flex flex-wrap lg:flex-nowrap items-start lg:items-center w-full justify-between px-4 lg:px-0 text-[#DEDBF2]">
                  <div className="flex items-center space-x-3 w-full lg:w-[30%]">
                    <button className="text-[#757384]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex items-center space-x-1.5 cursor-pointer">
                      <div className="flex items-cener space-x-2">
                        <div className="flex items-center -space-x-4">
                          <img
                            className="w-[30px] h-[30px] z-20"
                            alt=""
                            src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/FOXY.png"
                          />
                          <img
                            className="w-[30px] h-[30px] z-10"
                            alt=""
                            src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WETH.png"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[#DEDBF2] text-[17px] leading-5 font-medium">
                            FOXY/WETH
                          </p>
                        </div>
                      </div>
                      <div className="py-1 px-2 rounded-md bg-white bg-opacity-[0.07] leading-4 text-sm">
                        1.0222% Fee
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Liquidity
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$3,066,487</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$156,292</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      7D Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$775,607</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Fees
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$1,591</div>
                  </div>
                </div>
                <div className="lg:pt-7 pt-[17px] border-b lg:border-b-0 border-[#df832f] pb-2.5 lg:pb-0 flex flex-wrap lg:flex-nowrap items-start lg:items-center w-full justify-between px-4 lg:px-0 text-[#DEDBF2]">
                  <div className="flex items-center space-x-3 w-full lg:w-[30%]">
                    <button className="text-[#757384]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex items-center space-x-1.5 cursor-pointer">
                      <div className="flex items-cener space-x-2">
                        <div className="flex items-center -space-x-4">
                          <img
                            className="w-[30px] h-[30px] z-20"
                            alt=""
                            src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/weETH.png"
                          />
                          <img
                            className="w-[30px] h-[30px] z-10"
                            alt=""
                            src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WETH.png"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[#DEDBF2] text-[17px] leading-5 font-medium">
                            weETH/WETH
                          </p>
                        </div>
                      </div>
                      <div className="py-1 px-2 rounded-md bg-white bg-opacity-[0.07] leading-4 text-sm">
                        0.009% Fee
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Liquidity
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$2,976,448</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$268,451</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      7D Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$2,657,582</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Fees
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$24.16</div>
                  </div>
                </div>
                <div className="lg:pt-7 pt-[17px] border-b lg:border-b-0 border-[#df832f] pb-2.5 lg:pb-0 flex flex-wrap lg:flex-nowrap items-start lg:items-center w-full justify-between px-4 lg:px-0 text-[#DEDBF2]">
                  <div className="flex items-center space-x-3 w-full lg:w-[30%]">
                    <button className="text-[#757384]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex items-center space-x-1.5 cursor-pointer">
                      <div className="flex items-cener space-x-2">
                        <div className="flex items-center -space-x-4">
                          <img
                            className="w-[30px] h-[30px] z-20"
                            alt=""
                            src="https://s2.coinmarketcap.com/static/img/coins/64x64/3717.png"
                          />
                          <img
                            className="w-[30px] h-[30px] z-10"
                            alt=""
                            src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WETH.png"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[#DEDBF2] text-[17px] leading-5 font-medium">
                            WBTC/WETH
                          </p>
                        </div>
                      </div>
                      <div className="py-1 px-2 rounded-md bg-white bg-opacity-[0.07] leading-4 text-sm">
                        0.0526% Fee
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Liquidity
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$2,377,458</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$1,040,818</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      7D Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$4,877,734</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Fees
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$536.84</div>
                  </div>
                </div>
                <div className="lg:pt-7 pt-[17px] border-b lg:border-b-0 border-[#df832f] pb-2.5 lg:pb-0 flex flex-wrap lg:flex-nowrap items-start lg:items-center w-full justify-between px-4 lg:px-0 text-[#DEDBF2]">
                  <div className="flex items-center space-x-3 w-full lg:w-[30%]">
                    <button className="text-[#757384]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex items-center space-x-1.5 cursor-pointer">
                      <div className="flex items-cener space-x-2">
                        <div className="flex items-center -space-x-4">
                          <img
                            className="w-[30px] h-[30px] z-20"
                            alt=""
                            src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
                          />
                          <img
                            className="w-[30px] h-[30px] z-10"
                            alt=""
                            src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WETH.png"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[#DEDBF2] text-[17px] leading-5 font-medium">
                            USDC/WETH
                          </p>
                        </div>
                      </div>
                      <div className="py-1 px-2 rounded-md bg-white bg-opacity-[0.07] leading-4 text-sm">
                        0.0935% Fee
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Liquidity
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$2,110,464</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$4,031,736</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      7D Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$31,216,973</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Fees
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$3,048</div>
                  </div>
                </div>
                <div className="lg:pt-7 pt-[17px] border-b lg:border-b-0 border-[#df832f] pb-2.5 lg:pb-0 flex flex-wrap lg:flex-nowrap items-start lg:items-center w-full justify-between px-4 lg:px-0 text-[#DEDBF2]">
                  <div className="flex items-center space-x-3 w-full lg:w-[30%]">
                    <button className="text-[#757384]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex items-center space-x-1.5 cursor-pointer">
                      <div className="flex items-cener space-x-2">
                        <div className="flex items-center -space-x-4">
                          <img
                            className="w-[30px] h-[30px] z-20"
                            alt=""
                            src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
                          />
                          <img
                            className="w-[30px] h-[30px] z-10"
                            alt=""
                            src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[#DEDBF2] text-[17px] leading-5 font-medium">
                            USDC/USDT
                          </p>
                        </div>
                      </div>
                      <div className="py-1 px-2 rounded-md bg-white bg-opacity-[0.07] leading-4 text-sm">
                        0.005% Fee
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Liquidity
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$2,043,378</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$1,151,408</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      7D Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$9,158,296</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Fees
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$57.57</div>
                  </div>
                </div>
                <div className="lg:pt-7 pt-[17px] border-b lg:border-b-0 border-[#df832f] pb-2.5 lg:pb-0 flex flex-wrap lg:flex-nowrap items-start lg:items-center w-full justify-between px-4 lg:px-0 text-[#DEDBF2]">
                  <div className="flex items-center space-x-3 w-full lg:w-[30%]">
                    <button className="text-[#757384]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex items-center space-x-1.5 cursor-pointer">
                      <div className="flex items-cener space-x-2">
                        <div className="flex items-center -space-x-4">
                          <img
                            className="w-[30px] h-[30px] z-20"
                            alt=""
                            src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/ezETH.png"
                          />
                          <img
                            className="w-[30px] h-[30px] z-10"
                            alt=""
                            src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WETH.png"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[#DEDBF2] text-[17px] leading-5 font-medium">
                            ezETH/WETH
                          </p>
                        </div>
                      </div>
                      <div className="py-1 px-2 rounded-md bg-white bg-opacity-[0.07] leading-4 text-sm">
                        0.009% Fee
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Liquidity
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$1,137,385</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$444,634</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      7D Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$3,049,625</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Fees
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$40.01</div>
                  </div>
                </div>
                <div className="lg:pt-7 pt-[17px] border-b lg:border-b-0 border-[#df832f] pb-2.5 lg:pb-0 flex flex-wrap lg:flex-nowrap items-start lg:items-center w-full justify-between px-4 lg:px-0 text-[#DEDBF2]">
                  <div className="flex items-center space-x-3 w-full lg:w-[30%]">
                    <button className="text-[#757384]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex items-center space-x-1.5 cursor-pointer">
                      <div className="flex items-cener space-x-2">
                        <div className="flex items-center -space-x-4">
                          <img
                            className="w-[30px] h-[30px] z-20"
                            alt=""
                            src="https://cryptologos.cc/logos/steth-steth-logo.png"
                          />
                          <img
                            className="w-[30px] h-[30px] z-10"
                            alt=""
                            src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WETH.png"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[#DEDBF2] text-[17px] leading-5 font-medium">
                            wstETH/WETH
                          </p>
                        </div>
                      </div>
                      <div className="py-1 px-2 rounded-md bg-white bg-opacity-[0.07] leading-4 text-sm">
                        0.009% Fee
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Liquidity
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$971,054</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$32,902</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      7D Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$230,635</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Fees
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$2.96</div>
                  </div>
                </div>
                <div className="lg:pt-7 pt-[17px] border-b lg:border-b-0 border-[#df832f] pb-2.5 lg:pb-0 flex flex-wrap lg:flex-nowrap items-start lg:items-center w-full justify-between px-4 lg:px-0 text-[#DEDBF2]">
                  <div className="flex items-center space-x-3 w-full lg:w-[30%]">
                    <button className="text-[#757384]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex items-center space-x-1.5 cursor-pointer">
                      <div className="flex items-cener space-x-2">
                        <div className="flex items-center -space-x-4">
                          <img
                            className="w-[30px] h-[30px] z-20"
                            alt=""
                            src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                          />
                          <img
                            className="w-[30px] h-[30px] z-10"
                            alt=""
                            src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WETH.png"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[#DEDBF2] text-[17px] leading-5 font-medium">
                            USDT/WETH
                          </p>
                        </div>
                      </div>
                      <div className="py-1 px-2 rounded-md bg-white bg-opacity-[0.07] leading-4 text-sm">
                        0.0924% Fee
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Liquidity
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$968,447</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$1,607,987</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      7D Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$12,698,824</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Fees
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$1,200</div>
                  </div>
                </div>
                <div className="lg:pt-7 pt-[17px] border-b lg:border-b-0 border-[#df832f] pb-2.5 lg:pb-0 flex flex-wrap lg:flex-nowrap items-start lg:items-center w-full justify-between px-4 lg:px-0 text-[#DEDBF2]">
                  <div className="flex items-center space-x-3 w-full lg:w-[30%]">
                    <button className="text-[#757384]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex items-center space-x-1.5 cursor-pointer">
                      <div className="flex items-cener space-x-2">
                        <div className="flex items-center -space-x-4">
                          <img
                            className="w-[30px] h-[30px] z-20"
                            alt=""
                            src="https://app.lynex.fi/logo.png"
                          />
                          <img
                            className="w-[30px] h-[30px] z-10"
                            alt=""
                            src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WETH.png"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[#DEDBF2] text-[17px] leading-5 font-medium">
                            LYNX/WETH
                          </p>
                        </div>
                      </div>
                      <div className="py-1 px-2 rounded-md bg-white bg-opacity-[0.07] leading-4 text-sm">
                        1.25% Fee
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Liquidity
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$805,596</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$10,933</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      7D Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$125,037</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Fees
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$136.67</div>
                  </div>
                </div>
                <div className="lg:pt-7 pt-[17px] pb-2.5 lg:pb-0 flex flex-wrap lg:flex-nowrap items-start lg:items-center w-full justify-between px-4 lg:px-0 text-[#DEDBF2]">
                  <div className="flex items-center space-x-3 w-full lg:w-[30%]">
                    <button className="text-[#757384]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star-filled"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path
                          d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                          strokeWidth="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                    <div className="flex items-center space-x-1.5 cursor-pointer">
                      <div className="flex items-cener space-x-2">
                        <div className="flex items-center -space-x-4">
                          <img
                            className="w-[30px] h-[30px] z-20"
                            alt=""
                            src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/ZERO.png"
                          />
                          <img
                            className="w-[30px] h-[30px] z-10"
                            alt=""
                            src="https://raw.githubusercontent.com/Lynexfi/lynex-lists/main/tokens/assets/WETH.png"
                          />
                        </div>
                        <div className="flex items-center">
                          <p className="text-[#DEDBF2] text-[17px] leading-5 font-medium">
                            ZERO/WETH
                          </p>
                        </div>
                      </div>
                      <div className="py-1 px-2 rounded-md bg-white bg-opacity-[0.07] leading-4 text-sm">
                        1.0324% Fee
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      Liquidity
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$719,376</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[11px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$331,120</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      7D Volume
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$1,282,990</div>
                  </div>
                  <div className="w-1/2 lg:w-[15%] mt-[15px] lg:mt-0">
                    <p className="lg:hidden text-sm f-f-fg font-semibold">
                      24H Fees
                    </p>
                    <div className="text-[#DEDBF2] leading-5">$3,504</div>
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

export default Analytics;

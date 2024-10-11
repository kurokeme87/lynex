import { Link } from "react-router-dom";

import { useState } from "react";
import ConnectButton from "./ConnectButton";

const Navbar = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <div className="header-wrap fixed w-full z-[120]">
        {showHeader && (
          <div className="banner justify-between items-center z-500">
            <div className="flex flex-col md:flex-row w-full justify-center items-center text-xs md:text-sm">
              <p className="md:mr-4 text-center mb-2 md:mb-0">
                Lynex joins
                <span className="font-bold">Linea&apos;s SURGE program</span>.
                Add liquidity, earn <span className="font-bold">LXP-L</span>{" "}
                points.
              </p>
              <div className="font-medium flex flex-row flex-wrap justify-center">
                <a
                  className="underline underline-offset-2"
                  href="https://referrals.linea.build/?refCode=oGi7YJuUKT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="mr-0 md:mr-2">Learn More</p>
                </a>
              </div>
            </div>
            <img
              onClick={() => {
                setShowHeader(false);
              }}
              src="https://app.lynex.fi/images/common/close-button2.svg"
              alt="Close"
              className="cursor-pointer w-6 h-6 ml-6"
            />
          </div>
        )}
        <div className="bg-transparent transition-all duration-300 ease-in-out">
          <div className="header px-4 2xl:px-12 py-6">
            <Link to="/">
              <img
                className="logo relative z-10"
                alt="Logo"
                src="https://app.lynex.fi/images/header/logo.svg"
              />
            </Link>
            <ul className="navigation absolute z-20 justify-center hidden xl:flex items-center w-[calc(100vw-120px)]">
              <li className="links">
                <Link className="text-sky" to="/">
                  SWAP
                </Link>
              </li>
              <li className="links">
                <Link className="font-light special" to="/single">
                  SINGLE DEPOSITS
                </Link>
              </li>
              <li className="links">
                <Link className="font-light undefined" to="/liquidity">
                  POOLS
                </Link>
              </li>
              <li className="links">
                <div className="relative">
                  <div className="flex items-center space-x-1 cursor-pointer relative z-10 font-light text-white">
                    <span>MANAGE</span>
                    <img
                      onMouseEnter={() => {
                        setDropdown(true);
                      }}
                      onMouseLeave={() => {
                        setDropdown(false);
                      }}
                      alt="dropdown"
                      src="https://app.lynex.fi/images/header/dropdown-arrow.svg"
                      className="hover:rotate-180 transition-all duration-150 ease-in-out"
                    />
                  </div>
                </div>
              </li>
              <li className="links">
                <div className="relative">
                  <div className="flex items-center space-x-1 cursor-pointer relative z-10 font-light text-white">
                    <span>MORE</span>
                    <img
                      alt="dropdown"
                      src="https://app.lynex.fi/images/header/dropdown-arrow.svg"
                      className="hover:rotate-180 transition-all duration-150 ease-in-out"
                    />
                  </div>
                </div>
              </li>
            </ul>
            <div className="tracking-[2px] xl:px-[25px] xl:tracking-[2px] items-center font-semibold text-white text-sm md:text-sm relative z-20 xl:text-base mobile-btn f-f-fg hidden xl:flex">
              <div className="line1"></div>
              <div className="line2"></div>
              <div>
                <ConnectButton />
              </div>
            </div>
            <button className="bg-transparent w-8 xl:hidden">
              <img
                alt="Menu"
                src="https://app.lynex.fi/images/header/hamburger-menu.png"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="top-bg !z-[1000] xl:hidden top-minus">
        <div className="inner-tab">
          <div className="top-navigation">
            <a href="/">
              <img
                className="logo-2"
                alt="Logo"
                src="https://app.lynex.fi/images/header/logo.svg"
              />
            </a>
            <div className="closeButton">
              <img
                alt="Close"
                src="https://app.lynex.fi/images/common/close-button2.svg"
              />
            </div>
          </div>
          <div className="bottom-navigation w-full">
            <ul className="flex flex-col items-center justify-center">
              <li className="links">
                <a className="text-sky no-link text-white" href="/swap">
                  SWAP
                </a>
              </li>
              <li className="links">
                <a className="false no-link text-white" href="/singlesided">
                  SINGLE DEPOSITS
                </a>
              </li>
              <li className="links">
                <a className="false no-link text-white" href="/liquidity">
                  POOLS
                </a>
              </li>
              <li className="links">
                <div>
                  <div className="relative">
                    <div className="flex items-center space-x-1 cursor-pointer relative z-10 font-light text-white">
                      <span>MANAGE</span>
                      <img
                        alt="dropdown"
                        src="https://app.lynex.fi/images/header/dropdown-arrow.svg"
                        className="hover:rotate-180 transition-all duration-150 ease-in-out"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className="links">
                <div>
                  <div className="relative">
                    <div className="flex items-center space-x-1 cursor-pointer relative z-10 font-light text-white">
                      <span>MORE</span>
                      <img
                        alt="dropdown"
                        src="https://app.lynex.fi/images/header/dropdown-arrow.svg"
                        className="hover:rotate-180 transition-all duration-150 ease-in-out"
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mobile-btn f-f-fg">
              <div className="line1"></div>
              <div className="line2"></div>
              <div>
                <button type="button">CONNECT WALLET</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import noise from "../assets/noise.png";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../components/ui/sheet";
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="bg-transparent  w-8 xl:hidden">
        <img
          alt="Menu"
          src="https://app.lynex.fi/images/header/hamburger-menu.png"
        />
      </SheetTrigger>
      <SheetContent
        className="font-montserrat top-bg bg-[url(https://app.lynex.fi/static/media/noise.3185573bb8d6f7773fe3.png)] !z-[1000] xl:hidden top-0"
        side="top"
      >
        <div
          className={`top-bg bg-[url(https://app.lynex.fi/static/media/noise.3185573bb8d6f7773fe3.png)] !z-[1000] xl:hidden top-0`}
        >
          <div className="inner-tab">
            <div className="top-navigation">
              <a href="/">
                <img
                  className="logo-2"
                  alt=""
                  src="https://app.lynex.fi/images/header/logo.svg"
                />
              </a>
              <SheetClose className="closeButton">
                <img
                  alt=""
                  src="https://app.lynex.fi/images/common/close-button2.svg"
                />
              </SheetClose>
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
                          className="rotate-180 transition-all duration-150 ease-in-out"
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
                          className="rotate-180 transition-all duration-150 ease-in-out"
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
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

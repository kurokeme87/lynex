const Footer = () => {
  return (
    <div id="footer" className="footer-wrap">
      <img
        className="invisible hidden sm:visible sm:block absolute left-10 bottom-0 pt-6 max-w-[550px]"
        src="https://app.lynex.fi/images/footer/bg-footer.svg"
      />
      <div className="upper-footer-wrapper">
        <div className="info">
          <p className="heading">The Native Liquidity Layer Of Linea</p>
          <p>
            Step into the heart of Linea&apos;s intrinsic on-chain liquidity
            marketplace. Driven by state-of-the-art DEX infrastructure, we
            present an exceptionally efficient DeFi solution. Immerse yourself
            in the capabilities of Lynex now!
          </p>
        </div>
        <div className="links">
          <div className="column">
            <p className="heading">Other</p>
            <a className="link" href="/">
              Home
            </a>
            <a className="link" href="/swap">
              Swap
            </a>
            <a className="link" href="/liquidity">
              Liquidity
            </a>
          </div>
          <div className="column">
            <p className="heading">More of Lynex</p>
            <div className="link hover:underline" id="subitem-0">
              Docs
            </div>
            <div className="link hover:underline" id="subitem-1">
              Legal Disclaimer
            </div>
          </div>
        </div>
      </div>
      <div className="lower-footer-wrapper">
        <div className="flex space-x-4">
          <img src="https://app.lynex.fi/images/header/logo.svg" width="110" />
          <img
            src="https://app.lynex.fi/images/footer/consensys.svg"
            width="110"
          />
        </div>
        <p>Copyright © 2024 Lynex. All rights reserved.</p>
        <div className="flex items-center space-x-[14px]">
          <a
            href="https://twitter.com/LynexFi"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              className="max-w-[36px] text-themeOrange text-[36px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"></path>
            </svg>
          </a>
          <a
            href="https://medium.com/@lynexfi"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              className="max-w-[36px] text-themeOrange text-[36px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM768 317.7l-40.8 39.1c-3.6 2.7-5.3 7.1-4.6 11.4v287.7c-.7 4.4 1 8.8 4.6 11.4l40 39.1v8.7H566.4v-8.3l41.3-40.1c4.1-4.1 4.1-5.3 4.1-11.4V422.5l-115 291.6h-15.5L347.5 422.5V618c-1.2 8.2 1.7 16.5 7.5 22.4l53.8 65.1v8.7H256v-8.7l53.8-65.1a26.1 26.1 0 0 0 7-22.4V392c.7-6.3-1.7-12.4-6.5-16.7l-47.8-57.6V309H411l114.6 251.5 100.9-251.3H768v8.5z"></path>
            </svg>
          </a>
          <a
            href="https://discord.gg/3BFkJjPmB3"
            rel="noreferrer"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 640 512"
              className="max-w-[36px] text-themeOrange text-[36px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
            </svg>
          </a>
          <a href="https://t.me/lynexfi" rel="noreferrer" target="_blank">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 496 512"
              className="max-w-[36px] text-themeOrange text-[36px]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

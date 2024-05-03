import React from "react";
import { BiLogoTelegram, BiLogoTwitter, BiLogoDiscordAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="container mx-auto mt-[100px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-[90px]">
          <p className="font-satoshi">© Creon 2023. All rights reserved.</p>
          <div className="flex gap-[10px]">
            <div className="icon-wrapper">
              <BiLogoTelegram color="white" size={18}/>
            </div>
            <div className="icon-wrapper">
              <BiLogoTwitter color="white" size={18}/>
            </div>
            <div className="icon-wrapper">
              <BiLogoDiscordAlt color="white" size={18}/>
            </div>
          </div>
        </div>
        <p className="font-satoshi">
          Powered by <span className="uppercase font-bold">Niftables</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

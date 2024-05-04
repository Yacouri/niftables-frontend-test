import Link from "next/link";
import React from "react";
import {
  BiLogoTelegram,
  BiLogoTwitter,
  BiLogoDiscordAlt,
} from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="container mx-auto mt-[100px] mb-7">
      <div className="flex justify-between items-center flex-col md:flex-row">
        <div className="flex items-center md:gap-[90px] gap-[10px] flex-col-reverse md:flex-row ">
          <p className="font-satoshi">© Creon 2023. All rights reserved.</p>
          <div className="flex gap-[10px]">
            <Link href="#" className="icon-wrapper">
              <BiLogoTelegram color="white" size={18} />
            </Link>
            <Link href="#" className="icon-wrapper">
              <BiLogoTwitter color="white" size={18} />
            </Link>
            <Link href="#" className="icon-wrapper">
              <BiLogoDiscordAlt color="white" size={18} />
            </Link>
          </div>
        </div>
        <p className="font-satoshi mt-10 md:mt-0">
          Powered by <span className="uppercase font-bold">Niftables</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

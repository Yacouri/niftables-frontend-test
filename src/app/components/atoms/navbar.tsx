"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import CreonWhiteLogo from "@/assets/images/creaon-white.png";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { cn } from "@/lib/utils";
import {
  BiLogoDiscordAlt,
  BiLogoTelegram,
  BiLogoTwitter,
} from "react-icons/bi";

const Navbar = () => {
  const routes = [
    {
      label: "Creon Pass",
      href: "#",
      isSoon: false,
    },
    {
      label: "Token",
      href: "#",
      isSoon: true,
    },
    {
      label: "AI Revenue",
      href: "#",
      isSoon: true,
    },
    {
      label: "AI Launchpad",
      href: "#",
      isSoon: true,
    },
  ];
  const [open, setOpen] = useState<boolean>(false);
  const toggleSidebar = () => {
    setOpen(!open);
    return !open == true
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  };

  return (
    <nav className="flex justify-between items-center mx-3 md:mx-[50px] md:pt-[30px] font-satoshi">
      <div>
        <Image
          src={CreonWhiteLogo}
          alt="Creon white logo"
          width={140}
          height={39}
        />
      </div>
      <ul className="hidden md:flex md:gap-10">
        {routes.map(({ label, href, isSoon }, key) => (
          <li key={key} className="flex gap-1">
            <Link className="text-lg font-bold leading-[110%]" href={href}>
              {label}
            </Link>
            {isSoon && (
              <span className="flex bg-black text-primary text-[10px] rounded-full px-1 h-fit uppercase">
                soon
              </span>
            )}
          </li>
        ))}
        <li className="hidden md:block">
          <Link
            href="mailto:"
            className="text-lg leading-[110%] rounded-md border border-white px-[30px] py-3 transition-all bg-gradient-to-r hover:from-primary hover:border-primary"
          >
            Connect
          </Link>
        </li>
      </ul>
      {/* Mobile menu */}
      <aside className="relative flex gap-2 p-3 md:hidden">
        <div
          className={cn(
            "w-[250px] h-screen flex justify-between flex-col absolute -right-10 top-0 translate-x-[300px] transition-all bg-black p-[30px] pb-[50px]",
            open && "translate-x-0"
          )}
        >
          <ul className="flex flex-col gap-10 mt-20">
            {routes.map(({ label, href, isSoon }, key) => (
              <li key={key} className="flex gap-1">
                <Link className="text-lg font-bold leading-[110%]" href={href}>
                  {label}
                </Link>
                {isSoon && (
                  <span className="flex bg-black text-primary text-[10px] rounded-full px-1 h-fit uppercase">
                    soon
                  </span>
                )}
              </li>
            ))}
          </ul>
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
        <Link
          href="mailto:"
          className="text-lg leading-[110%] rounded-md border-2 border-white px-[25px] py-2 z-10"
        >
          Connect
        </Link>
        <button
          className="rounded-md border-2 border-white p-2 z-10"
          onClick={toggleSidebar}
        >
          {open ? <IoMdClose size={18} /> : <IoMenu size={18} />}
        </button>
      </aside>
    </nav>
  );
};

export default Navbar;

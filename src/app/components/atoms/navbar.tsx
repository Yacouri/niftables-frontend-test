import Image from "next/image";
import React from "react";
import CreonWhiteLogo from "@/assets/images/creaon-white.png";
import Link from "next/link";

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

  return (
    <nav className="flex justify-between items-center mx-[50px] pt-[30px] font-satoshi">
      <div>
        <Image
          src={CreonWhiteLogo}
          alt="Creon white logo"
          width={140}
          height={39}
        />
      </div>
      <ul className="flex gap-10">
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
        <li>
          {/*  */}
          <Link
            href="mailto:"
            className="text-lg leading-[110%] rounded-md border border-white px-[30px] py-3"
          >
            Connect
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

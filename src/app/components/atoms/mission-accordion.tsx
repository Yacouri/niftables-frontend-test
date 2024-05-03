"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import HexImage from "@/assets/images/hex.png";
import Image from "next/image";

type MissionProps = {
  mission: {
    title: string;
    description: string;
    icon: JSX.Element;
  };
};

const MissionAccordion = ({
  mission: { title, icon, description },
}: MissionProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex gap-[30px]">
      <div className="relative h-fit">
        <Image
          className="align-top absolute -z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={HexImage}
          alt=""
        />
        <div className="p-3">{icon}</div>
      </div>
      <div className="overflow-hidden mt-5">
        <div
          className="flex justify-between items-center w-full cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <h4 className="font-satoshi font-bold text-[22px]">{title}</h4>
          <GoChevronDown color="white" />
        </div>
        <div className={cn("h-0 transition-all mt-10", open && "h-[100px]")}>
          <p className="font-satoshi text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MissionAccordion;

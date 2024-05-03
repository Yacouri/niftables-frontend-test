"use client";

import React from "react";
import CreonImage from "@/assets/images/creon.png";
import Image from "next/image";
import { GoChevronDown } from "react-icons/go";
import { CirclesIcon, InfinityIcon, RocketIcon, StatsUpIcon } from "../icons";
import MissionAccordion from "../atoms/mission-accordion";

const OurMission = () => {
  const missions = [
    {
      title: "Profitability and growth",
      description:
        "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities.",
      icon: <StatsUpIcon />,
    },
    {
      title: "Transparent & Fair Decentralized Earnings",
      description:
        "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities.",
      icon: <CirclesIcon />,
    },
    {
      title: "Launching the future",
      description:
        "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities.",
      icon: <RocketIcon />,
    },
    {
      title: "Limitless Possibilities of AI & Crypto",
      description:
        "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities.",
      icon: <InfinityIcon />,
    },
  ];

  return (
    <section className="container mx-auto">
      <div className="relative grid grid-cols-2 gap-[100px]">
        <h3 className="text-[38px] leading-[120%] text-balance uppercase">
          Our vision is to support the innovation of AI blockchain projects
          <span className="ml-4 gradient-title">
            while prioritizing communities and democratizing profits
          </span>
          <Image
            src={CreonImage}
            alt="Creon"
            className="absolute right-1/2 -z-50 w-[700px]"
          />
        </h3>
        <div>
          <div>
            {missions.map((mission, key) => (
              <>
                <MissionAccordion mission={mission} key={key} />
                <hr className="border-t border-grey-line my-[20px]" />
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;

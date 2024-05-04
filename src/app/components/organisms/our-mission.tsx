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
      <div className="relative flex flex-col md:flex-row gap-[100px] overflow-hidden">
        <div className="basis-1/2">
          <h3 className="text-[22px] md:text-[38px] leading-[120%] text-balance uppercase">
            Our vision is to support the innovation of AI blockchain projects
            <span className="ml-4 gradient-bg">
              while prioritizing communities and democratizing profits
            </span>
          </h3>
          <Image
            src={CreonImage}
            alt="Creon"
            className="absolute left-[100px] bottom-auto md:bottom-0 -z-50 md:w-[700px]"
          />
        </div>
        <div className="basis-1/2 mt-20 md:mt-0">
          {missions.map((mission, key) => (
            <>
              <MissionAccordion mission={mission} key={key} />
              <hr className="border-t border-grey-line my-4 md:my-[20px]" />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMission;

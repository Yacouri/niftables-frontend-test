import React from "react";
import Navbar from "../atoms/navbar";

const Header = () => {
  return (
    <section className="relative">
      <div className="absolute -z-50">
        <div className="video-overlay w-full h-full top-0"></div>
        <video loop autoPlay muted>
          <source src="./main-background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <Navbar />
        <div className="container mx-auto grid grid-rows-2">
          <div className="row-start-2 my-[50px]">
            <h1 className="title text-balance">
              The world&apos;s first platform for Tokenizing AI blockchain
              projects
            </h1>
            <div className="mt-10 bg-gradient-to-r from-secondary to-primary py-px w-fit">
              <div className="bg-black py-2">
                <p className="gradient-text text-[22px] font-bold font-satoshi leading-[130%]">
                  Hold the Creon Pass NFT and earn passive income from AI Tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

import React from "react";

const Profiting = () => {
  return (
    <section className="container mx-auto my-[120px]">
      <div>
        <h1 className="title">Profiting through</h1>
        <h3 className="gradient-title text-right uppercase">
          Ai innovation & decentralization
        </h3>
      </div>
      <div className="grid grid-rows-2 grid-cols-1 items-center gap-5 md:gap-10 mt-0 md:mt-[80px] md:grid-cols-3 md:grid-rows-1">
        <div className="col-span-2">
          <div className="relative">
            <div className="video-overlay w-full h-full"></div>
            <video loop autoPlay muted className="rounded-md">
              <source src="./creon-logo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="border border-x-grey-line border-y-transparent px-[30px] h-full">
          <div className="flex flex-col justify-center items-center h-full gap-10">
            <h4 className="font-satoshi text-balance text-[22px] leading-[130%] font-bold">
              The dynamic community driven business model of the future.
            </h4>
            <p className="font-satoshi leading-[130%] text-lg ">
              At Creon, we blend the power of AI tools with the dynamic crypto
              and NFT markets, utilizing an innovative business model to drive
              profitability. This approach empowers our community, as our NFT
              and token holders directly benefit from the growth and prosperity
              of the Creon network, creating a win-win scenario for both our
              community and for the projects we launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profiting;

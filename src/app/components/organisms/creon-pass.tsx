import React from "react";

const CreonPass = () => {
  const creonPassFeatures = [
    "Pre-launch investment opportunities for upcoming AI projects",
    "Free and early access to Creon built AI projects",
    "Higher allocation limits on the Creon AI Launchpad",
    "Revenue share distribution from Creon built AI projects",
  ];

  return (
    <section className="container mx-auto my-20">
      <div className="flex gap-20 justify-center items-center flex-col md:flex-row md:gap-10">
        <div>
          <div>
            <h1 className="title uppercase">Creon pass nft</h1>
            <hr className="border-t border-grey-line my-[30px]" />
          </div>
          <p className="gradient-caption">
            The Creon NFT pass unlocks access to AI projects, the Creon
            launchpad, and a ticket to generate passive income through AI-driven
            tools
          </p>
          <div className="flex flex-col gap-[10px] mt-10">
            {creonPassFeatures.map((feature, key) => (
              <div
                className="px-[18px] pt-3 pb-4 rounded-md border border-grey-line w-fit text-lg"
                key={key}
              >
                <p className="font-satoshi leading-[130%]">{feature}</p>
              </div>
            ))}
          </div>
          <div className="mt-[72px]">
            <button className="w-full md:w-[453px] h-[54px] rounded-md bg-gradient-to-r from-secondary to-primary font-satoshi font-bold leading-[110%] hover:from-primary">
              Buy Creon Pass
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="nft-overlay"></div>
          <div className="video-overlay w-full h-full"></div>
          <video loop autoPlay muted className="w-full md:max-w-3xl">
            <source src="./nft-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default CreonPass;

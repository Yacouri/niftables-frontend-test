import React from "react";
import FeatureCard from "../atoms/feature-card";
import TokenFeatureImg from "@/assets/images/token-feature.png";
import RevenueFeatureImg from "@/assets/images/revenue-feature.png";
import LaunchpadFeatureImg from "@/assets/images/launchpadd-feature.png";

const ComingSoon = () => {
  const features = [
    {
      title: "Token",
      img: TokenFeatureImg,
      shortDescription: "The Gateway token to the world of AI",
      longDescription:
        "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
    },
    {
      title: "Revenue",
      img: RevenueFeatureImg,
      shortDescription: "Driving income and growth through decentralization",
      longDescription:
        "CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.",
    },
    {
      title: "Launchpadd",
      img: LaunchpadFeatureImg,
      shortDescription: "Driving the future of AI Innovation",
      longDescription:
        "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
    },
  ];

  return (
    <section className="container mx-auto md:my-[150px] my-[80px]">
      <div className="scrollable-wrapper">
        {features.map((feature, key) => (
            <FeatureCard feature={feature} key={key} />
          // <div className="w-fit relative p-10 bg-red-500 pt-10">
          //   <div className="absolute bg-yellow-500 p-2 -top-2 -right-2"></div>
          // </div>
        ))}
      </div>
    </section>
  );
};

export default ComingSoon;

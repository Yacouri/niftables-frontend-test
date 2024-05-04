import React from "react";
import AiChipImage from "@/assets/images/ai-chip.png";
import AiRobotImage from "@/assets/images/ai-robot.png";
import AiAtomImage from "@/assets/images/ai-atom.png";
import AiInfoCard from "../atoms/ai-info-card";

const AiInfos = () => {
  const infos = [
    {
      title: "AI Prospects, Market Size, and Development Pace",
      description:
        "The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.",
      img: AiChipImage,
    },
    {
      title: "AI Tools and Market",
      description:
        "AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.",
      img: AiRobotImage,
    },
    {
      title: "AI, Crypto, and NFT Market",
      description:
        "Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.",
      img: AiAtomImage,
    },
  ];
  return (
    <section className="relative">
      <div className="absolute -z-50">
        <div className="nft-overlay w-full top-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>
        <video loop autoPlay muted>
          <source src="./roadmap-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <div className="container mx-auto">
          <div className="relative flex md:flex-col w-full overflow-x-scroll md:overflow-hidden gap-3 md:gap-10 pt-10">
            {infos.map((info, key) => (
              <AiInfoCard info={info} key={key} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiInfos;

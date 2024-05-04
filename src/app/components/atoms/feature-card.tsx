import React from "react";
import Image, { StaticImageData } from "next/image";

type FeatureCardProps = {
  feature: {
    title: string;
    img: StaticImageData;
    shortDescription: string;
    longDescription: string;
  };
};

const FeatureCard = ({
  feature: { img, longDescription, shortDescription, title },
}: FeatureCardProps) => {
  return (
    <div className="feature-card relative bg-grey-line/60 rounded-md">
      <div className="md:px-[30px] md:pt-[30px] px-5 pt-5">
        <h2 className="text-xl md:text-[38px] font-bold leading-[120%] uppercase mb-[15px]">
          {title}
        </h2>
        <p className="gradient-caption w-[70%]">{shortDescription}</p>
      </div>
      <div className="pr-5 md:pr-[30px] mt-14">
        <Image src={img} alt={shortDescription} />
      </div>
      <div className="p-5 md:p-[30px]">
        <p className="font-satoshi text-lg leading-[130%]">{longDescription}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

import Image, { StaticImageData } from "next/image";
import React from "react";

type AiInfoProps = {
  info: {
    title: string;
    description: string;
    img: StaticImageData;
  };
};

const AiInfoCard = ({ info: { title, description, img } }: AiInfoProps) => {
  return (
    <div className="bg-grey-line/60 rounded-md">
      <div className="grid grid-cols-4">
        <div className="col-span-3 p-10">
          <h2 className="text-[38px] mb-[15px] leading-[120%]">{title}</h2>
          <p className="font-satoshi leading-[130%] text-lg">{description}</p>
        </div>
        <div>
          <Image src={img} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default AiInfoCard;

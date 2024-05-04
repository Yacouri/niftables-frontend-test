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
    <div className="bg-grey-line/60 rounded-md min-w-[80%]">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="basis-full md:basis-3/4 p-5 md:p-10">
          <h2 className="text-[22px] md:text-[38px] mb-[15px] leading-[120%]">
            {title}
          </h2>
          <p className="font-satoshi leading-[130%] text-lg">{description}</p>
        </div>
        <div className="basis-full md:basis-1/4">
          <Image
            src={img}
            alt={title}
            className="md:rounded-none rounded-t-md h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AiInfoCard;

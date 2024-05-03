import React from 'react'
import CreonImage from '@/assets/images/creon.png'
import Image from 'next/image';
import { GoChevronDown } from "react-icons/go";

const OurMission = () => {
  return (
    <section className="container mx-auto">
      <div className="relative grid grid-cols-2 gap-[200px]">
        <h3 className="text-[38px] leading-[120%] text-balance uppercase">
          Our vision is to support the innovation of AI blockchain projects
          <span className="ml-4 gradient-title">
            while prioritizing communities and democratizing profits
          </span>
          {/* <Image src={CreonImage} alt="Creon" className='absolute left-10'/> */}
        </h3>
        <div>
          <div>
            <div className="flex gap-[30px]">
              <div className="border-2 border-white p-6 h-fit"></div>
              <div>
                <div className="flex justify-between items-center w-full">
                  <h4 className="font-satoshi font-bold text-[22px]">
                    Profitability and growth
                  </h4>
                  <GoChevronDown color="white" />
                </div>
                <div className="bg-red-200">
                  <p className="font-satoshi text-lg mt-7">
                    At Creon, we handpick cutting-edge AI projects and offer our
                    community and token holders early access and investment
                    opportunities. Our community actively contributes to the
                    growth and profitability of these projects, creating a
                    dynamic ecosystem of innovation and shared success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMission
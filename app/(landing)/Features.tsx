import React from "react";
import localFont from "next/font/local";
import FeatureBlocks from "./FeatureBlocks";
import Image from "next/image";

type Props = {};

const fsMeridianMedium = localFont({
  src: "../../public/fonts/Fs_Meridian/FSMeridianTrial-Medium.otf",
});

const Features = (props: Props) => {
  return (
    <div className="flex-row-reverse items-center justify-between px-[21px] pt-[47px] md:px-[55px] md:pt-[65px] lg:flex lg:pt-[118px]">
      <div>
        <h2
          className={`text-[36px] leading-[44px] text-white md:text-[60px] md:leading-[63px] ${fsMeridianMedium.className} max-w-[259px] md:max-w-full lg:max-w-[506px]`}
        >
          The <span className="text-[#1FC77E]">All-in-One</span> Solution for
          Conversational AI
        </h2>

        <FeatureBlocks />
      </div>
      <div className="relative mt-[50px] h-[394px] w-full md:h-[655px] lg:h-[655px] lg:w-[459px]">
        <Image
          src={"/assets/features_image.svg"}
          fill
          alt="feature-section-image"
        />
      </div>
    </div>
  );
};

export default Features;

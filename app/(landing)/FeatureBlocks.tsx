import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

type Props = {};

const features = [
  {
    title: "Seamless collaboration",
    content:
      "You can easily collaborate with friends and colleagues on projects, whether it's for workor personal use.",
  },
  { title: "Multi-Channel Support" },
  { title: "AI-Powered Assistance" },
  { title: "Easy to use" },
];

const generalSansMedium = localFont({
  src: "../../public/fonts/General_Sans/GeneralSans-Medium.ttf",
});

const generalSansRegular = localFont({
  src: "../../public/fonts/General_Sans/GeneralSans-Regular.ttf",
});

const FeatureBlocks = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-[17px] pt-[27px] md:gap-y-[31px] md:pt-[33px] lg:pt-[28px]">
      {features.map((feature, index) => (
        <div
          key={feature.title}
          className={`h-auto w-full rounded-[10px] pl-[22px] pr-[33px] md:pl-[35px] lg:pl-[27px]  ${
            index === 0
              ? "bg-white pb-[25px] text-black"
              : "bg-[rgba(255,255,255,0.2)] text-white"
          } flex items-center justify-between lg:max-w-[436px]`}
        >
          <div className="flex flex-col">
            <h2
              className={`${generalSansMedium.className} text-[20px] leading-[78px] lg:text-[16px]`}
            >
              {feature.title}
            </h2>
            {feature.content && (
              <p
                className={`${generalSansRegular.className} text-[18px] leading-[24px] lg:text-[14px] lg:leading-[19px]`}
              >
                {feature.content}
              </p>
            )}
          </div>
          {index === 0 && (
            <div className="relative h-[95px] w-[95px]">
              <Image
                src={"/assets/handshake_icon.svg"}
                fill
                alt="handshake_icon"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeatureBlocks;

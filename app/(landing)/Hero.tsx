import React from "react";
import Image from "next/image";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

type Props = {};

const fsMeridianMedium = localFont({
  src: "../../public/fonts/Fs_Meridian/FSMeridianTrial-Medium.otf",
});

const generalSansMedium = localFont({
  src: "../../public/fonts/General_Sans/GeneralSans-Medium.ttf",
});

const generalSansRegular = localFont({
  src: "../../public/fonts/General_Sans/GeneralSans-Regular.ttf",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = (props: Props) => {
  return (
    <div className="flex-row-reverse items-center justify-between px-[21px] text-white md:px-[55px] lg:flex">
      <div>
        <div className="flex items-end justify-between pt-[10px] md:pt-[14px] lg:items-center lg:justify-center lg:gap-[27px] lg:pt-[71px]">
          <div className="relative h-[123.87px] w-[194.89px] md:h-[289px] md:w-[455px] lg:h-[218px] lg:w-[343px]">
            <Image
              src={"/assets/hero_image.svg"}
              alt="hero-image"
              fill
              className="z-10"
            />
          </div>
          <div className="relative flex h-[65px] w-[65px] items-center justify-center md:h-[142px] md:w-[142px] lg:h-[107px] lg:w-[107px]">
            <Image
              src={"/assets/hero_arrow_container.svg"}
              alt="hero-arrow-image"
              fill
            />
            <div className="z-10 -rotate-45">
              <AiOutlineArrowUp
                className="h-[30px] w-[30px] md:h-[70px] md:w-[70px] lg:h-[52px] lg:w-[52px] "
                color="white"
              />
            </div>
          </div>
        </div>
        <Image
          src={"/assets/hero_bottom_image.svg"}
          alt="hero bottom image"
          width={484}
          height={449}
          className="hidden lg:block"
        />
      </div>
      <div>
        <h1
          className={`${fsMeridianMedium.className} mt-[28px] text-[36px] font-medium leading-[44px] md:mt-[45px] md:text-[80px] md:leading-[96px] lg:mt-0 lg:max-w-[614px]`}
        >
          Bring the power of AI to your conversations
        </h1>
        <h2
          className={`mt-[23px] max-w-[238px] text-[26px] leading-[35px] md:max-w-full md:text-[32px] md:leading-[38px] ${generalSansMedium.className}`}
        >
          Work Faster, Smarter, and Better Together
        </h2>
        <p
          className={`mt-[8px] text-[16px] leading-[22px] md:mt-[28px] md:text-[20px] md:leading-[38px] lg:mt-[19px] ${generalSansRegular.className}`}
        >
          Experience the power of AI language models with OmniGPT.{" "}
          <br className="hidden md:block" /> Our chat platform provides seamless
          communication <br className="hidden md:block" /> across multiple
          channels.
        </p>
        <p
          className={`mt-[17px] text-[20px] font-medium leading-[27px] md:mt-[33px] md:text-[20px] md:leading-[38px] ${generalSansMedium.className}`}
        >
          Try the OmniGPT for free. <br className="md:hidden" /> 15-day trial,
          no credit card <br className="md:hidden" /> required.
        </p>
        <button
          className={`mt-[23px] w-full rounded-[5px] bg-[#1FC77E] px-[25px] py-[21px] md:mt-[28px] md:w-[244px] lg:w-[183px] lg:px-[17px] lg:py-[16px] ${poppins.className} text-[20px] font-normal leading-[16px] lg:text-[16px]`}
        >
          Start your free trial
        </button>
      </div>
    </div>
  );
};

export default Hero;

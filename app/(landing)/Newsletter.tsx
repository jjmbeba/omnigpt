import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
import { Poppins } from "next/font/google";

const fsMeridianMedium = localFont({
  src: "../../public/fonts/Fs_Meridian/FSMeridianTrial-Medium.otf",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

type Props = {};

const Newsletter = (props: Props) => {
  return (
    <div className="absolute -top-[100px] left-[50%] max-h-[315px] w-[270px] -translate-x-[50%] flex-col items-center justify-between rounded-[10px] bg-[#05E283] py-[34px] pl-[26px] pr-[32px] md:-top-[265px] md:flex md:max-h-[504px] md:w-[610px] md:py-[71px] md:pl-[89px] md:pr-[89px] lg:-top-[90px] lg:w-[1049px] lg:flex-row">
      <p
        className={`text-center text-[26px] leading-[32px] text-black md:text-[48px] md:leading-[51px] lg:text-left ${fsMeridianMedium.className} md:max-w-[432px] lg:max-w-[606px]`}
      >
        Join the OmniGPT community{" "}
        <span className="text-white">
          and transform the way you collaborate!
        </span>
      </p>
      <div
        className={`mt-[26px] rounded-[5px] bg-black px-[28px] py-[21px] text-white md:mt-[36px] md:max-w-[257px] md:px-[32px] md:py-[24px] ${poppins.className} `}
      >
        <Link href={""}>Get Started Now</Link>
      </div>
    </div>
  );
};

export default Newsletter;

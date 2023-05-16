import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import localFont from "next/font/local";
import Newsletter from "./Newsletter";

type Props = {};

const generalSansMedium = localFont({
  src: "../../public/fonts/General_Sans/GeneralSans-Medium.ttf",
});

const generalSansBold = localFont({
  src: "../../public/fonts/General_Sans/GeneralSans-Bold.ttf",
});

const generalSansRegular = localFont({
  src: "../../public/fonts/General_Sans/GeneralSans-Regular.ttf",
});

const Footer = (props: Props) => {
  return (
    <div className="relative items-start gap-[199px] bg-black px-[21px] pb-[27px] pt-[276px] text-[18px] leading-[16px] md:flex md:flex-col md:gap-0 md:px-[55px] md:pb-[123px] md:pt-[355px] md:text-[22px] md:leading-[16px] lg:flex-row lg:gap-[100px] lg:pb-[95px] lg:pt-[335px] lg:text-[16px]">
      <Newsletter />
      <Logo />
      <div className="items-start gap-[190px] md:flex md:gap-[150px] md:pt-[64px] lg:justify-between lg:gap-[100px] lg:pt-0">
        <div
          className={`grid grid-cols-2 grid-rows-3 gap-x-[40px] gap-y-[37px] pt-[37px] text-white md:grid-cols-1 md:grid-rows-1 md:pt-0  ${generalSansMedium.className}`}
        >
          <Link href="">Lorem ipsum</Link>
          <Link href="">Lorem ipsum</Link>
          <Link href="">Lorem ipsum</Link>
          <Link href="">Lorem ipsum</Link>
          <Link href="">Lorem ipsum</Link>
        </div>
        <div>
          <h3
            className={`${generalSansBold.className} pt-[42px] tracking-[3px] text-[#05E283] md:pt-0`}
          >
            LOREM IPSUM DOLAR
          </h3>
          <div
            className={`grid grid-cols-2 grid-rows-2 gap-x-[40px] gap-y-[37px] pt-[32px] text-white md:grid-cols-1 md:grid-rows-1 ${generalSansMedium.className}`}
          >
            <Link href="">Lorem ipsum</Link>
            <Link href="">Lorem ipsum</Link>
            <Link href="">Lorem ipsum</Link>
          </div>
        </div>
        <div className="hidden flex-col items-start gap-[27px] lg:flex">
          <h4
            className={`${generalSansMedium.className} text-[16px] leading-[16px]`}
          >
            Join our newsletter
          </h4>
          <div className="relative w-[215px] rounded-[10px] border border-white py-[17px] pl-[19px]">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className={` ${generalSansRegular.className} max-w-[150px] border-none bg-black outline-none placeholder:text-white/50`}
            />
            <img
              src="/assets/submit_arrow.svg"
              className="absolute right-[18px] top-[50%] h-[15px] w-[15px] translate-y-[-50%] cursor-pointer object-contain"
              alt="submit-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

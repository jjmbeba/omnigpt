"use client";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";

type Props = {
  setMobileMenuState: Function;
};

const openSans = Open_Sans({
  subsets: ["latin"],
});

const generalSansMedium = localFont({
  src: "../../public/fonts/General_Sans/GeneralSans-Medium.ttf",
});

const MobileMenu = ({ setMobileMenuState }: Props) => {
  return (
    <div className="absolute inset-0 z-20 bg-[#111826]">
      <div
        onClick={() => setMobileMenuState((value: boolean) => !value)}
        className="mr-[21px] mt-[21px] flex items-center justify-end"
      >
        <AiOutlineClose size={36} color="white" />
      </div>
      <div
        className={`flex flex-col items-center justify-center gap-[31px] pt-[104px] ${generalSansMedium.className} text-[30px] leading-[63px] text-white`}
      >
        <Link onClick={() => setMobileMenuState((value: boolean) => !value)} href="/blog">Blog</Link>
        <Link onClick={() => setMobileMenuState((value: boolean) => !value)} href="/contact">Contact us</Link>
        <Link href="/signIn" onClick={() => setMobileMenuState((value: boolean) => !value)}>Sign in</Link>
      </div>
    </div>
  );
};

export default MobileMenu;

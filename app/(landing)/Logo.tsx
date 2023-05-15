"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="w-[116.69px] md:w-[207px] h-[25px] md:h-[44.35px] lg:w-[168px] lg:h-[36px] relative">
      <Link href="/">
        <Image src={"/assets/omnigpt_logo.svg"} alt="logo" fill />
      </Link>
    </div>
  );
};

export default Logo;

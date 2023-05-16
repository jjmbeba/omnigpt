"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="relative h-[25px] w-[116.69px] md:h-[44.35px] md:w-[207px] lg:h-[36px] lg:w-[168px]">
      <Link href="/">
        <Image src={"/assets/omnigpt_logo.svg"} alt="logo" fill />
      </Link>
    </div>
  );
};

export default Logo;

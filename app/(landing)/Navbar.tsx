"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import MobileMenu from "./MobileMenu";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

type Props = {};

const Navbar = (props: Props) => {
  const [mobileMenuState, setMobileMenuState] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-between px-[21px] md:px-[55px]">
      <Logo />
      <div
        onClick={() => setMobileMenuState((value) => !value)}
        className="relative h-[46px] w-[46px] cursor-pointer lg:hidden"
      >
        <Image src={"/assets/hamburger_menu.svg"} alt="hamburger_menu" fill />
      </div>
      {mobileMenuState && (
        <MobileMenu setMobileMenuState={setMobileMenuState} />
      )}
      <div
        className={`hidden items-center gap-[73px] lg:flex ${poppins.className} text-[18px] leading-[27px] text-white`}
      >
        {[{title:"Blog", link:"blog"}, {title:"Contact us", link:"contact"}, {title:"Sign in", link:"signIn"}].map(({title, link}) => (
          <Link
            key={link}
            className="relative before:absolute before:-bottom-1 before:h-[2px] before:w-full before:origin-center before:scale-0 before:bg-white before:duration-300 before:content-[''] hover:before:scale-100"
            href={`/${link}`}
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

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
    <div className="flex items-center justify-between">
      <Logo />
      <div
        onClick={() => setMobileMenuState((value) => !value)}
        className="w-[46px] h-[46px] relative lg:hidden cursor-pointer"
      >
        <Image src={"/assets/hamburger_menu.svg"} alt="hamburger_menu" fill />
      </div>
      {mobileMenuState && (
        <MobileMenu setMobileMenuState={setMobileMenuState} />
      )}
      <div
        className={`hidden lg:flex items-center gap-[73px] ${poppins.className} text-[18px] leading-[27px] text-white`}
      >
        {["Blog", "Contact us", "Sign in"].map((link) => (
          <Link
            className="relative before:absolute before:content-[''] before:w-full before:h-[2px] before:bg-white before:-bottom-1 before:scale-0 hover:before:scale-100 before:origin-center before:duration-300"
            href=""
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

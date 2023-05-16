import React from "react";
import localFont from "next/font/local";
import TestimonialsCarousel from "./TestimonialsCarousel";

type Props = {};

const fsMeridianMedium = localFont({
  src: "../../public/fonts/Fs_Meridian/FSMeridianTrial-Medium.otf",
});

const Testimonials = (props: Props) => {
  return (
    <div className="relative mt-[60px] px-[21px] pb-[202px] text-white md:mt-[122px] md:px-[55px] md:pb-[347px] md:pr-0 lg:mt-[215px] lg:w-full lg:pb-[262px]">
      <h2
        className={`max-w-[187px] text-[36px] leading-[44px] md:max-w-[592px] md:text-[60px] md:leading-[63px] ${fsMeridianMedium.className}`}
      >
        See what People Are{" "}
        <span className="text-[#1FC77E]">Saying About Us</span>
      </h2>

      <img
        src={"/assets/yellow_star.svg"}
        className="absolute -right-[0.75rem] top-[65px] h-[90px] w-[90px] object-cover md:-top-10 md:right-[5rem] md:h-[130px] md:w-[130px]"
        alt="yellow star"
      />
      <img
        src={"/assets/purple_star.svg"}
        className="absolute -right-[0.25rem] top-[150px] z-10 h-[100px] w-[100px] object-cover md:-right-[3.75rem] md:top-[30px] md:h-[150px] md:w-[150px]"
        alt="purple star"
      />

      <TestimonialsCarousel />
    </div>
  );
};

export default Testimonials;

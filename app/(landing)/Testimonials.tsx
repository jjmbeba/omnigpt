import React from "react";
import localFont from "next/font/local";
import TestimonialBlock from "./TestimonialBlock";
import TestimonialsCarousel from "./TestimonialsCarousel";

type Props = {};

const fsMeridianMedium = localFont({
  src: "../../public/fonts/Fs_Meridian/FSMeridianTrial-Medium.otf",
});

const Testimonials = (props:Props) => {

  return (
    <div className="mt-[60px] text-white">
      <h2
        className={`max-w-[187px] text-[36px] leading-[44px] ${fsMeridianMedium.className}`}
      >
        See what People Are{" "}
        <span className="text-[#1FC77E]">Saying About Us</span>
      </h2>
      <TestimonialsCarousel/>
    </div>
  );
};

export default Testimonials;
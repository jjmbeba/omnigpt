import React from "react";
import localFont from "next/font/local";
import Image from 'next/image'

type Props = {};

const generalSansMedium = localFont({
  src: "../../public/fonts/General_Sans/GeneralSans-Medium.ttf",
});

const generalSansRegular = localFont({
    src: "../../public/fonts/General_Sans/GeneralSans-Regular.ttf",
  });

const TestimonialBlock = (props: Props) => {
  return (
    <div className="mt-[30px] rounded-[10px] bg-[#414651] pb-[35px] pl-[36px] pt-[30px] w-[300px]">
      <div className="rating">
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          checked
        />
      </div>
      <h2
        className={`${generalSansMedium.className} max-w-[192px] pt-[14px] text-[16px] leading-[24px]`}
      >
        OmniGPT has completely transformed the way my team works together.
      </h2>
      <p className={`${generalSansRegular.className} text-[13px] leading-[22px] pt-[14px] max-w-[198px]`}>
        “With the ability to seamlessly communicate across multiple channels, we
        are able to collaborate in real-time and make decisions faster than
        ever. Plus, the AI-powered chatbot saves us time and resources by
        handling routine tasks and inquiries. I would highly recommend OmniGPT
        to any organization looking to improve their productivity and
        efficiency”
      </p>
      <div className="pt-[28px] flex items-center gap-x-[15px]">
        <Image src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" width={48} height={48} alt="profile-image" className="w-[48px] h-[48px] object-contain rounded-full"/>
        <h4 className={`${generalSansMedium.className} text-[13px] leading-[22px]`}>
            Luke John
        </h4>
      </div>
    </div>
  );
};

export default TestimonialBlock;

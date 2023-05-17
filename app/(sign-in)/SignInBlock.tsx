"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { HiOutlineMail } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { useForm, SubmitHandler } from "react-hook-form";
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

type Props = {};

type Inputs = {
    email:string;
}

const schema = z.object({
    email:z.string().email()
})

const SignInBlock = (props: Props) => {
  const [userEmail, setUserEmail] = useState<string>("");

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    resolver:zodResolver(schema)
  });
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);


  return (
    <div
      className={`${poppins.className} shadow-[0px 3px 20px rgba(47, 64, 105, 0.15)] flex w-[330px] mb-[80px] md:w-[625px] lg:h-[400px] lg:w-[400px] flex-col items-center rounded-[5px] border border-[#E6EBF1] bg-white p-[48px]`}
    >
      <div className="relative h-[50px] w-[152px]">
        <Image src={"/assets/omnigpt_logo_white.svg"} fill alt="logo" />
      </div>
      <h2 className="pt-[16px] text-[14px] leading-[20px] text-[#0F1B33]">
        Enter your email to start using
      </h2>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative mt-[16px] flex w-[304px] rounded-[5px] border border-[#E6EBF1] bg-white py-[14px] pl-[44px] text-[14px] leading-[20px] text-[rgba(114,132,154,0.4)]">
          <input
            type="email"
            id="email"
            className="flex-1 border-none bg-white outline-none text-[#0F1B33] focus:bg-white"
            placeholder="Your email"
            {...register('email')}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <HiOutlineMail
            size={20}
            className="absolute left-[16px] top-[50%] -translate-y-[50%]"
          />
        </div>
        <input type="submit" className="cursor-pointer mt-[16px] w-full rounded-[5px] bg-[#1FC77E] py-[10px] text-[14px] leading-[20px] text-white" value="Sign In"/>
      </form>
      <div className="flex items-center gap-[9px] pt-[16px]">
        <hr className="w-[94px]" />
        <span className="text-[12px] leading-[18px] text-[#8F9FB2] text-center">
          or connect with
        </span>
        <hr className="w-[94px]" />
      </div>
      <div className="item-center mt-[16px] flex cursor-pointer gap-[8px] rounded-[10px] border border-[#EDEDED] px-[20px] py-[12px] text-[14px] leading-[20px] text-[#455560]">
        <FcGoogle size={18} />
        <span>Google</span>
      </div>
    </div>
  );
};

export default SignInBlock;

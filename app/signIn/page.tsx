"use client";
import React from "react";
import Animation from "../(shared)/Animation";
import SignInBlock from "../(sign-in)/SignInBlock";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex h-screen w-screen items-center md:items-start justify-center text-white md:pt-[8vh]">
        <SignInBlock/>
    </div>
  );
};

export default page;

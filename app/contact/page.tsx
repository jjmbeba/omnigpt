"use client";
import React from "react";
import Animation from "../(shared)/Animation";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex h-screen w-screen items-center md:items-start justify-center text-white md:pt-[8vh]">
        <Animation/>
    </div>
  );
};

export default page;

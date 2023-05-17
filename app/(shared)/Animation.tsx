import React from 'react'
import Lottie from "lottie-react";
import underConstructionAnimation from "@/public/assets/underConstructionYellow.json";

type Props = {}

const Animation = (props: Props) => {
  return (
    <div className='w-[70vw] lg:w-[35vw] h-auto  pb-[10vh] lg:pb-0'>
        <Lottie
          animationData={underConstructionAnimation}
          loop
          autoplay
        />
    </div>
  )
}

export default Animation
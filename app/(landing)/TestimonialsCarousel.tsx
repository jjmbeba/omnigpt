"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  Dot,
} from "pure-react-carousel";
import TestimonialBlock from "./TestimonialBlock";
import useWindowSize from "@/utils/useWindowSize";

type Props = {};

const TestimonialsCarousel = (props: Props) => {
  const [slidesToShow, setSlidesToShow] = useState<number>(1);
  const screenWidth = useWindowSize();

  useEffect(() => {
    if (screenWidth < 768) {
      setSlidesToShow(1);
    } else if (screenWidth > 1200) {
      setSlidesToShow(2);
    } else if (screenWidth > 768) {
      setSlidesToShow(1.3);
    }
  }, [screenWidth, setSlidesToShow]);

  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={370}
        naturalSlideHeight={500}
        totalSlides={4}
        isPlaying
        infinite
        visibleSlides={slidesToShow}
        className="h-[536px] w-[315px] md:h-[395px] md:w-full"
      >
        <Slider className="h-[587px] md:h-[417px]">
          <Slide index={0}>
            <TestimonialBlock />
          </Slide>
          <Slide index={1}>
            <TestimonialBlock />
          </Slide>
          <Slide index={2}>
            <TestimonialBlock />
          </Slide>
          <Slide index={3}>
            <TestimonialBlock />
          </Slide>
        </Slider>
        <DotGroup className="flex items-center justify-center" />
      </CarouselProvider>
    </div>
  );
};

export default TestimonialsCarousel;

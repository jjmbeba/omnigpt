"use client";
import React from "react";
import { useState } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Dot
} from "pure-react-carousel";
import TestimonialBlock from "./TestimonialBlock";

type Props = {};

const TestimonialsCarousel = (props: Props) => {
  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={370}
        naturalSlideHeight={656}
        totalSlides={4}
        isPlaying
        infinite
      >
        <Slider>
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
        <DotGroup className="flex items-center justify-center"/>
        {/* <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext> */}
      </CarouselProvider>
    </div>
  );
};

export default TestimonialsCarousel;

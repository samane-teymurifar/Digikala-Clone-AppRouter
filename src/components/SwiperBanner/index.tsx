'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import ArrowIcon from "@icons/ArrowIcon";
import { useRef } from "react";
import Slides from "./Data/data";
type Properties = {
  Slides: { id: string; src: string }[];
};
function SwiperComponent() {

  const swiperRef = useRef(null);
  const handleNext = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="mt-8">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
      >
        {Slides?.map((slide) => (
          <SwiperSlide key={slide?.src}>
            <Image
              src={slide?.src}
              alt={slide?.id}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", position: "relative" }}
            />
          </SwiperSlide>
        ))}
        <div className="">
          <button
            className="bg-gray-5 border border-gray-20 w-[38px] h-[38px] rounded-full rotate-90 cursor-pointer"
            onClick={handlePrev}
          >
            <ArrowIcon />
          </button>
          <button
            className="bg-gray-5 border border-gray-20 w-[38px] h-[38px] rounded-full -rotate-90  cursor-pointer"
            onClick={handleNext}
          >
            <ArrowIcon />
          </button>
        </div>
      </Swiper>
    </div>
  );
}

export default SwiperComponent;
'use client'
import PopularBrandsData from './data';
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { isArray } from "@src/utiles/helper/isArray";
import someJson from "../../data/HomeData/content";
import ArrowIcon from "@src/assets/icons/ArrowIcon";
import { useRef } from "react";
function SurprisingOffer() {
  const response = someJson
  const surprisingOffersProducts =  response?.result?.selling_and_sales; 
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


                <Swiper
                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                    spaceBetween={2}
                    slidesPerView={7}
                    // pagination={{ clickable: false }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    style={{}}
                >
                {isArray(PopularBrandsData)?.map((product) => (
                <SwiperSlide key={product?.id}>
                    salam
                </SwiperSlide>
                ))}
                <div className="absolute bottom-5 right-5 z-10 gap-2 flex">
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
  

  );
}

export default SurprisingOffer;
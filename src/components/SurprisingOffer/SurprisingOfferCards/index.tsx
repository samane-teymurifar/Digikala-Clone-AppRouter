'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import SurprisingOfferCard from "../SurprisingOfferCard/index";
import { isArray } from "@src/utiles/helper/isArray";
function SurprisingOfferCards(surprisingOffersProducts: any) {
  
 return (

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: false }}
                    // onSwiper={(swiper) => (swiperRef.current = swiper)}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                    }}
                    style={{'height': '100%'}}
                >
                {isArray(surprisingOffersProducts)?.map((product) => (
                <SwiperSlide key={product?.id} style={{'width': '182px', 'marginLeft': '2px'}}>
                    <SurprisingOfferCard product={product}/>
                </SwiperSlide>
                ))}
                <div className="absolute bottom-5 right-5 z-10 gap-2 flex">
                <button
                    className="bg-gray-5 border border-gray-20 w-[38px] h-[38px] rounded-full rotate-90 cursor-pointer"
                > 
                </button>
                <button
                    className="bg-gray-5 border border-gray-20 w-[38px] h-[38px] rounded-full -rotate-90  cursor-pointer"
                >  
                </button>
                </div>
                </Swiper>
 
  );
}

export default SurprisingOfferCards;
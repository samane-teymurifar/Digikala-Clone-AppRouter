'use client'
import { getData } from "./Data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import SurprisingOfferCard from "./SurprisingOfferCard";
import { isArray } from "@src/utiles/helper/isArray";
import SurprisingOfferCards from "./SurprisingOfferCards";
import someJson from "../../data/HomeData/content";
async function SurprisingOffer() {
  // const response = await getData();
  // const surprisingOffersProducts =  response?.result?.selling_and_sales; 
  const response = someJson
  const surprisingOffersProducts =  response?.result?.selling_and_sales; 
  console.log("surprisingOffersProducts:", surprisingOffersProducts?.products);
  
  
 return (
    <section className="w-full px-48">
        <div className="w-full bg-primary-main h-[300px] rounded-2xl">
            <div className="py-4 h-full">
                <Swiper
                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                    spaceBetween={2}
                    slidesPerView={7}
                    // pagination={{ clickable: false }}
                    // onSwiper={(swiper) => (swiperRef.current = swiper)}
                    // autoplay={{
                    // delay: 2500,
                    // disableOnInteraction: true,
                    // }}
                    style={{'height': '100%', 'marginRight': '200px'}}
                >
                {isArray(surprisingOffersProducts?.products)?.map((product) => (
                <SwiperSlide key={product?.id}>
                    <SurprisingOfferCard product={product}/>
                </SwiperSlide>
                ))}
                {/* <SurprisingOfferCards surprisingOffersProducts={surprisingOffersProducts}/> */}
                <div className="absolute bottom-5 right-5 z-10 gap-2 flex">
                {/* <button
                    className="bg-gray-5 border border-gray-20 w-[38px] h-[38px] rounded-full rotate-90 cursor-pointer"
                > 
                </button> */}
                {/* <button
                    className="bg-gray-5 border border-gray-20 w-[38px] h-[38px] rounded-full -rotate-90  cursor-pointer"
                >  
                </button> */}
                </div>
                </Swiper>
            </div>
        </div>
    </section>
  );
}

export default SurprisingOffer;
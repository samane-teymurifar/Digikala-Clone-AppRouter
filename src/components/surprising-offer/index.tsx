'use client';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import SurprisingOfferCard from './SurprisingOfferCard';
import {isArray} from '@src/utiles/helper/isArray';
import someJson from '../../data/HomeData/content';
import {Keywords} from '@src/constants/keyword';
import Image from 'next/image';
import box from '@images/box.webp';
import ArrowIcon from '@src/assets/icons/ArrowIcon';
import {useRef} from 'react';
function SurprisingOffer() {
  const response = someJson;
  const surprisingOffersProducts = response?.result?.selling_and_sales;
  const swiperRef: any = useRef(null);
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
    <section className="w-full px-48">
      <div className="w-full bg-primary-light h-[300px] rounded-2xl">
        <div className="py-4 h-full flex items-center relative">
          {' '}
          <button
            className="bg-gray-5 flex absolute mr-2 justify-center items-center border border-gray-20 w-[38px] h-[38px] rounded-full cursor-pointer"
            onClick={handlePrev}>
            <ArrowIcon className="fill-gray-40" />
          </button>
          <div className="px-24 flex flex-col items-center justify-center">
            <span className="text-center text-common-white text-3xl">
              {Keywords.surprisingOffer}
            </span>
            <Image src={box} alt="surprisingOffer" width={300} height={300} />
          </div>
          <Swiper
            modules={[Navigation, Scrollbar, A11y, Autoplay]}
            spaceBetween={2}
            slidesPerView={7}
            // pagination={{ clickable: false }}
            onSwiper={swiper => (swiperRef.current = swiper)}
            style={{height: '100%'}}>
            {isArray(surprisingOffersProducts?.products)?.map(
              (product, key) => (
                <SwiperSlide key={product?.id}>
                  <SurprisingOfferCard product={product} />
                </SwiperSlide>
              ),
            )}
          </Swiper>
          <button
            className="bg-gray-5 absolute ml-2 left-0 z-10 border flex items-center justify-center border-gray-20 w-[38px] h-[38px] rounded-full rotate-180  cursor-pointer"
            onClick={handleNext}>
            <ArrowIcon className="fill-gray-40" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default SurprisingOffer;

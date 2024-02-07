'use client';
import {Swiper, SwiperSlide} from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import ArrowIcon from '@icons/ArrowIcon';
import {useRef, useState} from 'react';
import Slides from './data';

function SwiperComponent() {
  const swiperRef: any = useRef(null);
  const [showButtons, setShowButtons] = useState(false);
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
    <div
      className="SweeperComponent"
      onMouseOver={() => setShowButtons(true)}
      onMouseOut={() => setShowButtons(false)}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{clickable: false}}
        onSwiper={swiper => (swiperRef.current = swiper)}
        autoplay={{
          delay: 300000,
          disableOnInteraction: false,
        }}
        style={{position: 'relative', marginLeft: '2px'}}>
        {Slides?.map(slide => (
          <SwiperSlide key={slide?.src}>
            <Image
              src={slide?.src}
              alt={slide?.id}
              width={0}
              height={0}
              sizes="100vw"
              style={{width: '100%', height: 'auto', position: 'relative'}}
            />
          </SwiperSlide>
        ))}
        <div
          className={`${
            showButtons ? '' : 'hidden'
          } absolute bottom-5 right-5 z-10 gap-2 flex`}>
          <button
            className="bg-gray-5 flex items-center justify-center border border-gray-20 w-[38px] h-[38px] rounded-full  cursor-pointer"
            onClick={handlePrev}>
            <ArrowIcon className="fill-secondaryTint-90" />
          </button>
          <button
            className="bg-gray-5 border rotate-180 flex justify-center items-center border-gray-20 w-[38px] h-[38px] rounded-full   cursor-pointer"
            onClick={handleNext}>
            <ArrowIcon className="fill-secondaryTint-90" />
          </button>
        </div>
      </Swiper>
    </div>
  );
}

export default SwiperComponent;

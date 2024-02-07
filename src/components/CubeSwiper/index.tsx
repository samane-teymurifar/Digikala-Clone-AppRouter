import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import {Autoplay, EffectCube, Navigation, Pagination} from 'swiper/modules';
import Image from 'next/image';
import StoryProgressBar from './Progressbar/index';

type Properties = {
  Slides: {id: string; src: string}[];
};
export default function CubeSwiperComponent({Slides}: Properties) {
  const [initialWidth, setInitialWidth] = useState('0%');
  return (
    <>
      <Swiper
        effect={'cube'}
        modules={[EffectCube, Navigation, Autoplay]}
        navigation={true}
        style={{width: '600px', height: '300px'}}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        onSlideChange={() => setInitialWidth('0%')}>
        {Slides.map(slide => (
          <>
            <SwiperSlide key={slide?.src}>
              <StoryProgressBar initialWidth={initialWidth} />
              <Image
                src={slide?.src}
                alt={slide?.id}
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: '600px',
                  height: '300px',
                  position: 'relative',
                }}
              />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Swiper-hero.scss";

import imageOne from '../../../images/hero/hero-1.jpg';
import imageTwo from '../../../images/hero/hero-2.jpg';
import imageThree from '../../../images/hero/hero-3.jpg';

import { MdArrowBackIos } from 'react-icons/md';


const SwiperHero = () => {
  return (
    <Swiper
      className="hero-swiper"
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation={{
        nextEl: '.hero-swiper__next-element',
        prevEl: '.hero-swiper__prev-element'
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      speed={700}
      breakpoints={{
        320: {
          spaceBetween: 50,
        },
        768: {
          spaceBetween: 50,
        },
        1280: {
          spaceBetween: 176,
        },
      }}
    >
      <SwiperSlide className='hero-swiper__slide'>
        <div className="hero-swiper__cover">
          <div className="hero-swiper__image">
            <img src={imageOne} alt="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='hero-swiper__slide'>
        <div className="hero-swiper__cover">
          <div className="hero-swiper__image">
            <img src={imageTwo} alt="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='hero-swiper__slide'>
        <div className="hero-swiper__cover">
          <div className="hero-swiper__image">
            <img src={imageThree} alt="" />
          </div>
        </div>
      </SwiperSlide>
      <div className="hero-swiper__nav-cover">
        <div className="hero-swiper__prev-element">
          <MdArrowBackIos className="hero-swiper__icon-left" />
        </div>
        <div className="hero-swiper__next-element">
          <MdArrowBackIos className="hero-swiper__icon-right" />
        </div>
      </div>

    </Swiper>
  );
};

export default SwiperHero;
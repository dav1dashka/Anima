import { useSelector, useDispatch } from 'react-redux';
import { setSwiperOption } from '../../../../redux/slices/cardSlice';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./Item-swiper.scss";

const ItemSwiper = () => {
    const dispatch = useDispatch()
    const { card } = useSelector(state => state.cardSlice)

    const onImageClick = (id) => {
        dispatch(setSwiperOption(id))
    }

    return (
        <>
            <div className="item__swiper swiper-item">
                <Swiper
                    className="item-swiper"
                    modules={[Navigation]}
                    slidesPerView={4}
                    navigation={{
                        nextEl: '.product-item-swiper__next-element',
                        prevEl: '.product-item-swiper__prev-element'
                    }}
                    speed={700}
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 3,
                            spaceBetween: 22
                        },
                        480: {
                            slidesPerView: 4,
                            spaceBetween: 17
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 22

                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 17
                        },
                        1920: {

                        },
                    }}
                >
                    {
                        card.images.map((item, index) => (
                            <SwiperSlide key={index} className='item-swiper__slide'>
                                <img onClick={() => { onImageClick(index + 1) }} key={index} src={item} alt="" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    );
};

export default ItemSwiper;

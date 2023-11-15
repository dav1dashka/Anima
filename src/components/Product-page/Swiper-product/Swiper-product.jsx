import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { fetchCards } from '../../../redux/slices/cardsSlice';


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import Card from '../../Catalog-page/Card/Card';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Swiper-product.scss";

import { MdArrowBackIos } from 'react-icons/md';


const SwiperProduct = () => {
    const dispatch = useDispatch();
    const { selectedOption, selectedOptionTwo } = useSelector((state) => state.filterSlice);
    const { cards } = useSelector(state => state.cardsSlice)

    const getCards = async () => {
        dispatch(fetchCards({
            selectedOption: selectedOption[0],
            selectedOptionTwo,
            linkMenuOption: '',
            currentPage: 1
        }))
    }

    useEffect(() => {
        getCards()
    }, [])

    return (
        <>
            <div className="product__swiper swiper-product">
                <div className="swiper-product__titles">
                    <h2 className="catalog__title product-title">Рекомендовані <strong>товари</strong></h2>
                    <div className="product-swiper__nav-cover">
                        <div className="product-swiper__prev-element">
                            <MdArrowBackIos viewBox="1 6 10 12" className="product-swiper__icon" />
                        </div>
                        <div className="product-swiper__next-element">
                            <MdArrowBackIos viewBox="1 6 10 12" className="product-swiper__icon" />
                        </div>
                    </div>
                </div>
                <Swiper
                    className="product-swiper"
                    modules={[Navigation, Pagination]}
                    slidesPerView={4}
                    navigation={{
                        nextEl: '.product-swiper__next-element',
                        prevEl: '.product-swiper__prev-element'
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    speed={700}
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1
                        },
                        480: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 3
                        },
                        992: {
                            slidesPerView: 4
                        },
                        1920: {
                        },
                    }}
                >
                    {
                        cards.map((item, index) => (
                            <SwiperSlide key={index} className='product-swiper__slide'>
                                <Card clas={'card product-page'} key={index} info={item} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    );
};

export default SwiperProduct;
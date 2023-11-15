import { useEffect} from 'react';

import { Fade } from "react-awesome-reveal";

import { useSelector, useDispatch } from 'react-redux';
import { fetchCard } from '../../redux/slices/cardSlice';

import { NavLink, useParams } from 'react-router-dom';
import { RxTriangleRight } from 'react-icons/rx'

import Header from '../Header/Header'
import Burger from '../Header/Burger/Burger';
import Footer from '../Footer/Footer'
import Description from './Description/Description';
import Cards from './Cards/Cards';
import SwiperProduct from './Swiper-product/Swiper-product';
import Quest from '../Quest/Quest'
import ProductItem from './Product-item/Product-item';

import './Product-page.scss'

const ProductPage = () => {
    const dispatch = useDispatch();
    const { itemId } = useParams();
    const { card } = useSelector(state => state.cardSlice)

    useEffect(() => {
        dispatch(fetchCard(itemId))
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='wrapper'>
            <Header styles={{ 'backgroundColor': 'black', 'paddingBottom': '20px' }} />
            <Burger />
            <main className="main">
                <section className="product">
                    <Fade
                        triggerOnce={true}
                        delay={200}
                    >
                        <div className='product__container'>
                            <div className="product__bread">
                                <NavLink to='/'>Головна</NavLink>
                                <RxTriangleRight />
                                <NavLink to='/catalog'>Каталог товарів</NavLink>
                                <RxTriangleRight />
                                <strong>{card.title}</strong>
                            </div>
                            <div className="product__titles">
                                <h1 className="product__title">{card.title}</h1>
                                <div className="product__parameters">
                                    <div className="">
                                        <strong>Модель:</strong><span>{card.model}</span>
                                    </div>
                                    <div className="">
                                        <strong>Артикул:</strong><span>{card.article}</span>
                                    </div>
                                </div>
                            </div>
                            <ProductItem />
                            <Description />
                            <Cards />
                            <SwiperProduct />
                        </div>
                    </Fade>
                </section>
                <Quest />
            </main>
            <Footer />
        </div>
    )
}

export default ProductPage;

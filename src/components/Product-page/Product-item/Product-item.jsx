import { useSelector } from 'react-redux';

import Spoller from '../Spoller/Spoller';
import Counter from '../Counter/Counter';
import ItemSwiper from './Item-swiper/Item-swiper';

import ItemMainImage from './Item-main-image/Item-main-image';

import greenYes from '../../../images/product-page/greenYes.svg'
import { MdArrowBackIos, MdDoNotDisturb } from 'react-icons/md';

import './Product-item.scss'

const ProductItem = () => {
    const { card } = useSelector(state => state.cardSlice);

    if (!card.sort) {
        return null
    }

    return (
        <>
            <div className="product__item">
                <div className="product__left">
                    <ItemMainImage />
                    <div className="product__gallery">
                        <div className="product-item-swiper__prev-element">
                            <div className="product-item-swiper__prev-element-cover">
                                <MdArrowBackIos className="product-item-swiper__icon product-item-swiper__icon-left" />
                            </div>
                        </div>
                        <div className="product__gallery-container">
                            <ItemSwiper />
                        </div>
                        <div className="product-item-swiper__next-element">
                            <div className="product-item-swiper__next-element-cover">
                                <MdArrowBackIos className="product-item-swiper__icon product-item-swiper__icon-right" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__right">
                    <div className="available">
                        {card.sort.includes("available")
                            ? <><img src={greenYes} alt="" /><span>У наявності</span></>
                            : <><MdDoNotDisturb fill='red' size={24} /><span style={{ 'color': 'red' }}>У наявності немає</span></>
                        }
                    </div>
                    <div className="product__price">
                        <div className="product__price-cover">
                            <strong>{card.curPrice} ₴</strong>
                            {card.prevPrice ? <span>{card.prevPrice} ₴</span> : null}
                        </div>
                        {typeof (card.discount) == 'string' ? <div className="product__discount">-{card.discount}</div> : null}
                    </div>
                    <div className="product__label">Ціна вказана з врахуанням ПДВ</div>
                    <Counter />
                    <Spoller />
                    <div className="product__buttons">
                        <button className="product__consult">Безкоштовна консультація</button>
                        <button className="product__request">Залишити заявку</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ProductItem;

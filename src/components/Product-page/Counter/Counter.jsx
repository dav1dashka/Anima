import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { setCardCurPrice, setCardPrevPrice } from '../../../redux/slices/cardSlice';

import { IoTriangle } from 'react-icons/io5'

import './Counter.scss'

const Counter = () => {
    const dispatch = useDispatch();
    const { card, status } = useSelector((state) => state.cardSlice);

    const [staticCurPrice, setStaticCurPrice] = useState(card.curPrice);
    const [staticPrevPrice, setStaticPrevPrice] = useState(card.prevPrice);

    let [value, setValue] = useState('1');
    let inputClass = 'product__input';

    value > 8 ? inputClass = 'product__input wide' : inputClass = 'product__input';

    useEffect(() => {
        status == 'success' ? setStaticCurPrice(card.curPrice) : null;
    }, [status])

    useEffect(() => {
        status == 'success' ? setStaticPrevPrice(card.prevPrice) : null;
    }, [status])

    const onChangeSearch = (str) => {
        if (str >= card.amount) {
            setValue(value = card.amount)
        } else if (str <= 1) {
            setValue(value = 1)
        } else {
            setValue(value = str)
        }
    }

    const onClickPlus = () => {
        if (value >= card.amount) {
            setValue(value)
        } else {
            setValue(++value)
            dispatch(setCardCurPrice(Math.round(staticCurPrice * value)))
            dispatch(setCardPrevPrice(Math.round(staticPrevPrice * value)))

        }
    }

    const onClickMinus = () => {
        if (value <= 1) {
            setValue(value)
        } else {
            setValue(--value)
            dispatch(setCardCurPrice(Math.round(card.curPrice - staticCurPrice)))
            dispatch(setCardPrevPrice(Math.round(card.prevPrice - staticPrevPrice)))
        }
    }

    return (
        <>
            <div className="product__amount">
                <span>Кількість:</span> <div className="product__input-cover">
                    <IoTriangle onClick={() => onClickPlus()} className='product__up-triangle' viewBox="0 0 512 200" />
                    <input
                        className={inputClass}
                        onChange={e => onChangeSearch(e.target.value)}
                        value={value}
                        maxLength={2}
                        type="text" />
                    <IoTriangle onClick={() => onClickMinus()} className='product__down-triangle' viewBox="0 0 512 200" />
                </div>
            </div>
        </>
    )
}


export default Counter;

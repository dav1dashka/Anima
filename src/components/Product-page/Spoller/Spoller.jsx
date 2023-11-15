import { useState } from "react";

import { useSelector } from "react-redux";
import SpollerSkeleton from "./Spoller-skeleton";

import { RxTriangleRight } from "react-icons/rx";

import "./Spoller.scss";

const Spoller = () => {
    const [isSpollerOpen, setIsSpollerOpen] = useState(true);
    let spollerClass = "product__info open";

    isSpollerOpen
        ? (spollerClass = "product__info open")
        : (spollerClass = "product__info");

    const { card, status } = useSelector((state) => state.cardSlice);

    if (!card.characteristics) {
        return null
    }
    
    return (
        <>
            <div className={spollerClass}>
                <button onClick={() => setIsSpollerOpen(!isSpollerOpen)} type="button">
                    <span>Характеристики</span>
                    <RxTriangleRight className="product__arrow" />
                </button>
                <div className="product__characteristics characteristics-product">
                    {status == "loading" ? (
                        <SpollerSkeleton />
                    ) : (
                        <>
                            <div className="characteristics-product__item">
                                <span>Вид каменя</span>
                                <span>{card.characteristics.type}</span>
                            </div>
                            <div className="characteristics-product__item">
                                <span>Виріб</span>
                                <span>{card.characteristics.product}</span>
                            </div>
                            <div className="characteristics-product__item">
                                <span>Родорвище</span>
                                <span>{card.characteristics.location}</span>
                            </div>
                            <div className="characteristics-product__item">
                                <span>Колір</span>
                                <span>{card.characteristics.color}</span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Spoller;

// import { useState } from 'react';

// import { useSelector } from 'react-redux';
// import SpollerSkeleton from './Spoller-skeleton';

// import { RxTriangleRight } from 'react-icons/rx'

// import cardSlice from '../../../redux/slices/cardSlice';

// import './Spoller.scss'

// const Spoller = () => {
//     const [isSpollerOpen, setIsSpollerOpen] = useState(true);
//     let spollerClass = 'product__info open';

//     isSpollerOpen ? spollerClass = 'product__info open' : spollerClass = 'product__info';

//     const { card, status } = useSelector(state => state.cardSlice)

//     let skeleton = ''
//     let data = ''
//     if (status == 'loading') {
//         skeleton = <SpollerSkeleton />
//     } else {
//         data = <>
//             <div className="characteristics-product__item"><span>Вид каменя</span><span>{card.characteristics.type}</span></div>
//             <div className="characteristics-product__item"><span>Виріб</span><span>{card.characteristics.product}</span></div>
//             <div className="characteristics-product__item"><span>Родорвище</span><span>{card.characteristics.location}</span></div>
//             <div className="characteristics-product__item"><span>Колір</span><span>{card.characteristics.color}</span></div>
//         </>
//     }

//     if (!card.characteristics) {
//         return null
//     }

//     return (
//         <>
//             <div className={spollerClass}>
//                 <button onClick={() => setIsSpollerOpen(!isSpollerOpen)} type='button'>
//                     <span>Характеристики</span>
//                     <RxTriangleRight className='product__arrow' />
//                 </button>
//                 <div className="product__characteristics characteristics-product">
//                     {skeleton}
//                     {data}

//                 </div>
//             </div>
//         </>
//     )
// }

// export default Spoller;

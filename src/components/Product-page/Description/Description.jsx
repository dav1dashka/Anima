import { useState } from 'react';

import { useSelector } from 'react-redux';
import { RxTriangleRight } from 'react-icons/rx'

import './Description.scss'

const Description = () => {
    const [isSpollerOpen, setIsSpollerOpen] = useState(true);
    let spollerClass = 'description__info open';

    isSpollerOpen ? spollerClass = 'description__info open' : spollerClass = 'description__info';

    const { card } = useSelector(state => state.cardSlice)

    return (
        <>
            <div className={spollerClass}>
                <button onClick={() => setIsSpollerOpen(!isSpollerOpen)} type='button'>
                    <span>Опис</span>
                    <RxTriangleRight className='description__arrow' />
                </button>
                <div className="description__characteristics characteristics-description">
                    <div className="characteristics-description__text">
                        <p>
                            {card.descr}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Description;

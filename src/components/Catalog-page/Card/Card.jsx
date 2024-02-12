import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

import './Card.scss'

const Card = (props) => {
    let { id, title, label, curPrice, prevPrice = null, discount = null, images } = props.info
    let cardClassName = props.clas ? props.clas : 'card'
    
    return (
        <>
            <div className={cardClassName}>
                <Fade
                    triggerOnce={true}
                    style={{ 'position': 'relative', 'zIndex': '1' }}
                >
                    <Link to={`/product/${id}`}>
                        <div className="card__contain">
                            <div className={discount ? 'card__image discount' : 'card__image'}>
                                <img src={images[0]} alt="" />
                                <img src={images[1]} alt="" />
                            </div>
                            <div className="card__cov">
                                <div className="card__cover">
                                    <span className="card__label">{label}</span>
                                    <h3 className="card__title">{title}</h3>
                                    <div className="card__price">
                                        <span className="card__cur-price">{curPrice} $</span>
                                        <span className="card__prev-price">{prevPrice == null ? prevPrice : prevPrice + ' $'}</span>
                                    </div>
                                </div>
                                <div className="card__button">
                                    <button type='button'>Детальніше    </button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </Fade>

            </div>
        </>
    )
}


export default Card;

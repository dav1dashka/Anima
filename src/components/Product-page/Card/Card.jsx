import greenYes from '../../../images/product-page/greenYes.svg'

import './Card.scss'

const Card = (props) => {
    let { id, title, descr } = props.info
    return (
        <>
            <div key={id} className="product__card card-product">
                <div className="card-product__cover">
                    <div className="card-product__title"><img src={greenYes} alt="" /><span>{title}</span></div>
                    <div className="card-product__text">
                        <p>{descr}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;

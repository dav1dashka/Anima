import { useSelector } from 'react-redux';

import './Item-main-image.scss'

const ItemMainImage = () => {
    const { cards } = useSelector(state => state.cardsSlice)
    const { card } = useSelector(state => state.cardSlice)
    const itemId = useSelector(state => state.cardSlice.swiperOption)

    let productImgClass = 'product__image'

    card.sort.includes("discount") ? productImgClass = 'product__image product__image-discount' : productImgClass = 'product__image';

    return (
        <>
            <div className={productImgClass}>
                {
                    cards.filter(e => {
                        if (e.id == itemId) { return true }
                    }).map(e => {
                        return <img key={e.id} src={e.images[itemId - 1]} alt="" />
                    })
                }
            </div>
        </>
    );
};

export default ItemMainImage;
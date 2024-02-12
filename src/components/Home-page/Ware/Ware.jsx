import { Fade } from "react-awesome-reveal";

import { HiArrowLongRight } from 'react-icons/hi2';

import imageOne from '../../../images/ware/ware-1.jpg'
import imageTwo from '../../../images/ware/ware-2.jpg'
import imageThree from '../../../images/ware/ware-3.jpg'
import imageFour from '../../../images/ware/ware-4.jpg'

import './Ware.scss'

const Ware = () => {
    return (
        <>
            <section className="ware">
                <div className="ware__container">
                    <Fade
                        triggerOnce={true}

                    >
                        <h2 className="ware__title">Вироби з<br />  <strong>натурального каменя</strong></h2>
                    </Fade>
                    <Fade
                        triggerOnce={true}

                    >
                        <div className="ware__watch-all">
                            <a href="">
                                <span>Дивитись всі</span>
                                <HiArrowLongRight viewBox="5 3 10 15" />
                            </a>
                        </div>
                    </Fade>
                    <div className="ware__cover">
                        <Fade
                            triggerOnce={true}

                        >
                            <div className="ware__cover__top top-ware">
                                <div className="top-ware__left">
                                    <img src={imageOne} alt="" />
                                </div>
                                <div className="top-ware__right">
                                    <img src={imageTwo} alt="" />
                                </div>
                            </div>
                        </Fade>
                        <Fade
                            triggerOnce={true}

                        >
                            <div className="ware__cover__bottom bottom-ware">
                                <div className="bottom-ware__left">
                                    <img src={imageThree} alt="" />
                                </div>
                                <div className="bottom-ware__right">
                                    <img src={imageFour} alt="" />
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ware;
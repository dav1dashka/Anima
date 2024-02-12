import { NavLink } from 'react-router-dom';

import { Fade } from "react-awesome-reveal";

import { HiArrowLongRight } from 'react-icons/hi2';
import imageOne from '../../../images/cards/cards-1.jpg'

import './Discounts.scss'

const Discounts = () => {
    return (
        <>
            <section className="discounts">
                <div className="discounts__container">
                    <div className="discounts__left">
                        <Fade
                            triggerOnce={true}
                        >
                            <div className="discounts__info">
                                <h2 className="discounts__title">Актуальні акції на <strong>нашу продукцію</strong></h2>
                                <div className="discounts__text">
                                    <p>
                                        Враховуючи ключові сценарії поведінки, навчання кадрів тягне за собою процес впровадження та модернізації розподілу.
                                    </p>
                                </div>
                                <div className="discounts__cover">
                                    <NavLink to='/catalog' className="discounts__button">
                                        перейти в  каталог
                                    </NavLink>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="discounts__right right-discounts">
                        <Fade
                            triggerOnce={true}
                        >
                            <div className="right-discounts__watch-all">
                                <a href="">
                                    <span>Дивитись всі</span>
                                    <HiArrowLongRight viewBox="5 3 10 15" />
                                </a>
                            </div>
                        </Fade>
                        <div className="right-discounts__cover">
                            <Fade
                                triggerOnce={true}
                            >
                                <div className="right-discounts__card card-discounts">
                                    <div className="card-discounts__image">
                                        <img src={imageOne} alt="" />
                                    </div>
                                    <div className="card-discounts__cover">
                                        <span className="card-discounts__label">Kratki</span>
                                        <h3 className="card-discounts__title">Камінна топка Kratki ZUZIA LPT</h3>
                                        <div className="card-discounts__price">
                                            <p>9 799 ₴</p>
                                            <span>9 799 ₴</span>
                                        </div>
                                    </div>
                                    <div className="card-discounts__button">
                                        <a href="">Детальніше</a>
                                    </div>
                                </div>
                            </Fade>
                            <Fade
                                triggerOnce={true}
                            >
                                <div className="right-discounts__card card-discounts">
                                    <div className="card-discounts__image">
                                        <img src={imageOne} alt="" />
                                    </div>
                                    <div className="card-discounts__cover">
                                        <span className="card-discounts__label">Kratki</span>
                                        <h3 className="card-discounts__title">Камінна топка Kratki ZUZIA LPT</h3>
                                        <div className="card-discounts__price">
                                            <p>9 799 ₴</p>
                                            <span>9 799 ₴</span>
                                        </div>
                                    </div>
                                    <div className="card-discounts__button">
                                        <a href="">Детальніше</a>
                                    </div>
                                </div>
                            </Fade>
                            <Fade
                                triggerOnce={true}

                            >
                                <div className="right-discounts__card card-discounts">
                                    <div className="card-discounts__image">
                                        <img src={imageOne} alt="" />
                                    </div>
                                    <div className="card-discounts__cover">
                                        <span className="card-discounts__label">Kratki</span>
                                        <h3 className="card-discounts__title">Камінна топка Kratki ZUZIA LPT</h3>
                                        <div className="card-discounts__price">
                                            <p>9 799 ₴</p>
                                            <span>9 799 ₴</span>
                                        </div>
                                    </div>
                                    <div className="card-discounts__button">
                                        <a href="">Детальніше</a>
                                    </div>
                                </div>
                            </Fade>
                            <Fade
                                triggerOnce={true}

                            >
                                <div className="right-discounts__card card-discounts">
                                    <div className="card-discounts__image">
                                        <img src={imageOne} alt="" />
                                    </div>
                                    <div className="card-discounts__cover">
                                        <span className="card-discounts__label">Kratki</span>
                                        <h3 className="card-discounts__title">Камінна топка Kratki ZUZIA LPT</h3>
                                        <div className="card-discounts__price">
                                            <p>9 799 ₴</p>
                                            <span>9 799 ₴</span>
                                        </div>
                                    </div>
                                    <div className="card-discounts__button">
                                        <a href="">Детальніше</a>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Discounts;
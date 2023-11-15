import { Fade } from "react-awesome-reveal";

import logo from "../../images/logo.png"

import { RiFacebookFill } from 'react-icons/ri';
import { RiInstagramLine } from 'react-icons/ri';
import { RiTwitterXLine } from 'react-icons/ri';
import { RiYoutubeFill } from 'react-icons/ri';
import { FaPinterestP } from 'react-icons/fa6';

import './Footer.scss'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <Fade
                    triggerOnce={true}
                >
                    <div className="footer__container">
                        <div className="footer__top top-footer">
                            <div className="top-footer__item logo">
                                <div className="top-footer__image">
                                    <img src={logo} alt="" />
                                </div>
                                <span>Камінь з душею</span>
                            </div>
                            <div className="top-footer__item menu-footer">
                                <h3 className="top-footer__title">Меню</h3>
                                <ul className="top-footer__list">
                                    <li className="top-footer__list-item"><a href="">Delivery & returns</a></li>
                                    <li className="top-footer__list-item"><a href="">FAQ</a></li>
                                    <li className="top-footer__list-item"><a href="">Contacts</a></li>
                                    <li className="top-footer__list-item"><a href="">Blog</a></li>
                                </ul>
                            </div>
                            <div className="top-footer__item catalog-footer-footer">
                                <h3 className="top-footer__title">каталог</h3>
                                <ul className="top-footer__list">
                                    <li className="top-footer__list-item"><a href="">New arrivals</a></li>
                                    <li className="top-footer__list-item"><a href="">Trending now</a></li>
                                    <li className="top-footer__list-item"><a href="">Sales</a></li>
                                    <li className="top-footer__list-item"><a href="">Brands</a></li>
                                </ul>
                            </div>
                            <div className="top-footer__item contacts">
                                <h3 className="top-footer__title">Контакти для зв'язку</h3>
                                <address>
                                    <a href="tel:+380638849020" className="top-footer__contact">
                                        <span className="top-footer__info">Телефон: <strong>+380 67 36 55 422</strong></span>
                                    </a>
                                    <a href="gmail.com" className="top-footer__contact">
                                        <span className="top-footer__info">Пошта: <strong>hello@createx.com</strong></span>
                                    </a>
                                </address>
                                <div className="top-footer__links">
                                    <div className="top-footer__link"><RiFacebookFill /></div>
                                    <div className="top-footer__link"><RiInstagramLine /></div>
                                    <div className="top-footer__link"><RiTwitterXLine /></div>
                                    <div className="top-footer__link"><RiYoutubeFill /></div>
                                    <div className="top-footer__link"><FaPinterestP /></div>
                                </div>
                            </div>
                        </div >
                        <div className="footer__bottom">
                            <span>Created by Davyd Khmel</span>
                        </div>
                    </div >
                </Fade>
            </footer >
        </>
    )
}

export default Footer;
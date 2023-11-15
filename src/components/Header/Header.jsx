import { useState } from "react";
import { NavLink } from 'react-router-dom';

import { Fade } from "react-awesome-reveal";

import { useDispatch, useSelector } from "react-redux";
import { setHeaderOpen } from "../../redux/slices/headerSlice";

import Search from "./Search/Search";

import logo from "../../images/logo.png"
import { ImWhatsapp } from 'react-icons/im';
import { MdPhone } from 'react-icons/md';

import './Header.scss'

const Header = (props) => {
    const dispatch = useDispatch();
    const headerOpen = useSelector(state => state.headerSlice.headerOpen)

    let menuClass = '';
    const openHeaderMenu = () => { dispatch(setHeaderOpen(!headerOpen)) };

    headerOpen ? menuClass = 'header menu-open' : menuClass = 'header';


    let bgColor = '';
    let paddingBottom = '';

    if (props.styles == undefined) {
        bgColor = null;
        paddingBottom = null;
    } else {
        bgColor = props.styles.backgroundColor;
        paddingBottom = props.styles.paddingBottom;
    }

    let catLinkClass = 'nav-header__item nav-header__item-catalog'

    window.location.pathname == "/catalog" ? catLinkClass = 'nav-header__item selected' : catLinkClass = 'nav-header__item';

    return (
        <>
            <header style={{ backgroundColor: bgColor, paddingBottom: paddingBottom }} className={menuClass}>
                <div className="header__container">
                    <div className="header__logo">
                        <Fade
                            triggerOnce={true}
                        >
                            <NavLink onClick={() => { dispatch(setHeaderOpen(false)) }} to='/' ><img src={logo} alt="Anima logo" /></NavLink>
                        </Fade>
                    </div>
                    <div className="header__cover">
                        <div className="header__top top-header">

                            <div className="top-header__cover active">

                                <div className="top-header__info">
                                    <address className="top-header__contacts">
                                        <Fade
                                            triggerOnce={true}
                                        >
                                            <a href="tel:+380638849020" className="top-header__number ">
                                                <ImWhatsapp />
                                            </a>
                                        </Fade>
                                        <Fade
                                            triggerOnce={true}
                                        >
                                            <a href="tel:+380638849020" className="top-header__number ">
                                                <MdPhone />
                                                <span className="top-header__phonenumber">+380 67 36 55 422</span>
                                            </a>
                                        </Fade>
                                    </address>
                                    <Search />
                                </div>
                            </div>
                            <Fade
                                triggerOnce={true}
                                style={{ 'position': 'relative', 'zIndex': '5' }}
                                className='burger-fade-icon'
                            >
                                <div onClick={() => openHeaderMenu()} className="icon-menu"><span></span></div>
                            </Fade>
                        </div>
                        <Fade
                            triggerOnce={true}
                        >
                            <div className="header__bottom">
                                <nav>
                                    <ul className="header__nav nav-header">
                                        <li className={catLinkClass}><NavLink to='/catalog'>Каталог</NavLink></li>
                                        <li className="nav-header__item"><a href="#">Акції</a></li>
                                        <li className="nav-header__item"><a href="#">Блог</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </Fade>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
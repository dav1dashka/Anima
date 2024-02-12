import { useState, useCallback } from "react";
import { NavLink } from 'react-router-dom';

import debounce from "lodash.debounce";

import { useDispatch, useSelector } from "react-redux";
import { setHeaderOpen } from "../../../redux/slices/headerSlice";
import { setSearchInput } from "../../../redux/slices/headerSlice";

import { ImWhatsapp } from 'react-icons/im';
import { MdPhone } from 'react-icons/md';

import './Burger.scss'

const Burger = () => {
    const dispatch = useDispatch()
    let [value, setValue] = useState('');
    const headerOpen = useSelector(state => state.headerSlice.headerOpen)
    let burgerClass = 'header__mobile-nav';

    const onChangeSearch = (str) => {
        setValue(value = str)
        updateSearchValue(str)
    }
    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchInput(str))
            dispatch(setHeaderOpen(false))
            window.location.pathname != "/catalog" ? window.location.pathname = "/catalog" : null;
        }, 100), []
    )

    headerOpen ? burgerClass = 'header__mobile-nav open' : burgerClass = 'header__mobile-nav';
    headerOpen ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll";
    headerOpen ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll";

    return (
        <>
            <nav className={burgerClass}>
                <ul className="mobile-nav-header">
                    <li>
                        <div className='mobile-nav-header__form-cover'>
                            <form className="mobile-nav-header__form" action="">
                                <input
                                    onChange={e => onChangeSearch(e.target.value)}
                                    value={value}
                                    maxLength={27}
                                    placeholder="Пошук..."
                                    type="text"
                                    className="mobile-nav-header__input" />
                            </form>
                        </div>
                    </li>
                    <li onClick={() => { dispatch(setHeaderOpen(false)) }} className="mobile-nav-header__item"><NavLink to='/catalog'>Каталог</NavLink></li>
                    <li onClick={() => { dispatch(setHeaderOpen(false)) }} className="mobile-nav-header__item"><a href="#">Акції</a></li>
                    <li onClick={() => { dispatch(setHeaderOpen(false)) }} className="mobile-nav-header__item"><a href="#">Блог</a></li>
                    <ul onClick={() => { dispatch(setHeaderOpen(false)) }} className="mobile-nav-header__item">
                        <li>
                            <address className="mobile-nav-header__contacts">
                                <a href="tel:+380638849020" className="mobile-nav-header__number">
                                    <ImWhatsapp />
                                    <span className="mobile-nav-header__phonenumber">+380 67 36 55 422</span>
                                </a>
                            </address>
                        </li>
                        <li>
                            <address className="mobile-nav-header__contacts">
                                <a href="tel:+380638849020" className="mobile-nav-header__number">
                                    <MdPhone />
                                    <span className="mobile-nav-header__phonenumber">+380 67 36 55 422</span>
                                </a>
                            </address>
                        </li>
                    </ul>
                </ul>
            </nav>
        </>
    )
}

export default Burger;
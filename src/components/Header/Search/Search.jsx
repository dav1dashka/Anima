import { useState, useCallback, useEffect } from "react";

import debounce from "lodash.debounce";

import { useDispatch, useSelector } from "react-redux";
import { setSearchOpen, setSearchInput } from "../../../redux/slices/headerSlice";

import { IoSearchSharp } from 'react-icons/io5'

import { Fade } from "react-awesome-reveal";

import './Search.scss'

const Search = () => {
    const searchOpen = useSelector(state => state.headerSlice.searchOpen)
    const dispatch = useDispatch()

    const screenWidth = screen.width;

    let searchButtonClass = 'search-top-header__icon'
    let searchInputClass = 'search-top-header__form'

    const showSearch = () => {
        if (screenWidth >= 992) {
            dispatch(setSearchOpen(!searchOpen))
        } else {
            dispatch(setSearchOpen(false))
        }
    }

    searchOpen ? searchButtonClass = 'search-top-header__icon open' : searchButtonClass = 'search-top-header__icon';
    searchOpen ? searchInputClass = 'search-top-header__form open' : searchInputClass = 'search-top-header__form';

    let [value, setValue] = useState('');

    const onChangeSearch = (str) => {
        setValue(value = str)
        updateSearchValue(str)
        window.location.pathname != "/catalog" ? window.location.pathname = "/catalog" : null;
    }

    useEffect(() => {
        window.location.pathname == "/catalog" ? dispatch(setSearchOpen(true)) : dispatch(setSearchOpen(    ));
    }, [window.location.pathname])

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchInput(str))
        }, 500), []
    )

    return (
        <>
            <div className="top-header__search search-top-header">
                <div onClick={() => { showSearch() }} className={searchButtonClass}>
                    <Fade
                        triggerOnce={true}
                    >
                        <button><IoSearchSharp /></button>
                    </Fade>
                </div>
                <div className={searchInputClass}>
                    <Fade
                        triggerOnce={true}
                    >
                        <form action="">
                            <input
                                onChange={e => onChangeSearch(e.target.value)}
                                value={value}
                                maxLength={27}
                                placeholder="Пошук..."
                                type="text"
                                className="search-top-header__input" />
                        </form>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default Search;
import { useState, useEffect, useRef } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

import { Fade } from "react-awesome-reveal";
import QueryString from 'qs';

import { useSelector, useDispatch } from 'react-redux';
import { setMenuOption, setSelectedOption, setSelectedOptionTwo, setCurrentPage, setFilters } from '../../../redux/slices/filterSlice';
import { fetchCards } from '../../../redux/slices/cardsSlice';

import Header from "../../Header/Header";
import Burger from '../../Header/Burger/Burger';
import Footer from "../../Footer/Footer";
import Menu from '../Menu/Menu';
import Card from '../Card/Card';
import Skeleton from '../Skeleton/Skeleton'
import CustomSelect from '../Select/Select';
import Pagination from '../Pagintaion/Pagination';
import Quest from '../../Quest/Quest'

import { RxTriangleRight } from 'react-icons/rx'

import './Catalog.scss'

const Catalog = () => {
    const navigate = useNavigate();
    const [menuState, setMenuState] = useState(false)
    const menuOption = useSelector((state) => state.filterSlice.menuOption)
    const dispatch = useDispatch();

    const onChangeSelect = (option) => {
        dispatch(setMenuOption(option))
    };

    const selectedOption = useSelector((state) => state.filterSlice.selectedOption);
    const selectedOptionTwo = useSelector((state) => state.filterSlice.selectedOptionTwo);
    const optionsFirst = [['available', 'наявність'], ['notaccessible', 'немає'], ['discount', 'акція'], ['all', 'всі']];
    const optionsSecond = ['1', '3', '6', '9', '12'];

    let prevSelectedOption = useRef(selectedOption);
    let prevMenuOption = useRef(menuOption);

    const currentPage = useSelector(state => state.filterSlice.currentPage)

    const onChangePage = (number) => {
        dispatch(setCurrentPage(number))
    }

    let wraperToggle = '';

    useEffect(() => {
        const handleClick = (e) => {
            if (menuState) {
                !e.target.closest('.menu') ? setMenuState(!menuState) : null;
            } else {
                e.target == document.querySelector('.catalog__button button') ? setMenuState(!menuState) : null;
            }
        };

        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    menuState ? wraperToggle = 'wrapper open' : wraperToggle = 'wrapper';

    const handleSelectChange = (option) => {
        dispatch(setSelectedOption(option))
    };

    const handleSelectChangeTwo = (option) => {
        dispatch(setSelectedOptionTwo(option))
    };

    useEffect(() => {
        if (window.location.search) {
            const params = QueryString.parse(window.location.search.substring(1))

            const selectedOption = optionsFirst.find(el => el[0] == params.selectedOption)

            dispatch(setFilters({
                ...params,
                selectedOption,
            }))
        }
    }, [])

    const { cards, status } = useSelector(state => state.cardsSlice)

    const getCards = () => {
        let linkMenuOption = ''
        menuOption ? linkMenuOption = '&tags=' + menuOption : null;

        dispatch(fetchCards({
            selectedOption: selectedOption[0],
            selectedOptionTwo,
            linkMenuOption,
            currentPage
        }))
    }
    useEffect(() => {
        getCards()
    }, [selectedOption, selectedOptionTwo, menuOption, currentPage])

    useEffect(() => {
        let link = '';

        if (selectedOption != prevSelectedOption.current) {
            link = '&tags=' + selectedOption[0]
        } else if (menuOption != prevMenuOption.current) {
            link = '&tags=' + menuOption
        } else {
            link == '' ? link = '&tags=all' : null;
        }

        const queryString = QueryString.stringify({
            selectedOption: selectedOption[0],
            selectedOptionTwo,
            menuOption,
            currentPage
        });

        navigate(`?${queryString}`)

    }, [selectedOption, selectedOptionTwo, menuOption, currentPage])


    const searchInput = useSelector(state => state.headerSlice.searchInput);

    let items = cards.filter(el => {
        if (el.title.toLowerCase().includes(searchInput.toLowerCase())) {
            return true
        } else {
            return false
        }
    }).map((item, index) => (<Card key={index} info={item} />));

    let skeleton = [... new Array(9)].map((_, i) => (<Skeleton key={i} />));

    return (
        <>
            <div className={wraperToggle}>
                <Header styles={{ 'backgroundColor': 'black', 'paddingBottom': '20px' }} />
                <Burger />
                <main className="main">
                    <section className="catalog">
                        <div className="catalog__container">
                            <Fade
                                triggerOnce={true}
                            >
                                <h1 className="catalog__title">Вироби з <strong>натурального каменя</strong></h1>
                            </Fade>
                            <Fade
                                triggerOnce={true}
                                style={{ 'position': 'relative', 'zIndex': '2' }}
                            >
                                <div className="catalog__info">
                                    <div className="catalog__item">
                                        <div className="catalog__bread">
                                            <NavLink to='/'>Головна</NavLink>
                                            <RxTriangleRight />
                                            <strong>Каталог товарів</strong>
                                        </div>
                                    </div>
                                    <div className="catalog__item">
                                        <div className="catalog__detail">
                                            <span>Сортувати по:</span>
                                            <CustomSelect
                                                options={optionsFirst}
                                                onChange={handleSelectChange}
                                                value={selectedOption}
                                            />
                                        </div>
                                        <div className="catalog__detail">
                                            <span>Показувати по:</span>
                                            <CustomSelect
                                                options={optionsSecond}
                                                onChange={handleSelectChangeTwo}
                                                value={selectedOptionTwo}
                                            />
                                        </div>
                                        <div className="catalog__button"><button>Фільтр</button></div>
                                    </div>
                                </div>
                            </Fade>
                            <div className="catalog__cover">
                                <Fade
                                    triggerOnce={true}
                                    style={{ 'position': 'relative', 'zIndex': '101' }}
                                >
                                    <div className="catalog__menu">
                                        <Menu setMenuState={setMenuState} menuState={menuState} onChangeSelect={onChangeSelect} />
                                    </div>
                                </Fade>
                                <div className="catalog__cards">
                                    {status == 'loading'
                                        ? skeleton
                                        : items
                                    }
                                </div>
                            </div>
                        </div>
                        <Pagination onChangePage={onChangePage} />
                    </section>
                    <Quest />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Catalog;



